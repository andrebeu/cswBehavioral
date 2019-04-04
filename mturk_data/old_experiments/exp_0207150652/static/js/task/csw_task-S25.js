

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
	var s_52 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_52_Cutline' }
	} 
	var q_53 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_53_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
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
		labels: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.', 'Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_57_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
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
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_60_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
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
	var q_66 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_66_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_67_Sayexcuseme' }
	} 
	var q_68 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 'q_68_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_69_Subjectstares' }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_70_Sayrelax' }
	} 
	var q_71 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.', 'Jesse snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_71_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_72_Creamsplash' }
	} 
	var q_73 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_73_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_10' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_74_Baristaorders' }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_75_Lovejuice' }
	} 
	var q_76 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_76_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_77_END' }
	} 

    var betweenstory_78 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_79 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_79_BEGIN' }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_80_Cutline' }
	} 
	var q_81 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 'q_81_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
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
	var s_85 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_85_Dessertcrumble' }
	} 
	var q_86 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.', 'Vera, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_86_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_01' }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_87_Callpoliceman' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_88_Hatecoffee' }
	} 
	var q_89 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_89_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_90_END' }
	} 

    var betweenstory_91 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_92 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_92_BEGIN' }
	} 
	var q_93 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 'q_93_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_94_Cutline' }
	} 
	var q_95 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Nick.'],
		data: { state_info: 'q_95_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_96_Stepinfront' }
	} 
	var q_97 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Ben and gave him a very mean look.', 'Nick proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_97_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_98_Subjectstares' }
	} 
	var q_99 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Nick, \"Hey! Relax.\"', 'In retaliation, Ben pushed Nick.'],
		data: { state_info: 'q_99_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_100_Sayrelax' }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_101_Creamsplash' }
	} 
	var q_102 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_102_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_103_Callpoliceman' }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_104_Lovejuice' }
	} 
	var q_105 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_105_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_106_END' }
	} 

    var betweenstory_107 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_108 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_108_BEGIN' }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_109_Cutline' }
	} 
	var q_110 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera promptly stepped back in front of Ben.', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_110_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_111_Sayexcuseme' }
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
	var s_114 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_114_Dessertcrumble' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_115_Callpoliceman' }
	} 
	var q_116 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_116_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
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
	var q_121 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		data: { state_info: 'q_121_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_122_Cutline' }
	} 
	var q_123 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Vera.', 'Vera promptly stepped back in front of Nick.'],
		data: { state_info: 'q_123_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_124_Stepinfront' }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ['Vera proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_125_Shove' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_126_Xstare' }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_127_Creamsplash' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_128_Callpoliceman' }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_129_Lovejuice' }
	} 
	var q_130 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_130_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_131_END' }
	} 

    var betweenstory_132 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_133 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_133_BEGIN' }
	} 
	var q_134 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Vera, the first person in line.', 'Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 'q_134_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_135_Stepfoot' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_136_Sayexcuseme' }
	} 
	var q_137 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Nick and gave him a very mean look.', 'Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_137_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_138_Subjectstares' }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_139_Sayrelax' }
	} 
	var q_140 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Vera\'s face.', 'Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_140_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_141_Dessertcrumble' }
	} 
	var q_142 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Silvia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_142_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_143_Baristaorders' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_144_Lovejuice' }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_145_END' }
	} 

    var betweenstory_146 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_147 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_147_BEGIN' }
	} 
	var q_148 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 'q_148_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_149_Cutline' }
	} 
	var q_150 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_150_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_151_Stepinfront' }
	} 
	var q_152 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Olivia and gave her a very mean look.', 'Olivia turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_152_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_153_Subjectstares' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_154_Sayrelax' }
	} 
	var q_155 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.', 'Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_155_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_156_Dessertcrumble' }
	} 
	var q_157 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_157_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_158_Callpoliceman' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_159_Lovejuice' }
	} 
	var q_160 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_160_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 'q_164_BEGINStepfoot_BEGINCutline_20_Default_01' }
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
		labels: ['Ben simply said to Silvia, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 'q_168_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_169_Sayrelax' }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_170_Dessertcrumble' }
	} 
	var q_171 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_171_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_172_Baristaorders' }
	} 
	var q_173 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_173_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_174_Lovejuice' }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_175_END' }
	} 

    var betweenstory_176 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_177 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_177_BEGIN' }
	} 
	var q_178 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 'q_178_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_179_Cutline' }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_180_Stepinfront' }
	} 
	var q_181 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_181_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_182_Shove' }
	} 
	var q_183 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'In retaliation, Silvia pushed Ben.'],
		data: { state_info: 'q_183_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_184_Xshove' }
	} 
	var q_185 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_185_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_186_Dessertcrumble' }
	} 
	var q_187 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_187_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_188_Baristaorders' }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_189_Hatecoffee' }
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
	var s_193 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_193_Cutline' }
	} 
	var q_194 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 'q_194_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_195_Sayexcuseme' }
	} 
	var q_196 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Nick and gave him a very mean look.', 'Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_196_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
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
	var q_199 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Nick\'s face.', 'Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_199_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_200_Creamsplash' }
	} 
	var q_201 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 'q_201_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_202_Callpoliceman' }
	} 
	var q_203 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_203_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_204_Lovejuice' }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_205_END' }
	} 

    var betweenstory_206 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_207 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_207_BEGIN' }
	} 
	var q_208 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 'q_208_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_209_Cutline' }
	} 
	var q_210 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_210_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_211_Sayexcuseme' }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_212_Shove' }
	} 
	var q_213 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia stared with rage into Ben\'s eyes.'],
		data: { state_info: 'q_213_ShoveXshove_ShoveXstare_66_Default_01' }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_214_Xshove' }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_215_Dessertcrumble' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_216_Callpoliceman' }
	} 
	var q_217 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_217_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_218_Hatecoffee' }
	} 
	var q_219 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_219_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_220_END' }
	} 

    var betweenstory_221 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_222 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_222_BEGIN' }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_223_Cutline' }
	} 
	var q_224 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Olivia.', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_224_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_225_Stepinfront' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_226_Shove' }
	} 
	var q_227 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Olivia, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.'],
		data: { state_info: 'q_227_ShoveSayrelax_ShoveXshove_14_Default_01' }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_228_Sayrelax' }
	} 
	var q_229 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Silvia\'s head.', 'Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_229_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_230_Creamsplash' }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_231_Callpoliceman' }
	} 
	var q_232 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_232_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_233_Hatecoffee' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_234_END' }
	} 

    var betweenstory_235 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_236 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_236_BEGIN' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_237_Stepfoot' }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_238_Sayexcuseme' }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_239_Subjectstares' }
	} 
	var q_240 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Silvia, \"Hey! Relax.\"', 'In retaliation, Ben pushed Silvia.'],
		data: { state_info: 'q_240_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_241_Sayrelax' }
	} 
	var q_242 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_242_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_243_Creamsplash' }
	} 
	var q_244 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_244_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_245_Baristaorders' }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_246_Lovejuice' }
	} 
	var q_247 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_247_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_248_END' }
	} 

    var betweenstory_249 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_250 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_250_BEGIN' }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_251_Cutline' }
	} 
	var q_252 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_252_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_253_Stepinfront' }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_254_Shove' }
	} 
	var q_255 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 'q_255_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_256_Xshove' }
	} 
	var q_257 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_257_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_258_Dessertcrumble' }
	} 
	var q_259 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_259_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_260_Baristaorders' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_261_Lovejuice' }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_262_END' }
	} 

    var betweenstory_263 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_264 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_264_BEGIN' }
	} 
	var q_265 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 'q_265_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_266_Cutline' }
	} 
	var q_267 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_267_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_268_Sayexcuseme' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_269_Shove' }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_270_Xshove' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_271_Dessertcrumble' }
	} 
	var q_272 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Nick, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_272_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_273_Baristaorders' }
	} 
	var q_274 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_274_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_275_Lovejuice' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_276_END' }
	} 

    var betweenstory_277 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_278 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_278_BEGIN' }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_279_Cutline' }
	} 
	var q_280 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_280_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_281_Stepinfront' }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_282_Shove' }
	} 
	var q_283 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Olivia\'s eyes.', 'In retaliation, Nick pushed Olivia.'],
		data: { state_info: 'q_283_ShoveXshove_ShoveXstare_66_Default_10' }
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
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_286_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
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
	var s_293 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_293_Stepfoot' }
	} 
	var q_294 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_294_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_295_Sayexcuseme' }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_296_Shove' }
	} 
	var q_297 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Jesse.', 'Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 'q_297_ShoveXstare_ShoveXshove_33_Default_10' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_298_Xstare' }
	} 
	var q_299 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_299_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_300_Creamsplash' }
	} 
	var q_301 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_301_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_302_Callpoliceman' }
	} 
	var q_303 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_303_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_304_Hatecoffee' }
	} 
	var q_305 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_305_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
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
	var s_309 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_309_Cutline' }
	} 
	var q_310 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_310_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_311_Sayexcuseme' }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_312_Subjectstares' }
	} 
	var q_313 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_313_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_314_Sayrelax' }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_315_Creamsplash' }
	} 
	var q_316 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_316_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_317_Callpoliceman' }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_318_Hatecoffee' }
	} 
	var q_319 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_319_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
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
	var q_324 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_324_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_325_Sayexcuseme' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_326_Ignore' }
	} 
	var q_327 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 'q_327_IgnoreSayrelax_IgnoreSayrelax_100_Permute_10' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_328_Sayrelax' }
	} 
	var q_329 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Silvia\'s face.', 'Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_329_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_330_Dessertcrumble' }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_331_Baristaorders' }
	} 
	var q_332 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_332_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_333_Lovejuice' }
	} 
	var q_334 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_334_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_335_END' }
	} 

    var betweenstory_336 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_337 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_337_BEGIN' }
	} 
	var q_338 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.'],
		data: { state_info: 'q_338_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_339_Cutline' }
	} 
	var q_340 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Jesse.'],
		data: { state_info: 'q_340_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_341_Stepinfront' }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_342_Ignore' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_343_Sayrelax' }
	} 
	var q_344 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a lemonsquare and crumbled it above Nick\'s head.', 'Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_344_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_345_Dessertcrumble' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_346_Baristaorders' }
	} 
	var q_347 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_347_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_348_Lovejuice' }
	} 
	var q_349 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_349_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_350_END' }
	} 

    var betweenstory_351 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_352 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_352_BEGIN' }
	} 
	var q_353 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_353_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_354_Cutline' }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_355_Stepinfront' }
	} 
	var q_356 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Silvia and gave her a very mean look.', 'Nick proceeded to give a slight shove to Silvia.'],
		data: { state_info: 'q_356_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_357_Subjectstares' }
	} 
	var q_358 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Silvia stared with rage into Nick\'s eyes.'],
		data: { state_info: 'q_358_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_359_Sayrelax' }
	} 
	var q_360 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_360_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_361_Creamsplash' }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_362_Callpoliceman' }
	} 
	var q_363 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_363_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_364_Hatecoffee' }
	} 
	var q_365 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_365_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_366_END' }
	} 

    var betweenstory_367 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_368 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_368_BEGIN' }
	} 
	var q_369 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_369_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_370_Cutline' }
	} 
	var q_371 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_371_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_372_Sayexcuseme' }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_373_Ignore' }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_374_Sayrelax' }
	} 
	var q_375 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_375_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_376_Creamsplash' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_377_Callpoliceman' }
	} 
	var q_378 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_378_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_379_Lovejuice' }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_380_END' }
	} 

    var betweenstory_381 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_382 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_382_BEGIN' }
	} 
	var q_383 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Nick\'s foot.', 'Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 'q_383_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_384_Cutline' }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_385_Sayexcuseme' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_386_Subjectstares' }
	} 
	var q_387 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Olivia\'s eyes.', 'Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_387_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_10' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_388_Sayrelax' }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_389_Creamsplash' }
	} 
	var q_390 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_390_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_391_Callpoliceman' }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_392_Lovejuice' }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_393_END' }
	} 

    var betweenstory_394 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_395 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_395_BEGIN' }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_396_Cutline' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_397_Sayexcuseme' }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_398_Subjectstares' }
	} 
	var q_399 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Olivia, \"Hey! Relax.\"', 'Olivia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_399_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_400_Sayrelax' }
	} 
	var q_401 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.', 'Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_401_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_402_Creamsplash' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_403_Baristaorders' }
	} 
	var q_404 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_404_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_405_Hatecoffee' }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
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
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_409_Stepfoot' }
	} 
	var q_410 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_410_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_411_Sayexcuseme' }
	} 
	var q_412 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Vera and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 'q_412_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_413_Shove' }
	} 
	var q_414 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Olivia.', 'In retaliation, Olivia pushed Vera.'],
		data: { state_info: 'q_414_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_415_Xshove' }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_416_Dessertcrumble' }
	} 
	var q_417 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_417_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_418_Baristaorders' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_419_Lovejuice' }
	} 
	var q_420 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_420_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_421_END' }
	} 

    var betweenstory_422 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_423 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_423_BEGIN' }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_424_Cutline' }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_425_Sayexcuseme' }
	} 
	var q_426 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_426_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_427_Subjectstares' }
	} 
	var q_428 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Ben.', 'Silvia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_428_SubjectstaresXshove_SubjectstaresSayrelax_33_Default_01' }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_429_Xshove' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_430_Dessertcrumble' }
	} 
	var q_431 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_431_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_432_Baristaorders' }
	} 
	var q_433 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_433_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_434_Lovejuice' }
	} 
	var q_435 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_435_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_436_END' }
	} 

    var betweenstory_437 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_438 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_438_BEGIN' }
	} 
	var q_439 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_439_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_440_Cutline' }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_441_Stepinfront' }
	} 
	var q_442 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Nick and gave him a very mean look.', 'Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 'q_442_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_443_Subjectstares' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_444_Xstare' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_445_Creamsplash' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_446_Callpoliceman' }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_447_Lovejuice' }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_448_END' }
	} 

    var betweenstory_449 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_450 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_450_BEGIN' }
	} 
	var q_451 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 'q_451_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_452_Cutline' }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 's_453_Stepinfront' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_454_Subjectstares' }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_455_Xshove' }
	} 
	var q_456 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a muffin and crumbled it above Jesse\'s head.', 'Vera picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_456_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_457_Dessertcrumble' }
	} 
	var q_458 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_458_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_459_Baristaorders' }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_460_Lovejuice' }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_461_END' }
	} 

    var betweenstory_462 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_463 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_463_BEGIN' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_464_Cutline' }
	} 
	var q_465 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Vera.'],
		data: { state_info: 'q_465_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_466_Stepinfront' }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_467_Subjectstares' }
	} 
	var q_468 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 'q_468_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_469_Sayrelax' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_470_Dessertcrumble' }
	} 
	var q_471 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Nick, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 'q_471_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_472_Baristaorders' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_473_Lovejuice' }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_474_END' }
	} 

    var betweenstory_475 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_476 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_476_BEGIN' }
	} 
	var q_477 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 'q_477_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_478_Stepfoot' }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_479_Sayexcuseme' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_480_Shove' }
	} 
	var q_481 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stared with rage into Olivia\'s eyes.', 'In retaliation, Vera pushed Olivia.'],
		data: { state_info: 'q_481_ShoveXstare_ShoveXshove_33_Default_01' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_482_Xstare' }
	} 
	var q_483 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Vera\'s head.', 'Vera snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_483_XstareDessertcrumble_XstareDessertcrumble_100_Permute_01' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_484_Dessertcrumble' }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_485_Baristaorders' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
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
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_489_BEGIN' }
	} 
	var q_490 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_490_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_491_Cutline' }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_492_Stepinfront' }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_493_Subjectstares' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_494_Sayrelax' }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_495_Creamsplash' }
	} 
	var q_496 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_496_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_497_Callpoliceman' }
	} 
	var q_498 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_498_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_503_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_504_Cutline' }
	} 
	var q_505 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_505_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_506_Stepinfront' }
	} 
	var q_507 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 'q_507_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_508_Shove' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_509_Xstare' }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_510_Creamsplash' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_511_Baristaorders' }
	} 
	var q_512 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_512_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_513_Lovejuice' }
	} 
	var q_514 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_514_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_515_END' }
	} 

    var betweenstory_516 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_517 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_517_BEGIN' }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_518_Cutline' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_519_Stepinfront' }
	} 
	var q_520 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Olivia and gave her a very mean look.', 'Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_520_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_521_Subjectstares' }
	} 
	var q_522 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_522_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_523_Sayrelax' }
	} 
	var q_524 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_524_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_525_Creamsplash' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_526_Callpoliceman' }
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
	var q_532 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 'q_532_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_533_Cutline' }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_534_Sayexcuseme' }
	} 
	var q_535 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Nick and gave him a very mean look.', 'Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_535_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_536_Subjectstares' }
	} 
	var q_537 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_537_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_538_Sayrelax' }
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
	var q_541 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_541_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_542_Hatecoffee' }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_543_END' }
	} 

    var betweenstory_544 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_545 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_545_BEGIN' }
	} 
	var q_546 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 'q_546_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_547_Cutline' }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_548_Stepinfront' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_549_Subjectstares' }
	} 
	var q_550 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben stared with rage into Jesse\'s eyes.'],
		data: { state_info: 'q_550_SubjectstaresXshove_SubjectstaresXstare_74_Default_01' }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_551_Xshove' }
	} 
	var q_552 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_552_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_553_Dessertcrumble' }
	} 
	var q_554 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_554_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_555_Baristaorders' }
	} 
	var q_556 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_556_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_557_Lovejuice' }
	} 
	var q_558 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_558_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
	var q_564 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Jesse and gave him a very mean look.', 'Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_564_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_565_Subjectstares' }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_566_Sayrelax' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_567_Creamsplash' }
	} 
	var q_568 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Vera, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_568_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_01' }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_569_Baristaorders' }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_570_Lovejuice' }
	} 
	var q_571 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_571_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_572_END' }
	} 

    var betweenstory_573 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_574 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_574_BEGIN' }
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Ben, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Ben.'],
		data: { state_info: 'q_578_ShoveXshove_ShoveSayrelax_85_Default_10' }
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
	var q_582 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_582_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_583_Lovejuice' }
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
	var q_587 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 'q_587_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_588_Stepfoot' }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_589_Sayexcuseme' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_590_Subjectstares' }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_591_Xshove' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_592_Dessertcrumble' }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_593_Baristaorders' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_594_Hatecoffee' }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_595_END' }
	} 

    var betweenstory_596 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_597 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_597_BEGIN' }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_598_Cutline' }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_599_Stepinfront' }
	} 
	var q_600 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 'q_600_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_601_Subjectstares' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_602_Sayrelax' }
	} 
	var q_603 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_603_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_604_Dessertcrumble' }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_605_Baristaorders' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_606_Lovejuice' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_607_END' }
	} 

    var betweenstory_608 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_609 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_609_BEGIN' }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_610_Stepfoot' }
	} 
	var q_611 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_611_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_612_Sayexcuseme' }
	} 
	var q_613 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Nick and gave him a very mean look.', 'Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_613_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_614 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_614_Shove' }
	} 
	var q_615 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Nick pushed Ben.', 'Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 'q_615_ShoveXstare_ShoveXshove_33_Default_10' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_616_Xstare' }
	} 
	var q_617 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Nick\'s head.', 'Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_617_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_618_Creamsplash' }
	} 
	var q_619 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_619_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_620_Callpoliceman' }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_621_Hatecoffee' }
	} 
	var q_622 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_622_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_623_END' }
	} 

    var betweenstory_624 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_625 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_625_BEGIN' }
	} 
	var q_626 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 'q_626_BEGINCutline_BEGINStepfoot_80_Default_10' }
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
	var s_632 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_632_Dessertcrumble' }
	} 
	var q_633 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_633_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_634_Baristaorders' }
	} 
	var q_635 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_635_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
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
	var s_640 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_640_Cutline' }
	} 
	var q_641 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_641_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_642_Sayexcuseme' }
	} 
	var q_643 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Vera.', 'Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_643_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
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
	var q_647 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Vera\'s head.', 'Jesse picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 'q_647_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_648_Dessertcrumble' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_649_Baristaorders' }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_650_Hatecoffee' }
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
	var q_654 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_654_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_655_Cutline' }
	} 
	var q_656 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 'q_656_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_657_Stepinfront' }
	} 
	var q_658 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a mocha.', 'Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 'q_658_StepinfrontIgnore_StepinfrontIgnore_100_Alter_10' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_659_Ignore' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_660_Sayrelax' }
	} 
	var q_661 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_661_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_662_Dessertcrumble' }
	} 
	var q_663 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_663_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_01' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_664_Callpoliceman' }
	} 
	var q_665 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_665_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_666_Hatecoffee' }
	} 
	var q_667 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_667_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_668_END' }
	} 

    var betweenstory_669 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_670 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_670_BEGIN' }
	} 
	var q_671 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 'q_671_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_672_Cutline' }
	} 
	var q_673 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Vera.'],
		data: { state_info: 'q_673_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_674_Sayexcuseme' }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_675_Ignore' }
	} 
	var q_676 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Vera, \"Hey! Relax.\"', 'Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 'q_676_IgnoreXstare_IgnoreSayrelax_66_Default_10' }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_677_Xstare' }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_678_Creamsplash' }
	} 
	var q_679 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 'q_679_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_680_Callpoliceman' }
	} 
	var q_681 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_681_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_682 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_682_Lovejuice' }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_683_END' }
	} 

    var betweenstory_684 = {
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
betweenstory_49,questions_begin_50,s_51,s_52,q_53,s_54,s_55,s_56,q_57,s_58,s_59,q_60,s_61,s_62,
betweenstory_63,s_64,s_65,q_66,s_67,q_68,s_69,s_70,q_71,s_72,q_73,s_74,s_75,q_76,s_77,
betweenstory_78,s_79,s_80,q_81,s_82,s_83,s_84,s_85,q_86,s_87,s_88,q_89,s_90,
betweenstory_91,s_92,q_93,s_94,q_95,s_96,q_97,s_98,q_99,s_100,s_101,q_102,s_103,s_104,q_105,s_106,
betweenstory_107,s_108,s_109,q_110,s_111,s_112,s_113,s_114,s_115,q_116,s_117,s_118,
betweenstory_119,s_120,q_121,s_122,q_123,s_124,s_125,s_126,s_127,s_128,s_129,q_130,s_131,
betweenstory_132,s_133,q_134,s_135,s_136,q_137,s_138,s_139,q_140,s_141,q_142,s_143,s_144,s_145,
betweenstory_146,s_147,q_148,s_149,q_150,s_151,q_152,s_153,s_154,q_155,s_156,q_157,s_158,s_159,q_160,s_161,
betweenstory_162,s_163,q_164,s_165,s_166,s_167,q_168,s_169,s_170,q_171,s_172,q_173,s_174,s_175,
betweenstory_176,s_177,q_178,s_179,s_180,q_181,s_182,q_183,s_184,q_185,s_186,q_187,s_188,s_189,s_190,
betweenstory_191,s_192,s_193,q_194,s_195,q_196,s_197,s_198,q_199,s_200,q_201,s_202,q_203,s_204,s_205,
betweenstory_206,s_207,q_208,s_209,q_210,s_211,s_212,q_213,s_214,s_215,s_216,q_217,s_218,q_219,s_220,
betweenstory_221,s_222,s_223,q_224,s_225,s_226,q_227,s_228,q_229,s_230,s_231,q_232,s_233,s_234,
betweenstory_235,s_236,s_237,s_238,s_239,q_240,s_241,q_242,s_243,q_244,s_245,s_246,q_247,s_248,
betweenstory_249,s_250,s_251,q_252,s_253,s_254,q_255,s_256,q_257,s_258,q_259,s_260,s_261,s_262,
betweenstory_263,s_264,q_265,s_266,q_267,s_268,s_269,s_270,s_271,q_272,s_273,q_274,s_275,s_276,
betweenstory_277,s_278,s_279,q_280,s_281,s_282,q_283,s_284,s_285,q_286,s_287,s_288,q_289,s_290,
betweenstory_291,s_292,s_293,q_294,s_295,s_296,q_297,s_298,q_299,s_300,q_301,s_302,q_303,s_304,q_305,s_306,
betweenstory_307,s_308,s_309,q_310,s_311,s_312,q_313,s_314,s_315,q_316,s_317,s_318,q_319,s_320,
betweenstory_321,s_322,s_323,q_324,s_325,s_326,q_327,s_328,q_329,s_330,s_331,q_332,s_333,q_334,s_335,
betweenstory_336,s_337,q_338,s_339,q_340,s_341,s_342,s_343,q_344,s_345,s_346,q_347,s_348,q_349,s_350,
betweenstory_351,s_352,q_353,s_354,s_355,q_356,s_357,q_358,s_359,q_360,s_361,s_362,q_363,s_364,q_365,s_366,
betweenstory_367,s_368,q_369,s_370,q_371,s_372,s_373,s_374,q_375,s_376,s_377,q_378,s_379,s_380,
betweenstory_381,s_382,q_383,s_384,s_385,s_386,q_387,s_388,s_389,q_390,s_391,s_392,s_393,
betweenstory_394,s_395,s_396,s_397,s_398,q_399,s_400,q_401,s_402,s_403,q_404,s_405,s_406,
betweenstory_407,s_408,s_409,q_410,s_411,q_412,s_413,q_414,s_415,s_416,q_417,s_418,s_419,q_420,s_421,
betweenstory_422,s_423,s_424,s_425,q_426,s_427,q_428,s_429,s_430,q_431,s_432,q_433,s_434,q_435,s_436,
betweenstory_437,s_438,q_439,s_440,s_441,q_442,s_443,s_444,s_445,s_446,s_447,s_448,
betweenstory_449,s_450,q_451,s_452,s_453,s_454,s_455,q_456,s_457,q_458,s_459,s_460,s_461,
betweenstory_462,s_463,s_464,q_465,s_466,s_467,q_468,s_469,s_470,q_471,s_472,s_473,s_474,
betweenstory_475,s_476,q_477,s_478,s_479,s_480,q_481,s_482,q_483,s_484,s_485,s_486,s_487,
betweenstory_488,s_489,q_490,s_491,s_492,s_493,s_494,s_495,q_496,s_497,q_498,s_499,s_500,
betweenstory_501,s_502,q_503,s_504,q_505,s_506,q_507,s_508,s_509,s_510,s_511,q_512,s_513,q_514,s_515,
betweenstory_516,s_517,s_518,s_519,q_520,s_521,q_522,s_523,q_524,s_525,s_526,s_527,q_528,s_529,
betweenstory_530,s_531,q_532,s_533,s_534,q_535,s_536,q_537,s_538,s_539,s_540,q_541,s_542,s_543,
betweenstory_544,s_545,q_546,s_547,s_548,s_549,q_550,s_551,q_552,s_553,q_554,s_555,q_556,s_557,q_558,s_559,
betweenstory_560,s_561,s_562,s_563,q_564,s_565,s_566,s_567,q_568,s_569,s_570,q_571,s_572,
betweenstory_573,s_574,s_575,s_576,s_577,q_578,s_579,s_580,s_581,q_582,s_583,s_584,
betweenstory_585,s_586,q_587,s_588,s_589,s_590,s_591,s_592,s_593,s_594,s_595,
betweenstory_596,s_597,s_598,s_599,q_600,s_601,s_602,q_603,s_604,s_605,s_606,s_607,
betweenstory_608,s_609,s_610,q_611,s_612,q_613,s_614,q_615,s_616,q_617,s_618,q_619,s_620,s_621,q_622,s_623,
betweenstory_624,s_625,q_626,s_627,s_628,s_629,q_630,s_631,s_632,q_633,s_634,q_635,s_636,s_637,
betweenstory_638,s_639,s_640,q_641,s_642,q_643,s_644,q_645,s_646,q_647,s_648,s_649,s_650,s_651,
betweenstory_652,s_653,q_654,s_655,q_656,s_657,q_658,s_659,s_660,q_661,s_662,q_663,s_664,q_665,s_666,q_667,s_668,
betweenstory_669,s_670,q_671,s_672,q_673,s_674,s_675,q_676,s_677,s_678,q_679,s_680,q_681,s_682,s_683,
betweenstory_684,],

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

