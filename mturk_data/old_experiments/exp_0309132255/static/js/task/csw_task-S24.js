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
	var q_2 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_4 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Silvia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_F-CUTLINE_CUTBACK_Subject.violent_F" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_6 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_9 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
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
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_14 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_17 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_T-CUTBACK_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_19 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_20 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_22 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_23 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_25 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_26 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_27 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_29 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_31 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_33 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_XSHOVE_Subject.violent_T" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_36 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_38 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_40 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_42 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_45 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_47 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_48 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_50 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_51 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_52 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_56 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_T-CUTBACK_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_58 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_63 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_66 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_67 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_70 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_72 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_76 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
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
	var q_81 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_83 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_84 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_86 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var q_88 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_F-XSTARE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_90 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_91 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_94 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_95 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_97 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_99 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_102 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_104 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_106 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_107 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_108 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_110 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_113 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_114 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_117 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_119 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_120 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_121 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_124 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_125 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_127 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_128 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_129 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_130 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_130 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_131 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_132 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_135 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_136 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_138 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_140 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_142 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_143 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_144 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_145 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_147 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_148 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_150 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_152 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_153 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_155 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_157 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_158 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_161 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_163 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_166 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_168 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_169 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_170 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_173 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_175 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_177 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_178 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_180 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_180 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_181 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_182 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var q_186 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSHOVE_Subject.violent_F-SHOVE_XSTARE_Subject.violent_F" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_189 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_190 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_191 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_192 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_193 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_196 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_198 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_199 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_200 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_202 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_204 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_205 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_206 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_209 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_211 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_214 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_216 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_217 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_219 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_221 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_223 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_225 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_226 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_227 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_228 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_229 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_231 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_233 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_235 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_237 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_239 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
	var s_244 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_245 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_246 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_247 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_249 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_251 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_253 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_253 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_254 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_255 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_257 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_259 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_262 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_264 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_265 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_266 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_268 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Silvia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_F-CUTLINE_CUTBACK_Subject.violent_F" }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_270 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_272 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_273 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_275 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_276 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_277 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_278 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_279 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_282 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_286 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_288 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_290 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_291 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_294 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_295 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var q_296 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSHOVE_Subject.violent_F-SHOVE_XSTARE_Subject.violent_F" }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_300 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_301 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_306 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_308 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_310 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_311 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_312 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_313 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_314 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_315 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_317 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_319 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_320 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_322 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_325 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_326 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_326 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_327 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_328 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_329 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_333 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_335 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_338 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_338 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_339 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_340 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_342 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_343 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_344 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_345 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_349 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_350 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_351 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_353 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_354 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTBACK_SUBJECTSTARES_Subject.violent_T-CUTBACK_SHOVE_Subject.violent_T" }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_356 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_358 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_359 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_361 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_364 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_368 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_370 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_372 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_374 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
	var s_382 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_383 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_YELL_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_385 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_389 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_390 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_391 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_393 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_395 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_397 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_399 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_401 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_402 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_404 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_405 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_408 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_411 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_413 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_413 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_414 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_415 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_416 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_420 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_421 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_423 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_425 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_426 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_427 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_428 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_429 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_430 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_431 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_433 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_436 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_436 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_437 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_438 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_440 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_443 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_445 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_449 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_449 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_450 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_451 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_452 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_453 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_455 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_457 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_459 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_460 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_461 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_462 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_467 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_469 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_471 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_473 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_473 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_474 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_476 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var s_477 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_478 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_YELL_Subject.violent_T-SUBJECTSTARES_XSTARE_Subject.violent_T" }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_483 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_484 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_487 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_489 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_491 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_494 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_495 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_496 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_498 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_500 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_501 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_505 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_505 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_506 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_508 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_509 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var q_511 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSHOVE_Subject.violent_F-SHOVE_XSTARE_Subject.violent_F" }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_513 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_514 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_517 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_517 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_518 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_521 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_523 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_527 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_528 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_529 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_530 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_533 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_536 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_540 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_540 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_541 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_542 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_546 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_547 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_549 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_550 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_551 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_552 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_553 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_554 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Silvia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_F-CUTLINE_CUTBACK_Subject.violent_F" }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_556 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var q_558 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSHOVE_Subject.violent_F-SHOVE_XSTARE_Subject.violent_F" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_560 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_561 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_563 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_565 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_565 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_566 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_567 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_570 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var q_572 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSHOVE_Subject.violent_F-SHOVE_XSTARE_Subject.violent_F" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_575 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_578 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_578 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_579 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_580 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_581 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_584 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_587 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_590 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_591 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_594 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_595 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_596 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_599 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_601 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_601 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_602 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_603 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_605 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
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
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
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

