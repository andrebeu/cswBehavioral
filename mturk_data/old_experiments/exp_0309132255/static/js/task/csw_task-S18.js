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
	} 
	var s_2 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_4 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_6 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_8 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_9 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_10 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_13 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_14 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_16 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_19 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_21 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_25 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_26 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_30 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_32 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_34 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_36 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_38 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_40 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_44 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_XSHOVE_Subject.violent_T" }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_46 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_48 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_50 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_52 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_53 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_56 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_57 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_59 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_61 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_62 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_64 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_65 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_67 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_71 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_76 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_77 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_78 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_82 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_83 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_85 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_87 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_89 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_90 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_91 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_94 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_95 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_97 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_98 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_100 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_102 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_102 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_103 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_104 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_108 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_110 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_113 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_113 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_114 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_117 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_120 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_124 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_124 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_125 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_126 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_128 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_129 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_130 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_132 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_134 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_136 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_137 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_138 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_141 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_143 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_147 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_148 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_149 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_150 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_154 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_156 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_158 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_160 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_161 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_162 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_164 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Silvia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_F-CUTLINE_EXCUSEME_Subject.violent_F" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var s_166 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_167 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_170 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_172 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_173 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_174 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_177 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_178 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_180 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_182 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_184 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_186 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_186 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_187 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_188 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_190 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_193 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_196 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_198 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_198 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_199 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_202 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_203 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_XSHOVE_Subject.violent_T" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_205 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_209 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_209 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_210 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_211 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_215 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_219 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_221 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_221 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_222 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var q_225 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SUBJECTSTARES_Subject.violent_F-CUTBACK_SHOVE_Subject.violent_F" }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_228 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_229 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_231 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_233 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_233 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_234 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_235 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_237 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_238 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_242 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_245 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_245 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_246 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_247 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_249 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Silvia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_F-CUTLINE_EXCUSEME_Subject.violent_F" }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var q_251 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SUBJECTSTARES_Subject.violent_F-CUTBACK_SHOVE_Subject.violent_F" }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_253 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_254 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_255 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_257 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_259 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_260 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_262 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_264 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_T-CUTBACK_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_266 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_YELL_Subject.violent_T-SHOVE_XSTARE_Subject.violent_T" }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_268 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_270 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_272 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_274 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_274 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_275 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_276 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_279 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_280 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_281 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_283 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_285 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_286 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_287 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_289 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_YELL_Subject.violent_T-SUBJECTSTARES_XSHOVE_Subject.violent_T" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_294 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_296 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_300 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_300 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_301 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_304 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_306 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_308 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_310 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_312 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_312 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_313 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_314 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_317 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_319 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_321 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_324 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_325 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_326 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_327 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_329 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_334 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_335 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_336 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_338 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_340 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_342 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_344 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_346 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_350 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_351 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_352 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_355 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_356 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_357 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_358 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_360 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_362 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_362 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_363 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_364 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_366 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_368 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_371 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_372 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_372 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_373 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_374 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var s_377 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_378 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_380 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_383 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_385 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_385 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_386 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_388 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_390 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_393 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_394 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_395 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_396 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_397 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_398 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_402 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_406 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_408 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_408 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_409 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_412 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_414 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_415 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_417 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_418 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_420 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_420 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_421 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_422 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_424 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_426 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_428 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_429 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_430 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_432 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_432 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_433 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_436 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_439 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_442 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_444 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_445 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_446 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_449 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_450 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_YELL_Subject.violent_T-SUBJECTSTARES_XSHOVE_Subject.violent_T" }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_452 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_454 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_456 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_458 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_458 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_459 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_460 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_463 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_465 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_467 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_469 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_472 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_472 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_473 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_474 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_476 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_478 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_481 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_484 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_486 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_487 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_488 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_490 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_491 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_492 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_494 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_496 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_498 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_499 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_500 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_502 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_505 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_YELL_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_508 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_510 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_511 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_511 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_512 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_513 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_514 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_515 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_517 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_519 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_521 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_523 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_524 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_525 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_526 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_528 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_530 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SUBJECTSTARES_Subject.violent_T-CUTBACK_SHOVE_Subject.violent_T" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_533 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_536 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_538 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_539 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_540 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_542 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_546 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_548 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_550 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_552 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_553 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_554 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_556 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_563 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_564 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_565 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_567 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_569 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_571 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_572 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_575 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_577 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_578 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_579 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_580 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_581 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_584 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_585 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_587 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_589 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_590 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_591 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_592 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_594 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_T-CUTBACK_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_597 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_599 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_600 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_602 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_602 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_603 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_605 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_607 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_610 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_612 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_616 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_616 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_617 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_618 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_620 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_622 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_624 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_625 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_627 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_628 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_630 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_630 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

