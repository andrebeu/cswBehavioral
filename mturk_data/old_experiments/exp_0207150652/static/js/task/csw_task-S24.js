

// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var intro1 = {
	type: 'instructions',
	pages: ['** After reading, press spacebar. ** ']
	}
var intro2 = {
	type: 'instructions',
	pages: ['There are two parts to this experiment.']
	} 
var intro3 = {
	type: 'instructions',
	pages: ['First you will read a series of stories, a sentence at a time.']
	}
var intro4 = {
	type: 'instructions',
	pages: ['As you read, pay attention to the sequence of events, because eventually you will begin to be asked to predict what happens next in the story.']
	} 
var intro5 = {
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

	var s_10 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_10_BEGIN' }
	} 
	var s_11 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_11_Cutline' }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Silvia.'],
		data: { state_info: 's_12_Stepinfront' }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_13_Ignore' }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_14_Xstare' }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_15_Creamsplash' }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_16_Callpoliceman' }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_17_Lovejuice' }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_18_END' }
	} 

    var betweenstory_19 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_20 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_20_BEGIN' }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_21_Cutline' }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_22_Stepinfront' }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_23_Subjectstares' }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_24_Xshove' }
	} 
	var s_25 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_25_Creamsplash' }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_26_Callpoliceman' }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_27_Hatecoffee' }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_28_END' }
	} 

    var betweenstory_29 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_30 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_30_BEGIN' }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_31_Cutline' }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_32_Sayexcuseme' }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_33_Shove' }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_34_Xshove' }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_35_Dessertcrumble' }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_36_Callpoliceman' }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_37_Hatecoffee' }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
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
	var s_41 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_41_Cutline' }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Olivia.'],
		data: { state_info: 's_42_Stepinfront' }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_43_Subjectstares' }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_44_Xstare' }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 's_45_Creamsplash' }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_46_Callpoliceman' }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_47_Hatecoffee' }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_48_END' }
	} 

    var betweenstory_49 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

    var questions_begin_50 = {
      type: 'instructions',
      pages: [' ** you will now begin to be probed with questions mid story ** ']
    } 

	var s_51 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_51_BEGIN' }
	} 
	var q_52 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.'],
		data: { state_info: 'q_52_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_53_Cutline' }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_54_Sayexcuseme' }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ['Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_55_Subjectstares' }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_56_Sayrelax' }
	} 
	var q_57 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_57_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_58_Creamsplash' }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_59_Baristaorders' }
	} 
	var q_60 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_60_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_61 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_61_Lovejuice' }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_62_END' }
	} 

    var betweenstory_63 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_64 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_64_BEGIN' }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_65_Cutline' }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_66_Sayexcuseme' }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_67_Subjectstares' }
	} 
	var q_68 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Ben, \"Hey! Relax.\"', 'Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_68_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_69_Sayrelax' }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_70_Creamsplash' }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_71_Baristaorders' }
	} 
	var q_72 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_72_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_73_Lovejuice' }
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
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_76_BEGIN' }
	} 
	var q_77 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_77_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_78_Cutline' }
	} 
	var q_79 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 'q_79_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_80_Stepinfront' }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_81_Shove' }
	} 
	var q_82 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'In retaliation, Ben pushed Olivia.'],
		data: { state_info: 'q_82_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_83_Xshove' }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_84_Dessertcrumble' }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_85_Callpoliceman' }
	} 
	var q_86 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_86_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_87_Hatecoffee' }
	} 
	var q_88 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_88_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_89_END' }
	} 

    var betweenstory_90 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_91 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_91_BEGIN' }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_92_Cutline' }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_93_Stepinfront' }
	} 
	var q_94 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Nick and gave him a very mean look.', 'Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_94_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_95_Subjectstares' }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_96_Sayrelax' }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_97_Creamsplash' }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_98_Callpoliceman' }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_99_Lovejuice' }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_100_END' }
	} 

    var betweenstory_101 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_102 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_102_BEGIN' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_103_Cutline' }
	} 
	var q_104 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera promptly stepped back in front of Ben.', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_104_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_105_Sayexcuseme' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_106_Subjectstares' }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_107_Xshove' }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_108_Dessertcrumble' }
	} 
	var q_109 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 'q_109_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_10' }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_110_Callpoliceman' }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_111_Lovejuice' }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_112_END' }
	} 

    var betweenstory_113 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_114 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_114_BEGIN' }
	} 
	var q_115 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		data: { state_info: 'q_115_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_116_Cutline' }
	} 
	var q_117 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Vera.'],
		data: { state_info: 'q_117_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_118_Stepinfront' }
	} 
	var q_119 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera proceeded to give a slight shove to Nick.', 'Vera turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_119_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['Vera turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_120_Subjectstares' }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Nick simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_121_Sayrelax' }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['Vera snatched a cookie and crumbled it above Nick\'s head.'],
		data: { state_info: 's_122_Dessertcrumble' }
	} 
	var q_123 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_123_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_124_Callpoliceman' }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_125_Lovejuice' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_126_END' }
	} 

    var betweenstory_127 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_128 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_128_BEGIN' }
	} 
	var q_129 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 'q_129_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_130_Stepfoot' }
	} 
	var q_131 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_131_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_132_Sayexcuseme' }
	} 
	var q_133 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Vera and gave her a very mean look.', 'Vera turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_133_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ['Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_134_Subjectstares' }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_135_Sayrelax' }
	} 
	var q_136 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Vera\'s face.', 'Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_136_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ['Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_137_Dessertcrumble' }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_138_Baristaorders' }
	} 
	var q_139 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_139_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_140_Lovejuice' }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_141_END' }
	} 

    var betweenstory_142 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_143 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_143_BEGIN' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_144_Cutline' }
	} 
	var q_145 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_145_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_146_Stepinfront' }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_147_Subjectstares' }
	} 
	var q_148 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Olivia, \"Hey! Relax.\"', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_148_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_149_Sayrelax' }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_150_Dessertcrumble' }
	} 
	var q_151 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_151_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_01' }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_152_Callpoliceman' }
	} 
	var q_153 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_153_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_154_Lovejuice' }
	} 
	var q_155 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_155_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_156_END' }
	} 

    var betweenstory_157 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_158 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_158_BEGIN' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_159_Stepfoot' }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_160_Sayexcuseme' }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_161_Subjectstares' }
	} 
	var q_162 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Silvia, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 'q_162_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_163_Sayrelax' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_164_Dessertcrumble' }
	} 
	var q_165 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_165_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_166_Baristaorders' }
	} 
	var q_167 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_167_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_168_Lovejuice' }
	} 
	var q_169 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_169_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 'q_173_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_174_Cutline' }
	} 
	var q_175 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 'q_175_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_176_Stepinfront' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_177_Shove' }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_178_Xshove' }
	} 
	var q_179 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cake and crumbled it above Silvia\'s head.', 'Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_179_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_180_Dessertcrumble' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_181_Baristaorders' }
	} 
	var q_182 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_182_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_10' }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_183_Hatecoffee' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_184_END' }
	} 

    var betweenstory_185 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_186 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_186_BEGIN' }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_187_Cutline' }
	} 
	var q_188 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 'q_188_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_189_Sayexcuseme' }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_190_Subjectstares' }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_191_Sayrelax' }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_192_Creamsplash' }
	} 
	var q_193 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 'q_193_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_194_Callpoliceman' }
	} 
	var q_195 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_195_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_196_Lovejuice' }
	} 
	var q_197 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_197_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_198_END' }
	} 

    var betweenstory_199 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_200 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_200_BEGIN' }
	} 
	var q_201 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_201_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_202_Cutline' }
	} 
	var q_203 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_203_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_204_Sayexcuseme' }
	} 
	var q_205 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 'q_205_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_01' }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_206_Shove' }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_207_Xshove' }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_208_Dessertcrumble' }
	} 
	var q_209 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_209_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_210_Baristaorders' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_211_Lovejuice' }
	} 
	var q_212 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_212_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_213_END' }
	} 

    var betweenstory_214 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_215 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_215_BEGIN' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_216_Cutline' }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_217_Stepinfront' }
	} 
	var q_218 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Silvia proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_218_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_219_Shove' }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_220_Sayrelax' }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_221_Creamsplash' }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_222_Callpoliceman' }
	} 
	var q_223 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_223_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_224_Hatecoffee' }
	} 
	var q_225 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_225_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_226_END' }
	} 

    var betweenstory_227 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_228 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_228_BEGIN' }
	} 
	var q_229 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 'q_229_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_230_Stepfoot' }
	} 
	var q_231 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_231_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_232_Sayexcuseme' }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_233_Subjectstares' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_234_Sayrelax' }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_235_Creamsplash' }
	} 
	var q_236 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_236_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_01' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_237_Baristaorders' }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_238_Lovejuice' }
	} 
	var q_239 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_239_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_240_END' }
	} 

    var betweenstory_241 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_242 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_242_BEGIN' }
	} 
	var q_243 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_243_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_244_Cutline' }
	} 
	var q_245 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_245_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_246_Stepinfront' }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_247_Shove' }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_248_Xshove' }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_249_Dessertcrumble' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_250_Baristaorders' }
	} 
	var q_251 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_251_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_252_Lovejuice' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_253_END' }
	} 

    var betweenstory_254 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_255 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_255_BEGIN' }
	} 
	var q_256 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 'q_256_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_257_Cutline' }
	} 
	var q_258 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_258_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_259_Sayexcuseme' }
	} 
	var q_260 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_260_SayexcusemeShove_SayexcusemeIgnore_80_Default_01' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_261_Shove' }
	} 
	var q_262 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'Olivia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 'q_262_ShoveXshove_ShoveXstare_66_Default_01' }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_263_Xshove' }
	} 
	var q_264 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_264_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_265_Dessertcrumble' }
	} 
	var q_266 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_266_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_267_Baristaorders' }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_268_Lovejuice' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
	var q_272 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Nick\'s foot.', 'Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 'q_272_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_273_Cutline' }
	} 
	var q_274 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_274_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_275_Stepinfront' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_276_Shove' }
	} 
	var q_277 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Olivia\'s eyes.', 'In retaliation, Nick pushed Olivia.'],
		data: { state_info: 'q_277_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_278_Xshove' }
	} 
	var q_279 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 'q_279_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_280_Dessertcrumble' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_281_Baristaorders' }
	} 
	var q_282 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_282_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_10' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_283_Hatecoffee' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_284_END' }
	} 

    var betweenstory_285 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_286 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_286_BEGIN' }
	} 
	var q_287 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_287_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_288_Stepfoot' }
	} 
	var q_289 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_289_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_290_Sayexcuseme' }
	} 
	var q_291 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a coffee.', 'Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 'q_291_SayexcusemeShove_SayexcusemeIgnore_80_Default_10' }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_292_Shove' }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_293_Xstare' }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_294_Creamsplash' }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_295_Callpoliceman' }
	} 
	var q_296 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_296_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_297_Hatecoffee' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_298_END' }
	} 

    var betweenstory_299 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_300 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_300_BEGIN' }
	} 
	var q_301 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.'],
		data: { state_info: 'q_301_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_302_Cutline' }
	} 
	var q_303 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_303_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_304_Sayexcuseme' }
	} 
	var q_305 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Olivia and gave her a very mean look.', 'Olivia turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_305_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_306_Subjectstares' }
	} 
	var q_307 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_307_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_308_Sayrelax' }
	} 
	var q_309 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.', 'Silvia snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_309_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_310_Creamsplash' }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_311_Callpoliceman' }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_312_Hatecoffee' }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_313_END' }
	} 

    var betweenstory_314 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_315 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_315_BEGIN' }
	} 
	var q_316 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Silvia\'s foot.', 'Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 'q_316_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_317_Stepfoot' }
	} 
	var q_318 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_318_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_319_Sayexcuseme' }
	} 
	var q_320 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera ignored her and proceeded to order a coffee.', 'Vera turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_320_SayexcusemeIgnore_SayexcusemeSubjectstares_16_Default_01' }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_321_Ignore' }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_322_Sayrelax' }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_323_Dessertcrumble' }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_324_Baristaorders' }
	} 
	var q_325 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_325_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_326_Lovejuice' }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_327_END' }
	} 

    var betweenstory_328 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_329 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_329_BEGIN' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_330_Cutline' }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_331_Stepinfront' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_332_Ignore' }
	} 
	var q_333 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Nick\'s eyes.', 'Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_333_IgnoreSayrelax_IgnoreXstare_33_Default_10' }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_334_Sayrelax' }
	} 
	var q_335 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.', 'Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_335_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_336_Dessertcrumble' }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_337_Baristaorders' }
	} 
	var q_338 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_338_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_339_Lovejuice' }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
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
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_343_Cutline' }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_344_Stepinfront' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_345_Subjectstares' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_346_Sayrelax' }
	} 
	var q_347 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Nick snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_347_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_348_Creamsplash' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_349_Callpoliceman' }
	} 
	var q_350 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_350_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_351_Hatecoffee' }
	} 
	var q_352 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_352_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_353_END' }
	} 

    var betweenstory_354 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_355 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_355_BEGIN' }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_356_Cutline' }
	} 
	var q_357 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 'q_357_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_358_Sayexcuseme' }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_359_Ignore' }
	} 
	var q_360 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_360_IgnoreSayrelax_IgnoreSayrelax_100_Permute_10' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_361_Sayrelax' }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_362_Creamsplash' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_363_Callpoliceman' }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_364_Lovejuice' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_365_END' }
	} 

    var betweenstory_366 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_367 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_367_BEGIN' }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_368_Cutline' }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_369_Sayexcuseme' }
	} 
	var q_370 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a mocha.', 'Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_370_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_10' }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_371_Subjectstares' }
	} 
	var q_372 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_372_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_373_Sayrelax' }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_374_Creamsplash' }
	} 
	var q_375 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_375_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_376_Callpoliceman' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_377_Lovejuice' }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_378_END' }
	} 

    var betweenstory_379 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_380 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_380_BEGIN' }
	} 
	var q_381 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_381_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_382_Cutline' }
	} 
	var q_383 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_383_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_384_Sayexcuseme' }
	} 
	var q_385 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Jesse turned to Olivia and gave her a very mean look.'],
		data: { state_info: 'q_385_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_386_Subjectstares' }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_387_Sayrelax' }
	} 
	var q_388 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.', 'Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_388_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_389_Creamsplash' }
	} 
	var q_390 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_390_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_01' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_391_Baristaorders' }
	} 
	var q_392 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_392_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_01' }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_393_Hatecoffee' }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_394_END' }
	} 

    var betweenstory_395 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_396 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_396_BEGIN' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_397_Stepfoot' }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_398_Sayexcuseme' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_399_Shove' }
	} 
	var q_400 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Vera.', 'In retaliation, Vera pushed Olivia.'],
		data: { state_info: 'q_400_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_401_Xshove' }
	} 
	var q_402 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.', 'Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_402_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_403_Dessertcrumble' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_404_Baristaorders' }
	} 
	var q_405 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_405_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_406_Lovejuice' }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_407_END' }
	} 

    var betweenstory_408 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_409 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_409_BEGIN' }
	} 
	var q_410 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_410_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_411_Cutline' }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_412_Sayexcuseme' }
	} 
	var q_413 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_413_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_01' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_414_Subjectstares' }
	} 
	var q_415 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'In retaliation, Silvia pushed Ben.'],
		data: { state_info: 'q_415_SubjectstaresXshove_SubjectstaresXshove_100_Permute_10' }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_416_Xshove' }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_417_Dessertcrumble' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_418_Baristaorders' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_419_Lovejuice' }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_420_END' }
	} 

    var betweenstory_421 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_422 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_422_BEGIN' }
	} 
	var q_423 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 'q_423_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_424_Cutline' }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_425_Stepinfront' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_426_Subjectstares' }
	} 
	var q_427 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Nick\'s eyes.', 'Olivia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_427_SubjectstaresXstare_SubjectstaresSayrelax_14_Default_01' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_428_Xstare' }
	} 
	var q_429 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_429_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_430_Creamsplash' }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_431_Callpoliceman' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_432_Lovejuice' }
	} 
	var q_433 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_433_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_434_END' }
	} 

    var betweenstory_435 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_436 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_436_BEGIN' }
	} 
	var q_437 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_437_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_438_Cutline' }
	} 
	var q_439 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 'q_439_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 's_440_Stepinfront' }
	} 
	var q_441 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Jesse and gave him a very mean look.', 'Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_441_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_442_Subjectstares' }
	} 
	var q_443 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Jesse.', 'In retaliation, Jesse pushed Vera.'],
		data: { state_info: 'q_443_SubjectstaresXshove_SubjectstaresXshove_100_Permute_10' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_444_Xshove' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_445_Dessertcrumble' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_446_Baristaorders' }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_447_Lovejuice' }
	} 
	var q_448 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_448_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_449_END' }
	} 

    var betweenstory_450 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_451 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_451_BEGIN' }
	} 
	var q_452 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 'q_452_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_453_Cutline' }
	} 
	var q_454 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Vera.'],
		data: { state_info: 'q_454_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_455_Stepinfront' }
	} 
	var q_456 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Silvia and gave her a very mean look.', 'Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_456_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_457_Subjectstares' }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_458_Sayrelax' }
	} 
	var q_459 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.', 'Silvia picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 'q_459_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_460_Dessertcrumble' }
	} 
	var q_461 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_461_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_462_Baristaorders' }
	} 
	var q_463 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_463_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_464_Lovejuice' }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_465_END' }
	} 

    var betweenstory_466 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_467 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_467_BEGIN' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_468_Stepfoot' }
	} 
	var q_469 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_469_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_470_Sayexcuseme' }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_471_Shove' }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_472_Xstare' }
	} 
	var q_473 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.', 'Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_473_XstareDessertcrumble_XstareCreamsplash_10_Default_10' }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_474_Dessertcrumble' }
	} 
	var q_475 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_475_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_476_Baristaorders' }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_477_Lovejuice' }
	} 
	var q_478 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_478_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_479_END' }
	} 

    var betweenstory_480 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_481 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_481_BEGIN' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_482_Cutline' }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_483_Stepinfront' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_484_Subjectstares' }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_485_Sayrelax' }
	} 
	var q_486 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_486_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_487_Creamsplash' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_488_Callpoliceman' }
	} 
	var q_489 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_489_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_490_Lovejuice' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_491_END' }
	} 

    var betweenstory_492 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_493 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_493_BEGIN' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_494_Cutline' }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_495_Stepinfront' }
	} 
	var q_496 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_496_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_497_Shove' }
	} 
	var q_498 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Ben, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 'q_498_ShoveXstare_ShoveSayrelax_74_Default_10' }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_499_Xstare' }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_500_Creamsplash' }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_501_Baristaorders' }
	} 
	var q_502 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_502_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_503_Lovejuice' }
	} 
	var q_504 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_504_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_505_END' }
	} 

    var betweenstory_506 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_507 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_507_BEGIN' }
	} 
	var q_508 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		data: { state_info: 'q_508_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_509_Cutline' }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_510_Stepinfront' }
	} 
	var q_511 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Nick and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_511_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_512_Subjectstares' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_513_Sayrelax' }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_514_Creamsplash' }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_515_Callpoliceman' }
	} 
	var q_516 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_516_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_517 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_517_Hatecoffee' }
	} 
	var q_518 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_518_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_519_END' }
	} 

    var betweenstory_520 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_521 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_521_BEGIN' }
	} 
	var q_522 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 'q_522_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_523_Cutline' }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_524_Sayexcuseme' }
	} 
	var q_525 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Ben and gave him a very mean look.', 'Nick proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_525_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_526_Subjectstares' }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_527_Sayrelax' }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_528_Creamsplash' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_529_Callpoliceman' }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_530_Hatecoffee' }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_531_END' }
	} 

    var betweenstory_532 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_533 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_533_BEGIN' }
	} 
	var q_534 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 'q_534_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_535_Cutline' }
	} 
	var q_536 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_536_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_537_Stepinfront' }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_538_Subjectstares' }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_539_Xshove' }
	} 
	var q_540 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.', 'Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_540_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_541_Dessertcrumble' }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_542_Baristaorders' }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_543_Lovejuice' }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_544_END' }
	} 

    var betweenstory_545 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_546 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_546_BEGIN' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_547_Cutline' }
	} 
	var q_548 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Jesse.', 'Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_548_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_549_Stepinfront' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_550_Subjectstares' }
	} 
	var q_551 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_551_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_552_Sayrelax' }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_553_Creamsplash' }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_554_Baristaorders' }
	} 
	var q_555 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_555_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_556_Lovejuice' }
	} 
	var q_557 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_557_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_558_END' }
	} 

    var betweenstory_559 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_560 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_560_BEGIN' }
	} 
	var q_561 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_561_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_562_Cutline' }
	} 
	var q_563 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_563_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_564_Stepinfront' }
	} 
	var q_565 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_565_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_566_Shove' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_567_Xshove' }
	} 
	var q_568 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Ben\'s head.', 'Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_568_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_569_Dessertcrumble' }
	} 
	var q_570 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 'q_570_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_571_Baristaorders' }
	} 
	var q_572 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_572_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_573_Lovejuice' }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_574_END' }
	} 

    var betweenstory_575 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_576 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_576_BEGIN' }
	} 
	var q_577 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 'q_577_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_578_Stepfoot' }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_579_Sayexcuseme' }
	} 
	var q_580 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Vera and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 'q_580_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_581_Subjectstares' }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_582_Xshove' }
	} 
	var q_583 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.', 'Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_583_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_584_Dessertcrumble' }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_585_Baristaorders' }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_586_Hatecoffee' }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_587_END' }
	} 

    var betweenstory_588 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_589 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_589_BEGIN' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_590_Cutline' }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_591_Stepinfront' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_592_Subjectstares' }
	} 
	var q_593 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Ben, \"Hey! Relax.\"', 'Ben simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_593_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_594_Sayrelax' }
	} 
	var q_595 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.', 'Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_595_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_596_Creamsplash' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_597_Baristaorders' }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_598_Lovejuice' }
	} 
	var q_599 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_599_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_600_END' }
	} 

    var betweenstory_601 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_602 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_602_BEGIN' }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_603_Stepfoot' }
	} 
	var q_604 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_604_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_605_Sayexcuseme' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_606_Shove' }
	} 
	var q_607 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Nick\'s eyes.', 'Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 'q_607_ShoveXstare_ShoveXstare_100_Permute_10' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_608_Xstare' }
	} 
	var q_609 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.', 'Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_609_XstareCreamsplash_XstareCreamsplash_100_Permute_10' }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_610_Creamsplash' }
	} 
	var q_611 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_611_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_612_Callpoliceman' }
	} 
	var q_613 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_613_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_614 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_614_Hatecoffee' }
	} 
	var q_615 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_615_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_616_END' }
	} 

    var betweenstory_617 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_618 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_618_BEGIN' }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_619_Cutline' }
	} 
	var q_620 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_620_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_621_Sayexcuseme' }
	} 
	var q_622 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Vera and gave her a very mean look.', 'Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 'q_622_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_623_Shove' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_624_Xshove' }
	} 
	var q_625 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cookie and crumbled it above Vera\'s head.', 'Nick picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 'q_625_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_626_Dessertcrumble' }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_627_Baristaorders' }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_628_Lovejuice' }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_629_END' }
	} 

    var betweenstory_630 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_631 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_631_BEGIN' }
	} 
	var q_632 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 'q_632_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_633_Cutline' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_634_Sayexcuseme' }
	} 
	var q_635 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Jesse and gave him a very mean look.', 'Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_635_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_636_Subjectstares' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_637_Sayrelax' }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_638_Dessertcrumble' }
	} 
	var q_639 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_639_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_640_Baristaorders' }
	} 
	var q_641 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_641_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_01' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_642_Hatecoffee' }
	} 
	var q_643 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_643_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_644_END' }
	} 

    var betweenstory_645 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_646 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_646_BEGIN' }
	} 
	var q_647 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_647_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_648_Cutline' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_649_Stepinfront' }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_650_Ignore' }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_651_Sayrelax' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_652_Dessertcrumble' }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_653_Callpoliceman' }
	} 
	var q_654 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_654_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_655_Hatecoffee' }
	} 
	var q_656 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_656_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_657_END' }
	} 

    var betweenstory_658 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_659 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_659_BEGIN' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_660_Cutline' }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_661_Sayexcuseme' }
	} 
	var q_662 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored her and proceeded to order a coffee.', 'Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_662_SayexcusemeIgnore_SayexcusemeIgnore_100_Alter_10' }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_663_Ignore' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_664_Xstare' }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_665_Creamsplash' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_666_Callpoliceman' }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_667_Lovejuice' }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_668_END' }
	} 

    var betweenstory_669 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,s_10,s_11,s_12,s_13,s_14,s_15,s_16,s_17,s_18,
