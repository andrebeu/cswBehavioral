

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
	var q_13 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_13_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Silvia.'],
		data: { state_info: 's_14_Stepinfront' }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_15_Ignore' }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_16_Xstare' }
	} 
	var q_17 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Nick\'s face.', 'Silvia snatched a muffin and crumbled it above Nick\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_17_XstareCreamsplash_XstareDessertcrumble_90_Default_01' }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_18_Creamsplash' }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_19_Callpoliceman' }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_20_Lovejuice' }
	} 
	var q_21 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_21_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_22_END' }
	} 

    var betweenstory_23 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_24 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_24_BEGIN' }
	} 
	var s_25 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_25_Cutline' }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_26_Stepinfront' }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_27_Subjectstares' }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_28_Xshove' }
	} 
	var q_29 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_29_XshoveCreamsplash_XshoveDessertcrumble_10_Default_10' }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_30_Creamsplash' }
	} 
	var q_31 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_31_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_32_Callpoliceman' }
	} 
	var q_33 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_33_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_34_Hatecoffee' }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_35_END' }
	} 

    var betweenstory_36 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_37 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_37_BEGIN' }
	} 
	var q_38 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_38_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_39_Cutline' }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_40_Sayexcuseme' }
	} 
	var q_41 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_41_SayexcusemeShove_SayexcusemeShove_100_Permute_01' }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_42_Shove' }
	} 
	var q_43 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Olivia, \"Hey! Relax.\"', 'In retaliation, Jesse pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_43_ShoveXshove_ShoveSayrelax_85_Default_10' }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_44_Xshove' }
	} 
	var q_45 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Jesse\'s head.', 'Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_45_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_46_Dessertcrumble' }
	} 
	var q_47 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_47_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_48_Callpoliceman' }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_49_Hatecoffee' }
	} 
	var q_50 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_50_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_51_END' }
	} 

    var betweenstory_52 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_53 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_53_BEGIN' }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_54_Cutline' }
	} 
	var q_55 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera promptly stepped back in front of Olivia.', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_55_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Olivia.'],
		data: { state_info: 's_56_Stepinfront' }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_57_Subjectstares' }
	} 
	var q_58 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stared with rage into Olivia\'s eyes.', 'Olivia stared with rage into Vera\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_58_SubjectstaresXstare_SubjectstaresXstare_100_Permute_01' }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_59_Xstare' }
	} 
	var q_60 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_60_XstareCreamsplash_XstareCreamsplash_100_Permute_10' }
	} 
	var s_61 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 's_61_Creamsplash' }
	} 
	var q_62 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_62_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
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
	var s_70 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_70_Sayexcuseme' }
	} 
	var q_71 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Nick and gave him a very mean look.', 'Nick turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_71_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_72_Subjectstares' }
	} 
	var q_73 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Jesse, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_73_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
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
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_77_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
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
	var s_83 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_83_Cutline' }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_84_Sayexcuseme' }
	} 
	var q_85 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_85_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_86_Subjectstares' }
	} 
	var q_87 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Ben, \"Hey! Relax.\"', 'Ben simply said to Jesse, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_87_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_88_Sayrelax' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_89_Creamsplash' }
	} 
	var q_90 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_90_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_10' }
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
	var s_94 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_94_END' }
	} 

    var betweenstory_95 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_96 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_96_BEGIN' }
	} 
	var q_97 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_97_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_98_Cutline' }
	} 
	var q_99 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_99_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_100_Stepinfront' }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_101_Shove' }
	} 
	var q_102 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_102_ShoveXshove_ShoveXstare_66_Default_01' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_103_Xshove' }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_104_Dessertcrumble' }
	} 
	var q_105 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_105_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_106_Callpoliceman' }
	} 
	var q_107 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_107_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_108_Hatecoffee' }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_109_END' }
	} 

    var betweenstory_110 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_111 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_111_BEGIN' }
	} 
	var q_112 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_112_BEGINCutline_BEGINStepfoot_80_Default_01' }
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
	var q_117 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Ben, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_117_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_118_Sayrelax' }
	} 
	var q_119 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.', 'Nick snatched a cake and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_119_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_120_Creamsplash' }
	} 
	var q_121 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_121_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_122_Callpoliceman' }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_123_Lovejuice' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_124_END' }
	} 

    var betweenstory_125 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_126 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_126_BEGIN' }
	} 
	var q_127 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Vera, the first person in line.', 'Clumsily, he stepped on Vera\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_127_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_128_Cutline' }
	} 
	var q_129 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_129_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_130_Sayexcuseme' }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_131_Subjectstares' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_132_Xshove' }
	} 
	var q_133 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.', 'Ben picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_133_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_134_Dessertcrumble' }
	} 
	var q_135 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_135_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_10' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_136_Callpoliceman' }
	} 
	var q_137 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_137_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_138_Lovejuice' }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_139_END' }
	} 

    var betweenstory_140 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_141 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_141_BEGIN' }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_142_Cutline' }
	} 
	var q_143 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Nick promptly stepped back in front of Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_143_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_144_Stepinfront' }
	} 
	var q_145 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera proceeded to give a slight shove to Nick.', 'Nick proceeded to give a slight shove to Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_145_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['Vera proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_146_Shove' }
	} 
	var q_147 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Vera\'s eyes.', 'Vera stared with rage into Nick\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_147_ShoveXstare_ShoveXstare_100_Permute_01' }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_148_Xstare' }
	} 
	var q_149 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.', 'Nick picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_149_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_150_Creamsplash' }
	} 
	var q_151 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_151_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_152_Callpoliceman' }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_153_Lovejuice' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_154_END' }
	} 

    var betweenstory_155 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_156 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_156_BEGIN' }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_157_Stepfoot' }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_158_Sayexcuseme' }
	} 
	var q_159 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Vera.', 'Nick turned to Vera and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_159_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_160_Subjectstares' }
	} 
	var q_161 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Vera, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_161_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ['Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_162_Sayrelax' }
	} 
	var q_163 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a muffin and crumbled it above Vera\'s head.', 'Vera snatched a muffin and crumbled it above Nick\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_163_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_164_Dessertcrumble' }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_165_Baristaorders' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_166_Lovejuice' }
	} 
	var q_167 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_167_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_168_END' }
	} 

    var betweenstory_169 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_170 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_170_BEGIN' }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_171_Cutline' }
	} 
	var q_172 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_172_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_173_Stepinfront' }
	} 
	var q_174 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Olivia and gave her a very mean look.', 'Silvia proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_174_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_175_Subjectstares' }
	} 
	var q_176 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Olivia, \"Hey! Relax.\"', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_176_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_177_Sayrelax' }
	} 
	var q_178 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Silvia\'s head.', 'Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_178_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_179_Dessertcrumble' }
	} 
	var q_180 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_180_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_10' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_181_Callpoliceman' }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_182_Lovejuice' }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_183_END' }
	} 

    var betweenstory_184 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_185 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_185_BEGIN' }
	} 
	var q_186 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_186_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_187_Stepfoot' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_188_Sayexcuseme' }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_189_Subjectstares' }
	} 
	var q_190 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Ben, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_190_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_191_Sayrelax' }
	} 
	var q_192 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Silvia snatched a cake and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_192_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_193_Dessertcrumble' }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_194_Baristaorders' }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_195_Lovejuice' }
	} 
	var q_196 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_196_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_197_END' }
	} 

    var betweenstory_198 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_199 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_199_BEGIN' }
	} 
	var q_200 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_200_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_201_Cutline' }
	} 
	var q_202 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_202_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_203_Stepinfront' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_204_Shove' }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_205_Xshove' }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_206_Dessertcrumble' }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_207_Baristaorders' }
	} 
	var q_208 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_208_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_10' }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_209_Hatecoffee' }
	} 
	var q_210 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_210_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
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
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_213_BEGIN' }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_214_Cutline' }
	} 
	var q_215 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_215_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_216_Sayexcuseme' }
	} 
	var q_217 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Silvia and gave her a very mean look.', 'Silvia turned to Nick and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_217_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_218_Subjectstares' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_219_Sayrelax' }
	} 
	var q_220 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cookie and crumbled it above Silvia\'s head.', 'Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_220_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_221_Creamsplash' }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_222_Callpoliceman' }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_223_Lovejuice' }
	} 
	var q_224 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_224_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_225_END' }
	} 

    var betweenstory_226 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_227 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_227_BEGIN' }
	} 
	var q_228 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_228_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_229_Cutline' }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_230_Sayexcuseme' }
	} 
	var q_231 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_231_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_232_Shove' }
	} 
	var q_233 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'In retaliation, Olivia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_233_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_234_Xshove' }
	} 
	var q_235 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.', 'Olivia snatched a lemonsquare and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_235_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_236_Dessertcrumble' }
	} 
	var q_237 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_237_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_10' }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_238_Callpoliceman' }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_239_Hatecoffee' }
	} 
	var q_240 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_240_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_241_END' }
	} 

    var betweenstory_242 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_243 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_243_BEGIN' }
	} 
	var q_244 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_244_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_245_Cutline' }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_246_Stepinfront' }
	} 
	var q_247 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_247_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_248_Shove' }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_249_Sayrelax' }
	} 
	var q_250 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_250_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_251_Creamsplash' }
	} 
	var q_252 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_252_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_253_Callpoliceman' }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_254_Hatecoffee' }
	} 
	var q_255 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_255_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_256_END' }
	} 

    var betweenstory_257 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_258 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_258_BEGIN' }
	} 
	var q_259 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_259_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_260_Stepfoot' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_261_Sayexcuseme' }
	} 
	var q_262 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_262_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_263_Subjectstares' }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_264_Sayrelax' }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_265_Creamsplash' }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_266_Baristaorders' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_267_Lovejuice' }
	} 
	var q_268 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_268_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_269_END' }
	} 

    var betweenstory_270 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_271 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_271_BEGIN' }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_272_Cutline' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_273_Stepinfront' }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_274_Shove' }
	} 
	var q_275 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'In retaliation, Jesse pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_275_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_276_Xshove' }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_277_Dessertcrumble' }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_278_Baristaorders' }
	} 
	var q_279 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_279_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_280_Lovejuice' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_281_END' }
	} 

    var betweenstory_282 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_283 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_283_BEGIN' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_284_Cutline' }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_285_Sayexcuseme' }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_286_Shove' }
	} 
	var q_287 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'Olivia stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_287_ShoveXshove_ShoveXstare_66_Default_01' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_288_Xshove' }
	} 
	var q_289 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_289_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_290_Dessertcrumble' }
	} 
	var q_291 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_291_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_292_Baristaorders' }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_293_Lovejuice' }
	} 
	var q_294 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_294_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_295_END' }
	} 

    var betweenstory_296 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_297 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_297_BEGIN' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_298_Cutline' }
	} 
	var q_299 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Olivia.', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_299_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_300_Stepinfront' }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_301_Shove' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_302_Xshove' }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_303_Dessertcrumble' }
	} 
	var q_304 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_304_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_305_Baristaorders' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_306_Hatecoffee' }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_307_END' }
	} 

    var betweenstory_308 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_309 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_309_BEGIN' }
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
		labels: ['Silvia stared with rage into Jesse\'s eyes.', 'In retaliation, Silvia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_313_ShoveXstare_ShoveXshove_33_Default_01' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_314_Xstare' }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_315_Creamsplash' }
	} 
	var q_316 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_316_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_317_Callpoliceman' }
	} 
	var q_318 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_318_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_319_Hatecoffee' }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_320_END' }
	} 

    var betweenstory_321 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_322 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_322_BEGIN' }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_323_Cutline' }
	} 
	var q_324 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_324_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_325_Sayexcuseme' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_326_Subjectstares' }
	} 
	var q_327 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Olivia, \"Hey! Relax.\"', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_327_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_328_Sayrelax' }
	} 
	var q_329 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_329_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_330_Creamsplash' }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_331_Callpoliceman' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_332_Hatecoffee' }
	} 
	var q_333 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_333_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
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
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_338_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
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
	var s_345 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_345_Lovejuice' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_346_END' }
	} 

    var betweenstory_347 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_348 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_348_BEGIN' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_349_Cutline' }
	} 
	var q_350 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_350_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_351_Stepinfront' }
	} 
	var q_352 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored him and proceeded to order a latte.', 'Nick ignored him and proceeded to order a latte.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_352_StepinfrontIgnore_StepinfrontIgnore_100_Alter_10' }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_353_Ignore' }
	} 
	var q_354 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Nick\'s eyes.', 'Jesse simply said to Nick, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_354_IgnoreSayrelax_IgnoreXstare_33_Default_10' }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_355_Sayrelax' }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_356_Dessertcrumble' }
	} 
	var q_357 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_357_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_358_Baristaorders' }
	} 
	var q_359 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_359_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_360_Lovejuice' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_361_END' }
	} 

    var betweenstory_362 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_363 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_363_BEGIN' }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_364_Cutline' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_365_Stepinfront' }
	} 
	var q_366 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Nick and gave him a very mean look.', 'Nick turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_366_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_367_Subjectstares' }
	} 
	var q_368 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Nick\'s eyes.', 'Silvia simply said to Nick, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_368_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_10' }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_369_Sayrelax' }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_370_Creamsplash' }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_371_Callpoliceman' }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_372_Hatecoffee' }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_373_END' }
	} 

    var betweenstory_374 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_375 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_375_BEGIN' }
	} 
	var q_376 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_376_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_377_Cutline' }
	} 
	var q_378 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_378_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_379_Sayexcuseme' }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ['Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_380_Ignore' }
	} 
	var q_381 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Jesse\'s eyes.', 'Silvia simply said to Jesse, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_381_IgnoreSayrelax_IgnoreXstare_33_Default_10' }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_382_Sayrelax' }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_383_Creamsplash' }
	} 
	var q_384 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_384_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_385_Callpoliceman' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_386_Lovejuice' }
	} 
	var q_387 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_387_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_388_END' }
	} 

    var betweenstory_389 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_390 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_390_BEGIN' }
	} 
	var q_391 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_391_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_392_Cutline' }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_393_Sayexcuseme' }
	} 
	var q_394 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a mocha.', 'Olivia turned to Nick and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_394_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_10' }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_395_Subjectstares' }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_396_Sayrelax' }
	} 
	var q_397 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.', 'Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_397_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_398_Creamsplash' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_399_Callpoliceman' }
	} 
	var q_400 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_400_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_401_Lovejuice' }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_402_END' }
	} 

    var betweenstory_403 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_404 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_404_BEGIN' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_405_Cutline' }
	} 
	var q_406 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_406_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_407_Sayexcuseme' }
	} 
	var q_408 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Jesse turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_408_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_409_Subjectstares' }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_410_Sayrelax' }
	} 
	var q_411 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_411_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_412_Creamsplash' }
	} 
	var q_413 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_413_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_01' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_414_Baristaorders' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_415_Hatecoffee' }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_416_END' }
	} 

    var betweenstory_417 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_418 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_418_BEGIN' }
	} 
	var q_419 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_419_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_420_Stepfoot' }
	} 
	var q_421 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_421_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_422_Sayexcuseme' }
	} 
	var q_423 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_423_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_424_Shove' }
	} 
	var q_425 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Olivia.', 'Vera stared with rage into Olivia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_425_ShoveXshove_ShoveXstare_66_Default_01' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_426_Xshove' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_427_Dessertcrumble' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_428_Baristaorders' }
	} 
	var q_429 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_429_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
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
	var s_434 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_434_Cutline' }
	} 
	var q_435 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Ben.', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_435_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_436_Sayexcuseme' }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_437_Subjectstares' }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_438_Xshove' }
	} 
	var q_439 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_439_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_440_Dessertcrumble' }
	} 
	var q_441 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_441_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_442_Baristaorders' }
	} 
	var q_443 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_443_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_444_Lovejuice' }
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
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_448_BEGINCutline_BEGINStepfoot_80_Default_10' }
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
	var s_451 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_451_Subjectstares' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_452_Xstare' }
	} 
	var q_453 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cookie and crumbled it above Olivia\'s head.', 'Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_453_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_454_Creamsplash' }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_455_Callpoliceman' }
	} 
	var q_456 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_456_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_457_Lovejuice' }
	} 
	var q_458 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_458_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
	var q_462 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_462_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_463_Cutline' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 's_464_Stepinfront' }
	} 
	var q_465 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Jesse and gave him a very mean look.', 'Vera proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_465_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_466_Subjectstares' }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_467_Xshove' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_468_Dessertcrumble' }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_469_Baristaorders' }
	} 
	var q_470 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_470_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_471_Lovejuice' }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_472_END' }
	} 

    var betweenstory_473 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_474 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_474_BEGIN' }
	} 
	var q_475 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_475_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_476_Cutline' }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_477_Stepinfront' }
	} 
	var q_478 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Silvia and gave her a very mean look.', 'Silvia turned to Vera and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_478_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_479_Subjectstares' }
	} 
	var q_480 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Silvia.', 'Vera simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_480_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_481_Sayrelax' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_482_Dessertcrumble' }
	} 
	var q_483 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_483_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_484_Baristaorders' }
	} 
	var q_485 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_485_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_486_Lovejuice' }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_487_END' }
	} 

    var betweenstory_488 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_489 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_489_BEGIN' }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_490_Stepfoot' }
	} 
	var q_491 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_491_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_492_Sayexcuseme' }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_493_Shove' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_494_Xstare' }
	} 
	var q_495 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Vera\'s head.', 'Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_495_XstareDessertcrumble_XstareCreamsplash_10_Default_01' }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_496_Dessertcrumble' }
	} 
	var q_497 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_497_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_498_Baristaorders' }
	} 
	var q_499 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_499_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_500_Lovejuice' }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_501_END' }
	} 

    var betweenstory_502 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_503 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_503_BEGIN' }
	} 
	var q_504 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_504_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_505_Cutline' }
	} 
	var q_506 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Nick.', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_506_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_507_Stepinfront' }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_508_Subjectstares' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_509_Sayrelax' }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_510_Creamsplash' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_511_Callpoliceman' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_512_Lovejuice' }
	} 
	var q_513 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_513_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_516_BEGIN' }
	} 
	var q_517 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_517_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_518_Cutline' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_519_Stepinfront' }
	} 
	var q_520 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_520_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_521_Shove' }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_522_Xstare' }
	} 
	var q_523 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_523_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_524_Creamsplash' }
	} 
	var q_525 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_525_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_01' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_526_Baristaorders' }
	} 
	var q_527 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_527_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_528_Lovejuice' }
	} 
	var q_529 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_529_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_530_END' }
	} 

    var betweenstory_531 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_532 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_532_BEGIN' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_533_Cutline' }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_534_Stepinfront' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_535_Subjectstares' }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_536_Sayrelax' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_537_Creamsplash' }
	} 
	var q_538 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_538_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_539_Callpoliceman' }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_540_Hatecoffee' }
	} 
	var q_541 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_541_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_542_END' }
	} 

    var betweenstory_543 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_544 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_544_BEGIN' }
	} 
	var q_545 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_545_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_546_Cutline' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_547_Sayexcuseme' }
	} 
	var q_548 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Ben.', 'Nick turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_548_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_549_Subjectstares' }
	} 
	var q_550 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Nick, \"Hey! Relax.\"', 'In retaliation, Ben pushed Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_550_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_551_Sayrelax' }
	} 
	var q_552 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.', 'Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_552_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_553_Creamsplash' }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_554_Callpoliceman' }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_555_Hatecoffee' }
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
	var q_559 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_559_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_560_Cutline' }
	} 
	var q_561 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_561_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_562_Stepinfront' }
	} 
	var q_563 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored him and proceeded to order a mocha.', 'Jesse turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_563_StepinfrontSubjectstares_StepinfrontIgnore_83_Default_10' }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_564_Subjectstares' }
	} 
	var q_565 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Jesse\'s eyes.', 'In retaliation, Ben pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_565_SubjectstaresXshove_SubjectstaresXstare_74_Default_10' }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_566_Xshove' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_567_Dessertcrumble' }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_568_Baristaorders' }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_569_Lovejuice' }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_570_END' }
	} 

    var betweenstory_571 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_572 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_572_BEGIN' }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_573_Cutline' }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_574_Stepinfront' }
	} 
	var q_575 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Jesse and gave him a very mean look.', 'Jesse turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_575_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_576_Subjectstares' }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_577_Sayrelax' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_578_Creamsplash' }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_579_Baristaorders' }
	} 
	var q_580 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_580_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_581_Lovejuice' }
	} 
	var q_582 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_582_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_583_END' }
	} 

    var betweenstory_584 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_585 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_585_BEGIN' }
	} 
	var q_586 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_586_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_587_Cutline' }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_588_Stepinfront' }
	} 
	var q_589 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_589_StepinfrontShove_StepinfrontSubjectstares_44_Default_01' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_590_Shove' }
	} 
	var q_591 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'In retaliation, Olivia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_591_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_592_Xshove' }
	} 
	var q_593 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.', 'Ben snatched a cake and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_593_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_594_Dessertcrumble' }
	} 
	var q_595 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_595_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_596_Baristaorders' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_597_Lovejuice' }
	} 
	var q_598 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_598_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_599_END' }
	} 

    var betweenstory_600 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_601 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_601_BEGIN' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_602_Stepfoot' }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_603_Sayexcuseme' }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_604_Subjectstares' }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_605_Xshove' }
	} 
	var q_606 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Vera\'s head.', 'Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_606_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_607_Dessertcrumble' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_608_Baristaorders' }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_609_Hatecoffee' }
	} 
	var q_610 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_610_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
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
	var s_615 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_615_Stepinfront' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_616_Subjectstares' }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_617_Sayrelax' }
	} 
	var q_618 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.', 'Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_618_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_619_Dessertcrumble' }
	} 
	var q_620 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_620_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_621_Baristaorders' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_622_Lovejuice' }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_623_END' }
	} 

    var betweenstory_624 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_625 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_625_BEGIN' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_626_Stepfoot' }
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
	var s_629 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_629_Xstare' }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_630_Creamsplash' }
	} 
	var q_631 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_631_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_632_Callpoliceman' }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_633_Hatecoffee' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_634_END' }
	} 

    var betweenstory_635 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_636 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_636_BEGIN' }
	} 
	var q_637 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_637_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_638_Cutline' }
	} 
	var q_639 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Vera promptly stepped back in front of Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_639_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_640_Sayexcuseme' }
	} 
	var q_641 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Vera.', 'Vera proceeded to give a slight shove to Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_641_SayexcusemeShove_SayexcusemeShove_100_Permute_01' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_642_Shove' }
	} 
	var s_643 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_643_Xshove' }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_644_Dessertcrumble' }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_645_Baristaorders' }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_646_Lovejuice' }
	} 
	var q_647 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_647_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
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
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_651_Cutline' }
	} 
	var q_652 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Vera promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_652_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_653_Sayexcuseme' }
	} 
	var q_654 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Vera.', 'Jesse turned to Vera and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_654_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_655_Subjectstares' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_656_Sayrelax' }
	} 
	var q_657 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Vera\'s head.', 'Vera snatched a cake and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_657_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_658_Dessertcrumble' }
	} 
	var q_659 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_659_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_660_Baristaorders' }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_661_Hatecoffee' }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_662_END' }
	} 

    var betweenstory_663 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_664 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_664_BEGIN' }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_665_Cutline' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_666_Stepinfront' }
	} 
	var q_667 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Jesse and gave him a very mean look.', 'Silvia ignored him and proceeded to order a mocha.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_667_StepinfrontIgnore_StepinfrontSubjectstares_16_Default_10' }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_668_Ignore' }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_669_Sayrelax' }
	} 
	var q_670 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_670_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_671_Dessertcrumble' }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_672_Callpoliceman' }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_673_Hatecoffee' }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_674_END' }
	} 

    var betweenstory_675 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_676 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_676_BEGIN' }
	} 
	var q_677 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_677_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_678_Cutline' }
	} 
	var q_679 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_679_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_680_Sayexcuseme' }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_681_Ignore' }
	} 
	var s_682 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_682_Xstare' }
	} 
	var q_683 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.', 'Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_683_XstareCreamsplash_XstareCreamsplash_100_Permute_10' }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_684_Creamsplash' }
	} 
	var q_685 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_685_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_686 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_686_Callpoliceman' }
	} 
	var q_687 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_687_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_688_Lovejuice' }
	} 
	var q_689 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_689_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_690 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_690_END' }
	} 

    var betweenstory_691 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,questions_begin_10,s_11,s_12,q_13,s_14,s_15,s_16,q_17,s_18,s_19,s_20,q_21,s_22,
