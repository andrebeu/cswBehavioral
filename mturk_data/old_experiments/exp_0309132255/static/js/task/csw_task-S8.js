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
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_6 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_9 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_17 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_19 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_21 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
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
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var q_30 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_F-XSTARE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_32 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_36 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_37 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_40 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_46 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_48 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_49 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_50 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_51 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_52 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_56 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_57 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_58 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_61 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_62 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var q_65 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTBACK_SUBJECTSTARES_Subject.violent_F-CUTBACK_SHOVE_Subject.violent_F" }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_67 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_71 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_77 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_80 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_82 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_84 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
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
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_89 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_90 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_92 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_94 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_97 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_98 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_99 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_102 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_103 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_104 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_108 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_108 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_109 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_110 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_117 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_119 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_121 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_122 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_123 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_125 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_126 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_F-EXCUSEME_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_128 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_129 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_132 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_134 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_135 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_136 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_138 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_141 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_146 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_147 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_149 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_154 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_156 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_159 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_160 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_161 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_162 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_166 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_167 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_169 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_170 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_173 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_174 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
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
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_182 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_183 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_186 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_189 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_192 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_193 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
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
	var q_199 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_201 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_203 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_205 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_205 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_206 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_207 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_209 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Silvia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_F-CUTLINE_CUTBACK_Subject.violent_F" }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_211 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_215 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_217 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_221 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_225 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_226 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_228 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_231 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_231 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_232 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_233 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_235 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse promptly stepped back in front of Olivia.", "Jesse was really annoyed and said, 'Excuse me?!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_237 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_238 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_240 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_242 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_244 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_245 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_246 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_247 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_249 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "In retaliation, Jesse pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_XSHOVE_Subject.violent_T" }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_251 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_253 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_255 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_256 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_257 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_261 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_263 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_265 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_BARISTAORDERS_None_N-DESERTCRUMBLE_POLICEORDERS_None_N" }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_267 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_269 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_269 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_270 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_272 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_273 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_275 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_277 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_279 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_280 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_286 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_289 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_291 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_294 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_294 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_295 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_296 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse yelled into Olivia's face, 'Hey! Relax.'", "Jesse stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_T-SUBJECTSTARES_YELL_Subject.violent_T" }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_303 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_305 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_307 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_308 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_310 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_311 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_312 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_314 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_316 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_318 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_318 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_319 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_320 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_322 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_325 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var q_328 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_HATECOFFEE_None_N-BARISTAORDERS_LOVEJUICE_None_N" }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_330 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_331 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_334 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_336 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_338 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
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
	var q_343 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_345 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_346 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSTARE_Subject.violent_F-SUBJECTSTARES_XSHOVE_Subject.violent_F" }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_351 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
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
	var s_356 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_357 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var s_358 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_359 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_361 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_363 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_364 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
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
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_368 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_371 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_372 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_377 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_377 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_378 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_379 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_381 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_382 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_384 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Silvia's eyes."],
	} 
	var s_385 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_387 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
		pages: ["Olivia walked into the coffee shop."],
	} 
	var s_391 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_392 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
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
	var s_396 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_397 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_399 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_400 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_402 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_403 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_F-BEGIN_STEPFOOT_Subject.violent_F" }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ["Without hesitating Silvia cut Jesse, the first person in line."],
	} 
	var q_406 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_F-CUTLINE_EXCUSEME_Subject.violent_F" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Silvia."],
	} 
	var q_408 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to give a slight shove to Jesse.", "Silvia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_F-CUTBACK_SUBJECTSTARES_Subject.violent_F" }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var q_410 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSHOVE_Subject.violent_F-SHOVE_XSTARE_Subject.violent_F" }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_412 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia snatched a muffin and crumbled it above Jesse's head. ", "Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DRINKSPLASH_Subject.violent_F-XSHOVE_DESERTCRUMBLE_Subject.violent_F" }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_414 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_415 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
	var s_420 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_421 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Silvia's eyes.", "In retaliation, Jesse pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_423 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_427 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_427 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_428 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_429 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_T-CUTBACK_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_435 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_439 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_440 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_441 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Jesse's foot.", "Without hesitating Silvia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_444 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Jesse and gave Jesse a very mean look.", "Silvia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_F-EXCUSEME_SHOVE_Subject.violent_F" }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_449 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_451 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_451 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_452 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_453 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_455 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_456 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SUBJECTSTARES_Subject.violent_T-EXCUSEME_SHOVE_Subject.violent_T" }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ["Olivia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_458 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Olivia.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-SUBJECTSTARES_YELL_Subject.violent_T-SUBJECTSTARES_XSHOVE_Subject.violent_T" }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_461 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_463 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_465 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_466 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var q_467 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Silvia cut Jesse, the first person in line.", "Clumsily, Silvia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_F-BEGIN_CUTLINE_Subject.violent_F" }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_469 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_472 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var q_473 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-DESERTCRUMBLE_POLICEORDERS_None_N-DESERTCRUMBLE_BARISTAORDERS_None_N" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_475 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'", "Silvia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_477 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_477 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_478 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_479 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_483 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_486 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
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
	var s_491 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_493 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_495 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var q_496 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-YELL_DRINKSPLASH_Subject.violent_T-YELL_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_498 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var q_500 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_HATECOFFEE_None_N-POLICEORDERS_LOVEJUICE_None_N" }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_502 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_503 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_505 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Silvia proceeded to give a slight shove to Jesse."],
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var q_508 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia picked up a cup of coffee and splashed it in Jesse's face. ", "Silvia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSHOVE_DESERTCRUMBLE_Subject.violent_F-XSHOVE_DRINKSPLASH_Subject.violent_F" }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_510 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
	} 
	var q_511 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned and ran out yelling 'Juice is better, anyway!'", "Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-POLICEORDERS_LOVEJUICE_None_N-POLICEORDERS_HATECOFFEE_None_N" }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ["Silvia turned and ran out yelling 'Juice is better, anyway!'"],
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
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_515 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_517 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var q_518 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTBACK_SHOVE_Subject.violent_T-CUTBACK_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["Jesse yelled into Olivia's face, 'Hey! Relax.'"],
	} 
	var s_521 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_522 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_525 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_526 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
	} 
	var s_527 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Jesse's foot."],
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_529 = {
		type: 'instructions',
		pages: ["Silvia turned to Jesse and gave Jesse a very mean look."],
	} 
	var q_530 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Jesse pushed Silvia.", "Jesse stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SUBJECTSTARES_XSHOVE_Subject.violent_F-SUBJECTSTARES_XSTARE_Subject.violent_F" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["In retaliation, Jesse pushed Silvia."],
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Silvia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_533 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
	} 
	var s_534 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!'"],
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_535 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_536 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_537 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_539 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-CUTLINE_EXCUSEME_Subject.violent_T-CUTLINE_CUTBACK_Subject.violent_T" }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_541 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_543 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_544 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_546 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_548 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_549 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_549 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_550 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_551 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_553 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_554 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_556 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_559 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_POLICEORDERS_None_N-DRINKSPLASH_BARISTAORDERS_None_N" }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
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
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var q_565 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse was really annoyed and said, 'Excuse me?!'", "Jesse promptly stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-CUTLINE_CUTBACK_Subject.violent_T-CUTLINE_EXCUSEME_Subject.violent_T" }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ["Jesse promptly stepped back in front of Olivia."],
	} 
	var s_567 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_568 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_569 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DESERTCRUMBLE_Subject.violent_T-XSTARE_DRINKSPLASH_Subject.violent_T" }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ["Olivia snatched a muffin and crumbled it above Jesse's head. "],
	} 
	var s_571 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_573 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_574 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_575 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_578 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Jesse and gave Jesse a very mean look.", "Olivia proceeded to give a slight shove to Jesse."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_580 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_582 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_583 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!'", "Olivia turned and ran out yelling 'Juice is better, anyway!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_585 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_586 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_587 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Jesse's foot.", "Without hesitating Olivia cut Jesse, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_CUTLINE_Subject.violent_T-BEGIN_STEPFOOT_Subject.violent_T" }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ["Without hesitating Olivia cut Jesse, the first person in line."],
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Jesse stared with rage into Olivia's eyes.", "Jesse yelled into Olivia's face, 'Hey! Relax.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-SHOVE_XSTARE_Subject.violent_T-SHOVE_YELL_Subject.violent_T" }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_593 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. ", "Olivia snatched a muffin and crumbled it above Jesse's head. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var s_595 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["The barista handed Jesse a bunch of napkins and gave Jesse a free drink out of sympathy."],
	} 

	var betweenstory_597 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** ']
	} 

	var s_598 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
	} 
	var q_599 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Without hesitating Olivia cut Jesse, the first person in line.", "Clumsily, Olivia stepped on Jesse's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-BEGIN_STEPFOOT_Subject.violent_T-BEGIN_CUTLINE_Subject.violent_T" }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Jesse's foot."],
	} 
	var s_601 = {
		type: 'instructions',
		pages: ["Jesse was really annoyed and said, 'Excuse me?!'"],
	} 
	var q_602 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to give a slight shove to Jesse.", "Olivia turned to Jesse and gave Jesse a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-EXCUSEME_SHOVE_Subject.violent_T-EXCUSEME_SUBJECTSTARES_Subject.violent_T" }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["Olivia proceeded to give a slight shove to Jesse."],
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Jesse stared with rage into Olivia's eyes."],
	} 
	var q_605 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia snatched a muffin and crumbled it above Jesse's head. ", "Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qinfo":"Q-XSTARE_DRINKSPLASH_Subject.violent_T-XSTARE_DESERTCRUMBLE_Subject.violent_T" }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ["Olivia picked up a cup of coffee and splashed it in Jesse's face. "],
	} 
	var q_607 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-DRINKSPLASH_BARISTAORDERS_None_N-DRINKSPLASH_POLICEORDERS_None_N" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
	} 
	var q_609 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned and ran out yelling 'Juice is better, anyway!'", "Olivia stormed out of the coffee shop yelling 'I hate coffee!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qinfo":"Q-BARISTAORDERS_LOVEJUICE_None_N-BARISTAORDERS_HATECOFFEE_None_N" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Olivia turned and ran out yelling 'Juice is better, anyway!'"],
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,s_4,s_5,q_6,s_7,s_8,q_9,s_10,s_11,s_12,betweenstory_12,s_13,q_14,s_15,s_16,q_17,s_18,s_19,s_20,q_21,s_22,s_23,s_24,betweenstory_24,s_25,s_26,s_27,s_28,s_29,q_30,s_31,q_32,s_33,s_34,s_35,betweenstory_35,s_36,q_37,s_38,s_39,q_40,s_41,q_42,s_43,s_44,s_45,q_46,s_47,s_48,betweenstory_48,s_49,s_50,s_51,q_52,s_53,q_54,s_55,s_56,s_57,q_58,s_59,s_60,betweenstory_60,s_61,q_62,s_63,s_64,q_65,s_66,q_67,s_68,s_69,s_70,q_71,s_72,s_73,betweenstory_73,s_74,q_75,s_76,s_77,q_78,s_79,s_80,s_81,q_82,s_83,q_84,s_85,s_86,betweenstory_86,s_87,s_88,s_89,q_90,s_91,s_92,s_93,q_94,s_95,s_96,s_97,betweenstory_97,s_98,q_99,s_100,s_101,s_102,s_103,s_104,s_105,q_106,s_107,s_108,betweenstory_108,s_109,q_110,s_111,s_112,q_113,s_114,q_115,s_116,s_117,s_118,q_119,s_120,s_121,betweenstory_121,s_122,q_123,s_124,s_125,q_126,s_127,s_128,q_129,s_130,s_131,q_132,s_133,s_134,betweenstory_134,s_135,q_136,s_137,q_138,s_139,s_140,q_141,s_142,s_143,s_144,s_145,s_146,betweenstory_146,s_147,s_148,q_149,s_150,s_151,q_152,s_153,q_154,s_155,q_156,s_157,s_158,s_159,betweenstory_159,s_160,s_161,q_162,s_163,s_164,s_165,s_166,s_167,s_168,s_169,betweenstory_169,s_170,s_171,s_172,s_173,q_174,s_175,s_176,s_177,q_178,s_179,s_180,betweenstory_180,s_181,s_182,q_183,s_184,s_185,q_186,s_187,s_188,q_189,s_190,s_191,s_192,betweenstory_192,s_193,s_194,s_195,q_196,s_197,s_198,q_199,s_200,q_201,s_202,q_203,s_204,s_205,betweenstory_205,s_206,q_207,s_208,q_209,s_210,q_211,s_212,s_213,s_214,q_215,s_216,q_217,s_218,s_219,betweenstory_219,s_220,q_221,s_222,s_223,s_224,s_225,q_226,s_227,q_228,s_229,s_230,s_231,betweenstory_231,s_232,q_233,s_234,q_235,s_236,s_237,q_238,s_239,q_240,s_241,s_242,s_243,s_244,betweenstory_244,s_245,s_246,s_247,s_248,q_249,s_250,q_251,s_252,q_253,s_254,s_255,s_256,betweenstory_256,s_257,s_258,s_259,s_260,q_261,s_262,q_263,s_264,q_265,s_266,q_267,s_268,s_269,betweenstory_269,s_270,s_271,s_272,q_273,s_274,q_275,s_276,q_277,s_278,s_279,q_280,s_281,s_282,betweenstory_282,s_283,s_284,s_285,q_286,s_287,s_288,q_289,s_290,q_291,s_292,s_293,s_294,betweenstory_294,s_295,s_296,s_297,q_298,s_299,q_300,s_301,s_302,q_303,s_304,q_305,s_306,s_307,betweenstory_307,s_308,s_309,s_310,s_311,s_312,s_313,q_314,s_315,q_316,s_317,s_318,betweenstory_318,s_319,q_320,s_321,s_322,s_323,s_324,q_325,s_326,s_327,q_328,s_329,s_330,betweenstory_330,s_331,s_332,s_333,q_334,s_335,q_336,s_337,s_338,s_339,s_340,s_341,betweenstory_341,s_342,q_343,s_344,s_345,q_346,s_347,q_348,s_349,s_350,q_351,s_352,s_353,s_354,betweenstory_354,s_355,s_356,s_357,s_358,q_359,s_360,q_361,s_362,s_363,q_364,s_365,s_366,betweenstory_366,s_367,q_368,s_369,s_370,s_371,q_372,s_373,s_374,s_375,s_376,s_377,betweenstory_377,s_378,q_379,s_380,s_381,q_382,s_383,s_384,s_385,s_386,q_387,s_388,s_389,betweenstory_389,s_390,s_391,q_392,s_393,q_394,s_395,s_396,q_397,s_398,s_399,q_400,s_401,s_402,betweenstory_402,s_403,q_404,s_405,q_406,s_407,q_408,s_409,q_410,s_411,q_412,s_413,s_414,s_415,s_416,betweenstory_416,s_417,s_418,s_419,s_420,q_421,s_422,q_423,s_424,s_425,s_426,s_427,betweenstory_427,s_428,q_429,s_430,s_431,q_432,s_433,s_434,q_435,s_436,s_437,s_438,s_439,betweenstory_439,s_440,q_441,s_442,s_443,q_444,s_445,s_446,s_447,s_448,q_449,s_450,s_451,betweenstory_451,s_452,q_453,s_454,s_455,q_456,s_457,q_458,s_459,s_460,q_461,s_462,q_463,s_464,s_465,betweenstory_465,s_466,q_467,s_468,s_469,s_470,s_471,s_472,q_473,s_474,q_475,s_476,s_477,betweenstory_477,s_478,q_479,s_480,s_481,s_482,q_483,s_484,s_485,q_486,s_487,s_488,s_489,betweenstory_489,s_490,s_491,s_492,q_493,s_494,s_495,q_496,s_497,q_498,s_499,q_500,s_501,s_502,betweenstory_502,s_503,s_504,s_505,s_506,s_507,q_508,s_509,s_510,q_511,s_512,s_513,betweenstory_513,s_514,q_515,s_516,s_517,q_518,s_519,s_520,s_521,q_522,s_523,s_524,s_525,betweenstory_525,s_526,s_527,s_528,s_529,q_530,s_531,s_532,s_533,s_534,s_535,betweenstory_535,s_536,q_537,s_538,q_539,s_540,q_541,s_542,s_543,q_544,s_545,q_546,s_547,s_548,s_549,betweenstory_549,s_550,q_551,s_552,s_553,q_554,s_555,q_556,s_557,s_558,q_559,s_560,s_561,s_562,betweenstory_562,s_563,s_564,q_565,s_566,s_567,s_568,q_569,s_570,s_571,s_572,s_573,betweenstory_573,s_574,q_575,s_576,s_577,q_578,s_579,s_580,s_581,s_582,q_583,s_584,s_585,betweenstory_585,s_586,q_587,s_588,s_589,s_590,q_591,s_592,q_593,s_594,s_595,s_596,s_597,betweenstory_597,s_598,q_599,s_600,s_601,q_602,s_603,s_604,q_605,s_606,q_607,s_608,q_609,s_610,s_611,betweenstory_611,],

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