// CODE BODY END

jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,s_2,s_3,q_4,s_5,s_6,s_7,q_8,s_9,q_10,s_11,s_12,betweenstory_12,s_13,s_14,s_15,q_16,s_17,s_18,q_19,s_20,q_21,s_22,s_23,s_24,betweenstory_24,s_25,q_26,s_27,s_28,s_29,q_30,s_31,q_32,s_33,q_34,s_35,s_36,s_37,betweenstory_37,s_38,s_39,q_40,s_41,q_42,s_43,q_44,s_45,q_46,s_47,q_48,s_49,q_50,s_51,s_52,betweenstory_52,s_53,q_54,s_55,s_56,q_57,s_58,s_59,s_60,s_61,s_62,s_63,betweenstory_63,s_64,q_65,s_66,s_67,q_68,s_69,s_70,q_71,s_72,s_73,q_74,s_75,s_76,betweenstory_76,s_77,s_78,s_79,q_80,s_81,s_82,q_83,s_84,q_85,s_86,q_87,s_88,s_89,betweenstory_89,s_90,q_91,s_92,s_93,s_94,q_95,s_96,s_97,q_98,s_99,q_100,s_101,s_102,betweenstory_102,s_103,s_104,s_105,q_106,s_107,s_108,s_109,s_110,q_111,s_112,s_113,betweenstory_113,s_114,q_115,s_116,q_117,s_118,s_119,s_120,s_121,s_122,s_123,s_124,betweenstory_124,s_125,q_126,s_127,s_128,s_129,s_130,s_131,q_132,s_133,q_134,s_135,s_136,betweenstory_136,s_137,q_138,s_139,s_140,q_141,s_142,q_143,s_144,s_145,s_146,s_147,s_148,betweenstory_148,s_149,s_150,s_151,q_152,s_153,s_154,s_155,q_156,s_157,q_158,s_159,s_160,betweenstory_160,s_161,q_162,s_163,q_164,s_165,s_166,s_167,s_168,s_169,q_170,s_171,s_172,betweenstory_172,s_173,q_174,s_175,s_176,s_177,q_178,s_179,q_180,s_181,q_182,s_183,q_184,s_185,s_186,betweenstory_186,s_187,q_188,s_189,s_190,s_191,s_192,s_193,q_194,s_195,q_196,s_197,s_198,betweenstory_198,s_199,s_200,s_201,s_202,q_203,s_204,q_205,s_206,s_207,s_208,s_209,betweenstory_209,s_210,q_211,s_212,s_213,s_214,q_215,s_216,s_217,s_218,q_219,s_220,s_221,betweenstory_221,s_222,s_223,s_224,q_225,s_226,s_227,s_228,q_229,s_230,q_231,s_232,s_233,betweenstory_233,s_234,q_235,s_236,s_237,q_238,s_239,s_240,s_241,q_242,s_243,s_244,s_245,betweenstory_245,s_246,q_247,s_248,q_249,s_250,q_251,s_252,s_253,s_254,q_255,s_256,q_257,s_258,s_259,betweenstory_259,s_260,s_261,q_262,s_263,q_264,s_265,q_266,s_267,q_268,s_269,q_270,s_271,q_272,s_273,s_274,betweenstory_274,s_275,s_276,s_277,s_278,s_279,s_280,q_281,s_282,q_283,s_284,s_285,betweenstory_285,s_286,q_287,s_288,q_289,s_290,s_291,q_292,s_293,q_294,s_295,q_296,s_297,q_298,s_299,s_300,betweenstory_300,s_301,q_302,s_303,s_304,s_305,q_306,s_307,s_308,s_309,q_310,s_311,s_312,betweenstory_312,s_313,q_314,s_315,s_316,q_317,s_318,s_319,s_320,q_321,s_322,s_323,s_324,betweenstory_324,s_325,s_326,q_327,s_328,s_329,s_330,s_331,s_332,s_333,s_334,betweenstory_334,s_335,q_336,s_337,q_338,s_339,q_340,s_341,q_342,s_343,q_344,s_345,q_346,s_347,q_348,s_349,s_350,betweenstory_350,s_351,q_352,s_353,s_354,s_355,s_356,s_357,q_358,s_359,q_360,s_361,s_362,betweenstory_362,s_363,s_364,s_365,q_366,s_367,s_368,s_369,s_370,s_371,s_372,betweenstory_372,s_373,q_374,s_375,s_376,s_377,q_378,s_379,q_380,s_381,s_382,q_383,s_384,s_385,betweenstory_385,s_386,s_387,q_388,s_389,q_390,s_391,s_392,s_393,s_394,s_395,s_396,betweenstory_396,s_397,q_398,s_399,s_400,s_401,q_402,s_403,q_404,s_405,s_406,s_407,s_408,betweenstory_408,s_409,s_410,s_411,q_412,s_413,s_414,q_415,s_416,s_417,q_418,s_419,s_420,betweenstory_420,s_421,q_422,s_423,q_424,s_425,q_426,s_427,s_428,s_429,s_430,s_431,s_432,betweenstory_432,s_433,s_434,s_435,q_436,s_437,s_438,q_439,s_440,s_441,q_442,s_443,s_444,betweenstory_444,s_445,q_446,s_447,s_448,s_449,q_450,s_451,q_452,s_453,q_454,s_455,q_456,s_457,s_458,betweenstory_458,s_459,q_460,s_461,s_462,q_463,s_464,q_465,s_466,q_467,s_468,q_469,s_470,s_471,s_472,betweenstory_472,s_473,q_474,s_475,q_476,s_477,q_478,s_479,s_480,q_481,s_482,s_483,q_484,s_485,s_486,betweenstory_486,s_487,q_488,s_489,s_490,s_491,q_492,s_493,q_494,s_495,q_496,s_497,s_498,s_499,betweenstory_499,s_500,s_501,q_502,s_503,s_504,q_505,s_506,s_507,q_508,s_509,s_510,s_511,betweenstory_511,s_512,s_513,s_514,q_515,s_516,q_517,s_518,q_519,s_520,q_521,s_522,s_523,s_524,betweenstory_524,s_525,q_526,s_527,q_528,s_529,q_530,s_531,s_532,q_533,s_534,s_535,q_536,s_537,s_538,betweenstory_538,s_539,q_540,s_541,q_542,s_543,s_544,s_545,q_546,s_547,q_548,s_549,q_550,s_551,s_552,betweenstory_552,s_553,q_554,s_555,s_556,s_557,s_558,s_559,q_560,s_561,s_562,s_563,betweenstory_563,s_564,q_565,s_566,q_567,s_568,q_569,s_570,s_571,q_572,s_573,s_574,q_575,s_576,s_577,betweenstory_577,s_578,s_579,s_580,q_581,s_582,s_583,s_584,q_585,s_586,q_587,s_588,s_589,betweenstory_589,s_590,s_591,q_592,s_593,q_594,s_595,s_596,q_597,s_598,s_599,q_600,s_601,s_602,betweenstory_602,s_603,s_604,q_605,s_606,q_607,s_608,s_609,q_610,s_611,q_612,s_613,q_614,s_615,s_616,betweenstory_616,s_617,q_618,s_619,q_620,s_621,q_622,s_623,s_624,q_625,s_626,s_627,q_628,s_629,s_630,betweenstory_630,],

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