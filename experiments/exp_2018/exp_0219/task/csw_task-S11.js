

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
    

	var s_0 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_0_BEGIN' }
	} 
	var s_1 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_1_Stepfoot' }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_2_Sayexcuseme' }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_3_Shove' }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_4_Yell' }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_5_Creamsplash' }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_6_Baristaorders' }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_7_Hatecoffee' }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_8_END' }
	} 

    var betweenstory_9 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

    var questions_begin_10 = {
      type: 'instructions',
      pages: [' ** you will now begin to be probed with questions mid story ** ']
    } 

	var s_11 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_11_BEGIN' }
	} 
	var q_12 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_12_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_13_Cutline' }
	} 
	var q_14 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_14_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_15_Sayexcuseme' }
	} 
	var q_16 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_16_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_17_Subjectstares' }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_18_Yell' }
	} 
	var q_19 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_19_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_20_Creamsplash' }
	} 
	var q_21 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_21_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_22_Baristaorders' }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_23_Lovejuice' }
	} 
	var q_24 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_24_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_25 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_25_END' }
	} 

    var betweenstory_26 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_27 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_27_BEGIN' }
	} 
	var q_28 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_28_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_29_Stepfoot' }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_30_Sayexcuseme' }
	} 
	var q_31 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_31_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_10' }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_32_Shove' }
	} 
	var q_33 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_33_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_34_Yell' }
	} 
	var q_35 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_35_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_36_Creamsplash' }
	} 
	var q_37 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_37_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_38_Callpoliceman' }
	} 
	var q_39 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_39_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_40_Hatecoffee' }
	} 
	var q_41 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_41_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_42_END' }
	} 

    var betweenstory_43 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_44 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_44_BEGIN' }
	} 
	var q_45 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_45_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_46_Cutline' }
	} 
	var q_47 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_47_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_48_Sayexcuseme' }
	} 
	var q_49 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_49_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_50_Shove' }
	} 
	var q_51 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_51_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_52_Yell' }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_53_Creamsplash' }
	} 
	var q_54 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_54_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_55_Callpoliceman' }
	} 
	var q_56 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_56_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_57_Hatecoffee' }
	} 
	var q_58 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_58_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_59_END' }
	} 

    var betweenstory_60 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_61 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_61_BEGIN' }
	} 
	var q_62 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_62_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_63_Stepfoot' }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_64_Sayexcuseme' }
	} 
	var q_65 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_65_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_66_Shove' }
	} 
	var q_67 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_67_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_68_Yell' }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_69_Creamsplash' }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_70_Callpoliceman' }
	} 
	var q_71 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_71_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_72_Hatecoffee' }
	} 
	var q_73 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_73_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_74_END' }
	} 

    var betweenstory_75 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_76 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_76_BEGIN' }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_77_Stepfoot' }
	} 
	var q_78 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_78_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_79_Sayexcuseme' }
	} 
	var q_80 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_80_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_81_Shove' }
	} 
	var q_82 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Jesse pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_82_ShoveYell_ShoveXshove_20_victim.violent_01' }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_83_Yell' }
	} 
	var q_84 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_84_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_85_Creamsplash' }
	} 
	var q_86 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_86_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_87_Callpoliceman' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_88_Hatecoffee' }
	} 
	var q_89 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_89_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_90_END' }
	} 

    var betweenstory_91 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_92 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_92_BEGIN' }
	} 
	var q_93 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_93_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_94_Cutline' }
	} 
	var q_95 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_95_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_96_Cutback' }
	} 
	var q_97 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a coffee.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_97_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_98_Shove' }
	} 
	var q_99 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_99_ShoveYell_ShoveXshove_20_victim.violent_10' }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_100_Yell' }
	} 
	var q_101 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_101_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_102_Creamsplash' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_103_Callpoliceman' }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_104_Hatecoffee' }
	} 
	var q_105 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_105_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_106_END' }
	} 

    var betweenstory_107 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_108 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_108_BEGIN' }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_109_Stepfoot' }
	} 
	var q_110 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_110_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_111_Sayexcuseme' }
	} 
	var q_112 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Olivia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_112_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_113_Shove' }
	} 
	var q_114 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_114_ShoveXshove_ShoveYell_80_victim.violent_10' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_115_Xshove' }
	} 
	var q_116 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Jesse\'s head.', 'Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_116_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_10' }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_117_Dessertcrumble' }
	} 
	var q_118 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_118_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_119_Baristaorders' }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_120_Lovejuice' }
	} 
	var q_121 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_121_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_122_END' }
	} 

    var betweenstory_123 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_124 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_124_BEGIN' }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_125_Cutline' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_126_Cutback' }
	} 
	var q_127 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored her and proceeded to order a mocha.', 'Silvia proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_127_CutbackIgnore_CutbackShove_80_subject.violent_01' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_128_Ignore' }
	} 
	var q_129 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'Olivia stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_129_IgnoreXstare_IgnoreXshove_20_victim.violent_10' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_130_Xstare' }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_131_Dessertcrumble' }
	} 
	var q_132 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_132_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_133_Baristaorders' }
	} 
	var q_134 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_134_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_135_Lovejuice' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_136_END' }
	} 

    var betweenstory_137 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_138 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_138_BEGIN' }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_139_Cutline' }
	} 
	var q_140 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_140_CutlineCutback_CutlineSayexcuseme_20_victim.violent_10' }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_141_Cutback' }
	} 
	var q_142 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia ignored him and proceeded to order a latte.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_142_CutbackShove_CutbackIgnore_80_subject.violent_01' }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_143_Shove' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_144_Yell' }
	} 
	var q_145 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_145_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_146_Creamsplash' }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_147_Callpoliceman' }
	} 
	var q_148 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_148_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_149_Hatecoffee' }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_150_END' }
	} 

    var betweenstory_151 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_152 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_152_BEGIN' }
	} 
	var q_153 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_153_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_154_Stepfoot' }
	} 
	var q_155 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_155_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_156_Sayexcuseme' }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_157_Shove' }
	} 
	var q_158 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_158_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_159_Yell' }
	} 
	var q_160 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_160_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_161_Creamsplash' }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_162_Callpoliceman' }
	} 
	var q_163 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_163_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_164_Hatecoffee' }
	} 
	var q_165 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_165_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_166_END' }
	} 

    var betweenstory_167 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_168 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_168_BEGIN' }
	} 
	var q_169 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_169_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_170_Stepfoot' }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_171_Sayexcuseme' }
	} 
	var q_172 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_172_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_01' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_173_Shove' }
	} 
	var q_174 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_174_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_175_Xshove' }
	} 
	var q_176 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_176_XshoveCreamsplash_XshoveCreamsplash_100_permute_01' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_177_Creamsplash' }
	} 
	var q_178 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_178_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_179_Callpoliceman' }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_180_Hatecoffee' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_181_END' }
	} 

    var betweenstory_182 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_183 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_183_BEGIN' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_184_Cutline' }
	} 
	var q_185 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_185_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_186_Cutback' }
	} 
	var q_187 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored her and proceeded to order a latte.', 'Silvia proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_187_CutbackShove_CutbackIgnore_20_subject.violent_10' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_188_Shove' }
	} 
	var q_189 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'Olivia yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_189_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 's_190_Xshove' }
	} 
	var q_191 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_191_XshoveCreamsplash_XshoveCreamsplash_100_permute_10' }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_192_Creamsplash' }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_193_Callpoliceman' }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_194_Hatecoffee' }
	} 
	var q_195 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_195_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_196_END' }
	} 

    var betweenstory_197 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_198 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_198_BEGIN' }
	} 
	var q_199 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_199_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 's_200_Stepfoot' }
	} 
	var q_201 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_201_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_202_Sayexcuseme' }
	} 
	var q_203 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_203_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_204_Shove' }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_205_Yell' }
	} 
	var q_206 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_206_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_207_Creamsplash' }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_208_Callpoliceman' }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_209_Hatecoffee' }
	} 
	var q_210 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_210_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_211_END' }
	} 

    var betweenstory_212 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_213 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_213_BEGIN' }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_214_Cutline' }
	} 
	var q_215 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_215_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_216_Cutback' }
	} 
	var q_217 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a coffee.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_217_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_218_Shove' }
	} 
	var q_219 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_219_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_220_Xshove' }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_221_Dessertcrumble' }
	} 
	var q_222 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_222_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_223_Baristaorders' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_224_Lovejuice' }
	} 
	var q_225 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_225_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_226_END' }
	} 

    var betweenstory_227 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_228 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_228_BEGIN' }
	} 
	var q_229 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Jesse\'s foot.', 'Without hesitating he cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_229_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_230_Cutline' }
	} 
	var q_231 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_231_CutlineSayexcuseme_CutlineCutback_20_victim.violent_01' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_232_Sayexcuseme' }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_233_Subjectstares' }
	} 
	var q_234 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"', 'Jesse stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_234_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_01' }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_235_Yell' }
	} 
	var q_236 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_236_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_237_Creamsplash' }
	} 
	var q_238 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_238_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_239_Callpoliceman' }
	} 
	var q_240 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_240_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_241_Hatecoffee' }
	} 
	var q_242 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_242_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_243_END' }
	} 

    var betweenstory_244 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_245 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_245_BEGIN' }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_246_Cutline' }
	} 
	var q_247 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_247_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_248_Cutback' }
	} 
	var q_249 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben ignored her and proceeded to order a mocha.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_249_CutbackIgnore_CutbackShove_80_subject.violent_10' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Ben ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_250_Ignore' }
	} 
	var q_251 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_251_IgnoreXshove_IgnoreXstare_80_victim.violent_01' }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_252_Xshove' }
	} 
	var q_253 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_253_XshoveCreamsplash_XshoveCreamsplash_100_permute_01' }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_254_Creamsplash' }
	} 
	var q_255 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_255_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_256_Callpoliceman' }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_257_Lovejuice' }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_258_END' }
	} 

    var betweenstory_259 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_260 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_260_BEGIN' }
	} 
	var q_261 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_261_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_262_Cutline' }
	} 
	var q_263 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_263_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_264_Cutback' }
	} 
	var q_265 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a latte.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_265_CutbackShove_CutbackIgnore_80_subject.violent_01' }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_266_Shove' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_267_Yell' }
	} 
	var q_268 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_268_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_269_Creamsplash' }
	} 
	var q_270 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_270_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_271_Callpoliceman' }
	} 
	var q_272 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_272_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_273_Hatecoffee' }
	} 
	var q_274 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_274_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_275_END' }
	} 

    var betweenstory_276 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_277 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_277_BEGIN' }
	} 
	var q_278 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_278_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_279_Cutline' }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_280_Sayexcuseme' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_281_Shove' }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_282_Yell' }
	} 
	var q_283 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_283_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_284_Creamsplash' }
	} 
	var q_285 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_285_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_286_Callpoliceman' }
	} 
	var q_287 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_287_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_288_Hatecoffee' }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_289_END' }
	} 

    var betweenstory_290 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_291 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_291_BEGIN' }
	} 
	var q_292 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Silvia\'s foot.', 'Without hesitating she cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_292_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_293_Stepfoot' }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_294_Sayexcuseme' }
	} 
	var q_295 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Olivia turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_295_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_296_Shove' }
	} 
	var q_297 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_297_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_298_Yell' }
	} 
	var q_299 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_299_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_300_Creamsplash' }
	} 
	var q_301 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_301_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_302_Baristaorders' }
	} 
	var q_303 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_303_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_304_Lovejuice' }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_305_END' }
	} 

    var betweenstory_306 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_307 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_307_BEGIN' }
	} 
	var q_308 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_308_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_309_Stepfoot' }
	} 
	var q_310 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_310_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_311_Sayexcuseme' }
	} 
	var q_312 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_312_SayexcusemeSubjectstares_SayexcusemeShove_20_subject.violent_10' }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['Jesse turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_313_Subjectstares' }
	} 
	var q_314 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Jesse\'s eyes.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_314_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_10' }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_315_Yell' }
	} 
	var q_316 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_316_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_317_Creamsplash' }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_318_Callpoliceman' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_319_Hatecoffee' }
	} 
	var q_320 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_320_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_321_END' }
	} 

    var betweenstory_322 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_323 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_323_BEGIN' }
	} 
	var q_324 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_324_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_325_Cutline' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_326_Sayexcuseme' }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_327_Subjectstares' }
	} 
	var q_328 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_328_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_329_Xstare' }
	} 
	var q_330 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_330_XstareDessertcrumble_XstareDessertcrumble_100_permute_01' }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_331_Dessertcrumble' }
	} 
	var q_332 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_332_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_333_Baristaorders' }
	} 
	var q_334 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_334_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_335_Lovejuice' }
	} 
	var q_336 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_336_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_337_END' }
	} 

    var betweenstory_338 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_339 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_339_BEGIN' }
	} 
	var q_340 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_340_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_341_Stepfoot' }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_342_Sayexcuseme' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_343_Subjectstares' }
	} 
	var q_344 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_344_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_01' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_345_Yell' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_346_Creamsplash' }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_347_Baristaorders' }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_348_Lovejuice' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_349_END' }
	} 

    var betweenstory_350 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_351 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_351_BEGIN' }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_352_Stepfoot' }
	} 
	var q_353 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_353_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_354_Sayexcuseme' }
	} 
	var q_355 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Olivia turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_355_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_356_Shove' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_357_Yell' }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_358_Creamsplash' }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_359_Callpoliceman' }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_360_Lovejuice' }
	} 
	var q_361 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_361_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_362_END' }
	} 

    var betweenstory_363 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_364 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_364_BEGIN' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_365_Cutline' }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_366_Sayexcuseme' }
	} 
	var q_367 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_367_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_10' }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_368_Shove' }
	} 
	var q_369 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Ben\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_369_ShoveXshove_ShoveYell_80_victim.violent_10' }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_370_Xshove' }
	} 
	var q_371 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_371_XshoveCreamsplash_XshoveCreamsplash_100_permute_10' }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_372_Creamsplash' }
	} 
	var q_373 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Jesse, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_373_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_374_Callpoliceman' }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_375_Hatecoffee' }
	} 
	var q_376 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_376_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_377_END' }
	} 

    var betweenstory_378 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_379 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_379_BEGIN' }
	} 
	var q_380 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_380_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_381_Cutline' }
	} 
	var q_382 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_382_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_383_Sayexcuseme' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_384_Shove' }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_385_Yell' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_386_Creamsplash' }
	} 
	var q_387 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_387_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_388_Callpoliceman' }
	} 
	var q_389 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_389_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_390_Hatecoffee' }
	} 
	var q_391 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_391_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_392_END' }
	} 

    var betweenstory_393 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_394 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_394_BEGIN' }
	} 
	var q_395 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_395_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_396_Cutline' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_397_Sayexcuseme' }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_398_Subjectstares' }
	} 
	var q_399 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_399_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_01' }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_400_Yell' }
	} 
	var q_401 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_401_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_402_Creamsplash' }
	} 
	var q_403 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_403_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_01' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_404_Baristaorders' }
	} 
	var q_405 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_405_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_406_Lovejuice' }
	} 
	var q_407 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_407_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_408 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_408_END' }
	} 

    var betweenstory_409 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_410 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_410_BEGIN' }
	} 
	var q_411 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_411_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_412_Stepfoot' }
	} 
	var q_413 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_413_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_414_Sayexcuseme' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_415_Subjectstares' }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_416_Xstare' }
	} 
	var q_417 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Silvia\'s head.', 'Silvia snatched a cake and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_417_XstareDessertcrumble_XstareDessertcrumble_100_permute_01' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_418_Dessertcrumble' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_419_Baristaorders' }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_420_Hatecoffee' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_421_END' }
	} 

    var betweenstory_422 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_423 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_423_BEGIN' }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_424_Cutline' }
	} 
	var q_425 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Olivia.', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_425_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_426_Sayexcuseme' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_427_Shove' }
	} 
	var q_428 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Olivia.', 'Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_428_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_429_Yell' }
	} 
	var q_430 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_430_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_431_Creamsplash' }
	} 
	var q_432 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_432_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_433_Callpoliceman' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_434_Lovejuice' }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_435_END' }
	} 

    var betweenstory_436 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_437 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_437_BEGIN' }
	} 
	var q_438 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_438_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_439_Stepfoot' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_440_Sayexcuseme' }
	} 
	var q_441 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_441_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_442_Shove' }
	} 
	var q_443 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_443_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_444_Yell' }
	} 
	var q_445 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_445_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_446_Creamsplash' }
	} 
	var q_447 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_447_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_448_Callpoliceman' }
	} 
	var q_449 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_449_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_450_Hatecoffee' }
	} 
	var q_451 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_451_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_452_END' }
	} 

    var betweenstory_453 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_454 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_454_BEGIN' }
	} 
	var q_455 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_455_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_456_Cutline' }
	} 
	var q_457 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_457_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_458_Sayexcuseme' }
	} 
	var q_459 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_459_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_460_Shove' }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Olivia.'],
		data: { state_info: 's_461_Xshove' }
	} 
	var q_462 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Olivia\'s head.', 'Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_462_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_10' }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_463_Dessertcrumble' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_464_Baristaorders' }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_465_Lovejuice' }
	} 
	var q_466 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_466_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_467_END' }
	} 

    var betweenstory_468 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_469 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_469_BEGIN' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_470_Stepfoot' }
	} 
	var q_471 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_471_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_472_Sayexcuseme' }
	} 
	var q_473 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_473_SayexcusemeSubjectstares_SayexcusemeShove_20_subject.violent_01' }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_474_Subjectstares' }
	} 
	var q_475 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Olivia\'s eyes.', 'Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_475_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_10' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_476_Yell' }
	} 
	var q_477 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_477_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_478_Creamsplash' }
	} 
	var q_479 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_479_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_480_Callpoliceman' }
	} 
	var q_481 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_481_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_482_Hatecoffee' }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_483_END' }
	} 

    var betweenstory_484 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_485 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_485_BEGIN' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_486_Cutline' }
	} 
	var q_487 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_487_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_488_Cutback' }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_489_Shove' }
	} 
	var q_490 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_490_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_491_Xshove' }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_492_Dessertcrumble' }
	} 
	var q_493 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_493_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_494_Baristaorders' }
	} 
	var q_495 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_495_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_496_Lovejuice' }
	} 
	var q_497 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_497_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_498_END' }
	} 

    var betweenstory_499 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_500 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_500_BEGIN' }
	} 
	var q_501 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_501_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_502_Stepfoot' }
	} 
	var q_503 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_503_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_504_Sayexcuseme' }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_505_Shove' }
	} 
	var q_506 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Jesse.', 'Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_506_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_507_Yell' }
	} 
	var q_508 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_508_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_509_Creamsplash' }
	} 
	var q_510 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_510_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_511_Callpoliceman' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_512_Lovejuice' }
	} 
	var q_513 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_513_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_514_END' }
	} 

    var betweenstory_515 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_516 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_516_BEGIN' }
	} 
	var q_517 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_517_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_518_Cutline' }
	} 
	var q_519 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_519_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_520_Sayexcuseme' }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_521_Shove' }
	} 
	var q_522 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_522_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_523_Yell' }
	} 
	var q_524 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_524_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_525_Creamsplash' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_526_Baristaorders' }
	} 
	var q_527 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_527_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_528_Lovejuice' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_529_END' }
	} 

    var betweenstory_530 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_531 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_531_BEGIN' }
	} 
	var q_532 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_532_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_533_Cutline' }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_534_Cutback' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_535_Shove' }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_536_Yell' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_537_Creamsplash' }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_538_Callpoliceman' }
	} 
	var q_539 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_539_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_540_Hatecoffee' }
	} 
	var q_541 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_541_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_542_END' }
	} 

    var betweenstory_543 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_544 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_544_BEGIN' }
	} 
	var q_545 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_545_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_546_Stepfoot' }
	} 
	var q_547 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_547_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_548_Sayexcuseme' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_549_Subjectstares' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_550_Xstare' }
	} 
	var q_551 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a lemonsquare and crumbled it above Ben\'s head.', 'Ben snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_551_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_552_Dessertcrumble' }
	} 
	var q_553 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_553_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_554_Baristaorders' }
	} 
	var q_555 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_555_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_556_Lovejuice' }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_557_END' }
	} 

    var betweenstory_558 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_559 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_559_BEGIN' }
	} 
	var q_560 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_560_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_561_Cutline' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_562_Cutback' }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_563_Ignore' }
	} 
	var q_564 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'In retaliation, Jesse pushed Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_564_IgnoreXshove_IgnoreXstare_80_victim.violent_10' }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.'],
		data: { state_info: 's_565_Xshove' }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_566_Creamsplash' }
	} 
	var q_567 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_567_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_568_Callpoliceman' }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_569_Hatecoffee' }
	} 
	var q_570 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_570_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_571_END' }
	} 

    var betweenstory_572 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_573 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_573_BEGIN' }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_574_Stepfoot' }
	} 
	var q_575 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_575_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_576_Sayexcuseme' }
	} 
	var q_577 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_577_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_578_Subjectstares' }
	} 
	var q_579 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_579_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_01' }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_580_Xstare' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_581_Dessertcrumble' }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_582_Baristaorders' }
	} 
	var q_583 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_583_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_01' }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_584_Hatecoffee' }
	} 
	var q_585 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_585_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_586_END' }
	} 

    var betweenstory_587 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_588 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_588_BEGIN' }
	} 
	var q_589 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_589_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_590_Cutline' }
	} 
	var q_591 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Silvia.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_591_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_592_Sayexcuseme' }
	} 
	var q_593 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_593_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_594_Subjectstares' }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_595_Xstare' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_596_Dessertcrumble' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_597_Baristaorders' }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_598_Lovejuice' }
	} 
	var q_599 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_599_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_600_END' }
	} 

    var betweenstory_601 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_602 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_602_BEGIN' }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_603_Cutline' }
	} 
	var q_604 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_604_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_605_Sayexcuseme' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_606_Subjectstares' }
	} 
	var q_607 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_607_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_608_Xstare' }
	} 
	var q_609 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_609_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_610_Dessertcrumble' }
	} 
	var q_611 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_611_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_default_01' }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_612_Callpoliceman' }
	} 
	var q_613 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_613_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_614 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_614_Hatecoffee' }
	} 
	var q_615 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_615_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_616_END' }
	} 

    var betweenstory_617 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_618 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_618_BEGIN' }
	} 
	var q_619 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_619_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_620_Cutline' }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_621_Sayexcuseme' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_622_Shove' }
	} 
	var q_623 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_623_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_624_Yell' }
	} 
	var q_625 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_625_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_626_Creamsplash' }
	} 
	var q_627 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_627_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_628_Callpoliceman' }
	} 
	var q_629 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_629_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_01' }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_630_Lovejuice' }
	} 
	var q_631 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_631_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_632_END' }
	} 

    var betweenstory_633 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_634 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_634_BEGIN' }
	} 
	var q_635 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_635_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_636_Stepfoot' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_637_Sayexcuseme' }
	} 
	var q_638 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_638_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_639_Shove' }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_640_Xshove' }
	} 
	var q_641 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_641_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_10' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_642_Dessertcrumble' }
	} 
	var q_643 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_643_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_644_Baristaorders' }
	} 
	var q_645 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_645_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_646_Lovejuice' }
	} 
	var q_647 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_647_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_648_END' }
	} 

    var betweenstory_649 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_650 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_650_BEGIN' }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_651_Cutline' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_652_Sayexcuseme' }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_653_Shove' }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_654_Yell' }
	} 
	var q_655 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_655_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_656_Creamsplash' }
	} 
	var q_657 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_657_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_658_Callpoliceman' }
	} 
	var q_659 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_659_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_660_Hatecoffee' }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_661_END' }
	} 

    var betweenstory_662 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_663 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_663_BEGIN' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Jesse\'s foot.'],
		data: { state_info: 's_664_Stepfoot' }
	} 
	var q_665 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_665_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_666_Sayexcuseme' }
	} 
	var q_667 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Ben proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_667_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_668_Subjectstares' }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_669_Yell' }
	} 
	var q_670 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_670_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_671_Creamsplash' }
	} 
	var q_672 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_672_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_673_Callpoliceman' }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_674_Lovejuice' }
	} 
	var q_675 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_675_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_676_END' }
	} 

    var betweenstory_677 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_678 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_678_BEGIN' }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_679_Cutline' }
	} 
	var q_680 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Silvia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_680_CutlineSayexcuseme_CutlineCutback_20_victim.violent_10' }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_681_Sayexcuseme' }
	} 
	var q_682 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Jesse.', 'Silvia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_682_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ['Silvia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_683_Subjectstares' }
	} 
	var q_684 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'Jesse yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_684_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_10' }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_685_Yell' }
	} 
	var q_686 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_686_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_687_Creamsplash' }
	} 
	var q_688 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_688_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_689 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_689_Callpoliceman' }
	} 
	var q_690 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_690_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_691_Hatecoffee' }
	} 
	var q_692 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_692_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_693_END' }
	} 

    var betweenstory_694 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_695 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_695_BEGIN' }
	} 
	var q_696 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_696_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_697 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_697_Stepfoot' }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_698_Sayexcuseme' }
	} 
	var q_699 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_699_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_700 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_700_Subjectstares' }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_701_Xstare' }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_702_Dessertcrumble' }
	} 
	var q_703 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_703_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_default_10' }
	} 
	var s_704 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_704_Callpoliceman' }
	} 
	var q_705 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_705_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_706 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_706_Hatecoffee' }
	} 
	var q_707 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_707_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_708 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_708_END' }
	} 

    var betweenstory_709 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_710 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_710_BEGIN' }
	} 
	var q_711 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_711_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_712 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_712_Cutline' }
	} 
	var s_713 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_713_Cutback' }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_714_Ignore' }
	} 
	var q_715 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Silvia.', 'Jesse stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_715_IgnoreXshove_IgnoreXstare_80_victim.violent_01' }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.'],
		data: { state_info: 's_716_Xshove' }
	} 
	var q_717 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_717_XshoveCreamsplash_XshoveCreamsplash_100_permute_01' }
	} 
	var s_718 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_718_Creamsplash' }
	} 
	var s_719 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_719_Baristaorders' }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_720_Lovejuice' }
	} 
	var q_721 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_721_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_722 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_722_END' }
	} 

    var betweenstory_723 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_724 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_724_BEGIN' }
	} 
	var q_725 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_725_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_726 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_726_Stepfoot' }
	} 
	var q_727 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_727_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_728 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_728_Sayexcuseme' }
	} 
	var q_729 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Ben turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_729_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_730 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_730_Subjectstares' }
	} 
	var s_731 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_731_Xstare' }
	} 
	var s_732 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_732_Dessertcrumble' }
	} 
	var s_733 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_733_Baristaorders' }
	} 
	var q_734 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_734_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_10' }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_735_Hatecoffee' }
	} 
	var q_736 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_736_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_737 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_737_END' }
	} 

    var betweenstory_738 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_739 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_739_BEGIN' }
	} 
	var q_740 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_740_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_741 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_741_Cutline' }
	} 
	var q_742 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_742_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_743_Sayexcuseme' }
	} 
	var s_744 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_744_Shove' }
	} 
	var q_745 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_745_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_746 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_746_Yell' }
	} 
	var q_747 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_747_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_748 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_748_Creamsplash' }
	} 
	var q_749 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_749_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_01' }
	} 
	var s_750 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_750_Baristaorders' }
	} 
	var q_751 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_751_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_752 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_752_Lovejuice' }
	} 
	var q_753 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_753_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_754 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_754_END' }
	} 

    var betweenstory_755 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,questions_begin_10,s_11,q_12,s_13,q_14,s_15,q_16,s_17,s_18,q_19,s_20,q_21,s_22,s_23,q_24,s_25,
