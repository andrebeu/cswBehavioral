

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
	var s_12 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_12_Cutline' }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Silvia.'],
		data: { state_info: 's_13_Stepinfront' }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_14_Ignore' }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_15_Xstare' }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_16_Creamsplash' }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_17_Callpoliceman' }
	} 
	var q_18 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_18_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_19_Lovejuice' }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_20_END' }
	} 

    var betweenstory_21 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_22 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_22_BEGIN' }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_23_Cutline' }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_24_Stepinfront' }
	} 
	var s_25 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_25_Subjectstares' }
	} 
	var q_26 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Ben.', 'In retaliation, Ben pushed Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_26_SubjectstaresXshove_SubjectstaresXshove_100_Permute_10' }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_27_Xshove' }
	} 
	var q_28 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_28_XshoveCreamsplash_XshoveCreamsplash_100_Permute_10' }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_29_Creamsplash' }
	} 
	var q_30 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_30_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_31_Callpoliceman' }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_32_Hatecoffee' }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_33_END' }
	} 

    var betweenstory_34 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_35 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_35_BEGIN' }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_36_Cutline' }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_37_Sayexcuseme' }
	} 
	var q_38 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_38_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_39_Shove' }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_40_Xshove' }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_41_Dessertcrumble' }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_42_Callpoliceman' }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_43_Hatecoffee' }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_44_END' }
	} 

    var betweenstory_45 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_46 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_46_BEGIN' }
	} 
	var q_47 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_47_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_48_Cutline' }
	} 
	var q_49 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Vera promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_49_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Olivia.'],
		data: { state_info: 's_50_Stepinfront' }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_51_Subjectstares' }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_52_Xstare' }
	} 
	var q_53 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.', 'Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_53_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 's_54_Creamsplash' }
	} 
	var q_55 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Vera to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_55_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_56_Callpoliceman' }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_57_Hatecoffee' }
	} 
	var q_58 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_58_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_59_END' }
	} 

    var betweenstory_60 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_61 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_61_BEGIN' }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_62_Cutline' }
	} 
	var q_63 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_63_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_64_Sayexcuseme' }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ['Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_65_Subjectstares' }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_66_Sayrelax' }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_67_Creamsplash' }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_68_Baristaorders' }
	} 
	var q_69 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_69_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_70_Lovejuice' }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_71_END' }
	} 

    var betweenstory_72 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_73 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_73_BEGIN' }
	} 
	var q_74 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_74_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_75_Cutline' }
	} 
	var q_76 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_76_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_77_Sayexcuseme' }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_78_Subjectstares' }
	} 
	var q_79 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Jesse, \"Hey! Relax.\"', 'In retaliation, Ben pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_79_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_80_Sayrelax' }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Jesse snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_81_Dessertcrumble' }
	} 
	var q_82 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_82_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_83_Baristaorders' }
	} 
	var q_84 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_84_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_01' }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_85_Hatecoffee' }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_86_END' }
	} 

    var betweenstory_87 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_88 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_88_BEGIN' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_89_Cutline' }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_90_Stepinfront' }
	} 
	var q_91 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_91_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_92_Shove' }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_93_Xshove' }
	} 
	var q_94 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Olivia\'s head.', 'Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_94_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_95_Dessertcrumble' }
	} 
	var q_96 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.', 'Vera, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_96_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_01' }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_97_Callpoliceman' }
	} 
	var q_98 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_98_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_99_Hatecoffee' }
	} 
	var q_100 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_100_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_101_END' }
	} 

    var betweenstory_102 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_103 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_103_BEGIN' }
	} 
	var q_104 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_104_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_105_Cutline' }
	} 
	var q_106 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_106_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_107_Stepinfront' }
	} 
	var q_108 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Nick and gave him a very mean look.', 'Nick turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_108_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_109_Subjectstares' }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_110_Sayrelax' }
	} 
	var q_111 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.', 'Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_111_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_112_Creamsplash' }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_113_Callpoliceman' }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_114_Lovejuice' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_115_END' }
	} 

    var betweenstory_116 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_117 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_117_BEGIN' }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_118_Cutline' }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_119_Sayexcuseme' }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_120_Subjectstares' }
	} 
	var q_121 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Ben, \"Hey! Relax.\"', 'In retaliation, Vera pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_121_SubjectstaresXshove_SubjectstaresSayrelax_33_Default_10' }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_122_Xshove' }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_123_Dessertcrumble' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_124_Callpoliceman' }
	} 
	var q_125 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_125_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_126_Lovejuice' }
	} 
	var q_127 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_127_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_128_END' }
	} 

    var betweenstory_129 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_130 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_130_BEGIN' }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_131_Cutline' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_132_Stepinfront' }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['Vera turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_133_Subjectstares' }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ['Nick simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_134_Sayrelax' }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['Vera snatched a cookie and crumbled it above Nick\'s head.'],
		data: { state_info: 's_135_Dessertcrumble' }
	} 
	var q_136 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_136_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_10' }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_137_Callpoliceman' }
	} 
	var q_138 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_138_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_139_Lovejuice' }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_140_END' }
	} 

    var betweenstory_141 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_142 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_142_BEGIN' }
	} 
	var q_143 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_143_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_144_Stepfoot' }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_145_Sayexcuseme' }
	} 
	var q_146 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Vera.', 'Nick turned to Vera and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_146_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_147_Subjectstares' }
	} 
	var q_148 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Nick, \"Hey! Relax.\"', 'In retaliation, Vera pushed Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_148_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_149_Sayrelax' }
	} 
	var q_150 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a muffin and crumbled it above Vera\'s head.', 'Vera snatched a muffin and crumbled it above Nick\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_150_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ['Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_151_Dessertcrumble' }
	} 
	var q_152 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Silvia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_152_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_153_Baristaorders' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_154_Lovejuice' }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_155_END' }
	} 

    var betweenstory_156 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_157 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_157_BEGIN' }
	} 
	var q_158 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_158_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_159_Cutline' }
	} 
	var q_160 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_160_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_161_Stepinfront' }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_162_Subjectstares' }
	} 
	var q_163 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Olivia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_163_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_164_Sayrelax' }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_165_Dessertcrumble' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_166_Callpoliceman' }
	} 
	var q_167 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_167_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_168_Lovejuice' }
	} 
	var q_169 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_169_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_170_END' }
	} 

    var betweenstory_171 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_172 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_172_BEGIN' }
	} 
	var q_173 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_173_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_174_Stepfoot' }
	} 
	var q_175 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_175_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_176_Sayexcuseme' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_177_Subjectstares' }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_178_Sayrelax' }
	} 
	var q_179 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Silvia snatched a cake and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_179_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_180_Dessertcrumble' }
	} 
	var q_181 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_181_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_182_Baristaorders' }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_183_Lovejuice' }
	} 
	var q_184 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_184_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_185_END' }
	} 

    var betweenstory_186 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_187 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_187_BEGIN' }
	} 
	var q_188 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_188_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_189_Cutline' }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_190_Stepinfront' }
	} 
	var q_191 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_191_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_192_Shove' }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_193_Xshove' }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_194_Dessertcrumble' }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_195_Baristaorders' }
	} 
	var q_196 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_196_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_10' }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_197_Hatecoffee' }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_198_END' }
	} 

    var betweenstory_199 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_200 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_200_BEGIN' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_201_Cutline' }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_202_Sayexcuseme' }
	} 
	var q_203 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Nick and gave him a very mean look.', 'Nick turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_203_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_204_Subjectstares' }
	} 
	var q_205 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_205_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_206_Sayrelax' }
	} 
	var q_207 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cookie and crumbled it above Silvia\'s head.', 'Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_207_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_208_Creamsplash' }
	} 
	var q_209 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_209_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_210_Callpoliceman' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_211_Lovejuice' }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_212_END' }
	} 

    var betweenstory_213 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_214 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_214_BEGIN' }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_215_Cutline' }
	} 
	var q_216 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_216_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_217_Sayexcuseme' }
	} 
	var q_218 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_218_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_01' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_219_Shove' }
	} 
	var q_220 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Ben\'s eyes.', 'In retaliation, Olivia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_220_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_221_Xshove' }
	} 
	var q_222 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.', 'Ben picked up a small cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_222_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_223_Dessertcrumble' }
	} 
	var q_224 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_224_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_225_Callpoliceman' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_226_Hatecoffee' }
	} 
	var q_227 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_227_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_228_END' }
	} 

    var betweenstory_229 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_230 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_230_BEGIN' }
	} 
	var q_231 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Silvia\'s foot.', 'Without hesitating she cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_231_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_232_Cutline' }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_233_Stepinfront' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_234_Shove' }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_235_Sayrelax' }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_236_Creamsplash' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_237_Callpoliceman' }
	} 
	var q_238 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_238_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_239_Hatecoffee' }
	} 
	var q_240 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_240_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_241_END' }
	} 

    var betweenstory_242 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_243 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_243_BEGIN' }
	} 
	var q_244 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_244_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_245_Stepfoot' }
	} 
	var q_246 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_246_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_247_Sayexcuseme' }
	} 
	var q_248 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_248_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_249_Subjectstares' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_250_Sayrelax' }
	} 
	var q_251 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_251_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_252_Creamsplash' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_253_Baristaorders' }
	} 
	var q_254 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_254_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_255_Lovejuice' }
	} 
	var q_256 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_256_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_257_END' }
	} 

    var betweenstory_258 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_259 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_259_BEGIN' }
	} 
	var q_260 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_260_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_261_Cutline' }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_262_Stepinfront' }
	} 
	var q_263 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_263_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_264_Shove' }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_265_Xshove' }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_266_Dessertcrumble' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_267_Baristaorders' }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_268_Lovejuice' }
	} 
	var q_269 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_269_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_270_END' }
	} 

    var betweenstory_271 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_272 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_272_BEGIN' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_273_Cutline' }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_274_Sayexcuseme' }
	} 
	var q_275 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a coffee.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_275_SayexcusemeShove_SayexcusemeIgnore_80_Default_01' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_276_Shove' }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_277_Xshove' }
	} 
	var q_278 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_278_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_279_Dessertcrumble' }
	} 
	var q_280 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_280_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_281_Baristaorders' }
	} 
	var q_282 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_282_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_283_Lovejuice' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_284_END' }
	} 

    var betweenstory_285 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_286 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_286_BEGIN' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_287_Cutline' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_288_Stepinfront' }
	} 
	var q_289 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_289_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_290_Shove' }
	} 
	var q_291 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Olivia\'s eyes.', 'In retaliation, Nick pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_291_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_292_Xshove' }
	} 
	var q_293 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Nick\'s head.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_293_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_294_Dessertcrumble' }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_295_Baristaorders' }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_296_Hatecoffee' }
	} 
	var q_297 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_297_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_298_END' }
	} 

    var betweenstory_299 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_300 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_300_BEGIN' }
	} 
	var q_301 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_301_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_302_Stepfoot' }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_303_Sayexcuseme' }
	} 
	var q_304 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a coffee.', 'Jesse proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_304_SayexcusemeShove_SayexcusemeIgnore_80_Default_10' }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_305_Shove' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_306_Xstare' }
	} 
	var q_307 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_307_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_308_Creamsplash' }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_309_Callpoliceman' }
	} 
	var q_310 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_310_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_311_Hatecoffee' }
	} 
	var q_312 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_312_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_313_END' }
	} 

    var betweenstory_314 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_315 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_315_BEGIN' }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_316_Cutline' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_317_Sayexcuseme' }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_318_Subjectstares' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_319_Sayrelax' }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_320_Creamsplash' }
	} 
	var q_321 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_321_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_322_Callpoliceman' }
	} 
	var q_323 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_323_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_324_Hatecoffee' }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_325_END' }
	} 

    var betweenstory_326 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_327 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_327_BEGIN' }
	} 
	var q_328 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_328_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_329_Stepfoot' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_330_Sayexcuseme' }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_331_Ignore' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_332_Sayrelax' }
	} 
	var q_333 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Silvia\'s face.', 'Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_333_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_334_Dessertcrumble' }
	} 
	var q_335 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Vera to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_335_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_336_Baristaorders' }
	} 
	var q_337 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_337_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_338_Lovejuice' }
	} 
	var q_339 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_339_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_340_END' }
	} 

    var betweenstory_341 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_342 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_342_BEGIN' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_343_Cutline' }
	} 
	var q_344 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_344_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_345_Stepinfront' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_346_Ignore' }
	} 
	var q_347 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Nick\'s eyes.', 'Jesse simply said to Nick, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_347_IgnoreSayrelax_IgnoreXstare_33_Default_10' }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_348_Sayrelax' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_349_Dessertcrumble' }
	} 
	var q_350 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_350_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_351_Baristaorders' }
	} 
	var q_352 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_352_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_353_Lovejuice' }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_354_END' }
	} 

    var betweenstory_355 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_356 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_356_BEGIN' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_357_Cutline' }
	} 
	var q_358 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_358_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_359_Stepinfront' }
	} 
	var q_360 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Nick and gave him a very mean look.', 'Nick turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_360_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_361_Subjectstares' }
	} 
	var q_362 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Silvia stared with rage into Nick\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_362_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_363_Sayrelax' }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_364_Creamsplash' }
	} 
	var q_365 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_365_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_366_Callpoliceman' }
	} 
	var q_367 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_367_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_368_Hatecoffee' }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_369_END' }
	} 

    var betweenstory_370 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_371 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_371_BEGIN' }
	} 
	var q_372 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_372_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_373_Cutline' }
	} 
	var q_374 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_374_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_375_Sayexcuseme' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_376_Ignore' }
	} 
	var q_377 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Jesse, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_377_IgnoreSayrelax_IgnoreSayrelax_100_Permute_10' }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_378_Sayrelax' }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_379_Creamsplash' }
	} 
	var q_380 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_380_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_381_Callpoliceman' }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_382_Lovejuice' }
	} 
	var q_383 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_383_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_384_END' }
	} 

    var betweenstory_385 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_386 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_386_BEGIN' }
	} 
	var q_387 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_387_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_388_Cutline' }
	} 
	var q_389 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_389_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_390_Sayexcuseme' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_391_Subjectstares' }
	} 
	var q_392 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Nick pushed Olivia.', 'Nick stared with rage into Olivia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_392_SubjectstaresXshove_SubjectstaresXstare_74_Default_01' }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_393_Xshove' }
	} 
	var q_394 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cookie and crumbled it above Nick\'s head.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_394_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Nick\'s head.'],
		data: { state_info: 's_395_Dessertcrumble' }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_396_Baristaorders' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_397_Lovejuice' }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_398_END' }
	} 

    var betweenstory_399 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_400 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_400_BEGIN' }
	} 
	var q_401 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_401_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_402_Cutline' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_403_Sayexcuseme' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_404_Subjectstares' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_405_Sayrelax' }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_406_Creamsplash' }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_407_Baristaorders' }
	} 
	var s_408 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_408_Hatecoffee' }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_409_END' }
	} 

    var betweenstory_410 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_411 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_411_BEGIN' }
	} 
	var q_412 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_412_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_413_Stepfoot' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_414_Sayexcuseme' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_415_Shove' }
	} 
	var q_416 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Vera.', 'In retaliation, Vera pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_416_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_417_Xshove' }
	} 
	var q_418 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cookie and crumbled it above Vera\'s head.', 'Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_418_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_419_Dessertcrumble' }
	} 
	var q_420 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_420_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_421_Baristaorders' }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_422_Lovejuice' }
	} 
	var q_423 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_423_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_424_END' }
	} 

    var betweenstory_425 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_426 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_426_BEGIN' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_427_Cutline' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_428_Sayexcuseme' }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_429_Subjectstares' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_430_Xshove' }
	} 
	var q_431 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_431_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_432_Dessertcrumble' }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_433_Baristaorders' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
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
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_437_BEGIN' }
	} 
	var q_438 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_438_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_439_Cutline' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_440_Stepinfront' }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_441_Subjectstares' }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_442_Xstare' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_443_Creamsplash' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_444_Callpoliceman' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_445_Lovejuice' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_446_END' }
	} 

    var betweenstory_447 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_448 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_448_BEGIN' }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_449_Cutline' }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 's_450_Stepinfront' }
	} 
	var q_451 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Jesse and gave him a very mean look.', 'Vera proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_451_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_452_Subjectstares' }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_453_Xshove' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_454_Dessertcrumble' }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_455_Baristaorders' }
	} 
	var q_456 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_456_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_457_Lovejuice' }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_458_END' }
	} 

    var betweenstory_459 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_460 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_460_BEGIN' }
	} 
	var q_461 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_461_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_462_Cutline' }
	} 
	var q_463 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Vera promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_463_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_464_Stepinfront' }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_465_Subjectstares' }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_466_Sayrelax' }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_467_Dessertcrumble' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_468_Baristaorders' }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_469_Lovejuice' }
	} 
	var q_470 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_470_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_471_END' }
	} 

    var betweenstory_472 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_473 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_473_BEGIN' }
	} 
	var q_474 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_474_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_475_Stepfoot' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_476_Sayexcuseme' }
	} 
	var q_477 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Vera and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_477_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_478_Shove' }
	} 
	var q_479 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Olivia.', 'Vera stared with rage into Olivia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_479_ShoveXstare_ShoveXshove_33_Default_10' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_480_Xstare' }
	} 
	var q_481 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Vera\'s head.', 'Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_481_XstareDessertcrumble_XstareCreamsplash_10_Default_01' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_482_Dessertcrumble' }
	} 
	var q_483 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_483_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_484_Baristaorders' }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_485_Lovejuice' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_486_END' }
	} 

    var betweenstory_487 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_488 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_488_BEGIN' }
	} 
	var q_489 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_489_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_490_Cutline' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_491_Stepinfront' }
	} 
	var q_492 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Silvia and gave her a very mean look.', 'Silvia turned to Nick and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_492_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_493_Subjectstares' }
	} 
	var q_494 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_494_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_495_Sayrelax' }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_496_Creamsplash' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_497_Callpoliceman' }
	} 
	var q_498 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_498_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_499_Lovejuice' }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_500_END' }
	} 

    var betweenstory_501 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_502 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_502_BEGIN' }
	} 
	var q_503 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_503_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_504_Cutline' }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_505_Stepinfront' }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_506_Shove' }
	} 
	var q_507 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Ben, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_507_ShoveXstare_ShoveSayrelax_74_Default_10' }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_508_Xstare' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_509_Creamsplash' }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_510_Baristaorders' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_511_Lovejuice' }
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
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_514_BEGIN' }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_515_Cutline' }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_516_Stepinfront' }
	} 
	var q_517 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Nick.', 'Nick proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_517_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_518_Shove' }
	} 
	var q_519 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Olivia\'s eyes.', 'In retaliation, Nick pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_519_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_520_Xshove' }
	} 
	var q_521 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_521_XshoveCreamsplash_XshoveCreamsplash_100_Permute_10' }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_522_Creamsplash' }
	} 
	var q_523 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_523_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_524_Callpoliceman' }
	} 
	var q_525 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_525_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_526_Hatecoffee' }
	} 
	var q_527 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_527_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_528_END' }
	} 

    var betweenstory_529 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_530 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_530_BEGIN' }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_531_Cutline' }
	} 
	var q_532 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_532_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_533_Sayexcuseme' }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_534_Subjectstares' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_535_Sayrelax' }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_536_Creamsplash' }
	} 
	var q_537 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_537_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_538_Callpoliceman' }
	} 
	var q_539 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_539_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_540_Hatecoffee' }
	} 
	var q_541 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_541_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
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
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_544_BEGIN' }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_545_Cutline' }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_546_Stepinfront' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Jesse ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_547_Ignore' }
	} 
	var q_548 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Ben, \"Hey! Relax.\"', 'Ben simply said to Jesse, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_548_IgnoreSayrelax_IgnoreSayrelax_100_Permute_10' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_549_Sayrelax' }
	} 
	var q_550 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_550_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_551_Dessertcrumble' }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_552_Baristaorders' }
	} 
	var q_553 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_553_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_554_Lovejuice' }
	} 
	var q_555 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_555_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_556_END' }
	} 

    var betweenstory_557 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_558 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_558_BEGIN' }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_559_Cutline' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_560_Stepinfront' }
	} 
	var q_561 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Jesse and gave him a very mean look.', 'Jesse turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_561_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_562_Subjectstares' }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_563_Sayrelax' }
	} 
	var q_564 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_564_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_565_Creamsplash' }
	} 
	var q_566 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_566_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_01' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_567_Baristaorders' }
	} 
	var q_568 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_568_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_569_Lovejuice' }
	} 
	var q_570 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_570_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_571_END' }
	} 

    var betweenstory_572 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_573 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_573_BEGIN' }
	} 
	var q_574 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_574_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_575_Cutline' }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_576_Stepinfront' }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_577_Shove' }
	} 
	var q_578 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_578_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_579_Xshove' }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_580_Dessertcrumble' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_581_Baristaorders' }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_582_Lovejuice' }
	} 
	var q_583 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_583_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_584_END' }
	} 

    var betweenstory_585 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_586 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_586_BEGIN' }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_587_Stepfoot' }
	} 
	var q_588 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_588_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_589_Sayexcuseme' }
	} 
	var q_590 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Olivia and gave her a very mean look.', 'Olivia turned to Vera and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_590_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_591_Subjectstares' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_592_Xshove' }
	} 
	var q_593 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.', 'Olivia snatched a cake and crumbled it above Vera\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_593_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_594_Dessertcrumble' }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_595_Baristaorders' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_596_Hatecoffee' }
	} 
	var q_597 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_597_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_598_END' }
	} 

    var betweenstory_599 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_600 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_600_BEGIN' }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_601_Cutline' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_602_Stepinfront' }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_603_Subjectstares' }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_604_Sayrelax' }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_605_Dessertcrumble' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_606_Baristaorders' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_607_Lovejuice' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_608_END' }
	} 

    var betweenstory_609 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_610 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_610_BEGIN' }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_611_Stepfoot' }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_612_Sayexcuseme' }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_613_Shove' }
	} 
	var q_614 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Nick\'s eyes.', 'Nick stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_614_ShoveXstare_ShoveXstare_100_Permute_10' }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_615_Xstare' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_616_Creamsplash' }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_617_Callpoliceman' }
	} 
	var q_618 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_618_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_619_Hatecoffee' }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_620_END' }
	} 

    var betweenstory_621 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_622 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_622_BEGIN' }
	} 
	var q_623 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Vera, the first person in line.', 'Clumsily, he stepped on Vera\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_623_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_624_Cutline' }
	} 
	var q_625 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Vera promptly stepped back in front of Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_625_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_626_Sayexcuseme' }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_627_Shove' }
	} 
	var q_628 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Nick pushed Vera.', 'In retaliation, Vera pushed Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_628_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_629_Xshove' }
	} 
	var q_630 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cookie and crumbled it above Vera\'s head.', 'Vera snatched a cookie and crumbled it above Nick\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_630_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_631_Dessertcrumble' }
	} 
	var q_632 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_632_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_633_Baristaorders' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_634_Lovejuice' }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_635_END' }
	} 

    var betweenstory_636 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_637 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_637_BEGIN' }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_638_Cutline' }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_639_Sayexcuseme' }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_640_Subjectstares' }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_641_Sayrelax' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_642_Dessertcrumble' }
	} 
	var s_643 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_643_Baristaorders' }
	} 
	var q_644 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_644_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_01' }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_645_Hatecoffee' }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_646_END' }
	} 

    var betweenstory_647 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_648 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_648_BEGIN' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_649_Cutline' }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_650_Stepinfront' }
	} 
	var q_651 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Jesse and gave him a very mean look.', 'Silvia ignored him and proceeded to order a mocha.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_651_StepinfrontIgnore_StepinfrontSubjectstares_16_Default_10' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_652_Ignore' }
	} 
	var q_653 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'Jesse simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_653_IgnoreSayrelax_IgnoreXstare_33_Default_10' }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_654_Sayrelax' }
	} 
	var q_655 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_655_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_656_Dessertcrumble' }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_657_Callpoliceman' }
	} 
	var q_658 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_658_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_659_Hatecoffee' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_660_END' }
	} 

    var betweenstory_661 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_662 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_662_BEGIN' }
	} 
	var q_663 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_663_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_664_Cutline' }
	} 
	var q_665 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_665_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_666_Sayexcuseme' }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_667_Ignore' }
	} 
	var q_668 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Vera\'s eyes.', 'In retaliation, Olivia pushed Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_668_IgnoreXstare_IgnoreXshove_85_Default_01' }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_669_Xstare' }
	} 
	var q_670 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a cookie and crumbled it above Olivia\'s head.', 'Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_670_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_671_Creamsplash' }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_672_Callpoliceman' }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_673_Lovejuice' }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_674_END' }
	} 

    var betweenstory_675 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,questions_begin_10,s_11,s_12,s_13,s_14,s_15,s_16,s_17,q_18,s_19,s_20,
