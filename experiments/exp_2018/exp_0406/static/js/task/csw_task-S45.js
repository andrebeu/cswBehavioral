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
  pages: ['The stories will be presented a sentence at a time.'],
  data: {"type":"instruction"}
  }
var intro4 = {
  type: 'instructions',
  pages: ['While reading, you will be periodically interrupted and asked to predict what happens next in the story.'],
  data: {"type":"instruction"}
  } 
var intro5 = {
  type: 'instructions',
  pages: ['The questions will ask you to predict which one of two given options is more likely to happen next.'],
  data: {"type":"instruction"}
  } 
var intro6 = {
  type: 'instructions',
  pages: ['When a question comes up, select an option with the right or left arrow keys on your keyboard.'],
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
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_2 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
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
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_5 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_6 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_8 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_9 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_11 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
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
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_15 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_16 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_18 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_19 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_20 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_21 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_22 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_23 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_24 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_25 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_26 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_27 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_30 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_31 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_34 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_35 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_38 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_39 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_42 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_43 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_45 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_46 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_47 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_48 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_49 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_50 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_51 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_52 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_57 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_58 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_60 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_61 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_62 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_63 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_64 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_65 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_66 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_67 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_72 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_73 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_74 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_75 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_76 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_77 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_82 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_83 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_86 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_87 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_90 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_91 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_92 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_95 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_96 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_101 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_102 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_103 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_104 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_107 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_108 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_110 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_111 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_114 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_115 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_124 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_125 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_126 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_127 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_132 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_133 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_136 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_137 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_138 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_139 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_142 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_143 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_146 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_147 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_149 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_150 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_154 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_155 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_157 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_158 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_162 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_163 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_166 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_167 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_169 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_170 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_171 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_172 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_173 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_174 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_175 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_176 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_177 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_178 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_181 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_182 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_187 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_188 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_189 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_190 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_196 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_197 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_198 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_199 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_201 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_202 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_205 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_206 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_207 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_208 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_218 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_219 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_220 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_221 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_223 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_224 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_225 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_226 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_231 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_232 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_233 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_234 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_235 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_236 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_247 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_248 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_253 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_254 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_255 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_256 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_257 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_258 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_260 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_261 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_266 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_267 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_268 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_269 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_272 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_273 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_278 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_279 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_280 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_281 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_283 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_284 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_285 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_286 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_294 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_295 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_296 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_297 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_300 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_301 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_304 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_305 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_306 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_307 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_308 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_309 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_310 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_311 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_314 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_315 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_317 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_318 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_319 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_320 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_322 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_323 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_324 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_325 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_337 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_338 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_343 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
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
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_348 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_349 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_351 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_352 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_354 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_355 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_357 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_358 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_363 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_364 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_368 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_369 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_373 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_374 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_375 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_376 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_383 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_384 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_386 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_387 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_388 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_389 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_391 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_392 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_393 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_394 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_399 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_400 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_401 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_402 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_405 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_406 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_408 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_409 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_410 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_412 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_413 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_414 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_415 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_416 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_417 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_418 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_419 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_425 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_426 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_427 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_428 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_429 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_430 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_431 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_432 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_438 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_439 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_441 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_442 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_444 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_445 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_449 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_450 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_451 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_452 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_453 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_454 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_455 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_456 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_457 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_458 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_459 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_460 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_463 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_464 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_467 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_468 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_469 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_470 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_472 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_473 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_476 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_477 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_479 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_480 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_484 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_485 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_488 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_489 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_491 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_492 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_502 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_503 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_504 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_506 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_507 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_508 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_509 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_513 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_514 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_516 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_517 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_519 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_520 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_524 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_525 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_527 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_528 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_529 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_530 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_533 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_534 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_537 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_538 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_540 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_541 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_543 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_544 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_546 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_547 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_552 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_553 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_554 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_555 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_557 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_558 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_565 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_566 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_567 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_568 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_569 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_570 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_577 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_578 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_579 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_580 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_582 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_583 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_586 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
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
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_591 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_592 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_597 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_598 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_600 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_601 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_602 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_603 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_605 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_606 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_607 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_608 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_614 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_615 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_616 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_617 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_618 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_619 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_620 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_621 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_625 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_626 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_627 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_628 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_630 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_631 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_632 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_633 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_639 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_640 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_641 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_642 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_643 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_644 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_645 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_646 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_647 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_648 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_654 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_655 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_657 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_658 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_659 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_660 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_665 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_666 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_667 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_668 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_669 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_670 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_678 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_679 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_680 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_681 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_682 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_683 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_684 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_685 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_686 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_689 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_690 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_692 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_693 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_694 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_696 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_697 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_699 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_700 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_702 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_703 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_704 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_705 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_706 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_707 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_708 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_709 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_711 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_712 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_713 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_715 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_716 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_717 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_718 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_719 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_720 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_721 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_722 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_723 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_725 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_726 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_727 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_728 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_729 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_730 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_731 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_732 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_733 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_734 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_735 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_736 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_737 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_739 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_740 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_741 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_742 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_743 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_744 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_745 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_746 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_747 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_748 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_749 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_750 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_751 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_752 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_753 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_754 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_755 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_756 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_757 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_758 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_759 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_760 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_761 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_762 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_763 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_764 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_765 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_766 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_767 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_768 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_769 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_770 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_771 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_772 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_773 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_774 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_775 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_776 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_777 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_778 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_779 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_780 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_781 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_782 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_783 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_784 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_785 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_786 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_787 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_788 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_789 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_790 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_791 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_792 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_793 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_794 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_795 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_796 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_797 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_798 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_799 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_800 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_801 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_802 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_803 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_804 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_805 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_806 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_807 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_808 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_809 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_810 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_811 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_812 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_813 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_814 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_815 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_816 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_817 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_818 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_819 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_820 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_821 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_823 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_824 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_826 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_827 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_828 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_829 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_830 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_831 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_832 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_833 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_834 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_835 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_836 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_837 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_838 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_839 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_840 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_841 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_842 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_843 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_844 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_845 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_846 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_847 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_848 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_849 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_850 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_851 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_852 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_853 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_854 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_855 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_856 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_857 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_858 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_859 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_860 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_861 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_862 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_863 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_864 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_865 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_866 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_867 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_868 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_869 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_870 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_871 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_872 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_873 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_874 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_875 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_876 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_877 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_878 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_879 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_880 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_881 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_882 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_883 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_884 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_885 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_886 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_887 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_889 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_890 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_892 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_893 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_894 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_895 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_896 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_897 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_898 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_899 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_900 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_902 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_903 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_904 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_905 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_906 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_907 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_908 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_909 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_910 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_911 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_912 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_913 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_914 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_915 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_916 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_917 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_918 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_919 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_920 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_921 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_922 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_923 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_924 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_925 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_926 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_927 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_928 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_929 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_930 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_931 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_932 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_933 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_934 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_935 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_936 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_937 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_938 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_939 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_940 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_941 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_942 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_943 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_944 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_945 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_946 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_947 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_948 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_949 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_950 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_951 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_952 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_954 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_955 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_956 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_957 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_958 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_959 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_960 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_961 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_962 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_963 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_964 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_965 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_966 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_968 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_969 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_970 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_971 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_973 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_974 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
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
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_976 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_978 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_979 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_980 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
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
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_982 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_983 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_984 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_985 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_986 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_987 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_988 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_989 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_990 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
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
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_992 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_993 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_994 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_995 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_997 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_998 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_999 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1000 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1001 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1002 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1003 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1004 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1005 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1006 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1007 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1008 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1009 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1010 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1011 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1012 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1013 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1014 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1015 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1016 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1017 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1018 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1019 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1020 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1021 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1022 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1023 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1024 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1025 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1026 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1027 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1028 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1029 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1030 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1031 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1033 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1034 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1035 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1036 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1037 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1038 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1039 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
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
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1042 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1043 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1044 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1045 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1046 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1047 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1048 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1049 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1050 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1051 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1052 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1053 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1054 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1055 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1056 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1057 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1058 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1059 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1060 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1061 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1062 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1063 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1064 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1065 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1066 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1067 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1068 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1069 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1070 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1071 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1072 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1073 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1074 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1076 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1077 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1078 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1079 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1080 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1081 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1082 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1083 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1084 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1085 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1086 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1087 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1088 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1089 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1090 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1091 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1092 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1094 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1095 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1096 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1097 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1098 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1099 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1100 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1101 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1102 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1103 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1104 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1105 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1106 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1107 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1108 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1109 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1110 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1111 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1112 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1113 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1114 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1115 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1116 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1117 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1118 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1119 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1120 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1121 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1122 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1123 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1124 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1125 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1126 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1127 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1128 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1129 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1130 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1131 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1133 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1134 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1136 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1137 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1138 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1139 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1140 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1141 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1142 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1143 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1144 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1145 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1146 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1147 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1148 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1150 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1151 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1152 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1153 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1154 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1155 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1156 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1157 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1158 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1159 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1160 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1161 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1162 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1163 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1164 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1165 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1166 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1167 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1168 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1169 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1170 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1171 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1172 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1173 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1174 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1175 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1176 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1177 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1178 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1179 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1180 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1181 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1182 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1183 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1184 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1185 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1186 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1187 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1188 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1189 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1190 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1191 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1192 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1193 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1194 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1195 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1196 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1197 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1198 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1199 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1200 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1201 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
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
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1203 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1204 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1205 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1206 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1207 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1208 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
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
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1210 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1211 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1212 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1213 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1214 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1215 = {
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
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1216 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1217 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1218 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
		var q_1219 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1220 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1221 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1222 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1223 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill",
						"type": "story" }
	} 
	var s_1224 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1225 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1226 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1227 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1228 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1229 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1230 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1231 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1232 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1233 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1234 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1235 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
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
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1237 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1238 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1239 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
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
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1241 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1242 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1243 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1244 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1245 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1246 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1247 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
			} 
	var s_1248 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
		var q_1249 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
			} 
	var s_1250 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
	var s_1251 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill",
						"type": "story" }
	} 
