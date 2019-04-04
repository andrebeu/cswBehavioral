

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
	var q_56 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Nick, \"Hey! Relax.\"', 'In retaliation, Jesse pushed Nick.'],
		data: { state_info: 'q_56_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_57_Sayrelax' }
	} 
	var q_58 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_58_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_59_Creamsplash' }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_60_Baristaorders' }
	} 
	var s_61 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_61_Lovejuice' }
	} 
	var q_62 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_62_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_63_END' }
	} 

    var betweenstory_64 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_65 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_65_BEGIN' }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_66_Cutline' }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_67_Sayexcuseme' }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_68_Subjectstares' }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_69_Sayrelax' }
	} 
	var q_70 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.', 'Jesse snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_70_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_71_Creamsplash' }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_72_Baristaorders' }
	} 
	var q_73 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_73_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_74_Lovejuice' }
	} 
	var q_75 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_75_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_76_END' }
	} 

    var betweenstory_77 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_78 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_78_BEGIN' }
	} 
	var q_79 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_79_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_80_Cutline' }
	} 
	var q_81 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_81_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_82_Stepinfront' }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_83_Shove' }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_84_Xshove' }
	} 
	var q_85 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Olivia\'s head.', 'Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_85_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_86_Dessertcrumble' }
	} 
	var q_87 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 'q_87_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_10' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_88_Callpoliceman' }
	} 
	var q_89 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_89_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_90_Hatecoffee' }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_91_END' }
	} 

    var betweenstory_92 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_93 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_93_BEGIN' }
	} 
	var q_94 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 'q_94_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_95_Cutline' }
	} 
	var q_96 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Ben.'],
		data: { state_info: 'q_96_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_97_Stepinfront' }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_98_Subjectstares' }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_99_Sayrelax' }
	} 
	var q_100 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cake and crumbled it above Ben\'s head.', 'Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 'q_100_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_101_Creamsplash' }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_102_Callpoliceman' }
	} 
	var q_103 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_103_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_104_Lovejuice' }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_105_END' }
	} 

    var betweenstory_106 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_107 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_107_BEGIN' }
	} 
	var q_108 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 'q_108_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_109_Cutline' }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_110_Sayexcuseme' }
	} 
	var q_111 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Vera and gave her a very mean look.', 'Vera turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_111_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_112_Subjectstares' }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_113_Xshove' }
	} 
	var q_114 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a lemonsquare and crumbled it above Ben\'s head.', 'Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_114_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_115_Dessertcrumble' }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_116_Callpoliceman' }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_117_Lovejuice' }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_118_END' }
	} 

    var betweenstory_119 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_120 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_120_BEGIN' }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_121_Cutline' }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_122_Stepinfront' }
	} 
	var q_123 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera proceeded to give a slight shove to Nick.', 'Vera turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_123_StepinfrontShove_StepinfrontSubjectstares_44_Default_01' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Vera proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_124_Shove' }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_125_Xstare' }
	} 
	var q_126 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Vera\'s face.', 'Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_126_XstareCreamsplash_XstareCreamsplash_100_Permute_10' }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_127_Creamsplash' }
	} 
	var q_128 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 'q_128_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_129_Callpoliceman' }
	} 
	var q_130 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_130_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_131_Lovejuice' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_132_END' }
	} 

    var betweenstory_133 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_134 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_134_BEGIN' }
	} 
	var q_135 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Vera, the first person in line.', 'Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 'q_135_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_136_Stepfoot' }
	} 
	var q_137 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_137_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_138_Sayexcuseme' }
	} 
	var q_139 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Nick and gave him a very mean look.', 'Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_139_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_140_Subjectstares' }
	} 
	var q_141 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 'q_141_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_142_Sayrelax' }
	} 
	var q_143 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a muffin and crumbled it above Nick\'s head.', 'Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_143_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_144_Dessertcrumble' }
	} 
	var q_145 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_145_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_146_Baristaorders' }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_147_Lovejuice' }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_148_END' }
	} 

    var betweenstory_149 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_150 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_150_BEGIN' }
	} 
	var q_151 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 'q_151_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_152_Cutline' }
	} 
	var q_153 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_153_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_154_Stepinfront' }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_155_Subjectstares' }
	} 
	var q_156 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Silvia, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 'q_156_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_157_Sayrelax' }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_158_Dessertcrumble' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_159_Callpoliceman' }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_160_Lovejuice' }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_161_END' }
	} 

    var betweenstory_162 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_163 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_163_BEGIN' }
	} 
	var q_164 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 'q_164_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_165_Stepfoot' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_166_Sayexcuseme' }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_167_Subjectstares' }
	} 
	var q_168 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_168_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_10' }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_169_Sayrelax' }
	} 
	var q_170 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_170_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_171_Dessertcrumble' }
	} 
	var q_172 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_172_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_173_Baristaorders' }
	} 
	var q_174 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_174_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_175_Lovejuice' }
	} 
	var q_176 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_176_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
	var s_180 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_180_Cutline' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_181_Stepinfront' }
	} 
	var q_182 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_182_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_183_Shove' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_184_Xshove' }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_185_Dessertcrumble' }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_186_Baristaorders' }
	} 
	var q_187 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_187_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_188_Hatecoffee' }
	} 
	var q_189 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_189_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_190_END' }
	} 

    var betweenstory_191 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_192 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_192_BEGIN' }
	} 
	var q_193 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_193_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_194_Cutline' }
	} 
	var q_195 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_195_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_196_Sayexcuseme' }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_197_Subjectstares' }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_198_Sayrelax' }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_199_Creamsplash' }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_200_Callpoliceman' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_201_Lovejuice' }
	} 
	var q_202 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_202_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_203_END' }
	} 

    var betweenstory_204 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_205 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_205_BEGIN' }
	} 
	var q_206 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_206_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_207_Cutline' }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_208_Sayexcuseme' }
	} 
	var q_209 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_209_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_210_Shove' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_211_Xshove' }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_212_Dessertcrumble' }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_213_Baristaorders' }
	} 
	var q_214 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_214_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_215_Lovejuice' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_216_END' }
	} 

    var betweenstory_217 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_218 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_218_BEGIN' }
	} 
	var q_219 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 'q_219_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_220_Cutline' }
	} 
	var q_221 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_221_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_222_Stepinfront' }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_223_Shove' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_224_Sayrelax' }
	} 
	var q_225 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 'q_225_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_226_Creamsplash' }
	} 
	var q_227 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_227_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_228_Callpoliceman' }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_229_Hatecoffee' }
	} 
	var q_230 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_230_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_231_END' }
	} 

    var betweenstory_232 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_233 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_233_BEGIN' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_234_Stepfoot' }
	} 
	var q_235 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_235_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_236_Sayexcuseme' }
	} 
	var q_237 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_237_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_238_Subjectstares' }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_239_Sayrelax' }
	} 
	var q_240 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_240_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_241_Creamsplash' }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_242_Baristaorders' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_243_Lovejuice' }
	} 
	var q_244 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_244_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_245_END' }
	} 

    var betweenstory_246 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_247 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_247_BEGIN' }
	} 
	var q_248 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 'q_248_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_249_Cutline' }
	} 
	var q_250 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 'q_250_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_251_Stepinfront' }
	} 
	var q_252 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 'q_252_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_253_Shove' }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_254_Xshove' }
	} 
	var q_255 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.', 'Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_255_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_256_Dessertcrumble' }
	} 
	var q_257 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_257_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_258_Baristaorders' }
	} 
	var q_259 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_259_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_260_Lovejuice' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_261_END' }
	} 

    var betweenstory_262 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_263 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_263_BEGIN' }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_264_Cutline' }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_265_Sayexcuseme' }
	} 
	var q_266 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a coffee.', 'Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_266_SayexcusemeShove_SayexcusemeIgnore_80_Default_10' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_267_Shove' }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_268_Xshove' }
	} 
	var q_269 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.', 'Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_269_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_270_Dessertcrumble' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_271_Baristaorders' }
	} 
	var q_272 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_272_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_273_Lovejuice' }
	} 
	var q_274 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_274_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		data: { state_info: 'q_278_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_279_Cutline' }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_280_Stepinfront' }
	} 
	var q_281 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_281_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_282_Shove' }
	} 
	var q_283 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Nick.', 'In retaliation, Nick pushed Olivia.'],
		data: { state_info: 'q_283_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_284_Xshove' }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_285_Dessertcrumble' }
	} 
	var q_286 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_286_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_287_Baristaorders' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_288_Hatecoffee' }
	} 
	var q_289 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_289_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_290_END' }
	} 

    var betweenstory_291 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_292 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_292_BEGIN' }
	} 
	var q_293 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_293_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_294_Stepfoot' }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_295_Sayexcuseme' }
	} 
	var q_296 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Jesse.', 'Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 'q_296_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_297_Shove' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_298_Xstare' }
	} 
	var q_299 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Silvia\'s head.', 'Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_299_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_300_Creamsplash' }
	} 
	var q_301 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_301_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_302_Callpoliceman' }
	} 
	var q_303 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_303_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_304_Hatecoffee' }
	} 
	var q_305 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_305_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_306_END' }
	} 

    var betweenstory_307 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_308 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_308_BEGIN' }
	} 
	var q_309 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.'],
		data: { state_info: 'q_309_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_310_Cutline' }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_311_Sayexcuseme' }
	} 
	var q_312 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Olivia and gave her a very mean look.', 'Silvia proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_312_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_313_Subjectstares' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_314_Sayrelax' }
	} 
	var q_315 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 'q_315_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_316_Creamsplash' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_317_Callpoliceman' }
	} 
	var q_318 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_318_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_319_Hatecoffee' }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_320_END' }
	} 

    var betweenstory_321 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_322 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_322_BEGIN' }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_323_Stepfoot' }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_324_Sayexcuseme' }
	} 
	var q_325 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera ignored her and proceeded to order a coffee.', 'Vera turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_325_SayexcusemeIgnore_SayexcusemeSubjectstares_16_Default_01' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_326_Ignore' }
	} 
	var q_327 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Vera\'s eyes.', 'Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 'q_327_IgnoreSayrelax_IgnoreXstare_33_Default_10' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_328_Sayrelax' }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_329_Dessertcrumble' }
	} 
	var q_330 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_330_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_331_Baristaorders' }
	} 
	var q_332 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_332_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_333_Lovejuice' }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_334_END' }
	} 

    var betweenstory_335 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_336 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_336_BEGIN' }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_337_Cutline' }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_338_Stepinfront' }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_339_Ignore' }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_340_Sayrelax' }
	} 
	var q_341 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_341_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_342_Dessertcrumble' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_343_Baristaorders' }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_344_Lovejuice' }
	} 
	var q_345 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_345_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
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
	var q_349 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_349_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_350_Cutline' }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_351_Stepinfront' }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_352_Subjectstares' }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_353_Sayrelax' }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_354_Creamsplash' }
	} 
	var q_355 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_355_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_356_Callpoliceman' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_357_Hatecoffee' }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_358_END' }
	} 

    var betweenstory_359 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_360 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_360_BEGIN' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_361_Cutline' }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_362_Sayexcuseme' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_363_Ignore' }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_364_Sayrelax' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_365_Creamsplash' }
	} 
	var q_366 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_366_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_367_Callpoliceman' }
	} 
	var q_368 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_368_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_369_Lovejuice' }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_370_END' }
	} 

    var betweenstory_371 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_372 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_372_BEGIN' }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_373_Cutline' }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_374_Sayexcuseme' }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_375_Subjectstares' }
	} 
	var q_376 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_376_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_377_Sayrelax' }
	} 
	var q_378 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.', 'Olivia snatched a cookie and crumbled it above Nick\'s head.'],
		data: { state_info: 'q_378_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_379_Creamsplash' }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_380_Callpoliceman' }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_381_Lovejuice' }
	} 
	var q_382 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_382_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_383_END' }
	} 

    var betweenstory_384 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_385 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_385_BEGIN' }
	} 
	var q_386 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_386_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_387_Cutline' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_388_Sayexcuseme' }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_389_Subjectstares' }
	} 
	var q_390 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Olivia, \"Hey! Relax.\"', 'In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 'q_390_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_391_Sayrelax' }
	} 
	var q_392 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.', 'Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_392_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_393_Creamsplash' }
	} 
	var q_394 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_394_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_395_Baristaorders' }
	} 
	var q_396 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_396_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_397_Hatecoffee' }
	} 
	var q_398 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_398_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
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
	var s_402 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_402_Stepfoot' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_403_Sayexcuseme' }
	} 
	var q_404 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Vera and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 'q_404_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_405_Shove' }
	} 
	var q_406 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stared with rage into Olivia\'s eyes.', 'In retaliation, Vera pushed Olivia.'],
		data: { state_info: 'q_406_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_407_Xshove' }
	} 
	var q_408 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cookie and crumbled it above Vera\'s head.', 'Vera snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_408_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_409_Dessertcrumble' }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_410_Baristaorders' }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_411_Lovejuice' }
	} 
	var q_412 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_412_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_413_END' }
	} 

    var betweenstory_414 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_415 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_415_BEGIN' }
	} 
	var q_416 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_416_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_417_Cutline' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_418_Sayexcuseme' }
	} 
	var q_419 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben ignored her and proceeded to order a coffee.', 'Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_419_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_10' }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_420_Subjectstares' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_421_Xshove' }
	} 
	var q_422 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Silvia\'s head.', 'Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_422_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_423_Dessertcrumble' }
	} 
	var q_424 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 'q_424_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_425_Baristaorders' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_426_Lovejuice' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_427_END' }
	} 

    var betweenstory_428 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_429 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_429_BEGIN' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_430_Cutline' }
	} 
	var q_431 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_431_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_432_Stepinfront' }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_433_Subjectstares' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_434_Xstare' }
	} 
	var q_435 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cookie and crumbled it above Olivia\'s head.', 'Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 'q_435_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_436_Creamsplash' }
	} 
	var q_437 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_437_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_438_Callpoliceman' }
	} 
	var q_439 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_439_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_440_Lovejuice' }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_441_END' }
	} 

    var betweenstory_442 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_443 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_443_BEGIN' }
	} 
	var q_444 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 'q_444_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_445_Cutline' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 's_446_Stepinfront' }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_447_Subjectstares' }
	} 
	var q_448 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Vera.', 'In retaliation, Vera pushed Jesse.'],
		data: { state_info: 'q_448_SubjectstaresXshove_SubjectstaresXshove_100_Permute_01' }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_449_Xshove' }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_450_Dessertcrumble' }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_451_Baristaorders' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_452_Lovejuice' }
	} 
	var q_453 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_453_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_454_END' }
	} 

    var betweenstory_455 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_456 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_456_BEGIN' }
	} 
	var q_457 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 'q_457_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_458_Cutline' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_459_Stepinfront' }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_460_Subjectstares' }
	} 
	var q_461 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 'q_461_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_462_Sayrelax' }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_463_Dessertcrumble' }
	} 
	var q_464 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_464_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_465_Baristaorders' }
	} 
	var q_466 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_466_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_467_Lovejuice' }
	} 
	var q_468 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_468_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_469_END' }
	} 

    var betweenstory_470 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_471 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_471_BEGIN' }
	} 
	var q_472 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 'q_472_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_473_Stepfoot' }
	} 
	var q_474 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_474_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_475_Sayexcuseme' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_476_Shove' }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_477_Xstare' }
	} 
	var q_478 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Vera\'s head.', 'Vera snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_478_XstareDessertcrumble_XstareDessertcrumble_100_Permute_01' }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_479_Dessertcrumble' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_480_Baristaorders' }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_481_Lovejuice' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_482_END' }
	} 

    var betweenstory_483 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_484 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_484_BEGIN' }
	} 
	var q_485 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_485_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_486_Cutline' }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_487_Stepinfront' }
	} 
	var q_488 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Silvia.', 'Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_488_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_489_Subjectstares' }
	} 
	var q_490 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_490_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_491_Sayrelax' }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_492_Creamsplash' }
	} 
	var q_493 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_493_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_494_Callpoliceman' }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_495_Lovejuice' }
	} 
	var q_496 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_496_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_497_END' }
	} 

    var betweenstory_498 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_499 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_499_BEGIN' }
	} 
	var q_500 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_500_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_501_Cutline' }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_502_Stepinfront' }
	} 
	var q_503 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 'q_503_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_504_Shove' }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_505_Xstare' }
	} 
	var q_506 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.', 'Ben snatched a cake and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_506_XstareCreamsplash_XstareDessertcrumble_90_Default_01' }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_507_Creamsplash' }
	} 
	var q_508 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_508_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_01' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_509_Baristaorders' }
	} 
	var q_510 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_510_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_511_Lovejuice' }
	} 
	var q_512 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_512_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_513_END' }
	} 

    var betweenstory_514 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_515 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_515_BEGIN' }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_516_Cutline' }
	} 
	var q_517 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 'q_517_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_518_Stepinfront' }
	} 
	var q_519 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Nick and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_519_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_520_Subjectstares' }
	} 
	var q_521 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick simply said to Olivia, \"Hey! Relax.\"', 'Nick stared with rage into Olivia\'s eyes.'],
		data: { state_info: 'q_521_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_522_Sayrelax' }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_523_Creamsplash' }
	} 
	var q_524 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Nick to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_524_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_525_Callpoliceman' }
	} 
	var q_526 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_526_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_527_Hatecoffee' }
	} 
	var q_528 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_528_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_529_END' }
	} 

    var betweenstory_530 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_531 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_531_BEGIN' }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_532_Cutline' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_533_Sayexcuseme' }
	} 
	var q_534 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Nick and gave him a very mean look.', 'Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_534_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_535_Subjectstares' }
	} 
	var q_536 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_536_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_537_Sayrelax' }
	} 
	var q_538 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cookie and crumbled it above Ben\'s head.', 'Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 'q_538_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_539_Creamsplash' }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_540_Callpoliceman' }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_541_Hatecoffee' }
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
	var q_545 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 'q_545_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_546_Cutline' }
	} 
	var q_547 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_547_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_548_Stepinfront' }
	} 
	var q_549 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored him and proceeded to order a mocha.', 'Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_549_StepinfrontSubjectstares_StepinfrontIgnore_83_Default_10' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_550_Subjectstares' }
	} 
	var q_551 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben stared with rage into Jesse\'s eyes.'],
		data: { state_info: 'q_551_SubjectstaresXshove_SubjectstaresXstare_74_Default_01' }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_552_Xshove' }
	} 
	var q_553 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Ben\'s head.', 'Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 'q_553_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_554_Dessertcrumble' }
	} 
	var q_555 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_555_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_556_Baristaorders' }
	} 
	var q_557 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_557_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_558_Lovejuice' }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_559_END' }
	} 

    var betweenstory_560 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_561 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_561_BEGIN' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_562_Cutline' }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_563_Stepinfront' }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_564_Subjectstares' }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_565_Sayrelax' }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_566_Creamsplash' }
	} 
	var q_567 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_567_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
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
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_570_END' }
	} 

    var betweenstory_571 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_572 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_572_BEGIN' }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_573_Cutline' }
	} 
	var q_574 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_574_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_575_Stepinfront' }
	} 
	var q_576 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_576_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_577_Shove' }
	} 
	var q_578 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Ben\'s eyes.', 'In retaliation, Olivia pushed Ben.'],
		data: { state_info: 'q_578_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_579_Xshove' }
	} 
	var q_580 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.', 'Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_580_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_581_Dessertcrumble' }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_582_Baristaorders' }
	} 
	var q_583 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_583_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_584_Lovejuice' }
	} 
	var q_585 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_585_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_586_END' }
	} 

    var betweenstory_587 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_588 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_588_BEGIN' }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_589_Stepfoot' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_590_Sayexcuseme' }
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Vera\'s head.', 'Vera snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_593_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_594_Dessertcrumble' }
	} 
	var q_595 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_595_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_596_Baristaorders' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_597_Hatecoffee' }
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
	var q_602 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_602_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_603_Stepinfront' }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_604_Subjectstares' }
	} 
	var q_605 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_605_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_606_Sayrelax' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_607_Creamsplash' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_608_Baristaorders' }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_609_Lovejuice' }
	} 
	var q_610 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_610_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
	var q_614 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Nick\'s foot.', 'Without hesitating he cut Nick, the first person in line.'],
		data: { state_info: 'q_614_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_615_Stepfoot' }
	} 
	var q_616 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_616_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_617_Sayexcuseme' }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_618_Shove' }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_619_Xstare' }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_620_Creamsplash' }
	} 
	var q_621 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_621_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_622_Callpoliceman' }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_623_Hatecoffee' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_624_END' }
	} 

    var betweenstory_625 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_626 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_626_BEGIN' }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_627_Cutline' }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_628_Sayexcuseme' }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_629_Shove' }
	} 
	var q_630 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Nick.', 'Vera stared with rage into Nick\'s eyes.'],
		data: { state_info: 'q_630_ShoveXshove_ShoveXstare_66_Default_01' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_631_Xshove' }
	} 
	var q_632 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Vera\'s face.', 'Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_632_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_633_Dessertcrumble' }
	} 
	var q_634 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_634_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_635_Baristaorders' }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_636_Lovejuice' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_637_END' }
	} 

    var betweenstory_638 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_639 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_639_BEGIN' }
	} 
	var q_640 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Vera, the first person in line.', 'Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 'q_640_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_641_Cutline' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_642_Sayexcuseme' }
	} 
	var q_643 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Vera and gave her a very mean look.', 'Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 'q_643_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_644_Subjectstares' }
	} 
	var q_645 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Vera, \"Hey! Relax.\"', 'Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_645_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_646_Sayrelax' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_647_Dessertcrumble' }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_648_Baristaorders' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_649_Hatecoffee' }
	} 
	var q_650 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_650_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_651_END' }
	} 

    var betweenstory_652 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_653 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_653_BEGIN' }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_654_Cutline' }
	} 
	var q_655 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Jesse.', 'Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_655_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_656_Stepinfront' }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_657_Ignore' }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_658_Sayrelax' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_659_Dessertcrumble' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_660_Callpoliceman' }
	} 
	var q_661 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_661_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_662_Hatecoffee' }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_663_END' }
	} 

    var betweenstory_664 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_665 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_665_BEGIN' }
	} 
	var q_666 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 'q_666_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_667_Cutline' }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_668_Sayexcuseme' }
	} 
	var q_669 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Olivia and gave her a very mean look.', 'Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_669_SayexcusemeIgnore_SayexcusemeSubjectstares_16_Default_10' }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_670_Ignore' }
	} 
	var q_671 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stared with rage into Olivia\'s eyes.', 'Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 'q_671_IgnoreXstare_IgnoreXstare_100_Permute_10' }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_672_Xstare' }
	} 
	var q_673 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a cookie and crumbled it above Olivia\'s head.', 'Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 'q_673_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_674_Creamsplash' }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_675_Callpoliceman' }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_676_Lovejuice' }
	} 
	var q_677 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_677_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_678_END' }
	} 

    var betweenstory_679 = {
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
betweenstory_49,questions_begin_50,s_51,q_52,s_53,s_54,s_55,q_56,s_57,q_58,s_59,s_60,s_61,q_62,s_63,
betweenstory_64,s_65,s_66,s_67,s_68,s_69,q_70,s_71,s_72,q_73,s_74,q_75,s_76,
betweenstory_77,s_78,q_79,s_80,q_81,s_82,s_83,s_84,q_85,s_86,q_87,s_88,q_89,s_90,s_91,
betweenstory_92,s_93,q_94,s_95,q_96,s_97,s_98,s_99,q_100,s_101,s_102,q_103,s_104,s_105,
betweenstory_106,s_107,q_108,s_109,s_110,q_111,s_112,s_113,q_114,s_115,s_116,s_117,s_118,
betweenstory_119,s_120,s_121,s_122,q_123,s_124,s_125,q_126,s_127,q_128,s_129,q_130,s_131,s_132,
betweenstory_133,s_134,q_135,s_136,q_137,s_138,q_139,s_140,q_141,s_142,q_143,s_144,q_145,s_146,s_147,s_148,
betweenstory_149,s_150,q_151,s_152,q_153,s_154,s_155,q_156,s_157,s_158,s_159,s_160,s_161,
betweenstory_162,s_163,q_164,s_165,s_166,s_167,q_168,s_169,q_170,s_171,q_172,s_173,q_174,s_175,q_176,s_177,
betweenstory_178,s_179,s_180,s_181,q_182,s_183,s_184,s_185,s_186,q_187,s_188,q_189,s_190,
betweenstory_191,s_192,q_193,s_194,q_195,s_196,s_197,s_198,s_199,s_200,s_201,q_202,s_203,
betweenstory_204,s_205,q_206,s_207,s_208,q_209,s_210,s_211,s_212,s_213,q_214,s_215,s_216,
betweenstory_217,s_218,q_219,s_220,q_221,s_222,s_223,s_224,q_225,s_226,q_227,s_228,s_229,q_230,s_231,
betweenstory_232,s_233,s_234,q_235,s_236,q_237,s_238,s_239,q_240,s_241,s_242,s_243,q_244,s_245,
betweenstory_246,s_247,q_248,s_249,q_250,s_251,q_252,s_253,s_254,q_255,s_256,q_257,s_258,q_259,s_260,s_261,
betweenstory_262,s_263,s_264,s_265,q_266,s_267,s_268,q_269,s_270,s_271,q_272,s_273,q_274,s_275,
betweenstory_276,s_277,q_278,s_279,s_280,q_281,s_282,q_283,s_284,s_285,q_286,s_287,s_288,q_289,s_290,
betweenstory_291,s_292,q_293,s_294,s_295,q_296,s_297,s_298,q_299,s_300,q_301,s_302,q_303,s_304,q_305,s_306,
betweenstory_307,s_308,q_309,s_310,s_311,q_312,s_313,s_314,q_315,s_316,s_317,q_318,s_319,s_320,
betweenstory_321,s_322,s_323,s_324,q_325,s_326,q_327,s_328,s_329,q_330,s_331,q_332,s_333,s_334,
betweenstory_335,s_336,s_337,s_338,s_339,s_340,q_341,s_342,s_343,s_344,q_345,s_346,
betweenstory_347,s_348,q_349,s_350,s_351,s_352,s_353,s_354,q_355,s_356,s_357,s_358,
betweenstory_359,s_360,s_361,s_362,s_363,s_364,s_365,q_366,s_367,q_368,s_369,s_370,
betweenstory_371,s_372,s_373,s_374,s_375,q_376,s_377,q_378,s_379,s_380,s_381,q_382,s_383,
betweenstory_384,s_385,q_386,s_387,s_388,s_389,q_390,s_391,q_392,s_393,q_394,s_395,q_396,s_397,q_398,s_399,
betweenstory_400,s_401,s_402,s_403,q_404,s_405,q_406,s_407,q_408,s_409,s_410,s_411,q_412,s_413,
betweenstory_414,s_415,q_416,s_417,s_418,q_419,s_420,s_421,q_422,s_423,q_424,s_425,s_426,s_427,
betweenstory_428,s_429,s_430,q_431,s_432,s_433,s_434,q_435,s_436,q_437,s_438,q_439,s_440,s_441,
betweenstory_442,s_443,q_444,s_445,s_446,s_447,q_448,s_449,s_450,s_451,s_452,q_453,s_454,
betweenstory_455,s_456,q_457,s_458,s_459,s_460,q_461,s_462,s_463,q_464,s_465,q_466,s_467,q_468,s_469,
betweenstory_470,s_471,q_472,s_473,q_474,s_475,s_476,s_477,q_478,s_479,s_480,s_481,s_482,
betweenstory_483,s_484,q_485,s_486,s_487,q_488,s_489,q_490,s_491,s_492,q_493,s_494,s_495,q_496,s_497,
betweenstory_498,s_499,q_500,s_501,s_502,q_503,s_504,s_505,q_506,s_507,q_508,s_509,q_510,s_511,q_512,s_513,
betweenstory_514,s_515,s_516,q_517,s_518,q_519,s_520,q_521,s_522,s_523,q_524,s_525,q_526,s_527,q_528,s_529,
betweenstory_530,s_531,s_532,s_533,q_534,s_535,q_536,s_537,q_538,s_539,s_540,s_541,s_542,
betweenstory_543,s_544,q_545,s_546,q_547,s_548,q_549,s_550,q_551,s_552,q_553,s_554,q_555,s_556,q_557,s_558,s_559,
betweenstory_560,s_561,s_562,s_563,s_564,s_565,s_566,q_567,s_568,s_569,s_570,
betweenstory_571,s_572,s_573,q_574,s_575,q_576,s_577,q_578,s_579,q_580,s_581,s_582,q_583,s_584,q_585,s_586,
betweenstory_587,s_588,s_589,s_590,s_591,s_592,q_593,s_594,q_595,s_596,s_597,s_598,
betweenstory_599,s_600,s_601,q_602,s_603,s_604,q_605,s_606,s_607,s_608,s_609,q_610,s_611,
betweenstory_612,s_613,q_614,s_615,q_616,s_617,s_618,s_619,s_620,q_621,s_622,s_623,s_624,
betweenstory_625,s_626,s_627,s_628,s_629,q_630,s_631,q_632,s_633,q_634,s_635,s_636,s_637,
betweenstory_638,s_639,q_640,s_641,s_642,q_643,s_644,q_645,s_646,s_647,s_648,s_649,q_650,s_651,
betweenstory_652,s_653,s_654,q_655,s_656,s_657,s_658,s_659,s_660,q_661,s_662,s_663,
betweenstory_664,s_665,q_666,s_667,s_668,q_669,s_670,q_671,s_672,q_673,s_674,s_675,s_676,q_677,s_678,
betweenstory_679,],

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

