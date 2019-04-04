

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
	var q_15 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick simply said to Silvia, \"Hey! Relax.\"', 'Nick stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_15_IgnoreXstare_IgnoreSayrelax_66_Default_10' }
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
	var q_25 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_25_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_26_Cutline' }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_27_Stepinfront' }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_28_Subjectstares' }
	} 
	var q_29 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'Ben simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_29_SubjectstaresXshove_SubjectstaresSayrelax_33_Default_01' }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_30_Xshove' }
	} 
	var q_31 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_31_XshoveCreamsplash_XshoveCreamsplash_100_Permute_10' }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_32_Creamsplash' }
	} 
	var q_33 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_33_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_34_Callpoliceman' }
	} 
	var q_35 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_35_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_36_Hatecoffee' }
	} 
	var q_37 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_37_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_38_END' }
	} 

    var betweenstory_39 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_40 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_40_BEGIN' }
	} 
	var q_41 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_41_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_42_Cutline' }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_43_Sayexcuseme' }
	} 
	var q_44 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_44_SayexcusemeShove_SayexcusemeShove_100_Permute_01' }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_45_Shove' }
	} 
	var q_46 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'Jesse simply said to Olivia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_46_ShoveXshove_ShoveSayrelax_85_Default_01' }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_47_Xshove' }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_48_Dessertcrumble' }
	} 
	var q_49 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_49_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_01' }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_50_Callpoliceman' }
	} 
	var q_51 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_51_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_52_Hatecoffee' }
	} 
	var q_53 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_53_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_54_END' }
	} 

    var betweenstory_55 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_56 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_56_BEGIN' }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_57_Cutline' }
	} 
	var q_58 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_58_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Olivia.'],
		data: { state_info: 's_59_Stepinfront' }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_60_Subjectstares' }
	} 
	var s_61 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_61_Xstare' }
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
	var q_64 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_64_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_65_Hatecoffee' }
	} 
	var q_66 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_66_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_67_END' }
	} 

    var betweenstory_68 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_69 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_69_BEGIN' }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_70_Cutline' }
	} 
	var q_71 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_71_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_72_Sayexcuseme' }
	} 
	var q_73 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Jesse and gave him a very mean look.', 'Nick proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_73_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_74_Subjectstares' }
	} 
	var q_75 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick simply said to Jesse, \"Hey! Relax.\"', 'Jesse simply said to Nick, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_75_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_76_Sayrelax' }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_77_Creamsplash' }
	} 
	var q_78 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_78_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_01' }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_79_Baristaorders' }
	} 
	var q_80 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_80_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_81_Lovejuice' }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_82_END' }
	} 

    var betweenstory_83 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_84 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_84_BEGIN' }
	} 
	var q_85 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_85_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_86_Cutline' }
	} 
	var q_87 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_87_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_88_Sayexcuseme' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_89_Subjectstares' }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_90_Sayrelax' }
	} 
	var q_91 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.', 'Jesse snatched a cookie and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_91_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_92_Creamsplash' }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_93_Baristaorders' }
	} 
	var q_94 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_94_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_95_Lovejuice' }
	} 
	var q_96 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_96_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_97_END' }
	} 

    var betweenstory_98 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_99 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_99_BEGIN' }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_100_Cutline' }
	} 
	var q_101 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_101_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_102_Stepinfront' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_103_Shove' }
	} 
	var q_104 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_104_ShoveXshove_ShoveXstare_66_Default_01' }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_105_Xshove' }
	} 
	var q_106 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cookie and crumbled it above Ben\'s head.', 'Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_106_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_107_Dessertcrumble' }
	} 
	var q_108 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_108_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_109_Callpoliceman' }
	} 
	var q_110 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_110_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_111_Hatecoffee' }
	} 
	var q_112 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_112_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_113_END' }
	} 

    var betweenstory_114 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_115 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_115_BEGIN' }
	} 
	var q_116 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_116_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_117_Cutline' }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_118_Stepinfront' }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_119_Subjectstares' }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_120_Sayrelax' }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_121_Creamsplash' }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_122_Callpoliceman' }
	} 
	var q_123 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_123_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_124_Lovejuice' }
	} 
	var q_125 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_125_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_126_END' }
	} 

    var betweenstory_127 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_128 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_128_BEGIN' }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_129_Cutline' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_130_Sayexcuseme' }
	} 
	var q_131 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Vera and gave her a very mean look.', 'Ben proceeded to give a slight shove to Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_131_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_132_Subjectstares' }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_133_Xshove' }
	} 
	var q_134 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Vera\'s face.', 'Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_134_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_135_Dessertcrumble' }
	} 
	var q_136 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_136_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_137_Callpoliceman' }
	} 
	var q_138 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_138_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_139_Lovejuice' }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_140_END' }
	} 

    var betweenstory_141 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_142 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_142_BEGIN' }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_143_Cutline' }
	} 
	var q_144 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Vera.', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_144_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_145_Stepinfront' }
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
	var s_149 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_149_Creamsplash' }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_150_Callpoliceman' }
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
	var q_155 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Vera, the first person in line.', 'Clumsily, he stepped on Vera\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_155_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_156_Stepfoot' }
	} 
	var q_157 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_157_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_158_Sayexcuseme' }
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
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_162_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_163_Baristaorders' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_164_Lovejuice' }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_165_END' }
	} 

    var betweenstory_166 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_167 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_167_BEGIN' }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_168_Cutline' }
	} 
	var q_169 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_169_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
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
	var q_172 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Silvia, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_172_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_173_Sayrelax' }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_174_Dessertcrumble' }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_175_Callpoliceman' }
	} 
	var q_176 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_176_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_177_Lovejuice' }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_178_END' }
	} 

    var betweenstory_179 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_180 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_180_BEGIN' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_181_Stepfoot' }
	} 
	var q_182 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_182_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_183_Sayexcuseme' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_184_Subjectstares' }
	} 
	var q_185 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Ben, \"Hey! Relax.\"', 'Ben simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_185_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_186_Sayrelax' }
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
	var q_191 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_191_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_192_END' }
	} 

    var betweenstory_193 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_194 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_194_BEGIN' }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_195_Cutline' }
	} 
	var q_196 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_196_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_197_Stepinfront' }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_198_Shove' }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_199_Xshove' }
	} 
	var q_200 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Ben\'s head.', 'Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_200_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_201_Dessertcrumble' }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_202_Baristaorders' }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_203_Hatecoffee' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_204_END' }
	} 

    var betweenstory_205 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_206 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_206_BEGIN' }
	} 
	var q_207 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_207_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_208_Cutline' }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_209_Sayexcuseme' }
	} 
	var q_210 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Silvia and gave her a very mean look.', 'Nick ignored her and proceeded to order a coffee.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_210_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_01' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_211_Subjectstares' }
	} 
	var q_212 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_212_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_213_Sayrelax' }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_214_Creamsplash' }
	} 
	var q_215 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_215_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_216_Callpoliceman' }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_217_Lovejuice' }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_218_END' }
	} 

    var betweenstory_219 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_220 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_220_BEGIN' }
	} 
	var q_221 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_221_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_222_Cutline' }
	} 
	var q_223 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_223_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_224_Sayexcuseme' }
	} 
	var q_225 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_225_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_226_Shove' }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_227_Xshove' }
	} 
	var q_228 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.', 'Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_228_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_229_Dessertcrumble' }
	} 
	var q_230 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_230_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_10' }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_231_Callpoliceman' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_232_Hatecoffee' }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_233_END' }
	} 

    var betweenstory_234 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_235 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_235_BEGIN' }
	} 
	var q_236 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_236_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_237_Cutline' }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_238_Stepinfront' }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_239_Shove' }
	} 
	var q_240 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Olivia, \"Hey! Relax.\"', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_240_ShoveSayrelax_ShoveSayrelax_100_Permute_01' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_241_Sayrelax' }
	} 
	var q_242 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_242_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_243_Creamsplash' }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_244_Callpoliceman' }
	} 
	var q_245 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_245_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_246_Hatecoffee' }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_247_END' }
	} 

    var betweenstory_248 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_249 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_249_BEGIN' }
	} 
	var q_250 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_250_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_251_Stepfoot' }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_252_Sayexcuseme' }
	} 
	var q_253 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_253_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_254_Subjectstares' }
	} 
	var q_255 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Ben, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_255_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_256_Sayrelax' }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_257_Creamsplash' }
	} 
	var q_258 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_258_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_259_Baristaorders' }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_260_Lovejuice' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_261_END' }
	} 

    var betweenstory_262 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_263 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_263_BEGIN' }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_264_Cutline' }
	} 
	var q_265 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_265_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_266_Stepinfront' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_267_Shove' }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_268_Xshove' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_269_Dessertcrumble' }
	} 
	var q_270 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_270_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_271_Baristaorders' }
	} 
	var q_272 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_272_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_273_Lovejuice' }
	} 
	var q_274 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_274_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_275_END' }
	} 

    var betweenstory_276 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_277 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_277_BEGIN' }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_278_Cutline' }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_279_Sayexcuseme' }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_280_Shove' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_281_Xshove' }
	} 
	var q_282 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Olivia\'s face.', 'Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_282_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_283_Dessertcrumble' }
	} 
	var q_284 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_284_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_285_Baristaorders' }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_286_Lovejuice' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_287_END' }
	} 

    var betweenstory_288 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_289 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_289_BEGIN' }
	} 
	var q_290 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Nick\'s foot.', 'Without hesitating she cut Nick, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_290_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_291_Cutline' }
	} 
	var q_292 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Nick promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_292_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_293_Stepinfront' }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_294_Shove' }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_295_Xshove' }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_296_Dessertcrumble' }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_297_Baristaorders' }
	} 
	var q_298 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_298_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_01' }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_299_Hatecoffee' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_300_END' }
	} 

    var betweenstory_301 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_302 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_302_BEGIN' }
	} 
	var q_303 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_303_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_304_Stepfoot' }
	} 
	var q_305 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_305_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_306_Sayexcuseme' }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_307_Shove' }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_308_Xstare' }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_309_Creamsplash' }
	} 
	var q_310 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_310_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_311_Callpoliceman' }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_312_Hatecoffee' }
	} 
	var q_313 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_313_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_314_END' }
	} 

    var betweenstory_315 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_316 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_316_BEGIN' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_317_Cutline' }
	} 
	var q_318 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_318_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_319_Sayexcuseme' }
	} 
	var q_320 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Silvia turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_320_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_321_Subjectstares' }
	} 
	var q_322 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Olivia, \"Hey! Relax.\"', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_322_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_323_Sayrelax' }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_324_Creamsplash' }
	} 
	var q_325 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_325_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_326_Callpoliceman' }
	} 
	var q_327 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_327_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_328_Hatecoffee' }
	} 
	var q_329 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_329_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_330_END' }
	} 

    var betweenstory_331 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_332 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_332_BEGIN' }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_333_Stepfoot' }
	} 
	var q_334 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_334_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_335_Sayexcuseme' }
	} 
	var q_336 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera ignored her and proceeded to order a coffee.', 'Silvia ignored her and proceeded to order a coffee.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_336_SayexcusemeIgnore_SayexcusemeIgnore_100_Alter_01' }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_337_Ignore' }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_338_Sayrelax' }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_339_Dessertcrumble' }
	} 
	var q_340 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Vera to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_340_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_341_Baristaorders' }
	} 
	var q_342 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_342_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_343_Lovejuice' }
	} 
	var q_344 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_344_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_345_END' }
	} 

    var betweenstory_346 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_347 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_347_BEGIN' }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_348_Cutline' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_349_Stepinfront' }
	} 
	var q_350 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick ignored him and proceeded to order a latte.', 'Nick turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_350_StepinfrontIgnore_StepinfrontSubjectstares_16_Default_01' }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_351_Ignore' }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_352_Sayrelax' }
	} 
	var q_353 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Jesse snatched a lemonsquare and crumbled it above Nick\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_353_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_354_Dessertcrumble' }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_355_Baristaorders' }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_356_Lovejuice' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_357_END' }
	} 

    var betweenstory_358 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_359 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_359_BEGIN' }
	} 
	var q_360 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_360_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_361_Cutline' }
	} 
	var q_362 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_362_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_363_Stepinfront' }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_364_Subjectstares' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_365_Sayrelax' }
	} 
	var q_366 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Nick snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_366_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_367_Creamsplash' }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_368_Callpoliceman' }
	} 
	var q_369 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_369_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_370_Hatecoffee' }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_371_END' }
	} 

    var betweenstory_372 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_373 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_373_BEGIN' }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_374_Cutline' }
	} 
	var q_375 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_375_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_376_Sayexcuseme' }
	} 
	var q_377 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored him and proceeded to order a coffee.', 'Jesse ignored her and proceeded to order a coffee.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_377_SayexcusemeIgnore_SayexcusemeIgnore_100_Alter_10' }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_378_Ignore' }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_379_Sayrelax' }
	} 
	var q_380 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_380_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_381_Creamsplash' }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_382_Callpoliceman' }
	} 
	var q_383 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_383_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_384_Lovejuice' }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_385_END' }
	} 

    var betweenstory_386 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_387 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_387_BEGIN' }
	} 
	var q_388 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_388_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_389_Cutline' }
	} 
	var q_390 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_390_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_391_Sayexcuseme' }
	} 
	var q_392 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Olivia and gave her a very mean look.', 'Olivia turned to Nick and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_392_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_393_Subjectstares' }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_394_Sayrelax' }
	} 
	var q_395 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_395_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_396_Creamsplash' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_397_Callpoliceman' }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_398_Lovejuice' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_399_END' }
	} 

    var betweenstory_400 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_401 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_401_BEGIN' }
	} 
	var q_402 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_402_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_403_Cutline' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_404_Sayexcuseme' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_405_Subjectstares' }
	} 
	var q_406 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Jesse, \"Hey! Relax.\"', 'Jesse simply said to Olivia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_406_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_407_Sayrelax' }
	} 
	var s_408 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_408_Creamsplash' }
	} 
	var q_409 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_409_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_410_Baristaorders' }
	} 
	var q_411 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_411_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_10' }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_412_Hatecoffee' }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_413_END' }
	} 

    var betweenstory_414 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_415 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_415_BEGIN' }
	} 
	var q_416 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_416_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_417_Stepfoot' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_418_Sayexcuseme' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_419_Shove' }
	} 
	var q_420 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stared with rage into Olivia\'s eyes.', 'In retaliation, Vera pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_420_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_421_Xshove' }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_422_Dessertcrumble' }
	} 
	var q_423 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_423_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_424_Baristaorders' }
	} 
	var q_425 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_425_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_426_Lovejuice' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_427_END' }
	} 

    var betweenstory_428 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_429 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_429_BEGIN' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_430_Cutline' }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_431_Sayexcuseme' }
	} 
	var q_432 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Ben turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_432_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_433_Subjectstares' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_434_Xshove' }
	} 
	var q_435 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_435_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_436_Dessertcrumble' }
	} 
	var q_437 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_437_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_438_Baristaorders' }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_439_Lovejuice' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_440_END' }
	} 

    var betweenstory_441 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_442 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_442_BEGIN' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_443_Cutline' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_444_Stepinfront' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_445_Subjectstares' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_446_Xstare' }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_447_Creamsplash' }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_448_Callpoliceman' }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_449_Lovejuice' }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_450_END' }
	} 

    var betweenstory_451 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_452 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_452_BEGIN' }
	} 
	var q_453 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_453_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_454_Cutline' }
	} 
	var q_455 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Vera.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_455_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 's_456_Stepinfront' }
	} 
	var q_457 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera proceeded to give a slight shove to Jesse.', 'Vera turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_457_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_458_Subjectstares' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_459_Xshove' }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_460_Dessertcrumble' }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_461_Baristaorders' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_462_Lovejuice' }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_463_END' }
	} 

    var betweenstory_464 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_465 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_465_BEGIN' }
	} 
	var q_466 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_466_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_467_Cutline' }
	} 
	var q_468 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Vera promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_468_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_469_Stepinfront' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_470_Subjectstares' }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_471_Sayrelax' }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_472_Dessertcrumble' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_473_Baristaorders' }
	} 
	var q_474 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_474_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_475_Lovejuice' }
	} 
	var q_476 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_476_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_477_END' }
	} 

    var betweenstory_478 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_479 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_479_BEGIN' }
	} 
	var q_480 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_480_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_481_Stepfoot' }
	} 
	var q_482 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_482_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_483_Sayexcuseme' }
	} 
	var q_484 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Vera.', 'Olivia turned to Vera and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_484_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_01' }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_485_Shove' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_486_Xstare' }
	} 
	var q_487 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Vera\'s head.', 'Vera snatched a muffin and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_487_XstareDessertcrumble_XstareDessertcrumble_100_Permute_01' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_488_Dessertcrumble' }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_489_Baristaorders' }
	} 
	var q_490 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_490_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_491_Lovejuice' }
	} 
	var q_492 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_492_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_493_END' }
	} 

    var betweenstory_494 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_495 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_495_BEGIN' }
	} 
	var q_496 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_496_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_497_Cutline' }
	} 
	var q_498 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_498_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_499_Stepinfront' }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_500_Subjectstares' }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_501_Sayrelax' }
	} 
	var q_502 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Nick snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_502_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_503_Creamsplash' }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_504_Callpoliceman' }
	} 
	var q_505 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_505_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_506_Lovejuice' }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_507_END' }
	} 

    var betweenstory_508 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_509 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_509_BEGIN' }
	} 
	var q_510 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_510_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_511_Cutline' }
	} 
	var q_512 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_512_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_513_Stepinfront' }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_514_Shove' }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_515_Xstare' }
	} 
	var q_516 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cake and crumbled it above Silvia\'s head.', 'Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_516_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_517 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_517_Creamsplash' }
	} 
	var q_518 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_518_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_10' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_519_Baristaorders' }
	} 
	var q_520 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_520_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_521_Lovejuice' }
	} 
	var q_522 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_522_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_523_END' }
	} 

    var betweenstory_524 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_525 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_525_BEGIN' }
	} 
	var q_526 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_526_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_527_Cutline' }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_528_Stepinfront' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_529_Subjectstares' }
	} 
	var q_530 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Olivia\'s eyes.', 'Nick simply said to Olivia, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_530_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_10' }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_531_Sayrelax' }
	} 
	var q_532 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Nick\'s head.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_532_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_533_Creamsplash' }
	} 
	var q_534 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_534_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_535_Callpoliceman' }
	} 
	var q_536 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_536_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_537_Hatecoffee' }
	} 
	var q_538 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_538_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_539_END' }
	} 

    var betweenstory_540 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_541 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_541_BEGIN' }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_542_Cutline' }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_543_Sayexcuseme' }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_544_Subjectstares' }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_545_Sayrelax' }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_546_Creamsplash' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_547_Callpoliceman' }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_548_Hatecoffee' }
	} 
	var q_549 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_549_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_550_END' }
	} 

    var betweenstory_551 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_552 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_552_BEGIN' }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_553_Cutline' }
	} 
	var q_554 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Jesse promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_554_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_555_Stepinfront' }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_556_Subjectstares' }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_557_Xshove' }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_558_Dessertcrumble' }
	} 
	var q_559 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_559_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_560_Baristaorders' }
	} 
	var q_561 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_561_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_562_Lovejuice' }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_563_END' }
	} 

    var betweenstory_564 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_565 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_565_BEGIN' }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_566_Cutline' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_567_Stepinfront' }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_568_Subjectstares' }
	} 
	var q_569 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Jesse, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_569_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_570_Sayrelax' }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_571_Creamsplash' }
	} 
	var q_572 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_572_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_573_Baristaorders' }
	} 
	var q_574 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_574_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_575_Lovejuice' }
	} 
	var q_576 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_576_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_577_END' }
	} 

    var betweenstory_578 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_579 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_579_BEGIN' }
	} 
	var q_580 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_580_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_581_Cutline' }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_582_Stepinfront' }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_583_Shove' }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_584_Xshove' }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_585_Dessertcrumble' }
	} 
	var q_586 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_586_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_587_Baristaorders' }
	} 
	var q_588 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_588_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_589_Lovejuice' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_590_END' }
	} 

    var betweenstory_591 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_592 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_592_BEGIN' }
	} 
	var q_593 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_593_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_594_Stepfoot' }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_595_Sayexcuseme' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_596_Subjectstares' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_597_Xshove' }
	} 
	var q_598 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a cake and crumbled it above Olivia\'s head.', 'Olivia snatched a cake and crumbled it above Vera\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_598_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_599_Dessertcrumble' }
	} 
	var q_600 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_600_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_601_Baristaorders' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_602_Hatecoffee' }
	} 
	var q_603 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_603_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_604_END' }
	} 

    var betweenstory_605 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_606 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_606_BEGIN' }
	} 
	var q_607 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_607_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_608_Cutline' }
	} 
	var q_609 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_609_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_610_Stepinfront' }
	} 
	var q_611 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_611_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_612_Subjectstares' }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_613_Sayrelax' }
	} 
	var s_614 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_614_Dessertcrumble' }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_615_Baristaorders' }
	} 
	var q_616 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_616_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_617_Lovejuice' }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_618_END' }
	} 

    var betweenstory_619 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_620 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_620_BEGIN' }
	} 
	var q_621 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Nick, the first person in line.', 'Clumsily, he stepped on Nick\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_621_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_622_Stepfoot' }
	} 
	var q_623 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_623_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_624_Sayexcuseme' }
	} 
	var q_625 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_625_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_626_Shove' }
	} 
	var q_627 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Ben\'s eyes.', 'Ben stared with rage into Nick\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_627_ShoveXstare_ShoveXstare_100_Permute_01' }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_628_Xstare' }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_629_Creamsplash' }
	} 
	var q_630 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_630_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_631_Callpoliceman' }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_632_Hatecoffee' }
	} 
	var q_633 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_633_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
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
	var s_637 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_637_Cutline' }
	} 
	var q_638 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Vera promptly stepped back in front of Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_638_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_639_Sayexcuseme' }
	} 
	var q_640 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Vera.', 'Vera proceeded to give a slight shove to Nick.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_640_SayexcusemeShove_SayexcusemeShove_100_Permute_01' }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_641_Shove' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_642_Xshove' }
	} 
	var q_643 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cookie and crumbled it above Vera\'s head.', 'Nick picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_643_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
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
	var q_646 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_646_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_647_Lovejuice' }
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
	var q_651 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_651_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_652_Cutline' }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_653_Sayexcuseme' }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_654_Subjectstares' }
	} 
	var q_655 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Vera, \"Hey! Relax.\"', 'Vera simply said to Jesse, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_655_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_656_Sayrelax' }
	} 
	var q_657 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Vera\'s head.', 'Jesse picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_657_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_658_Dessertcrumble' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_659_Baristaorders' }
	} 
	var q_660 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_660_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_10' }
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
	var q_665 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_665_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_666_Cutline' }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_667_Stepinfront' }
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
	var s_670 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_670_Dessertcrumble' }
	} 
	var q_671 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_671_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_672_Callpoliceman' }
	} 
	var q_673 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_673_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_674_Hatecoffee' }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_675_END' }
	} 

    var betweenstory_676 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_677 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_677_BEGIN' }
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
	var q_682 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Vera, \"Hey! Relax.\"', 'Olivia stared with rage into Vera\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_682_IgnoreXstare_IgnoreSayrelax_66_Default_10' }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_683_Xstare' }
	} 
	var q_684 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_684_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_685_Creamsplash' }
	} 
	var q_686 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_686_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_687_Callpoliceman' }
	} 
	var q_688 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_688_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_689 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_689_Lovejuice' }
	} 
	var q_690 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_690_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_691_END' }
	} 

    var betweenstory_692 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,questions_begin_10,s_11,s_12,s_13,s_14,q_15,s_16,q_17,s_18,s_19,s_20,q_21,s_22,
