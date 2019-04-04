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
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_6 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var q_7 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_F-XSTARE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_9 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
	var s_16 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_17 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_19 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_22 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_23 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_25 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_26 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_33 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_34 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_36 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_38 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_39 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_46 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_47 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_49 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_51 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_53 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_YELL_Subject.violent_T-SHOVE_XSTARE_Subject.violent_T" }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_55 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_57 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_61 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_62 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_64 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_66 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_67 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_71 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_74 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_75 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_77 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_F-SHOVE_XSHOVE_Subject.violent_F" }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var q_82 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_F-XSTARE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_87 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_88 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_90 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_92 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_94 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_97 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_99 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_100 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_101 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_102 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_104 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_107 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_109 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
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
	var s_117 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_118 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_120 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_123 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_125 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_127 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_127 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_128 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_129 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_132 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_135 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_137 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_138 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_147 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_149 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_151 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_152 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_154 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_156 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_159 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_161 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_161 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_162 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_163 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_166 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_168 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_170 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_173 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_174 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_175 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_177 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_179 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SUBJECTSTARES_Subject.violent_T-CUTBACK_SHOVE_Subject.violent_T" }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_181 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_182 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_184 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
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
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_188 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_190 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_192 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_196 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_198 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_199 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_201 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_202 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_203 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_205 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_209 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_211 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_212 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_213 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_220 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_223 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_224 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_225 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_228 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_229 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_231 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_232 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_233 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_235 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_236 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_237 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_242 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_243 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_245 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_247 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_247 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_248 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_249 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_250 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_253 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_YELL_Subject.violent_T-SUBJECTSTARES_XSTARE_Subject.violent_T" }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_255 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_256 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_258 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_260 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_261 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_265 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_266 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_268 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_270 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_272 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_272 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_273 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_274 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_275 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_280 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_282 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_284 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_286 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_286 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_287 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
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
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_294 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
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
	var s_298 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_299 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_300 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_301 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var q_304 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SUBJECTSTARES_Subject.violent_F-CUTBACK_SHOVE_Subject.violent_F" }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_306 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_308 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_310 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_311 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_314 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_317 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_T-CUTBACK_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_319 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_320 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_322 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
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
	var q_330 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_332 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_336 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_336 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_337 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_338 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_340 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_341 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_342 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var q_343 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_F-XSTARE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_345 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_347 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_351 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_352 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var q_353 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SUBJECTSTARES_Subject.violent_F-CUTBACK_SHOVE_Subject.violent_F" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_355 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_356 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_357 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_359 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_360 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_361 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_362 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_364 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_366 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_368 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_369 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
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
	var s_374 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_377 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_378 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_379 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_381 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_383 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_384 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_385 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_389 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_391 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_393 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_395 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_397 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_397 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_398 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_399 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_402 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSHOVE_Subject.violent_F-SHOVE_XSTARE_Subject.violent_F" }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_406 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_408 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_409 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_411 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_412 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_413 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_414 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_415 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_417 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_419 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_421 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_423 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_428 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_430 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_436 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_438 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_439 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_440 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_444 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var q_446 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_F-XSTARE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_449 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_450 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_451 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_452 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_455 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var q_457 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_F-XSTARE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_459 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_460 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_462 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_463 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_464 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_467 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_469 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_472 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_473 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_475 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_476 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_477 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_479 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_481 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_484 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_487 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_489 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_489 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_490 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_491 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_493 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_495 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_498 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_500 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_501 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_502 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_505 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_508 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_509 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_511 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_513 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_513 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_514 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_515 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_517 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_518 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_519 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_521 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_523 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_525 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
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
	var q_529 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_532 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_534 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_536 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_537 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_538 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
	var s_542 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_543 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Silvia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_F-CUTLINE_EXCUSEME_Subject.violent_F" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_546 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var q_547 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_F-XSTARE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_549 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_551 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_553 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_553 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_554 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_555 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_558 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_564 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_566 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_566 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_567 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_568 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_570 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_571 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_573 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_575 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
	var q_580 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_582 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_584 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_587 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_589 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_593 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_594 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_595 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_599 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_601 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_605 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_605 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_606 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_607 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_609 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_F-CUTLINE_CUTBACK_Subject.violent_F" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_612 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_614 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_616 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_618 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_618 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_619 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_620 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_622 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_623 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_624 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_626 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_627 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_629 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,s_4,s_5,s_6,q_7,s_8,q_9,s_10,s_11,s_12,betweenstory_12,s_13,s_14,s_15,s_16,s_17,s_18,s_19,s_20,s_21,betweenstory_21,s_22,q_23,s_24,s_25,q_26,s_27,s_28,s_29,s_30,s_31,s_32,betweenstory_32,s_33,q_34,s_35,q_36,s_37,s_38,q_39,s_40,s_41,q_42,s_43,s_44,s_45,betweenstory_45,s_46,q_47,s_48,q_49,s_50,q_51,s_52,q_53,s_54,q_55,s_56,q_57,s_58,q_59,s_60,s_61,betweenstory_61,s_62,s_63,q_64,s_65,s_66,q_67,s_68,s_69,s_70,q_71,s_72,s_73,betweenstory_73,s_74,q_75,s_76,s_77,q_78,s_79,q_80,s_81,q_82,s_83,s_84,s_85,s_86,betweenstory_86,s_87,q_88,s_89,q_90,s_91,q_92,s_93,q_94,s_95,s_96,q_97,s_98,s_99,s_100,betweenstory_100,s_101,q_102,s_103,s_104,s_105,s_106,q_107,s_108,q_109,s_110,q_111,s_112,s_113,betweenstory_113,s_114,q_115,s_116,s_117,q_118,s_119,q_120,s_121,s_122,q_123,s_124,q_125,s_126,s_127,betweenstory_127,s_128,q_129,s_130,s_131,q_132,s_133,s_134,q_135,s_136,s_137,q_138,s_139,s_140,betweenstory_140,s_141,q_142,s_143,s_144,s_145,s_146,s_147,s_148,q_149,s_150,s_151,betweenstory_151,s_152,s_153,s_154,s_155,s_156,s_157,s_158,q_159,s_160,s_161,betweenstory_161,s_162,q_163,s_164,s_165,q_166,s_167,q_168,s_169,q_170,s_171,s_172,s_173,s_174,betweenstory_174,s_175,s_176,q_177,s_178,q_179,s_180,s_181,s_182,s_183,q_184,s_185,s_186,betweenstory_186,s_187,q_188,s_189,q_190,s_191,q_192,s_193,q_194,s_195,q_196,s_197,s_198,q_199,s_200,s_201,betweenstory_201,s_202,q_203,s_204,q_205,s_206,s_207,s_208,s_209,s_210,s_211,s_212,betweenstory_212,s_213,s_214,s_215,s_216,s_217,q_218,s_219,q_220,s_221,s_222,s_223,betweenstory_223,s_224,q_225,s_226,s_227,s_228,q_229,s_230,s_231,s_232,q_233,s_234,s_235,betweenstory_235,s_236,q_237,s_238,s_239,s_240,s_241,s_242,q_243,s_244,q_245,s_246,s_247,betweenstory_247,s_248,s_249,q_250,s_251,s_252,q_253,s_254,s_255,q_256,s_257,q_258,s_259,s_260,betweenstory_260,s_261,s_262,s_263,s_264,s_265,q_266,s_267,q_268,s_269,q_270,s_271,s_272,betweenstory_272,s_273,s_274,q_275,s_276,s_277,q_278,s_279,q_280,s_281,q_282,s_283,q_284,s_285,s_286,betweenstory_286,s_287,s_288,q_289,s_290,s_291,q_292,s_293,q_294,s_295,q_296,s_297,s_298,s_299,betweenstory_299,s_300,q_301,s_302,s_303,q_304,s_305,q_306,s_307,q_308,s_309,s_310,s_311,s_312,betweenstory_312,s_313,q_314,s_315,s_316,q_317,s_318,s_319,q_320,s_321,s_322,s_323,s_324,betweenstory_324,s_325,s_326,q_327,s_328,s_329,q_330,s_331,q_332,s_333,s_334,s_335,s_336,betweenstory_336,s_337,q_338,s_339,s_340,s_341,s_342,q_343,s_344,q_345,s_346,q_347,s_348,s_349,betweenstory_349,s_350,s_351,s_352,q_353,s_354,s_355,s_356,q_357,s_358,s_359,s_360,betweenstory_360,s_361,q_362,s_363,s_364,s_365,q_366,s_367,s_368,q_369,s_370,s_371,s_372,betweenstory_372,s_373,s_374,s_375,s_376,s_377,s_378,q_379,s_380,q_381,s_382,s_383,betweenstory_383,s_384,q_385,s_386,s_387,s_388,q_389,s_390,q_391,s_392,q_393,s_394,q_395,s_396,s_397,betweenstory_397,s_398,q_399,s_400,s_401,q_402,s_403,q_404,s_405,q_406,s_407,s_408,q_409,s_410,s_411,betweenstory_411,s_412,s_413,s_414,q_415,s_416,q_417,s_418,q_419,s_420,q_421,s_422,q_423,s_424,s_425,betweenstory_425,s_426,s_427,q_428,s_429,q_430,s_431,q_432,s_433,s_434,s_435,q_436,s_437,s_438,betweenstory_438,s_439,q_440,s_441,s_442,s_443,q_444,s_445,q_446,s_447,s_448,s_449,s_450,betweenstory_450,s_451,q_452,s_453,s_454,s_455,s_456,q_457,s_458,s_459,q_460,s_461,s_462,betweenstory_462,s_463,q_464,s_465,s_466,q_467,s_468,q_469,s_470,s_471,s_472,q_473,s_474,s_475,betweenstory_475,s_476,q_477,s_478,q_479,s_480,q_481,s_482,s_483,q_484,s_485,s_486,q_487,s_488,s_489,betweenstory_489,s_490,q_491,s_492,q_493,s_494,q_495,s_496,s_497,s_498,s_499,s_500,s_501,betweenstory_501,s_502,s_503,s_504,q_505,s_506,s_507,s_508,q_509,s_510,q_511,s_512,s_513,betweenstory_513,s_514,q_515,s_516,s_517,s_518,q_519,s_520,q_521,s_522,q_523,s_524,q_525,s_526,s_527,betweenstory_527,s_528,q_529,s_530,s_531,q_532,s_533,q_534,s_535,s_536,s_537,q_538,s_539,s_540,betweenstory_540,s_541,s_542,q_543,s_544,s_545,s_546,q_547,s_548,q_549,s_550,q_551,s_552,s_553,betweenstory_553,s_554,q_555,s_556,s_557,q_558,s_559,q_560,s_561,s_562,s_563,q_564,s_565,s_566,betweenstory_566,s_567,s_568,s_569,s_570,q_571,s_572,q_573,s_574,q_575,s_576,s_577,s_578,betweenstory_578,s_579,q_580,s_581,q_582,s_583,q_584,s_585,s_586,q_587,s_588,q_589,s_590,q_591,s_592,s_593,betweenstory_593,s_594,q_595,s_596,s_597,s_598,q_599,s_600,q_601,s_602,s_603,s_604,s_605,betweenstory_605,s_606,q_607,s_608,q_609,s_610,s_611,q_612,s_613,s_614,s_615,q_616,s_617,s_618,betweenstory_618,s_619,q_620,s_621,s_622,s_623,q_624,s_625,s_626,q_627,s_628,s_629,s_630,betweenstory_630,],

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