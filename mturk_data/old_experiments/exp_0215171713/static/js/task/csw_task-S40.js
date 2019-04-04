

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
		pages: ['Without hesitating he cut Nick, the first person in line.'],
		data: { state_info: 's_1_Cutline' }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Ben.'],
		data: { state_info: 's_2_Stepinfront' }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ['Ben turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_3_Subjectstares' }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ['Nick simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_4_Sayrelax' }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_5_Creamsplash' }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_6_Callpoliceman' }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_7_Hatecoffee' }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
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
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_11_BEGIN' }
	} 
	var q_12 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_12_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_13_Cutline' }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Silvia.'],
		data: { state_info: 's_14_Stepinfront' }
	} 
	var q_15 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored him and proceeded to order a coffee.', 'Silvia turned to Nick and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_15_StepinfrontIgnore_StepinfrontSubjectstares_16_Default_01' }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_16_Ignore' }
	} 
	var q_17 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick simply said to Silvia, \"Hey! Relax.\"', 'Nick stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_17_IgnoreXstare_IgnoreSayrelax_66_Default_10' }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_18_Xstare' }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_19_Creamsplash' }
	} 
	var q_20 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_20_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_21_Callpoliceman' }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_22_Lovejuice' }
	} 
	var q_23 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_23_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_24_END' }
	} 

    var betweenstory_25 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_26 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_26_BEGIN' }
	} 
	var q_27 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_27_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_28_Cutline' }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_29_Stepinfront' }
	} 
	var q_30 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Ben turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_30_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_31_Subjectstares' }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_32_Xshove' }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_33_Creamsplash' }
	} 
	var q_34 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_34_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_35_Callpoliceman' }
	} 
	var q_36 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_36_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_37_Hatecoffee' }
	} 
	var q_38 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_38_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_39_END' }
	} 

    var betweenstory_40 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_41 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_41_BEGIN' }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_42_Cutline' }
	} 
	var q_43 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_43_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_44_Sayexcuseme' }
	} 
	var q_45 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_45_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_46_Shove' }
	} 
	var q_47 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_47_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_48_Xshove' }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_49_Dessertcrumble' }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_50_Callpoliceman' }
	} 
	var q_51 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_51_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_52_Hatecoffee' }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_53_END' }
	} 

    var betweenstory_54 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_55 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_55_BEGIN' }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_56_Cutline' }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Olivia.'],
		data: { state_info: 's_57_Stepinfront' }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_58_Subjectstares' }
	} 
	var q_59 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stared with rage into Olivia\'s eyes.', 'In retaliation, Vera pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_59_SubjectstaresXstare_SubjectstaresXshove_25_Default_01' }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_60_Xstare' }
	} 
	var q_61 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.', 'Olivia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_61_XstareCreamsplash_XstareDessertcrumble_90_Default_01' }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 's_62_Creamsplash' }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_63_Callpoliceman' }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_64_Hatecoffee' }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_65_END' }
	} 

    var betweenstory_66 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_67 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_67_BEGIN' }
	} 
	var q_68 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Jesse\'s foot.', 'Without hesitating he cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_68_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_69_Cutline' }
	} 
	var q_70 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_70_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_71_Sayexcuseme' }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_72_Subjectstares' }
	} 
	var q_73 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Nick, \"Hey! Relax.\"', 'In retaliation, Jesse pushed Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_73_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_74_Sayrelax' }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_75_Creamsplash' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_76_Baristaorders' }
	} 
	var q_77 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_77_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_78_Lovejuice' }
	} 
	var q_79 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_79_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_80_END' }
	} 

    var betweenstory_81 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_82 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_82_BEGIN' }
	} 
	var q_83 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_83_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_84_Cutline' }
	} 
	var q_85 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_85_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_86_Sayexcuseme' }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_87_Subjectstares' }
	} 
	var q_88 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Jesse, \"Hey! Relax.\"', 'In retaliation, Ben pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_88_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_89_Sayrelax' }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_90_Creamsplash' }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_91_Baristaorders' }
	} 
	var q_92 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_92_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_93_Lovejuice' }
	} 
	var q_94 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_94_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_95_END' }
	} 

    var betweenstory_96 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_97 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_97_BEGIN' }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_98_Cutline' }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_99_Stepinfront' }
	} 
	var q_100 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_100_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_101_Shove' }
	} 
	var q_102 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_102_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_103_Xshove' }
	} 
	var q_104 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Olivia\'s head.', 'Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_104_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_105_Dessertcrumble' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_106_Callpoliceman' }
	} 
	var q_107 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_107_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_108_Hatecoffee' }
	} 
	var q_109 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_109_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_110_END' }
	} 

    var betweenstory_111 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_112 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_112_BEGIN' }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_113_Cutline' }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_114_Stepinfront' }
	} 
	var q_115 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Ben and gave him a very mean look.', 'Nick proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_115_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_116_Subjectstares' }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_117_Sayrelax' }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_118_Creamsplash' }
	} 
	var q_119 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_119_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_120_Callpoliceman' }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_121_Lovejuice' }
	} 
	var q_122 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_122_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_123_END' }
	} 

    var betweenstory_124 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_125 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_125_BEGIN' }
	} 
	var q_126 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_126_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_127_Cutline' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_128_Sayexcuseme' }
	} 
	var q_129 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Vera and gave her a very mean look.', 'Ben proceeded to give a slight shove to Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_129_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_130_Subjectstares' }
	} 
	var q_131 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Ben.', 'Vera simply said to Ben, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_131_SubjectstaresXshove_SubjectstaresSayrelax_33_Default_01' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_132_Xshove' }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_133_Dessertcrumble' }
	} 
	var q_134 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_134_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_10' }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_135_Callpoliceman' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_136_Lovejuice' }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_137_END' }
	} 

    var betweenstory_138 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_139 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_139_BEGIN' }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_140_Cutline' }
	} 
	var q_141 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Vera.', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_141_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_142_Stepinfront' }
	} 
	var q_143 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Vera.', 'Vera proceeded to give a slight shove to Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_143_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Vera proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_144_Shove' }
	} 
	var q_145 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stared with rage into Nick\'s eyes.', 'Nick stared with rage into Vera\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_145_ShoveXstare_ShoveXstare_100_Permute_10' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_146_Xstare' }
	} 
	var q_147 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a cookie and crumbled it above Nick\'s head.', 'Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_147_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_148_Creamsplash' }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_149_Callpoliceman' }
	} 
	var q_150 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_150_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_151_Lovejuice' }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_152_END' }
	} 

    var betweenstory_153 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_154 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_154_BEGIN' }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_155_Stepfoot' }
	} 
	var q_156 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_156_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_157_Sayexcuseme' }
	} 
	var q_158 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Vera and gave her a very mean look.', 'Vera turned to Nick and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_158_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_159_Subjectstares' }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_160_Sayrelax' }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_161_Dessertcrumble' }
	} 
	var q_162 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_162_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_163_Baristaorders' }
	} 
	var q_164 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_164_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_165_Lovejuice' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_166_END' }
	} 

    var betweenstory_167 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_168 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_168_BEGIN' }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_169_Cutline' }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_170_Stepinfront' }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_171_Subjectstares' }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_172_Sayrelax' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_173_Dessertcrumble' }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_174_Callpoliceman' }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_175_Lovejuice' }
	} 
	var q_176 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_176_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_177_END' }
	} 

    var betweenstory_178 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_179 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_179_BEGIN' }
	} 
	var q_180 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_180_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_181_Stepfoot' }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_182_Sayexcuseme' }
	} 
	var q_183 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_183_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_184_Subjectstares' }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_185_Sayrelax' }
	} 
	var q_186 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Ben\'s head.', 'Ben snatched a cake and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_186_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_187_Dessertcrumble' }
	} 
	var q_188 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_188_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_189_Baristaorders' }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_190_Lovejuice' }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_191_END' }
	} 

    var betweenstory_192 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_193 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_193_BEGIN' }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_194_Cutline' }
	} 
	var q_195 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_195_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_196_Stepinfront' }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_197_Shove' }
	} 
	var q_198 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Silvia, \"Hey! Relax.\"', 'In retaliation, Ben pushed Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_198_ShoveXshove_ShoveSayrelax_85_Default_10' }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_199_Xshove' }
	} 
	var q_200 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Silvia snatched a cake and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_200_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_201_Dessertcrumble' }
	} 
	var q_202 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_202_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_203_Baristaorders' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_204_Hatecoffee' }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_205_END' }
	} 

    var betweenstory_206 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_207 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_207_BEGIN' }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_208_Cutline' }
	} 
	var q_209 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_209_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_210_Sayexcuseme' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_211_Subjectstares' }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_212_Sayrelax' }
	} 
	var q_213 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Nick snatched a cookie and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_213_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_214_Creamsplash' }
	} 
	var q_215 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_215_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_216_Callpoliceman' }
	} 
	var q_217 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_217_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_218_Lovejuice' }
	} 
	var q_219 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_219_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_220_END' }
	} 

    var betweenstory_221 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_222 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_222_BEGIN' }
	} 
	var q_223 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_223_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_224_Cutline' }
	} 
	var q_225 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_225_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_226_Sayexcuseme' }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_227_Shove' }
	} 
	var q_228 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Ben\'s eyes.', 'In retaliation, Olivia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_228_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_229_Xshove' }
	} 
	var q_230 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.', 'Olivia snatched a lemonsquare and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_230_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_231_Dessertcrumble' }
	} 
	var q_232 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_232_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_233_Callpoliceman' }
	} 
	var q_234 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_234_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_235_Hatecoffee' }
	} 
	var q_236 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_236_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_237_END' }
	} 

    var betweenstory_238 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_239 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_239_BEGIN' }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_240_Cutline' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_241_Stepinfront' }
	} 
	var q_242 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_242_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_243_Shove' }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_244_Sayrelax' }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_245_Creamsplash' }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_246_Callpoliceman' }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_247_Hatecoffee' }
	} 
	var q_248 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_248_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_249_END' }
	} 

    var betweenstory_250 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_251 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_251_BEGIN' }
	} 
	var q_252 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_252_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_253_Stepfoot' }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_254_Sayexcuseme' }
	} 
	var q_255 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Ben turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_255_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_256_Subjectstares' }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_257_Sayrelax' }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_258_Creamsplash' }
	} 
	var q_259 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_259_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_260_Baristaorders' }
	} 
	var q_261 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_261_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_262_Lovejuice' }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_263_END' }
	} 

    var betweenstory_264 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_265 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_265_BEGIN' }
	} 
	var q_266 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_266_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_267_Cutline' }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_268_Stepinfront' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_269_Shove' }
	} 
	var q_270 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_270_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_271_Xshove' }
	} 
	var q_272 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.', 'Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_272_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_273_Dessertcrumble' }
	} 
	var q_274 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_274_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_275_Baristaorders' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_276_Lovejuice' }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_277_END' }
	} 

    var betweenstory_278 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_279 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_279_BEGIN' }
	} 
	var q_280 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_280_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_281_Cutline' }
	} 
	var q_282 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_282_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_283_Sayexcuseme' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_284_Shove' }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_285_Xshove' }
	} 
	var q_286 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.', 'Jesse picked up a small cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_286_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_287_Dessertcrumble' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_288_Baristaorders' }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_289_Lovejuice' }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_290_END' }
	} 

    var betweenstory_291 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_292 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_292_BEGIN' }
	} 
	var q_293 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Nick\'s foot.', 'Without hesitating she cut Nick, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_293_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_294_Cutline' }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_295_Stepinfront' }
	} 
	var q_296 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Nick.', 'Nick proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_296_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_297_Shove' }
	} 
	var q_298 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Olivia\'s eyes.', 'In retaliation, Nick pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_298_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_299_Xshove' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_300_Dessertcrumble' }
	} 
	var q_301 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_301_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_302_Baristaorders' }
	} 
	var q_303 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_303_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_01' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_304_Hatecoffee' }
	} 
	var q_305 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_305_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_306_END' }
	} 

    var betweenstory_307 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_308 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_308_BEGIN' }
	} 
	var q_309 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_309_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_310_Stepfoot' }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_311_Sayexcuseme' }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_312_Shove' }
	} 
	var q_313 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Jesse\'s eyes.', 'Jesse stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_313_ShoveXstare_ShoveXstare_100_Permute_01' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_314_Xstare' }
	} 
	var q_315 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_315_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_316_Creamsplash' }
	} 
	var q_317 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_317_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
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
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_320_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
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
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_324_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_325_Cutline' }
	} 
	var q_326 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_326_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_327_Sayexcuseme' }
	} 
	var q_328 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Silvia turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_328_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_329_Subjectstares' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_330_Sayrelax' }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_331_Creamsplash' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_332_Callpoliceman' }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_333_Hatecoffee' }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_334_END' }
	} 

    var betweenstory_335 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_336 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_336_BEGIN' }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_337_Stepfoot' }
	} 
	var q_338 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_338_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_339_Sayexcuseme' }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_340_Ignore' }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_341_Sayrelax' }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_342_Dessertcrumble' }
	} 
	var q_343 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_343_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_344_Baristaorders' }
	} 
	var q_345 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_345_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_346_Lovejuice' }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_347_END' }
	} 

    var betweenstory_348 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_349 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_349_BEGIN' }
	} 
	var q_350 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Jesse\'s foot.', 'Without hesitating he cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_350_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_351_Cutline' }
	} 
	var q_352 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Nick.', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_352_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_353_Stepinfront' }
	} 
	var q_354 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Jesse and gave him a very mean look.', 'Nick ignored him and proceeded to order a latte.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_354_StepinfrontIgnore_StepinfrontSubjectstares_16_Default_10' }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_355_Ignore' }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_356_Sayrelax' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_357_Dessertcrumble' }
	} 
	var q_358 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_358_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_359_Baristaorders' }
	} 
	var q_360 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_360_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_361_Lovejuice' }
	} 
	var q_362 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_362_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_363_END' }
	} 

    var betweenstory_364 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_365 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_365_BEGIN' }
	} 
	var q_366 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_366_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_367_Cutline' }
	} 
	var q_368 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_368_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_369_Stepinfront' }
	} 
	var q_370 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Silvia and gave her a very mean look.', 'Nick proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_370_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_371_Subjectstares' }
	} 
	var q_372 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Nick, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_372_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_373_Sayrelax' }
	} 
	var q_374 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a lemonsquare and crumbled it above Silvia\'s head.', 'Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_374_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_375_Creamsplash' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_376_Callpoliceman' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_377_Hatecoffee' }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_378_END' }
	} 

    var betweenstory_379 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_380 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_380_BEGIN' }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_381_Cutline' }
	} 
	var q_382 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_382_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_383_Sayexcuseme' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_384_Ignore' }
	} 
	var q_385 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Jesse, \"Hey! Relax.\"', 'Jesse simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_385_IgnoreSayrelax_IgnoreSayrelax_100_Permute_01' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_386_Sayrelax' }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_387_Creamsplash' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_388_Callpoliceman' }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_389_Lovejuice' }
	} 
	var q_390 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_390_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_391_END' }
	} 

    var betweenstory_392 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_393 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_393_BEGIN' }
	} 
	var q_394 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_394_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_395_Cutline' }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_396_Sayexcuseme' }
	} 
	var q_397 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a mocha.', 'Olivia turned to Nick and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_397_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_10' }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_398_Subjectstares' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_399_Sayrelax' }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_400_Creamsplash' }
	} 
	var q_401 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_401_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_402_Callpoliceman' }
	} 
	var q_403 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_403_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_404_Lovejuice' }
	} 
	var q_405 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_405_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_406_END' }
	} 

    var betweenstory_407 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_408 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_408_BEGIN' }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_409_Cutline' }
	} 
	var q_410 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_410_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_411_Sayexcuseme' }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_412_Subjectstares' }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_413_Sayrelax' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_414_Creamsplash' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_415_Baristaorders' }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_416_Hatecoffee' }
	} 
	var q_417 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_417_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_418_END' }
	} 

    var betweenstory_419 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_420 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_420_BEGIN' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_421_Stepfoot' }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_422_Sayexcuseme' }
	} 
	var q_423 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Vera.', 'Olivia turned to Vera and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_423_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_01' }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_424_Shove' }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_425_Xshove' }
	} 
	var q_426 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cookie and crumbled it above Vera\'s head.', 'Vera snatched a cookie and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_426_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_427_Dessertcrumble' }
	} 
	var q_428 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_428_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_429_Baristaorders' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_430_Lovejuice' }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_431_END' }
	} 

    var betweenstory_432 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_433 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_433_BEGIN' }
	} 
	var q_434 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_434_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_435_Cutline' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_436_Sayexcuseme' }
	} 
	var q_437 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben ignored her and proceeded to order a coffee.', 'Ben turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_437_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_10' }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_438_Subjectstares' }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_439_Xshove' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_440_Dessertcrumble' }
	} 
	var q_441 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_441_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_442_Baristaorders' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_443_Lovejuice' }
	} 
	var q_444 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_444_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_445_END' }
	} 

    var betweenstory_446 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_447 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_447_BEGIN' }
	} 
	var q_448 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_448_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_449_Cutline' }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_450_Stepinfront' }
	} 
	var q_451 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Olivia and gave her a very mean look.', 'Olivia turned to Nick and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_451_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_452_Subjectstares' }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_453_Xstare' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_454_Creamsplash' }
	} 
	var q_455 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_455_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_456_Callpoliceman' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_457_Lovejuice' }
	} 
	var q_458 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_458_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_459_END' }
	} 

    var betweenstory_460 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_461 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_461_BEGIN' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_462_Cutline' }
	} 
	var q_463 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Vera.', 'Vera promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_463_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 's_464_Stepinfront' }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_465_Subjectstares' }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_466_Xshove' }
	} 
	var q_467 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Jesse\'s face.', 'Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_467_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_468_Dessertcrumble' }
	} 
	var q_469 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'Nick, the police officer, ordered Vera to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_469_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_470_Baristaorders' }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_471_Lovejuice' }
	} 
	var q_472 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_472_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_473_END' }
	} 

    var betweenstory_474 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_475 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_475_BEGIN' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_476_Cutline' }
	} 
	var q_477 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Vera.', 'Vera promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_477_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_478_Stepinfront' }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_479_Subjectstares' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_480_Sayrelax' }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_481_Dessertcrumble' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_482_Baristaorders' }
	} 
	var q_483 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_483_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_484_Lovejuice' }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_485_END' }
	} 

    var betweenstory_486 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_487 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_487_BEGIN' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_488_Stepfoot' }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_489_Sayexcuseme' }
	} 
	var q_490 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Vera and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_490_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_491_Shove' }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_492_Xstare' }
	} 
	var q_493 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_493_XstareDessertcrumble_XstareDessertcrumble_100_Permute_10' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_494_Dessertcrumble' }
	} 
	var q_495 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_495_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_496_Baristaorders' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_497_Lovejuice' }
	} 
	var q_498 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_498_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_499_END' }
	} 

    var betweenstory_500 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_501 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_501_BEGIN' }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_502_Cutline' }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_503_Stepinfront' }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_504_Subjectstares' }
	} 
	var q_505 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_505_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_506_Sayrelax' }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_507_Creamsplash' }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_508_Callpoliceman' }
	} 
	var q_509 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_509_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_510_Lovejuice' }
	} 
	var q_511 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_511_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_512_END' }
	} 

    var betweenstory_513 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_514 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_514_BEGIN' }
	} 
	var q_515 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_515_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_516_Cutline' }
	} 
	var q_517 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Ben.', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_517_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_518_Stepinfront' }
	} 
	var q_519 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_519_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_520_Shove' }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_521_Xstare' }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_522_Creamsplash' }
	} 
	var q_523 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_523_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_524_Baristaorders' }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_525_Lovejuice' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_526_END' }
	} 

    var betweenstory_527 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_528 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_528_BEGIN' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_529_Cutline' }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_530_Stepinfront' }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_531_Subjectstares' }
	} 
	var q_532 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick simply said to Olivia, \"Hey! Relax.\"', 'Nick stared with rage into Olivia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_532_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_533_Sayrelax' }
	} 
	var q_534 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Nick\'s head.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_534_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_535_Creamsplash' }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_536_Callpoliceman' }
	} 
	var q_537 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_537_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_538_Hatecoffee' }
	} 
	var q_539 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_539_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_540_END' }
	} 

    var betweenstory_541 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_542 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_542_BEGIN' }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_543_Cutline' }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_544_Sayexcuseme' }
	} 
	var q_545 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Ben and gave him a very mean look.', 'Nick proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_545_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_546_Subjectstares' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_547_Sayrelax' }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_548_Creamsplash' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_549_Callpoliceman' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_550_Hatecoffee' }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_551_END' }
	} 

    var betweenstory_552 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_553 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_553_BEGIN' }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_554_Cutline' }
	} 
	var q_555 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_555_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_556_Stepinfront' }
	} 
	var q_557 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Ben turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_557_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_558_Subjectstares' }
	} 
	var q_559 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_559_SubjectstaresXshove_SubjectstaresXstare_74_Default_01' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_560_Xshove' }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_561_Dessertcrumble' }
	} 
	var q_562 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_562_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_563_Baristaorders' }
	} 
	var q_564 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_564_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_565_Lovejuice' }
	} 
	var q_566 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_566_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_567_END' }
	} 

    var betweenstory_568 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_569 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_569_BEGIN' }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_570_Cutline' }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_571_Stepinfront' }
	} 
	var q_572 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Silvia and gave her a very mean look.', 'Silvia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_572_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_573_Subjectstares' }
	} 
	var q_574 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Jesse, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_574_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_575_Sayrelax' }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_576_Creamsplash' }
	} 
	var q_577 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Vera, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_577_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_01' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_578_Baristaorders' }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_579_Lovejuice' }
	} 
	var q_580 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_580_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_581_END' }
	} 

    var betweenstory_582 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_583 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_583_BEGIN' }
	} 
	var q_584 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_584_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_585_Cutline' }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_586_Stepinfront' }
	} 
	var q_587 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_587_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_588_Shove' }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_589_Xshove' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_590_Dessertcrumble' }
	} 
	var q_591 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_591_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_592_Baristaorders' }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_593_Lovejuice' }
	} 
	var q_594 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_594_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_595_END' }
	} 

    var betweenstory_596 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_597 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_597_BEGIN' }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_598_Stepfoot' }
	} 
	var q_599 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_599_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_600_Sayexcuseme' }
	} 
	var q_601 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Vera and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_601_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_602_Subjectstares' }
	} 
	var q_603 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Olivia.', 'Vera simply said to Olivia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_603_SubjectstaresXshove_SubjectstaresSayrelax_33_Default_01' }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_604_Xshove' }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_605_Dessertcrumble' }
	} 
	var q_606 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_606_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_607_Baristaorders' }
	} 
	var q_608 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_608_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_609_Hatecoffee' }
	} 
	var q_610 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_610_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_611_END' }
	} 

    var betweenstory_612 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_613 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_613_BEGIN' }
	} 
	var s_614 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_614_Cutline' }
	} 
	var q_615 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_615_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_616_Stepinfront' }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_617_Subjectstares' }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_618_Sayrelax' }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_619_Dessertcrumble' }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_620_Baristaorders' }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_621_Lovejuice' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_622_END' }
	} 

    var betweenstory_623 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_624 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_624_BEGIN' }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_625_Stepfoot' }
	} 
	var q_626 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_626_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_627_Sayexcuseme' }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_628_Shove' }
	} 
	var q_629 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Ben\'s eyes.', 'In retaliation, Nick pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_629_ShoveXstare_ShoveXshove_33_Default_01' }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_630_Xstare' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_631_Creamsplash' }
	} 
	var q_632 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_632_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_633_Callpoliceman' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_634_Hatecoffee' }
	} 
	var q_635 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_635_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_636_END' }
	} 

    var betweenstory_637 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_638 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_638_BEGIN' }
	} 
	var q_639 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Vera, the first person in line.', 'Clumsily, he stepped on Vera\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_639_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_640_Cutline' }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_641_Sayexcuseme' }
	} 
	var q_642 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Vera and gave her a very mean look.', 'Nick proceeded to give a slight shove to Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_642_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_643 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_643_Shove' }
	} 
	var q_644 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Nick pushed Vera.', 'In retaliation, Vera pushed Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_644_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_645_Xshove' }
	} 
	var q_646 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Vera\'s face.', 'Nick snatched a cookie and crumbled it above Vera\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_646_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_647_Dessertcrumble' }
	} 
	var q_648 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_648_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_649_Baristaorders' }
	} 
	var q_650 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_650_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_651_Lovejuice' }
	} 
	var q_652 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_652_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_653_END' }
	} 

    var betweenstory_654 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_655 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_655_BEGIN' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_656_Cutline' }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_657_Sayexcuseme' }
	} 
	var q_658 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Jesse and gave him a very mean look.', 'Jesse turned to Vera and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_658_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_659_Subjectstares' }
	} 
	var q_660 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Jesse.', 'Vera simply said to Jesse, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_660_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_661_Sayrelax' }
	} 
	var q_662 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Vera\'s head.', 'Vera snatched a cake and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_662_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_663_Dessertcrumble' }
	} 
	var q_664 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_664_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_665_Baristaorders' }
	} 
	var q_666 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_666_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_10' }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_667_Hatecoffee' }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_668_END' }
	} 

    var betweenstory_669 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_670 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_670_BEGIN' }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_671_Cutline' }
	} 
	var q_672 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_672_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_673_Stepinfront' }
	} 
	var q_674 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored him and proceeded to order a mocha.', 'Silvia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_674_StepinfrontIgnore_StepinfrontSubjectstares_16_Default_01' }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_675_Ignore' }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_676_Sayrelax' }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_677_Dessertcrumble' }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_678_Callpoliceman' }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_679_Hatecoffee' }
	} 
	var q_680 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_680_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_681_END' }
	} 

    var betweenstory_682 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_683 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_683_BEGIN' }
	} 
	var q_684 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_684_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_685_Cutline' }
	} 
	var s_686 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_686_Sayexcuseme' }
	} 
	var q_687 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera ignored her and proceeded to order a coffee.', 'Olivia ignored her and proceeded to order a coffee.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_687_SayexcusemeIgnore_SayexcusemeIgnore_100_Alter_01' }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_688_Ignore' }
	} 
	var q_689 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Vera, \"Hey! Relax.\"', 'Olivia stared with rage into Vera\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_689_IgnoreXstare_IgnoreSayrelax_66_Default_10' }
	} 
	var s_690 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_690_Xstare' }
	} 
	var q_691 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.', 'Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_691_XstareCreamsplash_XstareCreamsplash_100_Permute_10' }
	} 
	var s_692 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_692_Creamsplash' }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_693_Callpoliceman' }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_694_Lovejuice' }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_695_END' }
	} 

    var betweenstory_696 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,questions_begin_10,s_11,q_12,s_13,s_14,q_15,s_16,q_17,s_18,s_19,q_20,s_21,s_22,q_23,s_24,
