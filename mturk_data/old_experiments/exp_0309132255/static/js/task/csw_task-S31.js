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
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_2 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_4 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_6 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_T-CUTBACK_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_9 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_12 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_14 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_15 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_16 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_19 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_21 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_23 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_25 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_26 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_29 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_31 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Silvia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_F-CUTLINE_EXCUSEME_Subject.violent_F" }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var q_33 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTBACK_SUBJECTSTARES_Subject.violent_F-CUTBACK_SHOVE_Subject.violent_F" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_35 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_37 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_39 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_42 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_43 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_44 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_46 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_47 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_49 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_51 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_56 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_57 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_58 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_59 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_63 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_66 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_67 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_68 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_69 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_71 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_72 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_76 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_78 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_80 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_82 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_83 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_84 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_86 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_89 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_90 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_91 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_92 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_94 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_97 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_99 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_101 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_103 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_103 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_104 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_107 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_109 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_115 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_116 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_117 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_118 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_120 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_122 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_124 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_125 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_126 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_128 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_128 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_129 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_130 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_132 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_135 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_137 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_138 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_140 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_141 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_142 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_146 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_149 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_152 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_152 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_153 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_154 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_156 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_157 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_161 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_163 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_164 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_165 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_166 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_167 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_168 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_170 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_173 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_175 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_177 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_177 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_178 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_180 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_182 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_T-CUTBACK_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_186 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_188 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_189 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_190 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_193 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_194 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_196 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
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
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_202 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_204 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_206 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_209 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_210 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_211 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_219 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_219 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_220 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_221 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_225 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_226 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_228 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_230 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_231 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_232 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_235 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_237 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_238 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_240 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_242 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_242 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_243 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_244 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_246 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_247 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_249 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_251 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_252 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_254 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_254 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_255 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_256 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_259 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_261 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_263 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_265 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_267 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_268 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_268 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_269 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_270 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_272 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_274 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_276 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_279 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_282 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_283 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_286 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_287 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_292 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_292 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_293 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_294 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_296 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_300 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_303 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_304 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_306 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_308 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_310 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_312 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_314 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_316 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_317 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_318 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_321 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_324 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_326 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_328 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_329 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_329 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_330 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_331 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_335 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_338 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_340 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_341 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_341 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_342 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_343 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_344 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_345 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_347 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_349 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_351 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_353 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_354 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_355 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_356 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_358 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var s_359 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_360 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_362 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_363 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_364 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_366 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_367 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_368 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_371 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_376 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_377 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_378 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_380 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_382 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_384 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_386 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_390 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_390 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_391 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_393 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_394 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_396 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_398 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_399 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_401 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_403 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_404 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_405 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_408 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_411 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_413 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_414 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_416 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_416 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_417 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_420 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_422 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_426 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_428 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_428 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_429 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_430 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_436 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_439 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_441 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_442 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_443 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_445 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_447 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_449 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_450 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_452 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_454 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_455 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_457 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_459 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_462 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_464 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_466 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_467 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_468 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_472 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_473 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_474 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_476 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_478 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_479 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_483 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_485 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_487 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_489 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_491 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_491 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_492 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_493 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_495 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_497 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_500 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_502 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_504 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_505 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_508 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_509 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_511 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_513 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_514 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_516 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_517 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_518 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_521 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_523 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_527 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_527 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_528 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_529 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_530 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var q_531 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_F-CUTBACK_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var q_533 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_F-SHOVE_XSHOVE_Subject.violent_F" }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_536 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_537 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_539 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_540 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_541 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_542 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_543 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_546 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_547 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_548 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_550 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_550 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_551 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_553 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_555 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_562 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_563 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_565 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_566 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_568 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_YELL_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_570 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_571 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_573 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_575 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_575 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_576 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_578 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_580 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_582 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_584 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_586 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_587 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_588 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_590 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_593 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_595 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_598 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_600 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_600 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_601 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_602 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_605 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_606 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_611 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

// CODE BODY END

jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,q_4,s_5,q_6,s_7,s_8,q_9,s_10,s_11,q_12,s_13,s_14,betweenstory_14,s_15,q_16,s_17,s_18,q_19,s_20,q_21,s_22,q_23,s_24,s_25,q_26,s_27,s_28,betweenstory_28,s_29,s_30,q_31,s_32,q_33,s_34,q_35,s_36,q_37,s_38,q_39,s_40,s_41,s_42,betweenstory_42,s_43,q_44,s_45,s_46,q_47,s_48,q_49,s_50,q_51,s_52,s_53,q_54,s_55,s_56,betweenstory_56,s_57,s_58,s_59,s_60,q_61,s_62,q_63,s_64,s_65,s_66,s_67,betweenstory_67,s_68,q_69,s_70,s_71,s_72,s_73,q_74,s_75,q_76,s_77,s_78,s_79,betweenstory_79,s_80,s_81,s_82,s_83,q_84,s_85,q_86,s_87,s_88,s_89,s_90,betweenstory_90,s_91,q_92,s_93,q_94,s_95,s_96,s_97,s_98,q_99,s_100,q_101,s_102,s_103,betweenstory_103,s_104,s_105,s_106,q_107,s_108,q_109,s_110,q_111,s_112,q_113,s_114,s_115,s_116,betweenstory_116,s_117,q_118,s_119,s_120,s_121,q_122,s_123,s_124,s_125,q_126,s_127,s_128,betweenstory_128,s_129,q_130,s_131,q_132,s_133,s_134,s_135,s_136,s_137,q_138,s_139,s_140,betweenstory_140,s_141,q_142,s_143,s_144,s_145,q_146,s_147,s_148,q_149,s_150,s_151,s_152,betweenstory_152,s_153,q_154,s_155,s_156,q_157,s_158,s_159,s_160,q_161,s_162,s_163,s_164,betweenstory_164,s_165,s_166,s_167,q_168,s_169,q_170,s_171,s_172,q_173,s_174,q_175,s_176,s_177,betweenstory_177,s_178,s_179,q_180,s_181,q_182,s_183,s_184,s_185,s_186,s_187,s_188,betweenstory_188,s_189,s_190,s_191,s_192,s_193,s_194,s_195,q_196,s_197,s_198,betweenstory_198,s_199,s_200,s_201,q_202,s_203,q_204,s_205,q_206,s_207,s_208,s_209,s_210,betweenstory_210,s_211,s_212,s_213,s_214,s_215,s_216,s_217,s_218,s_219,betweenstory_219,s_220,q_221,s_222,s_223,s_224,s_225,s_226,s_227,q_228,s_229,s_230,betweenstory_230,s_231,q_232,s_233,s_234,q_235,s_236,s_237,s_238,s_239,q_240,s_241,s_242,betweenstory_242,s_243,q_244,s_245,s_246,q_247,s_248,s_249,s_250,s_251,q_252,s_253,s_254,betweenstory_254,s_255,q_256,s_257,s_258,q_259,s_260,q_261,s_262,q_263,s_264,q_265,s_266,s_267,s_268,betweenstory_268,s_269,q_270,s_271,q_272,s_273,q_274,s_275,q_276,s_277,s_278,q_279,s_280,s_281,s_282,betweenstory_282,s_283,s_284,s_285,s_286,q_287,s_288,s_289,s_290,s_291,s_292,betweenstory_292,s_293,q_294,s_295,s_296,s_297,q_298,s_299,s_300,s_301,s_302,s_303,betweenstory_303,s_304,s_305,s_306,s_307,q_308,s_309,q_310,s_311,q_312,s_313,q_314,s_315,s_316,betweenstory_316,s_317,q_318,s_319,s_320,q_321,s_322,s_323,q_324,s_325,q_326,s_327,s_328,s_329,betweenstory_329,s_330,q_331,s_332,s_333,s_334,q_335,s_336,s_337,q_338,s_339,s_340,s_341,betweenstory_341,s_342,s_343,s_344,q_345,s_346,q_347,s_348,q_349,s_350,q_351,s_352,s_353,s_354,betweenstory_354,s_355,q_356,s_357,s_358,s_359,q_360,s_361,s_362,s_363,q_364,s_365,s_366,betweenstory_366,s_367,s_368,s_369,s_370,q_371,s_372,s_373,s_374,s_375,s_376,betweenstory_376,s_377,q_378,s_379,q_380,s_381,q_382,s_383,q_384,s_385,q_386,s_387,s_388,s_389,s_390,betweenstory_390,s_391,s_392,s_393,q_394,s_395,q_396,s_397,s_398,q_399,s_400,q_401,s_402,s_403,betweenstory_403,s_404,q_405,s_406,s_407,q_408,s_409,s_410,q_411,s_412,s_413,q_414,s_415,s_416,betweenstory_416,s_417,s_418,s_419,q_420,s_421,q_422,s_423,s_424,s_425,q_426,s_427,s_428,betweenstory_428,s_429,q_430,s_431,q_432,s_433,s_434,s_435,q_436,s_437,s_438,q_439,s_440,s_441,betweenstory_441,s_442,q_443,s_444,s_445,s_446,q_447,s_448,s_449,q_450,s_451,q_452,s_453,s_454,betweenstory_454,s_455,s_456,q_457,s_458,s_459,s_460,s_461,q_462,s_463,q_464,s_465,s_466,betweenstory_466,s_467,q_468,s_469,s_470,s_471,s_472,s_473,q_474,s_475,q_476,s_477,s_478,betweenstory_478,s_479,s_480,s_481,s_482,q_483,s_484,q_485,s_486,q_487,s_488,q_489,s_490,s_491,betweenstory_491,s_492,q_493,s_494,q_495,s_496,q_497,s_498,s_499,s_500,s_501,q_502,s_503,s_504,betweenstory_504,s_505,s_506,s_507,s_508,q_509,s_510,q_511,s_512,s_513,q_514,s_515,s_516,betweenstory_516,s_517,s_518,s_519,s_520,q_521,s_522,q_523,s_524,s_525,s_526,s_527,betweenstory_527,s_528,s_529,s_530,q_531,s_532,q_533,s_534,s_535,s_536,q_537,s_538,s_539,betweenstory_539,s_540,s_541,s_542,q_543,s_544,s_545,s_546,s_547,q_548,s_549,s_550,betweenstory_550,s_551,s_552,q_553,s_554,q_555,s_556,s_557,s_558,s_559,q_560,s_561,s_562,betweenstory_562,s_563,s_564,s_565,q_566,s_567,q_568,s_569,s_570,q_571,s_572,q_573,s_574,s_575,betweenstory_575,s_576,s_577,q_578,s_579,q_580,s_581,s_582,s_583,s_584,s_585,s_586,betweenstory_586,s_587,q_588,s_589,q_590,s_591,s_592,q_593,s_594,q_595,s_596,s_597,q_598,s_599,s_600,betweenstory_600,s_601,q_602,s_603,s_604,s_605,q_606,s_607,s_608,s_609,s_610,s_611,betweenstory_611,],

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