betweenstory_26,s_27,q_28,s_29,s_30,q_31,s_32,q_33,s_34,q_35,s_36,q_37,s_38,q_39,s_40,q_41,s_42,
betweenstory_43,s_44,q_45,s_46,q_47,s_48,q_49,s_50,q_51,s_52,s_53,q_54,s_55,q_56,s_57,q_58,s_59,
betweenstory_60,s_61,q_62,s_63,s_64,q_65,s_66,q_67,s_68,s_69,s_70,q_71,s_72,q_73,s_74,
betweenstory_75,s_76,s_77,q_78,s_79,q_80,s_81,q_82,s_83,q_84,s_85,q_86,s_87,s_88,q_89,s_90,
betweenstory_91,s_92,q_93,s_94,q_95,s_96,q_97,s_98,q_99,s_100,q_101,s_102,s_103,s_104,q_105,s_106,
betweenstory_107,s_108,s_109,q_110,s_111,q_112,s_113,q_114,s_115,q_116,s_117,q_118,s_119,s_120,q_121,s_122,
betweenstory_123,s_124,s_125,s_126,q_127,s_128,q_129,s_130,s_131,q_132,s_133,q_134,s_135,s_136,
betweenstory_137,s_138,s_139,q_140,s_141,q_142,s_143,s_144,q_145,s_146,s_147,q_148,s_149,s_150,
betweenstory_151,s_152,q_153,s_154,q_155,s_156,s_157,q_158,s_159,q_160,s_161,s_162,q_163,s_164,q_165,s_166,
betweenstory_167,s_168,q_169,s_170,s_171,q_172,s_173,q_174,s_175,q_176,s_177,q_178,s_179,s_180,s_181,
betweenstory_182,s_183,s_184,q_185,s_186,q_187,s_188,q_189,s_190,q_191,s_192,s_193,s_194,q_195,s_196,
betweenstory_197,s_198,q_199,s_200,q_201,s_202,q_203,s_204,s_205,q_206,s_207,s_208,s_209,q_210,s_211,
betweenstory_212,s_213,s_214,q_215,s_216,q_217,s_218,q_219,s_220,s_221,q_222,s_223,s_224,q_225,s_226,
betweenstory_227,s_228,q_229,s_230,q_231,s_232,s_233,q_234,s_235,q_236,s_237,q_238,s_239,q_240,s_241,q_242,s_243,
betweenstory_244,s_245,s_246,q_247,s_248,q_249,s_250,q_251,s_252,q_253,s_254,q_255,s_256,s_257,s_258,
betweenstory_259,s_260,q_261,s_262,q_263,s_264,q_265,s_266,s_267,q_268,s_269,q_270,s_271,q_272,s_273,q_274,s_275,
betweenstory_276,s_277,q_278,s_279,s_280,s_281,s_282,q_283,s_284,q_285,s_286,q_287,s_288,s_289,
betweenstory_290,s_291,q_292,s_293,s_294,q_295,s_296,q_297,s_298,q_299,s_300,q_301,s_302,q_303,s_304,s_305,
betweenstory_306,s_307,q_308,s_309,q_310,s_311,q_312,s_313,q_314,s_315,q_316,s_317,s_318,s_319,q_320,s_321,
betweenstory_322,s_323,q_324,s_325,s_326,s_327,q_328,s_329,q_330,s_331,q_332,s_333,q_334,s_335,q_336,s_337,
betweenstory_338,s_339,q_340,s_341,s_342,s_343,q_344,s_345,s_346,s_347,s_348,s_349,
betweenstory_350,s_351,s_352,q_353,s_354,q_355,s_356,s_357,s_358,s_359,s_360,q_361,s_362,
betweenstory_363,s_364,s_365,s_366,q_367,s_368,q_369,s_370,q_371,s_372,q_373,s_374,s_375,q_376,s_377,
betweenstory_378,s_379,q_380,s_381,q_382,s_383,s_384,s_385,s_386,q_387,s_388,q_389,s_390,q_391,s_392,
betweenstory_393,s_394,q_395,s_396,s_397,s_398,q_399,s_400,q_401,s_402,q_403,s_404,q_405,s_406,q_407,s_408,
betweenstory_409,s_410,q_411,s_412,q_413,s_414,s_415,s_416,q_417,s_418,s_419,s_420,s_421,
betweenstory_422,s_423,s_424,q_425,s_426,s_427,q_428,s_429,q_430,s_431,q_432,s_433,s_434,s_435,
betweenstory_436,s_437,q_438,s_439,s_440,q_441,s_442,q_443,s_444,q_445,s_446,q_447,s_448,q_449,s_450,q_451,s_452,
betweenstory_453,s_454,q_455,s_456,q_457,s_458,q_459,s_460,s_461,q_462,s_463,s_464,s_465,q_466,s_467,
betweenstory_468,s_469,s_470,q_471,s_472,q_473,s_474,q_475,s_476,q_477,s_478,q_479,s_480,q_481,s_482,s_483,
betweenstory_484,s_485,s_486,q_487,s_488,s_489,q_490,s_491,s_492,q_493,s_494,q_495,s_496,q_497,s_498,
betweenstory_499,s_500,q_501,s_502,q_503,s_504,s_505,q_506,s_507,q_508,s_509,q_510,s_511,s_512,q_513,s_514,
betweenstory_515,s_516,q_517,s_518,q_519,s_520,s_521,q_522,s_523,q_524,s_525,s_526,q_527,s_528,s_529,
betweenstory_530,s_531,q_532,s_533,s_534,s_535,s_536,s_537,s_538,q_539,s_540,q_541,s_542,
betweenstory_543,s_544,q_545,s_546,q_547,s_548,s_549,s_550,q_551,s_552,q_553,s_554,q_555,s_556,s_557,
betweenstory_558,s_559,q_560,s_561,s_562,s_563,q_564,s_565,s_566,q_567,s_568,s_569,q_570,s_571,
betweenstory_572,s_573,s_574,q_575,s_576,q_577,s_578,q_579,s_580,s_581,s_582,q_583,s_584,q_585,s_586,
betweenstory_587,s_588,q_589,s_590,q_591,s_592,q_593,s_594,s_595,s_596,s_597,s_598,q_599,s_600,
betweenstory_601,s_602,s_603,q_604,s_605,s_606,q_607,s_608,q_609,s_610,q_611,s_612,q_613,s_614,q_615,s_616,
betweenstory_617,s_618,q_619,s_620,s_621,s_622,q_623,s_624,q_625,s_626,q_627,s_628,q_629,s_630,q_631,s_632,
betweenstory_633,s_634,q_635,s_636,s_637,q_638,s_639,s_640,q_641,s_642,q_643,s_644,q_645,s_646,q_647,s_648,
betweenstory_649,s_650,s_651,s_652,s_653,s_654,q_655,s_656,q_657,s_658,q_659,s_660,s_661,
betweenstory_662,s_663,s_664,q_665,s_666,q_667,s_668,s_669,q_670,s_671,q_672,s_673,s_674,q_675,s_676,
betweenstory_677,s_678,s_679,q_680,s_681,q_682,s_683,q_684,s_685,q_686,s_687,q_688,s_689,q_690,s_691,q_692,s_693,
betweenstory_694,s_695,q_696,s_697,s_698,q_699,s_700,s_701,s_702,q_703,s_704,q_705,s_706,q_707,s_708,
betweenstory_709,s_710,q_711,s_712,s_713,s_714,q_715,s_716,q_717,s_718,s_719,s_720,q_721,s_722,
betweenstory_723,s_724,q_725,s_726,q_727,s_728,q_729,s_730,s_731,s_732,s_733,q_734,s_735,q_736,s_737,
betweenstory_738,s_739,q_740,s_741,q_742,s_743,s_744,q_745,s_746,q_747,s_748,q_749,s_750,q_751,s_752,q_753,s_754,
betweenstory_755,],

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