// CODE BODY END

jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,s_4,q_5,s_6,s_7,q_8,s_9,s_10,q_11,s_12,s_13,s_14,q_15,s_16,s_17,q_18,s_19,q_20,s_21,q_22,s_23,q_24,s_25,q_26,s_27,s_28,s_29,q_30,s_31,s_32,s_33,q_34,s_35,s_36,s_37,q_38,s_39,s_40,s_41,q_42,s_43,s_44,q_45,s_46,q_47,s_48,q_49,s_50,q_51,s_52,s_53,s_54,s_55,s_56,q_57,s_58,s_59,q_60,s_61,q_62,s_63,q_64,s_65,q_66,s_67,s_68,s_69,s_70,s_71,q_72,s_73,q_74,s_75,q_76,s_77,s_78,s_79,s_80,s_81,q_82,s_83,s_84,s_85,q_86,s_87,s_88,q_89,s_90,q_91,s_92,s_93,s_94,q_95,s_96,s_97,s_98,s_99,s_100,q_101,s_102,q_103,s_104,s_105,s_106,q_107,s_108,s_109,q_110,s_111,s_112,s_113,q_114,s_115,s_116,s_117,s_118,s_119,s_120,s_121,s_122,s_123,q_124,s_125,q_126,s_127,s_128,s_129,s_130,s_131,q_132,s_133,s_134,s_135,q_136,s_137,q_138,s_139,s_140,s_141,q_142,s_143,s_144,s_145,q_146,s_147,s_148,q_149,s_150,s_151,s_152,s_153,q_154,s_155,s_156,q_157,s_158,s_159,s_160,s_161,q_162,s_163,s_164,s_165,q_166,s_167,s_168,q_169,s_170,q_171,s_172,q_173,s_174,q_175,s_176,q_177,s_178,s_179,s_180,q_181,s_182,s_183,s_184,s_185,s_186,q_187,s_188,q_189,s_190,s_191,s_192,s_193,s_194,s_195,q_196,s_197,q_198,s_199,s_200,q_201,s_202,s_203,s_204,q_205,s_206,q_207,s_208,s_209,s_210,s_211,s_212,s_213,s_214,s_215,s_216,s_217,q_218,s_219,q_220,s_221,s_222,q_223,s_224,q_225,s_226,s_227,s_228,s_229,s_230,q_231,s_232,q_233,s_234,q_235,s_236,s_237,s_238,s_239,s_240,s_241,s_242,s_243,s_244,s_245,s_246,q_247,s_248,s_249,s_250,s_251,s_252,q_253,s_254,q_255,s_256,q_257,s_258,s_259,q_260,s_261,s_262,s_263,s_264,s_265,q_266,s_267,q_268,s_269,s_270,s_271,q_272,s_273,s_274,s_275,s_276,s_277,q_278,s_279,q_280,s_281,s_282,q_283,s_284,q_285,s_286,s_287,s_288,s_289,s_290,s_291,s_292,s_293,q_294,s_295,q_296,s_297,s_298,s_299,q_300,s_301,s_302,s_303,q_304,s_305,q_306,s_307,q_308,s_309,q_310,s_311,s_312,s_313,q_314,s_315,s_316,q_317,s_318,q_319,s_320,s_321,q_322,s_323,q_324,s_325,s_326,s_327,s_328,s_329,s_330,s_331,s_332,s_333,s_334,s_335,s_336,q_337,s_338,s_339,s_340,s_341,s_342,q_343,s_344,s_345,s_346,s_347,q_348,s_349,s_350,q_351,s_352,s_353,q_354,s_355,s_356,q_357,s_358,s_359,s_360,s_361,s_362,q_363,s_364,s_365,s_366,s_367,q_368,s_369,s_370,s_371,s_372,q_373,s_374,q_375,s_376,s_377,s_378,s_379,s_380,s_381,s_382,q_383,s_384,s_385,q_386,s_387,q_388,s_389,s_390,q_391,s_392,q_393,s_394,s_395,s_396,s_397,s_398,q_399,s_400,q_401,s_402,s_403,s_404,q_405,s_406,s_407,s_408,q_409,s_410,s_411,q_412,s_413,q_414,s_415,q_416,s_417,q_418,s_419,s_420,s_421,s_422,s_423,s_424,q_425,s_426,q_427,s_428,q_429,s_430,q_431,s_432,s_433,s_434,s_435,s_436,s_437,q_438,s_439,s_440,q_441,s_442,s_443,q_444,s_445,s_446,s_447,s_448,q_449,s_450,q_451,s_452,q_453,s_454,q_455,s_456,q_457,s_458,q_459,s_460,s_461,s_462,q_463,s_464,s_465,s_466,q_467,s_468,q_469,s_470,s_471,q_472,s_473,s_474,s_475,q_476,s_477,s_478,q_479,s_480,s_481,s_482,s_483,q_484,s_485,s_486,s_487,q_488,s_489,s_490,q_491,s_492,s_493,s_494,s_495,s_496,s_497,s_498,s_499,s_500,q_501,s_502,q_503,s_504,s_505,q_506,s_507,q_508,s_509,s_510,s_511,s_512,q_513,s_514,s_515,q_516,s_517,s_518,q_519,s_520,s_521,s_522,s_523,q_524,s_525,s_526,q_527,s_528,q_529,s_530,s_531,s_532,q_533,s_534,s_535,s_536,q_537,s_538,s_539,q_540,s_541,s_542,q_543,s_544,s_545,q_546,s_547,s_548,s_549,s_550,s_551,q_552,s_553,q_554,s_555,s_556,q_557,s_558,s_559,s_560,s_561,s_562,s_563,s_564,q_565,s_566,q_567,s_568,q_569,s_570,s_571,s_572,s_573,s_574,s_575,s_576,q_577,s_578,q_579,s_580,s_581,q_582,s_583,s_584,s_585,q_586,s_587,s_588,s_589,s_590,q_591,s_592,s_593,s_594,s_595,s_596,q_597,s_598,s_599,q_600,s_601,q_602,s_603,s_604,q_605,s_606,q_607,s_608,s_609,s_610,s_611,s_612,s_613,q_614,s_615,q_616,s_617,q_618,s_619,q_620,s_621,s_622,s_623,s_624,q_625,s_626,q_627,s_628,s_629,q_630,s_631,q_632,s_633,s_634,s_635,s_636,s_637,s_638,q_639,s_640,q_641,s_642,q_643,s_644,q_645,s_646,q_647,s_648,s_649,s_650,s_651,s_652,s_653,q_654,s_655,s_656,q_657,s_658,q_659,s_660,s_661,s_662,s_663,s_664,q_665,s_666,q_667,s_668,q_669,s_670,s_671,s_672,s_673,s_674,s_675,s_676,s_677,q_678,s_679,q_680,s_681,q_682,s_683,q_684,s_685,s_686,s_687,s_688,q_689,s_690,s_691,s_692,q_693,s_694,s_695,q_696,s_697,s_698,s_699,s_700,s_701,q_702,s_703,q_704,s_705,s_706,q_707,s_708,s_709,s_710,s_711,q_712,s_713,s_714,q_715,s_716,q_717,s_718,s_719,q_720,s_721,s_722,s_723,s_724,q_725,s_726,s_727,s_728,q_729,s_730,q_731,s_732,s_733,q_734,s_735,s_736,s_737,s_738,s_739,q_740,s_741,q_742,s_743,q_744,s_745,s_746,q_747,s_748,s_749,s_750,q_751,s_752,s_753,q_754,s_755,s_756,q_757,s_758,s_759,q_760,s_761,s_762,s_763,s_764,q_765,s_766,s_767,q_768,s_769,q_770,s_771,q_772,s_773,s_774,s_775,s_776,q_777,s_778,s_779,s_780,s_781,q_782,s_783,s_784,q_785,s_786,s_787,s_788,q_789,s_790,s_791,q_792,s_793,s_794,q_795,s_796,q_797,s_798,q_799,s_800,s_801,s_802,s_803,s_804,s_805,s_806,q_807,s_808,q_809,s_810,s_811,s_812,s_813,q_814,s_815,s_816,q_817,s_818,s_819,q_820,s_821,s_822,s_823,s_824,s_825,s_826,s_827,s_828,q_829,s_830,s_831,q_832,s_833,s_834,s_835,s_836,s_837,s_838,s_839,s_840,s_841,q_842,s_843,q_844,s_845,s_846,s_847,q_848,s_849,s_850,q_851,s_852,s_853,q_854,s_855,q_856,s_857,q_858,s_859,s_860,s_861,q_862,s_863,s_864,q_865,s_866,q_867,s_868,q_869,s_870,q_871,s_872,q_873,s_874,s_875,s_876,s_877,s_878,q_879,s_880,s_881,q_882,s_883,q_884,s_885,s_886,s_887,s_888,q_889,s_890,s_891,s_892,q_893,s_894,s_895,s_896,s_897,s_898,s_899,s_900,s_901,s_902,q_903,s_904,s_905,q_906,s_907,q_908,s_909,s_910,s_911,q_912,s_913,q_914,s_915,q_916,s_917,s_918,s_919,s_920,s_921,s_922,s_923,s_924,s_925,q_926,s_927,q_928,s_929,q_930,s_931,s_932,q_933,s_934,s_935,s_936,q_937,s_938,s_939,q_940,s_941,s_942,q_943,s_944,s_945,q_946,s_947,s_948,s_949,s_950,q_951,s_952,s_953,q_954,s_955,q_956,s_957,q_958,s_959,q_960,s_961,s_962,s_963,s_964,s_965,s_966,s_967,s_968,s_969,q_970,s_971,s_972,s_973,q_974,s_975,s_976,s_977,q_978,s_979,q_980,s_981,q_982,s_983,q_984,s_985,s_986,s_987,s_988,s_989,q_990,s_991,s_992,q_993,s_994,s_995,s_996,s_997,s_998,q_999,s_1000,s_1001,q_1002,s_1003,q_1004,s_1005,q_1006,s_1007,s_1008,s_1009,s_1010,s_1011,q_1012,s_1013,q_1014,s_1015,q_1016,s_1017,q_1018,s_1019,q_1020,s_1021,q_1022,s_1023,q_1024,s_1025,s_1026,s_1027,q_1028,s_1029,s_1030,s_1031,s_1032,q_1033,s_1034,s_1035,s_1036,s_1037,s_1038,q_1039,s_1040,s_1041,q_1042,s_1043,s_1044,s_1045,q_1046,s_1047,q_1048,s_1049,s_1050,s_1051,q_1052,s_1053,s_1054,q_1055,s_1056,s_1057,q_1058,s_1059,q_1060,s_1061,q_1062,s_1063,s_1064,s_1065,s_1066,s_1067,q_1068,s_1069,q_1070,s_1071,q_1072,s_1073,s_1074,s_1075,s_1076,s_1077,s_1078,s_1079,s_1080,s_1081,q_1082,s_1083,q_1084,s_1085,q_1086,s_1087,s_1088,s_1089,q_1090,s_1091,s_1092,s_1093,q_1094,s_1095,s_1096,s_1097,s_1098,s_1099,s_1100,q_1101,s_1102,s_1103,s_1104,q_1105,s_1106,q_1107,s_1108,q_1109,s_1110,q_1111,s_1112,s_1113,s_1114,s_1115,s_1116,q_1117,s_1118,s_1119,q_1120,s_1121,q_1122,s_1123,q_1124,s_1125,s_1126,s_1127,s_1128,s_1129,s_1130,s_1131,s_1132,q_1133,s_1134,s_1135,s_1136,s_1137,s_1138,s_1139,q_1140,s_1141,s_1142,q_1143,s_1144,q_1145,s_1146,s_1147,s_1148,s_1149,q_1150,s_1151,s_1152,q_1153,s_1154,s_1155,s_1156,s_1157,q_1158,s_1159,s_1160,s_1161,s_1162,s_1163,s_1164,q_1165,s_1166,q_1167,s_1168,q_1169,s_1170,s_1171,s_1172,s_1173,q_1174,s_1175,s_1176,q_1177,s_1178,q_1179,s_1180,s_1181,s_1182,s_1183,s_1184,s_1185,q_1186,s_1187,s_1188,q_1189,s_1190,q_1191,s_1192,q_1193,s_1194,s_1195,q_1196,s_1197,s_1198,s_1199,s_1200,s_1201,q_1202,s_1203,q_1204,s_1205,s_1206,s_1207,q_1208,s_1209,s_1210,s_1211,q_1212,s_1213,s_1214,q_1215,s_1216,q_1217,s_1218,q_1219,s_1220,s_1221,s_1222,s_1223,s_1224,q_1225,s_1226,s_1227,q_1228,s_1229,q_1230,s_1231,s_1232,q_1233,s_1234,q_1235,s_1236,s_1237,s_1238,q_1239,s_1240,q_1241,s_1242,s_1243,s_1244,q_1245,s_1246,q_1247,s_1248,q_1249,s_1250,s_1251,],

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