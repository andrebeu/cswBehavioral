

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
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_44_Xshove' }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_45_Dessertcrumble' }
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
		labels: ['Clumsily, he stepped on Jesse\'s foot.', 'Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 'q_52_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_53_Cutline' }
	} 
	var q_54 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 'q_54_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_55_Sayexcuseme' }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ['Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_56_Subjectstares' }
	} 
	var q_57 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Nick.', 'Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_57_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_58_Sayrelax' }
	} 
	var q_59 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_59_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_60_Creamsplash' }
	} 
	var q_61 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_61_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_62_Baristaorders' }
	} 
	var q_63 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_63_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_64_Lovejuice' }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_65_END' }
	} 

    var betweenstory_66 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_67 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_67_BEGIN' }
	} 
	var q_68 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 'q_68_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_69_Cutline' }
	} 
	var q_70 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_70_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_71_Sayexcuseme' }
	} 
	var q_72 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_72_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_73_Subjectstares' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_74_Sayrelax' }
	} 
	var q_75 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.', 'Jesse snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_75_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_76_Creamsplash' }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_77_Baristaorders' }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_78_Lovejuice' }
	} 
	var q_79 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_79_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_80_END' }
	} 

    var betweenstory_81 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_82 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_82_BEGIN' }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_83_Cutline' }
	} 
	var q_84 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 'q_84_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_85_Stepinfront' }
	} 
	var q_86 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_86_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_87_Shove' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_88_Xshove' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_89_Dessertcrumble' }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_90_Callpoliceman' }
	} 
	var q_91 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_91_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_92_Hatecoffee' }
	} 
	var q_93 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_93_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_94_END' }
	} 

    var betweenstory_95 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_96 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_96_BEGIN' }
	} 
	var q_97 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 'q_97_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_98_Cutline' }
	} 
	var q_99 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Ben.'],
		data: { state_info: 'q_99_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_100_Stepinfront' }
	} 
	var q_101 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Ben.', 'Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_101_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_102_Subjectstares' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_103_Sayrelax' }
	} 
	var q_104 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.', 'Nick snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_104_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_105_Creamsplash' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_106_Callpoliceman' }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_107_Lovejuice' }
	} 
	var q_108 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_108_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_109_END' }
	} 

    var betweenstory_110 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_111 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_111_BEGIN' }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_112_Cutline' }
	} 
	var q_113 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_113_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_114_Sayexcuseme' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_115_Subjectstares' }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_116_Xshove' }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_117_Dessertcrumble' }
	} 
	var q_118 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 'q_118_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_01' }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_119_Callpoliceman' }
	} 
	var q_120 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_120_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_121_Lovejuice' }
	} 
	var q_122 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_122_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_123_END' }
	} 

    var betweenstory_124 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_125 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_125_BEGIN' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_126_Cutline' }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_127_Stepinfront' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Vera proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_128_Shove' }
	} 
	var q_129 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stared with rage into Nick\'s eyes.', 'Nick stared with rage into Vera\'s eyes.'],
		data: { state_info: 'q_129_ShoveXstare_ShoveXstare_100_Permute_10' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_130_Xstare' }
	} 
	var q_131 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.', 'Vera snatched a cookie and crumbled it above Nick\'s head.'],
		data: { state_info: 'q_131_XstareCreamsplash_XstareDessertcrumble_90_Default_01' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_132_Creamsplash' }
	} 
	var q_133 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_133_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_134_Callpoliceman' }
	} 
	var q_135 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_135_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_136_Lovejuice' }
	} 
	var q_137 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_137_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_138_END' }
	} 

    var betweenstory_139 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_140 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_140_BEGIN' }
	} 
	var q_141 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 'q_141_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_142_Stepfoot' }
	} 
	var q_143 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_143_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_144_Sayexcuseme' }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ['Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_145_Subjectstares' }
	} 
	var q_146 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick simply said to Vera, \"Hey! Relax.\"', 'Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_146_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_147_Sayrelax' }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_148_Dessertcrumble' }
	} 
	var q_149 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_149_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_150_Baristaorders' }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_151_Lovejuice' }
	} 
	var q_152 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_152_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_153_END' }
	} 

    var betweenstory_154 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_155 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_155_BEGIN' }
	} 
	var q_156 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 'q_156_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_157_Cutline' }
	} 
	var q_158 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_158_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_159_Stepinfront' }
	} 
	var q_160 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Olivia and gave her a very mean look.', 'Olivia turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_160_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_161_Subjectstares' }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_162_Sayrelax' }
	} 
	var q_163 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_163_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_164_Dessertcrumble' }
	} 
	var q_165 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_165_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_01' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_166_Callpoliceman' }
	} 
	var q_167 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_167_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_168_Lovejuice' }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_169_END' }
	} 

    var betweenstory_170 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_171 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_171_BEGIN' }
	} 
	var q_172 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 'q_172_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_173_Stepfoot' }
	} 
	var q_174 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_174_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_175_Sayexcuseme' }
	} 
	var q_176 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_176_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Ben\'s head.', 'Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 'q_179_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
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
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_182_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_183_Lovejuice' }
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
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_186_BEGIN' }
	} 
	var q_187 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 'q_187_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_188_Cutline' }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_189_Stepinfront' }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_190_Shove' }
	} 
	var q_191 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'In retaliation, Silvia pushed Ben.'],
		data: { state_info: 'q_191_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_192_Xshove' }
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
	var q_195 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_195_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_196_Hatecoffee' }
	} 
	var q_197 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_197_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
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
	var q_202 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_202_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_203_Sayexcuseme' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_204_Subjectstares' }
	} 
	var q_205 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Nick.', 'Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_205_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_206_Sayrelax' }
	} 
	var q_207 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_207_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_208_Creamsplash' }
	} 
	var q_209 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_209_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
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
	var q_212 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_212_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_213_END' }
	} 

    var betweenstory_214 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_215 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_215_BEGIN' }
	} 
	var q_216 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 'q_216_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_217_Cutline' }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_218_Sayexcuseme' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_219_Shove' }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_220_Xshove' }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_221_Dessertcrumble' }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_222_Callpoliceman' }
	} 
	var q_223 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_223_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_224_Hatecoffee' }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_225_END' }
	} 

    var betweenstory_226 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_227 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_227_BEGIN' }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_228_Cutline' }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_229_Stepinfront' }
	} 
	var q_230 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 'q_230_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_231_Shove' }
	} 
	var q_232 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Olivia, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.'],
		data: { state_info: 'q_232_ShoveSayrelax_ShoveXshove_14_Default_01' }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_233_Sayrelax' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_234_Creamsplash' }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_235_Callpoliceman' }
	} 
	var q_236 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_236_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_237_Hatecoffee' }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_238_END' }
	} 

    var betweenstory_239 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_240 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_240_BEGIN' }
	} 
	var q_241 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 'q_241_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_242_Stepfoot' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_243_Sayexcuseme' }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_244_Subjectstares' }
	} 
	var q_245 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_245_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_246_Sayrelax' }
	} 
	var q_247 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_247_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_248_Creamsplash' }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_249_Baristaorders' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_250_Lovejuice' }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_251_END' }
	} 

    var betweenstory_252 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_253 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_253_BEGIN' }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_254_Cutline' }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_255_Stepinfront' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_256_Shove' }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_257_Xshove' }
	} 
	var q_258 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_258_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_259_Dessertcrumble' }
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
	var q_262 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_262_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_263_END' }
	} 

    var betweenstory_264 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_265 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_265_BEGIN' }
	} 
	var q_266 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_266_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_267_Cutline' }
	} 
	var q_268 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_268_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_269_Sayexcuseme' }
	} 
	var q_270 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 'q_270_SayexcusemeShove_SayexcusemeShove_100_Permute_01' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_271_Shove' }
	} 
	var q_272 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 'q_272_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_273_Xshove' }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_274_Dessertcrumble' }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_275_Baristaorders' }
	} 
	var q_276 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_276_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_277_Lovejuice' }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_278_END' }
	} 

    var betweenstory_279 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_280 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_280_BEGIN' }
	} 
	var q_281 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Nick\'s foot.', 'Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 'q_281_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_282_Cutline' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_283_Stepinfront' }
	} 
	var q_284 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_284_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_285_Shove' }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_286_Xshove' }
	} 
	var q_287 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Nick\'s head.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_287_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_288_Dessertcrumble' }
	} 
	var q_289 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_289_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_290_Baristaorders' }
	} 
	var q_291 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_291_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_01' }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_292_Hatecoffee' }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_293_END' }
	} 

    var betweenstory_294 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_295 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_295_BEGIN' }
	} 
	var q_296 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_296_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_297_Stepfoot' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_298_Sayexcuseme' }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_299_Shove' }
	} 
	var q_300 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Jesse\'s eyes.', 'Jesse stared with rage into Silvia\'s eyes.'],
		data: { state_info: 'q_300_ShoveXstare_ShoveXstare_100_Permute_01' }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_301_Xstare' }
	} 
	var q_302 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Jesse snatched a cake and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_302_XstareCreamsplash_XstareDessertcrumble_90_Default_01' }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_303_Creamsplash' }
	} 
	var q_304 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_304_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_305_Callpoliceman' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_306_Hatecoffee' }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_307_END' }
	} 

    var betweenstory_308 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_309 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_309_BEGIN' }
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
		labels: ['Silvia turned to Olivia and gave her a very mean look.', 'Olivia turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_312_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_313_Subjectstares' }
	} 
	var q_314 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Silvia, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 'q_314_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_315_Sayrelax' }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_316_Creamsplash' }
	} 
	var q_317 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_317_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_318_Callpoliceman' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_319_Hatecoffee' }
	} 
	var q_320 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_320_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
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
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_323_BEGIN' }
	} 
	var q_324 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 'q_324_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_325_Stepfoot' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_326_Sayexcuseme' }
	} 
	var q_327 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Silvia and gave her a very mean look.', 'Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_327_SayexcusemeIgnore_SayexcusemeSubjectstares_16_Default_10' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_328_Ignore' }
	} 
	var q_329 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 'q_329_IgnoreSayrelax_IgnoreSayrelax_100_Permute_10' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_330_Sayrelax' }
	} 
	var q_331 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Vera\'s head.', 'Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_331_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_332_Dessertcrumble' }
	} 
	var q_333 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'Jesse, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 'q_333_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_334_Baristaorders' }
	} 
	var q_335 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_335_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_336_Lovejuice' }
	} 
	var q_337 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_337_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_338_END' }
	} 

    var betweenstory_339 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_340 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_340_BEGIN' }
	} 
	var q_341 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Jesse\'s foot.', 'Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 'q_341_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_342_Cutline' }
	} 
	var q_343 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Jesse.', 'Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 'q_343_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_344_Stepinfront' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_345_Ignore' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_346_Sayrelax' }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_347_Dessertcrumble' }
	} 
	var q_348 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_348_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_349_Baristaorders' }
	} 
	var q_350 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_350_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_351_Lovejuice' }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_352_END' }
	} 

    var betweenstory_353 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_354 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_354_BEGIN' }
	} 
	var q_355 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_355_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_356_Cutline' }
	} 
	var q_357 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 'q_357_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_358_Stepinfront' }
	} 
	var q_359 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Silvia and gave her a very mean look.', 'Silvia turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_359_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_360_Subjectstares' }
	} 
	var q_361 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Silvia stared with rage into Nick\'s eyes.'],
		data: { state_info: 'q_361_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_362_Sayrelax' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_363_Creamsplash' }
	} 
	var q_364 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 'q_364_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_365_Callpoliceman' }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_366_Hatecoffee' }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_367_END' }
	} 

    var betweenstory_368 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_369 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_369_BEGIN' }
	} 
	var q_370 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_370_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_371_Cutline' }
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
	var q_374 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Jesse\'s eyes.', 'Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_374_IgnoreSayrelax_IgnoreXstare_33_Default_10' }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_375_Sayrelax' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_376_Creamsplash' }
	} 
	var q_377 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_377_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_378_Callpoliceman' }
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
	var s_383 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_383_Cutline' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_384_Sayexcuseme' }
	} 
	var q_385 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a mocha.', 'Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_385_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_10' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_386_Subjectstares' }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_387_Sayrelax' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_388_Creamsplash' }
	} 
	var q_389 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_389_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_390_Callpoliceman' }
	} 
	var q_391 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_391_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
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
	var s_399 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_399_Sayrelax' }
	} 
	var q_400 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.', 'Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_400_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_401_Creamsplash' }
	} 
	var q_402 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_402_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_01' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_403_Baristaorders' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_404_Hatecoffee' }
	} 
	var q_405 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_405_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
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
	var q_409 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 'q_409_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_410_Stepfoot' }
	} 
	var q_411 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_411_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_412_Sayexcuseme' }
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
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_417_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_418_Baristaorders' }
	} 
	var q_419 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_419_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_420_Lovejuice' }
	} 
	var q_421 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_421_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_422_END' }
	} 

    var betweenstory_423 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_424 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_424_BEGIN' }
	} 
	var q_425 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_425_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_426_Cutline' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_427_Sayexcuseme' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_428_Subjectstares' }
	} 
	var q_429 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Ben.', 'Silvia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_429_SubjectstaresXshove_SubjectstaresSayrelax_33_Default_01' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_430_Xshove' }
	} 
	var q_431 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
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
	var q_434 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_434_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_435_Lovejuice' }
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
	var s_439 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_439_Cutline' }
	} 
	var q_440 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Nick.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_440_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_441_Stepinfront' }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_442_Subjectstares' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_443_Xstare' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_444_Creamsplash' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_445_Callpoliceman' }
	} 
	var q_446 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_446_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
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
	var q_455 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Jesse.', 'In retaliation, Jesse pushed Vera.'],
		data: { state_info: 'q_455_SubjectstaresXshove_SubjectstaresXshove_100_Permute_10' }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_456_Xshove' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_457_Dessertcrumble' }
	} 
	var q_458 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_458_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_459_Baristaorders' }
	} 
	var q_460 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_460_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_461_Lovejuice' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_462_END' }
	} 

    var betweenstory_463 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_464 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_464_BEGIN' }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_465_Cutline' }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_466_Stepinfront' }
	} 
	var q_467 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Vera.', 'Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_467_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_468_Subjectstares' }
	} 
	var q_469 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Silvia.', 'Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_469_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_470_Sayrelax' }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_471_Dessertcrumble' }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_472_Baristaorders' }
	} 
	var q_473 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_473_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_474_Lovejuice' }
	} 
	var q_475 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_475_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_476_END' }
	} 

    var betweenstory_477 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_478 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_478_BEGIN' }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_479_Stepfoot' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_480_Sayexcuseme' }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_481_Shove' }
	} 
	var q_482 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Olivia.', 'In retaliation, Olivia pushed Vera.'],
		data: { state_info: 'q_482_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_483_Xshove' }
	} 
	var q_484 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Vera\'s head.', 'Vera snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_484_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_485_Dessertcrumble' }
	} 
	var q_486 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_486_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_487_Baristaorders' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_488_Hatecoffee' }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_489_END' }
	} 

    var betweenstory_490 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_491 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_491_BEGIN' }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_492_Cutline' }
	} 
	var q_493 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 'q_493_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_494_Stepinfront' }
	} 
	var q_495 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Silvia and gave her a very mean look.', 'Silvia turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_495_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_496_Subjectstares' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_497_Sayrelax' }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_498_Creamsplash' }
	} 
	var q_499 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_499_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_500_Callpoliceman' }
	} 
	var q_501 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_501_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_502_Lovejuice' }
	} 
	var q_503 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_503_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_504_END' }
	} 

    var betweenstory_505 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_506 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_506_BEGIN' }
	} 
	var q_507 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_507_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_508_Cutline' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_509_Stepinfront' }
	} 
	var q_510 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_510_StepinfrontShove_StepinfrontShove_100_Permute_01' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_511_Shove' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_512_Xstare' }
	} 
	var q_513 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_513_XstareCreamsplash_XstareCreamsplash_100_Permute_10' }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_514_Creamsplash' }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_515_Baristaorders' }
	} 
	var q_516 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_516_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_517 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_517_Lovejuice' }
	} 
	var q_518 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_518_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_519_END' }
	} 

    var betweenstory_520 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_521 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_521_BEGIN' }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_522_Cutline' }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_523_Stepinfront' }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_524_Subjectstares' }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_525_Sayrelax' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_526_Creamsplash' }
	} 
	var q_527 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_527_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_528_Callpoliceman' }
	} 
	var q_529 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_529_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_530_Hatecoffee' }
	} 
	var q_531 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_531_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_532_END' }
	} 

    var betweenstory_533 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_534 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_534_BEGIN' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_535_Cutline' }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_536_Sayexcuseme' }
	} 
	var q_537 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Ben and gave him a very mean look.', 'Ben turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_537_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_538_Subjectstares' }
	} 
	var q_539 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Nick.', 'Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_539_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_540_Sayrelax' }
	} 
	var q_541 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.', 'Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 'q_541_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_542_Creamsplash' }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_543_Callpoliceman' }
	} 
	var q_544 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_544_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_545_Hatecoffee' }
	} 
	var q_546 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_546_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_547_END' }
	} 

    var betweenstory_548 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_549 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_549_BEGIN' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_550_Cutline' }
	} 
	var q_551 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 'q_551_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_552_Stepinfront' }
	} 
	var q_553 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_553_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_554_Subjectstares' }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_555_Xshove' }
	} 
	var q_556 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.', 'Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_556_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_557_Dessertcrumble' }
	} 
	var q_558 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_558_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_559_Baristaorders' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_560_Lovejuice' }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_561_END' }
	} 

    var betweenstory_562 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_563 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_563_BEGIN' }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_564_Cutline' }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_565_Stepinfront' }
	} 
	var q_566 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Silvia.', 'Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_566_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_567_Subjectstares' }
	} 
	var q_568 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Jesse, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Jesse.'],
		data: { state_info: 'q_568_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_569_Sayrelax' }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_570_Creamsplash' }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_571_Baristaorders' }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_572_Lovejuice' }
	} 
	var q_573 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_573_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_574_END' }
	} 

    var betweenstory_575 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_576 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_576_BEGIN' }
	} 
	var q_577 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 'q_577_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_578_Cutline' }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_579_Stepinfront' }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_580_Shove' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_581_Xshove' }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_582_Dessertcrumble' }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_583_Baristaorders' }
	} 
	var q_584 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_584_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_585_Lovejuice' }
	} 
	var q_586 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_586_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_587_END' }
	} 

    var betweenstory_588 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_589 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_589_BEGIN' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_590_Stepfoot' }
	} 
	var q_591 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_591_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_592_Sayexcuseme' }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_593_Subjectstares' }
	} 
	var q_594 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Vera, \"Hey! Relax.\"', 'Vera simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_594_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['Vera simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_595_Sayrelax' }
	} 
	var q_596 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Vera\'s head.', 'Vera snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_596_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_597_Dessertcrumble' }
	} 
	var q_598 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_598_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_599_Baristaorders' }
	} 
	var q_600 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_600_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_601_Lovejuice' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_602_END' }
	} 

    var betweenstory_603 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_604 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_604_BEGIN' }
	} 
	var q_605 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_605_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_606_Cutline' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_607_Stepinfront' }
	} 
	var q_608 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Olivia turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_608_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_609_Subjectstares' }
	} 
	var q_610 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_610_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_611_Sayrelax' }
	} 
	var q_612 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.', 'Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_612_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_613_Dessertcrumble' }
	} 
	var s_614 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_614_Baristaorders' }
	} 
	var q_615 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_615_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_616_Lovejuice' }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_617_END' }
	} 

    var betweenstory_618 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_619 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_619_BEGIN' }
	} 
	var q_620 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Nick\'s foot.', 'Without hesitating he cut Nick, the first person in line.'],
		data: { state_info: 'q_620_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_621_Stepfoot' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_622_Sayexcuseme' }
	} 
	var q_623 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_623_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_624_Shove' }
	} 
	var q_625 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Ben\'s eyes.', 'In retaliation, Nick pushed Ben.'],
		data: { state_info: 'q_625_ShoveXstare_ShoveXshove_33_Default_01' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_626_Xstare' }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_627_Creamsplash' }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_628_Callpoliceman' }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_629_Hatecoffee' }
	} 
	var q_630 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_630_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_631_END' }
	} 

    var betweenstory_632 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_633 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_633_BEGIN' }
	} 
	var q_634 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Vera, the first person in line.', 'Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 'q_634_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_635_Cutline' }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_636_Sayexcuseme' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_637_Shove' }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_638_Xshove' }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_639_Dessertcrumble' }
	} 
	var q_640 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_640_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_641_Baristaorders' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_642_Lovejuice' }
	} 
	var q_643 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_643_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_646_BEGIN' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_647_Cutline' }
	} 
	var q_648 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_648_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_649_Sayexcuseme' }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_650_Subjectstares' }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_651_Sayrelax' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_652_Dessertcrumble' }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_653_Baristaorders' }
	} 
	var q_654 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_654_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_655_Hatecoffee' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_656_END' }
	} 

    var betweenstory_657 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_658 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_658_BEGIN' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_659_Cutline' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_660_Stepinfront' }
	} 
	var q_661 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Jesse and gave him a very mean look.', 'Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 'q_661_StepinfrontIgnore_StepinfrontSubjectstares_16_Default_10' }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_662_Ignore' }
	} 
	var q_663 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Silvia, \"Hey! Relax.\"', 'Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_663_IgnoreSayrelax_IgnoreSayrelax_100_Permute_01' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_664_Sayrelax' }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_665_Dessertcrumble' }
	} 
	var q_666 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_666_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_01' }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_667_Callpoliceman' }
	} 
	var q_668 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_668_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_669_Hatecoffee' }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_670_END' }
	} 

    var betweenstory_671 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_672 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_672_BEGIN' }
	} 
	var q_673 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.'],
		data: { state_info: 'q_673_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_674_Cutline' }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_675_Sayexcuseme' }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_676_Ignore' }
	} 
	var q_677 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Vera\'s eyes.', 'Olivia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 'q_677_IgnoreXstare_IgnoreSayrelax_66_Default_01' }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_678_Xstare' }
	} 
	var q_679 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a cookie and crumbled it above Olivia\'s head.', 'Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 'q_679_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_680_Creamsplash' }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_681_Callpoliceman' }
	} 
	var s_682 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_682_Lovejuice' }
	} 
	var q_683 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_683_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_684_END' }
	} 

    var betweenstory_685 = {
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
betweenstory_49,questions_begin_50,s_51,q_52,s_53,q_54,s_55,s_56,q_57,s_58,q_59,s_60,q_61,s_62,q_63,s_64,s_65,
betweenstory_66,s_67,q_68,s_69,q_70,s_71,q_72,s_73,s_74,q_75,s_76,s_77,s_78,q_79,s_80,
betweenstory_81,s_82,s_83,q_84,s_85,q_86,s_87,s_88,s_89,s_90,q_91,s_92,q_93,s_94,
betweenstory_95,s_96,q_97,s_98,q_99,s_100,q_101,s_102,s_103,q_104,s_105,s_106,s_107,q_108,s_109,
betweenstory_110,s_111,s_112,q_113,s_114,s_115,s_116,s_117,q_118,s_119,q_120,s_121,q_122,s_123,
betweenstory_124,s_125,s_126,s_127,s_128,q_129,s_130,q_131,s_132,q_133,s_134,q_135,s_136,q_137,s_138,
betweenstory_139,s_140,q_141,s_142,q_143,s_144,s_145,q_146,s_147,s_148,q_149,s_150,s_151,q_152,s_153,
betweenstory_154,s_155,q_156,s_157,q_158,s_159,q_160,s_161,s_162,q_163,s_164,q_165,s_166,q_167,s_168,s_169,
betweenstory_170,s_171,q_172,s_173,q_174,s_175,q_176,s_177,s_178,q_179,s_180,s_181,q_182,s_183,s_184,
betweenstory_185,s_186,q_187,s_188,s_189,s_190,q_191,s_192,s_193,s_194,q_195,s_196,q_197,s_198,
betweenstory_199,s_200,s_201,q_202,s_203,s_204,q_205,s_206,q_207,s_208,q_209,s_210,s_211,q_212,s_213,
betweenstory_214,s_215,q_216,s_217,s_218,s_219,s_220,s_221,s_222,q_223,s_224,s_225,
betweenstory_226,s_227,s_228,s_229,q_230,s_231,q_232,s_233,s_234,s_235,q_236,s_237,s_238,
betweenstory_239,s_240,q_241,s_242,s_243,s_244,q_245,s_246,q_247,s_248,s_249,s_250,s_251,
betweenstory_252,s_253,s_254,s_255,s_256,s_257,q_258,s_259,s_260,s_261,q_262,s_263,
betweenstory_264,s_265,q_266,s_267,q_268,s_269,q_270,s_271,q_272,s_273,s_274,s_275,q_276,s_277,s_278,
betweenstory_279,s_280,q_281,s_282,s_283,q_284,s_285,s_286,q_287,s_288,q_289,s_290,q_291,s_292,s_293,
betweenstory_294,s_295,q_296,s_297,s_298,s_299,q_300,s_301,q_302,s_303,q_304,s_305,s_306,s_307,
betweenstory_308,s_309,s_310,s_311,q_312,s_313,q_314,s_315,s_316,q_317,s_318,s_319,q_320,s_321,
betweenstory_322,s_323,q_324,s_325,s_326,q_327,s_328,q_329,s_330,q_331,s_332,q_333,s_334,q_335,s_336,q_337,s_338,
betweenstory_339,s_340,q_341,s_342,q_343,s_344,s_345,s_346,s_347,q_348,s_349,q_350,s_351,s_352,
betweenstory_353,s_354,q_355,s_356,q_357,s_358,q_359,s_360,q_361,s_362,s_363,q_364,s_365,s_366,s_367,
betweenstory_368,s_369,q_370,s_371,s_372,s_373,q_374,s_375,s_376,q_377,s_378,s_379,s_380,
betweenstory_381,s_382,s_383,s_384,q_385,s_386,s_387,s_388,q_389,s_390,q_391,s_392,s_393,
betweenstory_394,s_395,s_396,s_397,s_398,s_399,q_400,s_401,q_402,s_403,s_404,q_405,s_406,
betweenstory_407,s_408,q_409,s_410,q_411,s_412,s_413,q_414,s_415,s_416,q_417,s_418,q_419,s_420,q_421,s_422,
betweenstory_423,s_424,q_425,s_426,s_427,s_428,q_429,s_430,q_431,s_432,s_433,q_434,s_435,s_436,
betweenstory_437,s_438,s_439,q_440,s_441,s_442,s_443,s_444,s_445,q_446,s_447,s_448,
betweenstory_449,s_450,q_451,s_452,s_453,s_454,q_455,s_456,s_457,q_458,s_459,q_460,s_461,s_462,
betweenstory_463,s_464,s_465,s_466,q_467,s_468,q_469,s_470,s_471,s_472,q_473,s_474,q_475,s_476,
betweenstory_477,s_478,s_479,s_480,s_481,q_482,s_483,q_484,s_485,q_486,s_487,s_488,s_489,
betweenstory_490,s_491,s_492,q_493,s_494,q_495,s_496,s_497,s_498,q_499,s_500,q_501,s_502,q_503,s_504,
betweenstory_505,s_506,q_507,s_508,s_509,q_510,s_511,s_512,q_513,s_514,s_515,q_516,s_517,q_518,s_519,
betweenstory_520,s_521,s_522,s_523,s_524,s_525,s_526,q_527,s_528,q_529,s_530,q_531,s_532,
betweenstory_533,s_534,s_535,s_536,q_537,s_538,q_539,s_540,q_541,s_542,s_543,q_544,s_545,q_546,s_547,
betweenstory_548,s_549,s_550,q_551,s_552,q_553,s_554,s_555,q_556,s_557,q_558,s_559,s_560,s_561,
betweenstory_562,s_563,s_564,s_565,q_566,s_567,q_568,s_569,s_570,s_571,s_572,q_573,s_574,
betweenstory_575,s_576,q_577,s_578,s_579,s_580,s_581,s_582,s_583,q_584,s_585,q_586,s_587,
betweenstory_588,s_589,s_590,q_591,s_592,s_593,q_594,s_595,q_596,s_597,q_598,s_599,q_600,s_601,s_602,
betweenstory_603,s_604,q_605,s_606,s_607,q_608,s_609,q_610,s_611,q_612,s_613,s_614,q_615,s_616,s_617,
betweenstory_618,s_619,q_620,s_621,s_622,q_623,s_624,q_625,s_626,s_627,s_628,s_629,q_630,s_631,
betweenstory_632,s_633,q_634,s_635,s_636,s_637,s_638,s_639,q_640,s_641,s_642,q_643,s_644,
betweenstory_645,s_646,s_647,q_648,s_649,s_650,s_651,s_652,s_653,q_654,s_655,s_656,
betweenstory_657,s_658,s_659,s_660,q_661,s_662,q_663,s_664,s_665,q_666,s_667,q_668,s_669,s_670,
betweenstory_671,s_672,q_673,s_674,s_675,s_676,q_677,s_678,q_679,s_680,s_681,s_682,q_683,s_684,
betweenstory_685,],

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