betweenstory_25,s_26,q_27,s_28,s_29,q_30,s_31,s_32,s_33,q_34,s_35,q_36,s_37,q_38,s_39,
betweenstory_40,s_41,s_42,q_43,s_44,q_45,s_46,q_47,s_48,s_49,s_50,q_51,s_52,s_53,
betweenstory_54,s_55,s_56,s_57,s_58,q_59,s_60,q_61,s_62,s_63,s_64,s_65,
betweenstory_66,s_67,q_68,s_69,q_70,s_71,s_72,q_73,s_74,s_75,s_76,q_77,s_78,q_79,s_80,
betweenstory_81,s_82,q_83,s_84,q_85,s_86,s_87,q_88,s_89,s_90,s_91,q_92,s_93,q_94,s_95,
betweenstory_96,s_97,s_98,s_99,q_100,s_101,q_102,s_103,q_104,s_105,s_106,q_107,s_108,q_109,s_110,
betweenstory_111,s_112,s_113,s_114,q_115,s_116,s_117,s_118,q_119,s_120,s_121,q_122,s_123,
betweenstory_124,s_125,q_126,s_127,s_128,q_129,s_130,q_131,s_132,s_133,q_134,s_135,s_136,s_137,
betweenstory_138,s_139,s_140,q_141,s_142,q_143,s_144,q_145,s_146,q_147,s_148,s_149,q_150,s_151,s_152,
betweenstory_153,s_154,s_155,q_156,s_157,q_158,s_159,s_160,s_161,q_162,s_163,q_164,s_165,s_166,
betweenstory_167,s_168,s_169,s_170,s_171,s_172,s_173,s_174,s_175,q_176,s_177,
betweenstory_178,s_179,q_180,s_181,s_182,q_183,s_184,s_185,q_186,s_187,q_188,s_189,s_190,s_191,
betweenstory_192,s_193,s_194,q_195,s_196,s_197,q_198,s_199,q_200,s_201,q_202,s_203,s_204,s_205,
betweenstory_206,s_207,s_208,q_209,s_210,s_211,s_212,q_213,s_214,q_215,s_216,q_217,s_218,q_219,s_220,
betweenstory_221,s_222,q_223,s_224,q_225,s_226,s_227,q_228,s_229,q_230,s_231,q_232,s_233,q_234,s_235,q_236,s_237,
betweenstory_238,s_239,s_240,s_241,q_242,s_243,s_244,s_245,s_246,s_247,q_248,s_249,
betweenstory_250,s_251,q_252,s_253,s_254,q_255,s_256,s_257,s_258,q_259,s_260,q_261,s_262,s_263,
betweenstory_264,s_265,q_266,s_267,s_268,s_269,q_270,s_271,q_272,s_273,q_274,s_275,s_276,s_277,
betweenstory_278,s_279,q_280,s_281,q_282,s_283,s_284,s_285,q_286,s_287,s_288,s_289,s_290,
betweenstory_291,s_292,q_293,s_294,s_295,q_296,s_297,q_298,s_299,s_300,q_301,s_302,q_303,s_304,q_305,s_306,
betweenstory_307,s_308,q_309,s_310,s_311,s_312,q_313,s_314,q_315,s_316,q_317,s_318,s_319,q_320,s_321,
betweenstory_322,s_323,q_324,s_325,q_326,s_327,q_328,s_329,s_330,s_331,s_332,s_333,s_334,
betweenstory_335,s_336,s_337,q_338,s_339,s_340,s_341,s_342,q_343,s_344,q_345,s_346,s_347,
betweenstory_348,s_349,q_350,s_351,q_352,s_353,q_354,s_355,s_356,s_357,q_358,s_359,q_360,s_361,q_362,s_363,
betweenstory_364,s_365,q_366,s_367,q_368,s_369,q_370,s_371,q_372,s_373,q_374,s_375,s_376,s_377,s_378,
betweenstory_379,s_380,s_381,q_382,s_383,s_384,q_385,s_386,s_387,s_388,s_389,q_390,s_391,
betweenstory_392,s_393,q_394,s_395,s_396,q_397,s_398,s_399,s_400,q_401,s_402,q_403,s_404,q_405,s_406,
betweenstory_407,s_408,s_409,q_410,s_411,s_412,s_413,s_414,s_415,s_416,q_417,s_418,
betweenstory_419,s_420,s_421,s_422,q_423,s_424,s_425,q_426,s_427,q_428,s_429,s_430,s_431,
betweenstory_432,s_433,q_434,s_435,s_436,q_437,s_438,s_439,s_440,q_441,s_442,s_443,q_444,s_445,
betweenstory_446,s_447,q_448,s_449,s_450,q_451,s_452,s_453,s_454,q_455,s_456,s_457,q_458,s_459,
betweenstory_460,s_461,s_462,q_463,s_464,s_465,s_466,q_467,s_468,q_469,s_470,s_471,q_472,s_473,
betweenstory_474,s_475,s_476,q_477,s_478,s_479,s_480,s_481,s_482,q_483,s_484,s_485,
betweenstory_486,s_487,s_488,s_489,q_490,s_491,s_492,q_493,s_494,q_495,s_496,s_497,q_498,s_499,
betweenstory_500,s_501,s_502,s_503,s_504,q_505,s_506,s_507,s_508,q_509,s_510,q_511,s_512,
betweenstory_513,s_514,q_515,s_516,q_517,s_518,q_519,s_520,s_521,s_522,q_523,s_524,s_525,s_526,
betweenstory_527,s_528,s_529,s_530,s_531,q_532,s_533,q_534,s_535,s_536,q_537,s_538,q_539,s_540,
betweenstory_541,s_542,s_543,s_544,q_545,s_546,s_547,s_548,s_549,s_550,s_551,
betweenstory_552,s_553,s_554,q_555,s_556,q_557,s_558,q_559,s_560,s_561,q_562,s_563,q_564,s_565,q_566,s_567,
betweenstory_568,s_569,s_570,s_571,q_572,s_573,q_574,s_575,s_576,q_577,s_578,s_579,q_580,s_581,
betweenstory_582,s_583,q_584,s_585,s_586,q_587,s_588,s_589,s_590,q_591,s_592,s_593,q_594,s_595,
betweenstory_596,s_597,s_598,q_599,s_600,q_601,s_602,q_603,s_604,s_605,q_606,s_607,q_608,s_609,q_610,s_611,
betweenstory_612,s_613,s_614,q_615,s_616,s_617,s_618,s_619,s_620,s_621,s_622,
betweenstory_623,s_624,s_625,q_626,s_627,s_628,q_629,s_630,s_631,q_632,s_633,s_634,q_635,s_636,
betweenstory_637,s_638,q_639,s_640,s_641,q_642,s_643,q_644,s_645,q_646,s_647,q_648,s_649,q_650,s_651,q_652,s_653,
betweenstory_654,s_655,s_656,s_657,q_658,s_659,q_660,s_661,q_662,s_663,q_664,s_665,q_666,s_667,s_668,
betweenstory_669,s_670,s_671,q_672,s_673,q_674,s_675,s_676,s_677,s_678,s_679,q_680,s_681,
betweenstory_682,s_683,q_684,s_685,s_686,q_687,s_688,q_689,s_690,q_691,s_692,s_693,s_694,s_695,
betweenstory_696,],

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