betweenstory_23,s_24,s_25,s_26,s_27,s_28,q_29,s_30,q_31,s_32,q_33,s_34,s_35,
betweenstory_36,s_37,q_38,s_39,s_40,q_41,s_42,q_43,s_44,q_45,s_46,q_47,s_48,s_49,q_50,s_51,
betweenstory_52,s_53,s_54,q_55,s_56,s_57,q_58,s_59,q_60,s_61,q_62,s_63,s_64,s_65,
betweenstory_66,s_67,q_68,s_69,s_70,q_71,s_72,q_73,s_74,s_75,s_76,q_77,s_78,q_79,s_80,
betweenstory_81,s_82,s_83,s_84,q_85,s_86,q_87,s_88,s_89,q_90,s_91,q_92,s_93,s_94,
betweenstory_95,s_96,q_97,s_98,q_99,s_100,s_101,q_102,s_103,s_104,q_105,s_106,q_107,s_108,s_109,
betweenstory_110,s_111,q_112,s_113,s_114,q_115,s_116,q_117,s_118,q_119,s_120,q_121,s_122,s_123,s_124,
betweenstory_125,s_126,q_127,s_128,q_129,s_130,s_131,s_132,q_133,s_134,q_135,s_136,q_137,s_138,s_139,
betweenstory_140,s_141,s_142,q_143,s_144,q_145,s_146,q_147,s_148,q_149,s_150,q_151,s_152,s_153,s_154,
betweenstory_155,s_156,s_157,s_158,q_159,s_160,q_161,s_162,q_163,s_164,s_165,s_166,q_167,s_168,
betweenstory_169,s_170,s_171,q_172,s_173,q_174,s_175,q_176,s_177,q_178,s_179,q_180,s_181,s_182,s_183,
betweenstory_184,s_185,q_186,s_187,s_188,s_189,q_190,s_191,q_192,s_193,s_194,s_195,q_196,s_197,
betweenstory_198,s_199,q_200,s_201,q_202,s_203,s_204,s_205,s_206,s_207,q_208,s_209,q_210,s_211,
betweenstory_212,s_213,s_214,q_215,s_216,q_217,s_218,s_219,q_220,s_221,s_222,s_223,q_224,s_225,
betweenstory_226,s_227,q_228,s_229,s_230,q_231,s_232,q_233,s_234,q_235,s_236,q_237,s_238,s_239,q_240,s_241,
betweenstory_242,s_243,q_244,s_245,s_246,q_247,s_248,s_249,q_250,s_251,q_252,s_253,s_254,q_255,s_256,
betweenstory_257,s_258,q_259,s_260,s_261,q_262,s_263,s_264,s_265,s_266,s_267,q_268,s_269,
betweenstory_270,s_271,s_272,s_273,s_274,q_275,s_276,s_277,s_278,q_279,s_280,s_281,
betweenstory_282,s_283,s_284,s_285,s_286,q_287,s_288,q_289,s_290,q_291,s_292,s_293,q_294,s_295,
betweenstory_296,s_297,s_298,q_299,s_300,s_301,s_302,s_303,q_304,s_305,s_306,s_307,
betweenstory_308,s_309,s_310,s_311,s_312,q_313,s_314,s_315,q_316,s_317,q_318,s_319,s_320,
betweenstory_321,s_322,s_323,q_324,s_325,s_326,q_327,s_328,q_329,s_330,s_331,s_332,q_333,s_334,
betweenstory_335,s_336,s_337,q_338,s_339,s_340,s_341,s_342,q_343,s_344,s_345,s_346,
betweenstory_347,s_348,s_349,q_350,s_351,q_352,s_353,q_354,s_355,s_356,q_357,s_358,q_359,s_360,s_361,
betweenstory_362,s_363,s_364,s_365,q_366,s_367,q_368,s_369,s_370,s_371,s_372,s_373,
betweenstory_374,s_375,q_376,s_377,q_378,s_379,s_380,q_381,s_382,s_383,q_384,s_385,s_386,q_387,s_388,
betweenstory_389,s_390,q_391,s_392,s_393,q_394,s_395,s_396,q_397,s_398,s_399,q_400,s_401,s_402,
betweenstory_403,s_404,s_405,q_406,s_407,q_408,s_409,s_410,q_411,s_412,q_413,s_414,s_415,s_416,
betweenstory_417,s_418,q_419,s_420,q_421,s_422,q_423,s_424,q_425,s_426,s_427,s_428,q_429,s_430,s_431,
betweenstory_432,s_433,s_434,q_435,s_436,s_437,s_438,q_439,s_440,q_441,s_442,q_443,s_444,s_445,
betweenstory_446,s_447,q_448,s_449,s_450,s_451,s_452,q_453,s_454,s_455,q_456,s_457,q_458,s_459,
betweenstory_460,s_461,q_462,s_463,s_464,q_465,s_466,s_467,s_468,s_469,q_470,s_471,s_472,
betweenstory_473,s_474,q_475,s_476,s_477,q_478,s_479,q_480,s_481,s_482,q_483,s_484,q_485,s_486,s_487,
betweenstory_488,s_489,s_490,q_491,s_492,s_493,s_494,q_495,s_496,q_497,s_498,q_499,s_500,s_501,
betweenstory_502,s_503,q_504,s_505,q_506,s_507,s_508,s_509,s_510,s_511,s_512,q_513,s_514,
betweenstory_515,s_516,q_517,s_518,s_519,q_520,s_521,s_522,q_523,s_524,q_525,s_526,q_527,s_528,q_529,s_530,
betweenstory_531,s_532,s_533,s_534,s_535,s_536,s_537,q_538,s_539,s_540,q_541,s_542,
betweenstory_543,s_544,q_545,s_546,s_547,q_548,s_549,q_550,s_551,q_552,s_553,s_554,s_555,s_556,
betweenstory_557,s_558,q_559,s_560,q_561,s_562,q_563,s_564,q_565,s_566,s_567,s_568,s_569,s_570,
betweenstory_571,s_572,s_573,s_574,q_575,s_576,s_577,s_578,s_579,q_580,s_581,q_582,s_583,
betweenstory_584,s_585,q_586,s_587,s_588,q_589,s_590,q_591,s_592,q_593,s_594,q_595,s_596,s_597,q_598,s_599,
betweenstory_600,s_601,s_602,s_603,s_604,s_605,q_606,s_607,s_608,s_609,q_610,s_611,
betweenstory_612,s_613,s_614,s_615,s_616,s_617,q_618,s_619,q_620,s_621,s_622,s_623,
betweenstory_624,s_625,s_626,s_627,s_628,s_629,s_630,q_631,s_632,s_633,s_634,
betweenstory_635,s_636,q_637,s_638,q_639,s_640,q_641,s_642,s_643,s_644,s_645,s_646,q_647,s_648,
betweenstory_649,s_650,s_651,q_652,s_653,q_654,s_655,s_656,q_657,s_658,q_659,s_660,s_661,s_662,
betweenstory_663,s_664,s_665,s_666,q_667,s_668,s_669,q_670,s_671,s_672,s_673,s_674,
betweenstory_675,s_676,q_677,s_678,q_679,s_680,s_681,s_682,q_683,s_684,q_685,s_686,q_687,s_688,q_689,s_690,
betweenstory_691,],

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