betweenstory_23,s_24,q_25,s_26,s_27,s_28,q_29,s_30,q_31,s_32,q_33,s_34,q_35,s_36,q_37,s_38,
betweenstory_39,s_40,q_41,s_42,s_43,q_44,s_45,q_46,s_47,s_48,q_49,s_50,q_51,s_52,q_53,s_54,
betweenstory_55,s_56,s_57,q_58,s_59,s_60,s_61,s_62,s_63,q_64,s_65,q_66,s_67,
betweenstory_68,s_69,s_70,q_71,s_72,q_73,s_74,q_75,s_76,s_77,q_78,s_79,q_80,s_81,s_82,
betweenstory_83,s_84,q_85,s_86,q_87,s_88,s_89,s_90,q_91,s_92,s_93,q_94,s_95,q_96,s_97,
betweenstory_98,s_99,s_100,q_101,s_102,s_103,q_104,s_105,q_106,s_107,q_108,s_109,q_110,s_111,q_112,s_113,
betweenstory_114,s_115,q_116,s_117,s_118,s_119,s_120,s_121,s_122,q_123,s_124,q_125,s_126,
betweenstory_127,s_128,s_129,s_130,q_131,s_132,s_133,q_134,s_135,q_136,s_137,q_138,s_139,s_140,
betweenstory_141,s_142,s_143,q_144,s_145,s_146,q_147,s_148,s_149,s_150,s_151,s_152,
betweenstory_153,s_154,q_155,s_156,q_157,s_158,s_159,s_160,s_161,q_162,s_163,s_164,s_165,
betweenstory_166,s_167,s_168,q_169,s_170,s_171,q_172,s_173,s_174,s_175,q_176,s_177,s_178,
betweenstory_179,s_180,s_181,q_182,s_183,s_184,q_185,s_186,s_187,q_188,s_189,s_190,q_191,s_192,
betweenstory_193,s_194,s_195,q_196,s_197,s_198,s_199,q_200,s_201,s_202,s_203,s_204,
betweenstory_205,s_206,q_207,s_208,s_209,q_210,s_211,q_212,s_213,s_214,q_215,s_216,s_217,s_218,
betweenstory_219,s_220,q_221,s_222,q_223,s_224,q_225,s_226,s_227,q_228,s_229,q_230,s_231,s_232,s_233,
betweenstory_234,s_235,q_236,s_237,s_238,s_239,q_240,s_241,q_242,s_243,s_244,q_245,s_246,s_247,
betweenstory_248,s_249,q_250,s_251,s_252,q_253,s_254,q_255,s_256,s_257,q_258,s_259,s_260,s_261,
betweenstory_262,s_263,s_264,q_265,s_266,s_267,s_268,s_269,q_270,s_271,q_272,s_273,q_274,s_275,
betweenstory_276,s_277,s_278,s_279,s_280,s_281,q_282,s_283,q_284,s_285,s_286,s_287,
betweenstory_288,s_289,q_290,s_291,q_292,s_293,s_294,s_295,s_296,s_297,q_298,s_299,s_300,
betweenstory_301,s_302,q_303,s_304,q_305,s_306,s_307,s_308,s_309,q_310,s_311,s_312,q_313,s_314,
betweenstory_315,s_316,s_317,q_318,s_319,q_320,s_321,q_322,s_323,s_324,q_325,s_326,q_327,s_328,q_329,s_330,
betweenstory_331,s_332,s_333,q_334,s_335,q_336,s_337,s_338,s_339,q_340,s_341,q_342,s_343,q_344,s_345,
betweenstory_346,s_347,s_348,s_349,q_350,s_351,s_352,q_353,s_354,s_355,s_356,s_357,
betweenstory_358,s_359,q_360,s_361,q_362,s_363,s_364,s_365,q_366,s_367,s_368,q_369,s_370,s_371,
betweenstory_372,s_373,s_374,q_375,s_376,q_377,s_378,s_379,q_380,s_381,s_382,q_383,s_384,s_385,
betweenstory_386,s_387,q_388,s_389,q_390,s_391,q_392,s_393,s_394,q_395,s_396,s_397,s_398,s_399,
betweenstory_400,s_401,q_402,s_403,s_404,s_405,q_406,s_407,s_408,q_409,s_410,q_411,s_412,s_413,
betweenstory_414,s_415,q_416,s_417,s_418,s_419,q_420,s_421,s_422,q_423,s_424,q_425,s_426,s_427,
betweenstory_428,s_429,s_430,s_431,q_432,s_433,s_434,q_435,s_436,q_437,s_438,s_439,s_440,
betweenstory_441,s_442,s_443,s_444,s_445,s_446,s_447,s_448,s_449,s_450,
betweenstory_451,s_452,q_453,s_454,q_455,s_456,q_457,s_458,s_459,s_460,s_461,s_462,s_463,
betweenstory_464,s_465,q_466,s_467,q_468,s_469,s_470,s_471,s_472,s_473,q_474,s_475,q_476,s_477,
betweenstory_478,s_479,q_480,s_481,q_482,s_483,q_484,s_485,s_486,q_487,s_488,s_489,q_490,s_491,q_492,s_493,
betweenstory_494,s_495,q_496,s_497,q_498,s_499,s_500,s_501,q_502,s_503,s_504,q_505,s_506,s_507,
betweenstory_508,s_509,q_510,s_511,q_512,s_513,s_514,s_515,q_516,s_517,q_518,s_519,q_520,s_521,q_522,s_523,
betweenstory_524,s_525,q_526,s_527,s_528,s_529,q_530,s_531,q_532,s_533,q_534,s_535,q_536,s_537,q_538,s_539,
betweenstory_540,s_541,s_542,s_543,s_544,s_545,s_546,s_547,s_548,q_549,s_550,
betweenstory_551,s_552,s_553,q_554,s_555,s_556,s_557,s_558,q_559,s_560,q_561,s_562,s_563,
betweenstory_564,s_565,s_566,s_567,s_568,q_569,s_570,s_571,q_572,s_573,q_574,s_575,q_576,s_577,
betweenstory_578,s_579,q_580,s_581,s_582,s_583,s_584,s_585,q_586,s_587,q_588,s_589,s_590,
betweenstory_591,s_592,q_593,s_594,s_595,s_596,s_597,q_598,s_599,q_600,s_601,s_602,q_603,s_604,
betweenstory_605,s_606,q_607,s_608,q_609,s_610,q_611,s_612,s_613,s_614,s_615,q_616,s_617,s_618,
betweenstory_619,s_620,q_621,s_622,q_623,s_624,q_625,s_626,q_627,s_628,s_629,q_630,s_631,s_632,q_633,s_634,
betweenstory_635,s_636,s_637,q_638,s_639,q_640,s_641,s_642,q_643,s_644,s_645,q_646,s_647,s_648,
betweenstory_649,s_650,q_651,s_652,s_653,s_654,q_655,s_656,q_657,s_658,s_659,q_660,s_661,s_662,
betweenstory_663,s_664,q_665,s_666,s_667,s_668,s_669,s_670,q_671,s_672,q_673,s_674,s_675,
betweenstory_676,s_677,s_678,q_679,s_680,s_681,q_682,s_683,q_684,s_685,q_686,s_687,q_688,s_689,q_690,s_691,
betweenstory_692,],

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