// CODE BODY END

jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,q_4,s_5,q_6,s_7,s_8,s_9,s_10,s_11,s_12,betweenstory_12,s_13,q_14,s_15,s_16,q_17,s_18,s_19,q_20,s_21,s_22,q_23,s_24,s_25,betweenstory_25,s_26,q_27,s_28,q_29,s_30,q_31,s_32,q_33,s_34,s_35,q_36,s_37,s_38,s_39,betweenstory_39,s_40,s_41,s_42,s_43,s_44,q_45,s_46,s_47,q_48,s_49,s_50,betweenstory_50,s_51,q_52,s_53,q_54,s_55,q_56,s_57,s_58,q_59,s_60,q_61,s_62,q_63,s_64,s_65,betweenstory_65,s_66,s_67,q_68,s_69,q_70,s_71,q_72,s_73,q_74,s_75,q_76,s_77,s_78,s_79,betweenstory_79,s_80,q_81,s_82,s_83,q_84,s_85,q_86,s_87,q_88,s_89,s_90,q_91,s_92,s_93,betweenstory_93,s_94,q_95,s_96,s_97,s_98,q_99,s_100,s_101,q_102,s_103,q_104,s_105,s_106,betweenstory_106,s_107,q_108,s_109,s_110,q_111,s_112,s_113,s_114,q_115,s_116,q_117,s_118,s_119,betweenstory_119,s_120,q_121,s_122,s_123,s_124,q_125,s_126,s_127,s_128,s_129,s_130,betweenstory_130,s_131,q_132,s_133,s_134,s_135,q_136,s_137,q_138,s_139,q_140,s_141,s_142,s_143,betweenstory_143,s_144,q_145,s_146,s_147,q_148,s_149,q_150,s_151,s_152,q_153,s_154,q_155,s_156,s_157,betweenstory_157,s_158,s_159,s_160,q_161,s_162,s_163,s_164,s_165,q_166,s_167,s_168,betweenstory_168,s_169,s_170,s_171,s_172,q_173,s_174,q_175,s_176,s_177,q_178,s_179,s_180,betweenstory_180,s_181,q_182,s_183,s_184,s_185,q_186,s_187,s_188,s_189,s_190,s_191,betweenstory_191,s_192,q_193,s_194,s_195,q_196,s_197,s_198,s_199,q_200,s_201,q_202,s_203,s_204,betweenstory_204,s_205,q_206,s_207,s_208,q_209,s_210,s_211,s_212,s_213,q_214,s_215,s_216,betweenstory_216,s_217,s_218,q_219,s_220,s_221,s_222,q_223,s_224,s_225,s_226,s_227,betweenstory_227,s_228,q_229,s_230,q_231,s_232,q_233,s_234,q_235,s_236,q_237,s_238,q_239,s_240,s_241,s_242,betweenstory_242,s_243,s_244,s_245,s_246,q_247,s_248,s_249,s_250,q_251,s_252,s_253,betweenstory_253,s_254,s_255,s_256,s_257,s_258,q_259,s_260,s_261,q_262,s_263,s_264,betweenstory_264,s_265,q_266,s_267,q_268,s_269,q_270,s_271,s_272,q_273,s_274,s_275,s_276,s_277,betweenstory_277,s_278,q_279,s_280,s_281,q_282,s_283,s_284,s_285,q_286,s_287,q_288,s_289,s_290,betweenstory_290,s_291,q_292,s_293,s_294,s_295,q_296,s_297,q_298,s_299,s_300,q_301,s_302,s_303,betweenstory_303,s_304,s_305,s_306,s_307,q_308,s_309,s_310,s_311,s_312,s_313,betweenstory_313,s_314,q_315,s_316,q_317,s_318,s_319,q_320,s_321,q_322,s_323,s_324,s_325,s_326,betweenstory_326,s_327,s_328,q_329,s_330,s_331,s_332,q_333,s_334,q_335,s_336,s_337,s_338,betweenstory_338,s_339,q_340,s_341,s_342,s_343,s_344,q_345,s_346,s_347,s_348,s_349,betweenstory_349,s_350,q_351,s_352,s_353,q_354,s_355,q_356,s_357,s_358,q_359,s_360,s_361,s_362,betweenstory_362,s_363,q_364,s_365,s_366,s_367,q_368,s_369,q_370,s_371,q_372,s_373,q_374,s_375,s_376,betweenstory_376,s_377,q_378,s_379,q_380,s_381,s_382,q_383,s_384,q_385,s_386,s_387,s_388,s_389,betweenstory_389,s_390,s_391,s_392,q_393,s_394,q_395,s_396,q_397,s_398,s_399,s_400,s_401,betweenstory_401,s_402,s_403,s_404,q_405,s_406,s_407,q_408,s_409,s_410,q_411,s_412,s_413,betweenstory_413,s_414,s_415,q_416,s_417,s_418,s_419,s_420,q_421,s_422,q_423,s_424,s_425,betweenstory_425,s_426,s_427,s_428,s_429,s_430,q_431,s_432,q_433,s_434,s_435,s_436,betweenstory_436,s_437,q_438,s_439,q_440,s_441,s_442,q_443,s_444,q_445,s_446,s_447,s_448,s_449,betweenstory_449,s_450,s_451,s_452,s_453,s_454,q_455,s_456,q_457,s_458,s_459,s_460,betweenstory_460,s_461,q_462,s_463,s_464,s_465,s_466,q_467,s_468,q_469,s_470,q_471,s_472,s_473,betweenstory_473,s_474,s_475,s_476,s_477,q_478,s_479,s_480,s_481,s_482,s_483,betweenstory_483,s_484,s_485,s_486,q_487,s_488,q_489,s_490,s_491,s_492,s_493,s_494,betweenstory_494,s_495,q_496,s_497,s_498,s_499,s_500,q_501,s_502,s_503,s_504,s_505,betweenstory_505,s_506,s_507,s_508,q_509,s_510,q_511,s_512,s_513,q_514,s_515,s_516,s_517,betweenstory_517,s_518,s_519,s_520,q_521,s_522,q_523,s_524,s_525,s_526,s_527,s_528,betweenstory_528,s_529,q_530,s_531,s_532,q_533,s_534,s_535,q_536,s_537,s_538,s_539,s_540,betweenstory_540,s_541,q_542,s_543,s_544,s_545,s_546,q_547,s_548,s_549,s_550,s_551,betweenstory_551,s_552,s_553,q_554,s_555,q_556,s_557,q_558,s_559,s_560,q_561,s_562,q_563,s_564,s_565,betweenstory_565,s_566,q_567,s_568,s_569,q_570,s_571,q_572,s_573,s_574,q_575,s_576,s_577,s_578,betweenstory_578,s_579,s_580,q_581,s_582,s_583,q_584,s_585,s_586,q_587,s_588,s_589,s_590,betweenstory_590,s_591,s_592,s_593,s_594,s_595,q_596,s_597,s_598,q_599,s_600,s_601,betweenstory_601,s_602,q_603,s_604,q_605,s_606,q_607,s_608,s_609,q_610,s_611,q_612,s_613,q_614,s_615,s_616,betweenstory_616,],

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