betweenstory_21,s_22,s_23,s_24,s_25,q_26,s_27,q_28,s_29,q_30,s_31,s_32,s_33,
betweenstory_34,s_35,s_36,s_37,q_38,s_39,s_40,s_41,s_42,s_43,s_44,
betweenstory_45,s_46,q_47,s_48,q_49,s_50,s_51,s_52,q_53,s_54,q_55,s_56,s_57,q_58,s_59,
betweenstory_60,s_61,s_62,q_63,s_64,s_65,s_66,s_67,s_68,q_69,s_70,s_71,
betweenstory_72,s_73,q_74,s_75,q_76,s_77,s_78,q_79,s_80,s_81,q_82,s_83,q_84,s_85,s_86,
betweenstory_87,s_88,s_89,s_90,q_91,s_92,s_93,q_94,s_95,q_96,s_97,q_98,s_99,q_100,s_101,
betweenstory_102,s_103,q_104,s_105,q_106,s_107,q_108,s_109,s_110,q_111,s_112,s_113,s_114,s_115,
betweenstory_116,s_117,s_118,s_119,s_120,q_121,s_122,s_123,s_124,q_125,s_126,q_127,s_128,
betweenstory_129,s_130,s_131,s_132,s_133,s_134,s_135,q_136,s_137,q_138,s_139,s_140,
betweenstory_141,s_142,q_143,s_144,s_145,q_146,s_147,q_148,s_149,q_150,s_151,q_152,s_153,s_154,s_155,
betweenstory_156,s_157,q_158,s_159,q_160,s_161,s_162,q_163,s_164,s_165,s_166,q_167,s_168,q_169,s_170,
betweenstory_171,s_172,q_173,s_174,q_175,s_176,s_177,s_178,q_179,s_180,q_181,s_182,s_183,q_184,s_185,
betweenstory_186,s_187,q_188,s_189,s_190,q_191,s_192,s_193,s_194,s_195,q_196,s_197,s_198,
betweenstory_199,s_200,s_201,s_202,q_203,s_204,q_205,s_206,q_207,s_208,q_209,s_210,s_211,s_212,
betweenstory_213,s_214,s_215,q_216,s_217,q_218,s_219,q_220,s_221,q_222,s_223,q_224,s_225,s_226,q_227,s_228,
betweenstory_229,s_230,q_231,s_232,s_233,s_234,s_235,s_236,s_237,q_238,s_239,q_240,s_241,
betweenstory_242,s_243,q_244,s_245,q_246,s_247,q_248,s_249,s_250,q_251,s_252,s_253,q_254,s_255,q_256,s_257,
betweenstory_258,s_259,q_260,s_261,s_262,q_263,s_264,s_265,s_266,s_267,s_268,q_269,s_270,
betweenstory_271,s_272,s_273,s_274,q_275,s_276,s_277,q_278,s_279,q_280,s_281,q_282,s_283,s_284,
betweenstory_285,s_286,s_287,s_288,q_289,s_290,q_291,s_292,q_293,s_294,s_295,s_296,q_297,s_298,
betweenstory_299,s_300,q_301,s_302,s_303,q_304,s_305,s_306,q_307,s_308,s_309,q_310,s_311,q_312,s_313,
betweenstory_314,s_315,s_316,s_317,s_318,s_319,s_320,q_321,s_322,q_323,s_324,s_325,
betweenstory_326,s_327,q_328,s_329,s_330,s_331,s_332,q_333,s_334,q_335,s_336,q_337,s_338,q_339,s_340,
betweenstory_341,s_342,s_343,q_344,s_345,s_346,q_347,s_348,s_349,q_350,s_351,q_352,s_353,s_354,
betweenstory_355,s_356,s_357,q_358,s_359,q_360,s_361,q_362,s_363,s_364,q_365,s_366,q_367,s_368,s_369,
betweenstory_370,s_371,q_372,s_373,q_374,s_375,s_376,q_377,s_378,s_379,q_380,s_381,s_382,q_383,s_384,
betweenstory_385,s_386,q_387,s_388,q_389,s_390,s_391,q_392,s_393,q_394,s_395,s_396,s_397,s_398,
betweenstory_399,s_400,q_401,s_402,s_403,s_404,s_405,s_406,s_407,s_408,s_409,
betweenstory_410,s_411,q_412,s_413,s_414,s_415,q_416,s_417,q_418,s_419,q_420,s_421,s_422,q_423,s_424,
betweenstory_425,s_426,s_427,s_428,s_429,s_430,q_431,s_432,s_433,s_434,s_435,
betweenstory_436,s_437,q_438,s_439,s_440,s_441,s_442,s_443,s_444,s_445,s_446,
betweenstory_447,s_448,s_449,s_450,q_451,s_452,s_453,s_454,s_455,q_456,s_457,s_458,
betweenstory_459,s_460,q_461,s_462,q_463,s_464,s_465,s_466,s_467,s_468,s_469,q_470,s_471,
betweenstory_472,s_473,q_474,s_475,s_476,q_477,s_478,q_479,s_480,q_481,s_482,q_483,s_484,s_485,s_486,
betweenstory_487,s_488,q_489,s_490,s_491,q_492,s_493,q_494,s_495,s_496,s_497,q_498,s_499,s_500,
betweenstory_501,s_502,q_503,s_504,s_505,s_506,q_507,s_508,s_509,s_510,s_511,s_512,
betweenstory_513,s_514,s_515,s_516,q_517,s_518,q_519,s_520,q_521,s_522,q_523,s_524,q_525,s_526,q_527,s_528,
betweenstory_529,s_530,s_531,q_532,s_533,s_534,s_535,s_536,q_537,s_538,q_539,s_540,q_541,s_542,
betweenstory_543,s_544,s_545,s_546,s_547,q_548,s_549,q_550,s_551,s_552,q_553,s_554,q_555,s_556,
betweenstory_557,s_558,s_559,s_560,q_561,s_562,s_563,q_564,s_565,q_566,s_567,q_568,s_569,q_570,s_571,
betweenstory_572,s_573,q_574,s_575,s_576,s_577,q_578,s_579,s_580,s_581,s_582,q_583,s_584,
betweenstory_585,s_586,s_587,q_588,s_589,q_590,s_591,s_592,q_593,s_594,s_595,s_596,q_597,s_598,
betweenstory_599,s_600,s_601,s_602,s_603,s_604,s_605,s_606,s_607,s_608,
betweenstory_609,s_610,s_611,s_612,s_613,q_614,s_615,s_616,s_617,q_618,s_619,s_620,
betweenstory_621,s_622,q_623,s_624,q_625,s_626,s_627,q_628,s_629,q_630,s_631,q_632,s_633,s_634,s_635,
betweenstory_636,s_637,s_638,s_639,s_640,s_641,s_642,s_643,q_644,s_645,s_646,
betweenstory_647,s_648,s_649,s_650,q_651,s_652,q_653,s_654,q_655,s_656,s_657,q_658,s_659,s_660,
betweenstory_661,s_662,q_663,s_664,q_665,s_666,s_667,q_668,s_669,q_670,s_671,s_672,s_673,s_674,
betweenstory_675,],

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