betweenstory_19,s_20,s_21,s_22,s_23,s_24,s_25,s_26,s_27,s_28,
betweenstory_29,s_30,s_31,s_32,s_33,s_34,s_35,s_36,s_37,s_38,
betweenstory_39,s_40,s_41,s_42,s_43,s_44,s_45,s_46,s_47,s_48,
betweenstory_49,questions_begin_50,s_51,q_52,s_53,s_54,s_55,s_56,q_57,s_58,s_59,q_60,s_61,s_62,
betweenstory_63,s_64,s_65,s_66,s_67,q_68,s_69,s_70,s_71,q_72,s_73,s_74,
betweenstory_75,s_76,q_77,s_78,q_79,s_80,s_81,q_82,s_83,s_84,s_85,q_86,s_87,q_88,s_89,
betweenstory_90,s_91,s_92,s_93,q_94,s_95,s_96,s_97,s_98,s_99,s_100,
betweenstory_101,s_102,s_103,q_104,s_105,s_106,s_107,s_108,q_109,s_110,s_111,s_112,
betweenstory_113,s_114,q_115,s_116,q_117,s_118,q_119,s_120,s_121,s_122,q_123,s_124,s_125,s_126,
betweenstory_127,s_128,q_129,s_130,q_131,s_132,q_133,s_134,s_135,q_136,s_137,s_138,q_139,s_140,s_141,
betweenstory_142,s_143,s_144,q_145,s_146,s_147,q_148,s_149,s_150,q_151,s_152,q_153,s_154,q_155,s_156,
betweenstory_157,s_158,s_159,s_160,s_161,q_162,s_163,s_164,q_165,s_166,q_167,s_168,q_169,s_170,
betweenstory_171,s_172,q_173,s_174,q_175,s_176,s_177,s_178,q_179,s_180,s_181,q_182,s_183,s_184,
betweenstory_185,s_186,s_187,q_188,s_189,s_190,s_191,s_192,q_193,s_194,q_195,s_196,q_197,s_198,
betweenstory_199,s_200,q_201,s_202,q_203,s_204,q_205,s_206,s_207,s_208,q_209,s_210,s_211,q_212,s_213,
betweenstory_214,s_215,s_216,s_217,q_218,s_219,s_220,s_221,s_222,q_223,s_224,q_225,s_226,
betweenstory_227,s_228,q_229,s_230,q_231,s_232,s_233,s_234,s_235,q_236,s_237,s_238,q_239,s_240,
betweenstory_241,s_242,q_243,s_244,q_245,s_246,s_247,s_248,s_249,s_250,q_251,s_252,s_253,
betweenstory_254,s_255,q_256,s_257,q_258,s_259,q_260,s_261,q_262,s_263,q_264,s_265,q_266,s_267,s_268,s_269,
betweenstory_270,s_271,q_272,s_273,q_274,s_275,s_276,q_277,s_278,q_279,s_280,s_281,q_282,s_283,s_284,
betweenstory_285,s_286,q_287,s_288,q_289,s_290,q_291,s_292,s_293,s_294,s_295,q_296,s_297,s_298,
betweenstory_299,s_300,q_301,s_302,q_303,s_304,q_305,s_306,q_307,s_308,q_309,s_310,s_311,s_312,s_313,
betweenstory_314,s_315,q_316,s_317,q_318,s_319,q_320,s_321,s_322,s_323,s_324,q_325,s_326,s_327,
betweenstory_328,s_329,s_330,s_331,s_332,q_333,s_334,q_335,s_336,s_337,q_338,s_339,s_340,
betweenstory_341,s_342,s_343,s_344,s_345,s_346,q_347,s_348,s_349,q_350,s_351,q_352,s_353,
betweenstory_354,s_355,s_356,q_357,s_358,s_359,q_360,s_361,s_362,s_363,s_364,s_365,
betweenstory_366,s_367,s_368,s_369,q_370,s_371,q_372,s_373,s_374,q_375,s_376,s_377,s_378,
betweenstory_379,s_380,q_381,s_382,q_383,s_384,q_385,s_386,s_387,q_388,s_389,q_390,s_391,q_392,s_393,s_394,
betweenstory_395,s_396,s_397,s_398,s_399,q_400,s_401,q_402,s_403,s_404,q_405,s_406,s_407,
betweenstory_408,s_409,q_410,s_411,s_412,q_413,s_414,q_415,s_416,s_417,s_418,s_419,s_420,
betweenstory_421,s_422,q_423,s_424,s_425,s_426,q_427,s_428,q_429,s_430,s_431,s_432,q_433,s_434,
betweenstory_435,s_436,q_437,s_438,q_439,s_440,q_441,s_442,q_443,s_444,s_445,s_446,s_447,q_448,s_449,
betweenstory_450,s_451,q_452,s_453,q_454,s_455,q_456,s_457,s_458,q_459,s_460,q_461,s_462,q_463,s_464,s_465,
betweenstory_466,s_467,s_468,q_469,s_470,s_471,s_472,q_473,s_474,q_475,s_476,s_477,q_478,s_479,
betweenstory_480,s_481,s_482,s_483,s_484,s_485,q_486,s_487,s_488,q_489,s_490,s_491,
betweenstory_492,s_493,s_494,s_495,q_496,s_497,q_498,s_499,s_500,s_501,q_502,s_503,q_504,s_505,
betweenstory_506,s_507,q_508,s_509,s_510,q_511,s_512,s_513,s_514,s_515,q_516,s_517,q_518,s_519,
betweenstory_520,s_521,q_522,s_523,s_524,q_525,s_526,s_527,s_528,s_529,s_530,s_531,
betweenstory_532,s_533,q_534,s_535,q_536,s_537,s_538,s_539,q_540,s_541,s_542,s_543,s_544,
betweenstory_545,s_546,s_547,q_548,s_549,s_550,q_551,s_552,s_553,s_554,q_555,s_556,q_557,s_558,
betweenstory_559,s_560,q_561,s_562,q_563,s_564,q_565,s_566,s_567,q_568,s_569,q_570,s_571,q_572,s_573,s_574,
betweenstory_575,s_576,q_577,s_578,s_579,q_580,s_581,s_582,q_583,s_584,s_585,s_586,s_587,
betweenstory_588,s_589,s_590,s_591,s_592,q_593,s_594,q_595,s_596,s_597,s_598,q_599,s_600,
betweenstory_601,s_602,s_603,q_604,s_605,s_606,q_607,s_608,q_609,s_610,q_611,s_612,q_613,s_614,q_615,s_616,
betweenstory_617,s_618,s_619,q_620,s_621,q_622,s_623,s_624,q_625,s_626,s_627,s_628,s_629,
betweenstory_630,s_631,q_632,s_633,s_634,q_635,s_636,s_637,s_638,q_639,s_640,q_641,s_642,q_643,s_644,
betweenstory_645,s_646,q_647,s_648,s_649,s_650,s_651,s_652,s_653,q_654,s_655,q_656,s_657,
betweenstory_658,s_659,s_660,s_661,q_662,s_663,s_664,s_665,s_666,s_667,s_668,
betweenstory_669,],

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

