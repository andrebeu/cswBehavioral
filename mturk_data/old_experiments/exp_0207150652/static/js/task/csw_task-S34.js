

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
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_53_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_54_Sayexcuseme' }
	} 
	var q_55 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Nick and gave him a very mean look.', 'Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 'q_55_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ['Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_56_Subjectstares' }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_57_Sayrelax' }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_58_Creamsplash' }
	} 
	var q_59 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_59_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_10' }
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
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_62_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
	var q_67 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 'q_67_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_68_Sayexcuseme' }
	} 
	var q_69 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_69_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_70_Subjectstares' }
	} 
	var q_71 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_71_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_72_Sayrelax' }
	} 
	var q_73 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Jesse\'s head.', 'Jesse snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_73_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['Jesse snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_74_Dessertcrumble' }
	} 
	var q_75 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_75_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_76_Baristaorders' }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_77_Hatecoffee' }
	} 
	var q_78 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_78_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_79_END' }
	} 

    var betweenstory_80 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_81 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_81_BEGIN' }
	} 
	var q_82 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_82_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_83_Cutline' }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_84_Stepinfront' }
	} 
	var q_85 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_85_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_86_Shove' }
	} 
	var q_87 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'In retaliation, Ben pushed Olivia.'],
		data: { state_info: 'q_87_ShoveXshove_ShoveXshove_100_Permute_01' }
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
	var s_93 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_93_END' }
	} 

    var betweenstory_94 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_95 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_95_BEGIN' }
	} 
	var q_96 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 'q_96_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_97_Cutline' }
	} 
	var q_98 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Ben.'],
		data: { state_info: 'q_98_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_99_Stepinfront' }
	} 
	var q_100 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Ben and gave him a very mean look.', 'Nick proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_100_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_101_Subjectstares' }
	} 
	var q_102 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Nick.', 'Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_102_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_103_Sayrelax' }
	} 
	var q_104 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cake and crumbled it above Ben\'s head.', 'Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 'q_104_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
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
	var s_108 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_108_END' }
	} 

    var betweenstory_109 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_110 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_110_BEGIN' }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_111_Cutline' }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_112_Sayexcuseme' }
	} 
	var q_113 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Ben and gave him a very mean look.', 'Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_113_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_114_Subjectstares' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_115_Xshove' }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_116_Dessertcrumble' }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_117_Callpoliceman' }
	} 
	var q_118 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_118_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_119_Lovejuice' }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_120_END' }
	} 

    var betweenstory_121 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_122 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_122_BEGIN' }
	} 
	var q_123 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Nick\'s foot.', 'Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 'q_123_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_124_Cutline' }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_125_Stepinfront' }
	} 
	var q_126 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Vera.', 'Vera proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_126_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ['Vera proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_127_Shove' }
	} 
	var q_128 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Vera\'s eyes.', 'Vera stared with rage into Nick\'s eyes.'],
		data: { state_info: 'q_128_ShoveXstare_ShoveXstare_100_Permute_01' }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_129_Xstare' }
	} 
	var q_130 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a cookie and crumbled it above Nick\'s head.', 'Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_130_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_131_Creamsplash' }
	} 
	var q_132 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_132_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_133_Callpoliceman' }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_134_Lovejuice' }
	} 
	var q_135 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_135_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_136_END' }
	} 

    var betweenstory_137 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_138 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_138_BEGIN' }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_139_Stepfoot' }
	} 
	var q_140 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_140_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_141_Sayexcuseme' }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_142_Subjectstares' }
	} 
	var q_143 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 'q_143_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_144_Sayrelax' }
	} 
	var q_145 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a muffin and crumbled it above Vera\'s head.', 'Vera snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 'q_145_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['Nick snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_146_Dessertcrumble' }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_147_Baristaorders' }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_148_Lovejuice' }
	} 
	var q_149 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_149_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_150_END' }
	} 

    var betweenstory_151 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_152 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_152_BEGIN' }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_153_Cutline' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_154_Stepinfront' }
	} 
	var q_155 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 'q_155_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_156_Subjectstares' }
	} 
	var q_157 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Silvia, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 'q_157_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_158_Sayrelax' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_159_Dessertcrumble' }
	} 
	var q_160 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_160_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_161_Callpoliceman' }
	} 
	var q_162 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_162_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_163_Lovejuice' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_164_END' }
	} 

    var betweenstory_165 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_166 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_166_BEGIN' }
	} 
	var q_167 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 'q_167_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_168_Stepfoot' }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_169_Sayexcuseme' }
	} 
	var q_170 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_170_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_171_Subjectstares' }
	} 
	var q_172 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Ben, \"Hey! Relax.\"', 'Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_172_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_173_Sayrelax' }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_174_Dessertcrumble' }
	} 
	var q_175 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_175_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_176_Baristaorders' }
	} 
	var q_177 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_177_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_178_Lovejuice' }
	} 
	var q_179 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_179_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_180_END' }
	} 

    var betweenstory_181 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_182 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_182_BEGIN' }
	} 
	var q_183 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 'q_183_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_184_Cutline' }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_185_Stepinfront' }
	} 
	var q_186 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_186_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_187_Shove' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_188_Xshove' }
	} 
	var q_189 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_189_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_190_Dessertcrumble' }
	} 
	var q_191 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_191_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_192_Baristaorders' }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_193_Hatecoffee' }
	} 
	var q_194 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_194_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_195_END' }
	} 

    var betweenstory_196 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_197 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_197_BEGIN' }
	} 
	var q_198 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_198_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_199_Cutline' }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_200_Sayexcuseme' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_201_Subjectstares' }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_202_Sayrelax' }
	} 
	var q_203 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Nick\'s face.', 'Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_203_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_204_Creamsplash' }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_205_Callpoliceman' }
	} 
	var q_206 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_206_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_207_Lovejuice' }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_208_END' }
	} 

    var betweenstory_209 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_210 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_210_BEGIN' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_211_Cutline' }
	} 
	var q_212 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_212_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_213_Sayexcuseme' }
	} 
	var q_214 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_214_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_215_Shove' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_216_Xshove' }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_217_Dessertcrumble' }
	} 
	var q_218 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_218_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_219_Callpoliceman' }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_220_Hatecoffee' }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_221_END' }
	} 

    var betweenstory_222 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_223 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_223_BEGIN' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_224_Cutline' }
	} 
	var q_225 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_225_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_226_Stepinfront' }
	} 
	var q_227 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Olivia turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_227_StepinfrontShove_StepinfrontSubjectstares_44_Default_01' }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_228_Shove' }
	} 
	var q_229 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Olivia, \"Hey! Relax.\"', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_229_ShoveSayrelax_ShoveSayrelax_100_Permute_01' }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_230_Sayrelax' }
	} 
	var q_231 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Silvia\'s head.', 'Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_231_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_232_Creamsplash' }
	} 
	var q_233 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_233_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_234_Callpoliceman' }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_235_Hatecoffee' }
	} 
	var q_236 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_236_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_237_END' }
	} 

    var betweenstory_238 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_239 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_239_BEGIN' }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_240_Stepfoot' }
	} 
	var q_241 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_241_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_242_Sayexcuseme' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_243_Subjectstares' }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_244_Sayrelax' }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_245_Creamsplash' }
	} 
	var q_246 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_246_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_01' }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_247_Baristaorders' }
	} 
	var q_248 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_248_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_249_Lovejuice' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_250_END' }
	} 

    var betweenstory_251 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_252 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_252_BEGIN' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_253_Cutline' }
	} 
	var q_254 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_254_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
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
	var q_257 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_257_ShoveXshove_ShoveSayrelax_85_Default_01' }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_258_Xshove' }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_259_Dessertcrumble' }
	} 
	var q_260 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_260_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_261_Baristaorders' }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_262_Lovejuice' }
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
	var q_269 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_269_SayexcusemeShove_SayexcusemeIgnore_80_Default_01' }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_270_Shove' }
	} 
	var q_271 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Jesse\'s eyes.', 'In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 'q_271_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_272_Xshove' }
	} 
	var q_273 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Olivia\'s face.', 'Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_273_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_274_Dessertcrumble' }
	} 
	var q_275 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Nick, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_275_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_276_Baristaorders' }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_277_Lovejuice' }
	} 
	var q_278 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_278_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_279_END' }
	} 

    var betweenstory_280 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_281 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_281_BEGIN' }
	} 
	var q_282 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Nick\'s foot.', 'Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 'q_282_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_283_Cutline' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_284_Stepinfront' }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_285_Shove' }
	} 
	var q_286 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Nick.', 'In retaliation, Nick pushed Olivia.'],
		data: { state_info: 'q_286_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_287_Xshove' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_288_Dessertcrumble' }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_289_Baristaorders' }
	} 
	var q_290 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_290_BaristaordersHatecoffee_BaristaordersHatecoffee_100_Alter_10' }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_291_Hatecoffee' }
	} 
	var q_292 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_292_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
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
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_296_BEGINStepfoot_BEGINCutline_20_Default_01' }
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
	var q_299 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Silvia.', 'Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_299_SayexcusemeShove_SayexcusemeIgnore_80_Default_01' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_300_Shove' }
	} 
	var q_301 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Jesse\'s eyes.', 'Jesse stared with rage into Silvia\'s eyes.'],
		data: { state_info: 'q_301_ShoveXstare_ShoveXstare_100_Permute_01' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_302_Xstare' }
	} 
	var q_303 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_303_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_304_Creamsplash' }
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
	var q_307 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_307_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_308_END' }
	} 

    var betweenstory_309 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_310 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_310_BEGIN' }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_311_Cutline' }
	} 
	var q_312 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_312_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_313_Sayexcuseme' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_314_Subjectstares' }
	} 
	var q_315 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Silvia, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 'q_315_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_316_Sayrelax' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_317_Creamsplash' }
	} 
	var q_318 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_318_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_319_Callpoliceman' }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_320_Hatecoffee' }
	} 
	var q_321 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_321_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_322_END' }
	} 

    var betweenstory_323 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_324 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_324_BEGIN' }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_325_Stepfoot' }
	} 
	var q_326 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_326_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_327_Sayexcuseme' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_328_Ignore' }
	} 
	var q_329 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Vera, \"Hey! Relax.\"', 'Silvia stared with rage into Vera\'s eyes.'],
		data: { state_info: 'q_329_IgnoreSayrelax_IgnoreXstare_33_Default_01' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_330_Sayrelax' }
	} 
	var q_331 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Silvia\'s face.', 'Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_331_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_332_Dessertcrumble' }
	} 
	var q_333 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_333_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
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
	var s_341 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_341_Cutline' }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_342_Stepinfront' }
	} 
	var q_343 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick ignored him and proceeded to order a latte.', 'Jesse ignored him and proceeded to order a latte.'],
		data: { state_info: 'q_343_StepinfrontIgnore_StepinfrontIgnore_100_Alter_01' }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_344_Ignore' }
	} 
	var q_345 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_345_IgnoreSayrelax_IgnoreSayrelax_100_Permute_01' }
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
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_348_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_349_Baristaorders' }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_350_Lovejuice' }
	} 
	var q_351 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_351_LovejuiceEND_LovejuiceEND_100_Alter_01' }
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
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_355_BEGINCutline_BEGINStepfoot_80_Default_01' }
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
	var s_359 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_359_Subjectstares' }
	} 
	var q_360 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_360_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_361_Sayrelax' }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_362_Creamsplash' }
	} 
	var q_363 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 'q_363_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_364_Callpoliceman' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_365_Hatecoffee' }
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
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_369_BEGINCutline_BEGINStepfoot_80_Default_10' }
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
	var q_374 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Jesse, \"Hey! Relax.\"', 'Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_374_IgnoreSayrelax_IgnoreSayrelax_100_Permute_01' }
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
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 'q_377_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
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
	var q_385 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_385_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_386_Sayexcuseme' }
	} 
	var q_387 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Nick and gave him a very mean look.', 'Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 'q_387_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_388_Subjectstares' }
	} 
	var q_389 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Olivia\'s eyes.', 'Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_389_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_10' }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_390_Sayrelax' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_391_Creamsplash' }
	} 
	var q_392 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_392_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_393_Callpoliceman' }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_394_Lovejuice' }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_395_END' }
	} 

    var betweenstory_396 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_397 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_397_BEGIN' }
	} 
	var q_398 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_398_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_399_Cutline' }
	} 
	var q_400 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_400_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_401_Sayexcuseme' }
	} 
	var q_402 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Olivia and gave her a very mean look.', 'Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 'q_402_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_403_Subjectstares' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_404_Sayrelax' }
	} 
	var q_405 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 'q_405_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
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
	var s_412 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_412_Stepfoot' }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_413_Sayexcuseme' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_414_Shove' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_415_Xshove' }
	} 
	var q_416 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a cookie and crumbled it above Olivia\'s head.', 'Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_416_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_417_Dessertcrumble' }
	} 
	var q_418 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_418_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_419_Baristaorders' }
	} 
	var q_420 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_420_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_421_Lovejuice' }
	} 
	var q_422 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_422_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_423_END' }
	} 

    var betweenstory_424 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_425 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_425_BEGIN' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_426_Cutline' }
	} 
	var q_427 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_427_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_428_Sayexcuseme' }
	} 
	var q_429 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben ignored her and proceeded to order a coffee.', 'Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_429_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_10' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_430_Subjectstares' }
	} 
	var q_431 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'In retaliation, Silvia pushed Ben.'],
		data: { state_info: 'q_431_SubjectstaresXshove_SubjectstaresXshove_100_Permute_10' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_432_Xshove' }
	} 
	var q_433 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_433_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_434_Dessertcrumble' }
	} 
	var q_435 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_435_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_436_Baristaorders' }
	} 
	var q_437 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_437_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_438_Lovejuice' }
	} 
	var q_439 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_439_LovejuiceEND_LovejuiceEND_100_Alter_01' }
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
	var q_444 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 'q_444_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_445_Stepinfront' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_446_Subjectstares' }
	} 
	var q_447 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Nick\'s eyes.', 'Olivia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_447_SubjectstaresXstare_SubjectstaresSayrelax_14_Default_01' }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_448_Xstare' }
	} 
	var q_449 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a cookie and crumbled it above Olivia\'s head.', 'Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 'q_449_XstareCreamsplash_XstareDessertcrumble_90_Default_10' }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_450_Creamsplash' }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_451_Callpoliceman' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_452_Lovejuice' }
	} 
	var q_453 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_453_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_454_END' }
	} 

    var betweenstory_455 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_456 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_456_BEGIN' }
	} 
	var q_457 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_457_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_458_Cutline' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 's_459_Stepinfront' }
	} 
	var q_460 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Jesse and gave him a very mean look.', 'Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_460_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_461_Subjectstares' }
	} 
	var q_462 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Vera\'s eyes.', 'In retaliation, Jesse pushed Vera.'],
		data: { state_info: 'q_462_SubjectstaresXstare_SubjectstaresXshove_25_Default_01' }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ['Jesse stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_463_Xstare' }
	} 
	var q_464 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Jesse\'s face.', 'Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_464_XstareCreamsplash_XstareDessertcrumble_90_Default_01' }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_465_Creamsplash' }
	} 
	var q_466 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Vera to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_466_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_467_Callpoliceman' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_468_Hatecoffee' }
	} 
	var q_469 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_469_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_470_END' }
	} 

    var betweenstory_471 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_472 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_472_BEGIN' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_473_Cutline' }
	} 
	var q_474 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera promptly stepped back in front of Silvia.', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_474_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_475_Stepinfront' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_476_Subjectstares' }
	} 
	var q_477 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Vera, \"Hey! Relax.\"', 'Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_477_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_478_Sayrelax' }
	} 
	var q_479 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.', 'Vera snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_479_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_480_Dessertcrumble' }
	} 
	var q_481 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_481_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_482_Baristaorders' }
	} 
	var q_483 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
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
	var q_488 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 'q_488_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_489_Stepfoot' }
	} 
	var q_490 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_490_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_491_Sayexcuseme' }
	} 
	var q_492 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Vera.', 'Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_492_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_01' }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_493_Shove' }
	} 
	var q_494 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Olivia.', 'Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 'q_494_ShoveXstare_ShoveXshove_33_Default_10' }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_495_Xstare' }
	} 
	var q_496 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_496_XstareDessertcrumble_XstareDessertcrumble_100_Permute_10' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_497_Dessertcrumble' }
	} 
	var q_498 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_498_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_499_Baristaorders' }
	} 
	var q_500 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_500_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_501_Lovejuice' }
	} 
	var q_502 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_502_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_503_END' }
	} 

    var betweenstory_504 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_505 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_505_BEGIN' }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_506_Cutline' }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_507_Stepinfront' }
	} 
	var q_508 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Silvia and gave her a very mean look.', 'Silvia turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_508_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_509_Subjectstares' }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_510_Sayrelax' }
	} 
	var q_511 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Nick snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_511_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_512_Creamsplash' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_513_Callpoliceman' }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_514_Lovejuice' }
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
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_517_BEGIN' }
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 'q_520_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_521_Shove' }
	} 
	var q_522 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Ben\'s eyes.', 'Silvia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_522_ShoveXstare_ShoveSayrelax_74_Default_01' }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_523_Xstare' }
	} 
	var q_524 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.', 'Ben snatched a cake and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_524_XstareCreamsplash_XstareDessertcrumble_90_Default_01' }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_525_Creamsplash' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_526_Baristaorders' }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_527_Lovejuice' }
	} 
	var q_528 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_528_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
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
	var s_532 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_532_Cutline' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_533_Stepinfront' }
	} 
	var q_534 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Nick.', 'Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_534_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_535_Subjectstares' }
	} 
	var q_536 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stared with rage into Olivia\'s eyes.', 'Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_536_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_10' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_537_Sayrelax' }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_538_Creamsplash' }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_539_Callpoliceman' }
	} 
	var q_540 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_540_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_541_Hatecoffee' }
	} 
	var q_542 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_542_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_543_END' }
	} 

    var betweenstory_544 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_545 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_545_BEGIN' }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_546_Cutline' }
	} 
	var q_547 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Nick.'],
		data: { state_info: 'q_547_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_548_Sayexcuseme' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_549_Subjectstares' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_550_Sayrelax' }
	} 
	var q_551 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.', 'Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_551_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_552_Creamsplash' }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_553_Callpoliceman' }
	} 
	var q_554 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_554_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
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
	var s_559 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_559_Cutline' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_560_Stepinfront' }
	} 
	var q_561 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_561_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_562_Subjectstares' }
	} 
	var q_563 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'In retaliation, Jesse pushed Ben.'],
		data: { state_info: 'q_563_SubjectstaresXshove_SubjectstaresXshove_100_Permute_01' }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_564_Xshove' }
	} 
	var q_565 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_565_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_566_Dessertcrumble' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_567_Baristaorders' }
	} 
	var q_568 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_568_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
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
	var q_573 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_573_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_574_Cutline' }
	} 
	var q_575 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Jesse.', 'Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_575_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_576_Stepinfront' }
	} 
	var q_577 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Jesse and gave him a very mean look.', 'Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_577_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_578_Subjectstares' }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_579_Sayrelax' }
	} 
	var q_580 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_580_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_581_Creamsplash' }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_582_Baristaorders' }
	} 
	var q_583 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_583_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_584_Lovejuice' }
	} 
	var q_585 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_585_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_586_END' }
	} 

    var betweenstory_587 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_588 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_588_BEGIN' }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_589_Cutline' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_590_Stepinfront' }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_591_Shove' }
	} 
	var q_592 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'In retaliation, Olivia pushed Ben.'],
		data: { state_info: 'q_592_ShoveXshove_ShoveXshove_100_Permute_10' }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_593_Xshove' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_594_Dessertcrumble' }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_595_Baristaorders' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_596_Lovejuice' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_597_END' }
	} 

    var betweenstory_598 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_599 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_599_BEGIN' }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_600_Stepfoot' }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_601_Sayexcuseme' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_602_Subjectstares' }
	} 
	var q_603 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Vera.', 'In retaliation, Vera pushed Olivia.'],
		data: { state_info: 'q_603_SubjectstaresXshove_SubjectstaresXshove_100_Permute_10' }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_604_Xshove' }
	} 
	var q_605 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Vera\'s face.', 'Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_605_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_606_Dessertcrumble' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_607_Baristaorders' }
	} 
	var q_608 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_608_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_10' }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_609_Hatecoffee' }
	} 
	var q_610 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
	var q_614 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_614_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_615_Cutline' }
	} 
	var q_616 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_616_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_617_Stepinfront' }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_618_Subjectstares' }
	} 
	var q_619 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_619_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_620_Sayrelax' }
	} 
	var q_621 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_621_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_622_Dessertcrumble' }
	} 
	var q_623 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_623_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_624_Baristaorders' }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_625_Lovejuice' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_626_END' }
	} 

    var betweenstory_627 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_628 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_628_BEGIN' }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_629_Stepfoot' }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_630_Sayexcuseme' }
	} 
	var q_631 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_631_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_632_Shove' }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_633_Xstare' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_634_Creamsplash' }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_635_Callpoliceman' }
	} 
	var q_636 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_636_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_637_Hatecoffee' }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_638_END' }
	} 

    var betweenstory_639 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_640 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_640_BEGIN' }
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
		labels: ['Nick proceeded to give a slight shove to Vera.', 'Vera proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_643_SayexcusemeShove_SayexcusemeShove_100_Permute_01' }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_644_Shove' }
	} 
	var q_645 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Nick.', 'Vera stared with rage into Nick\'s eyes.'],
		data: { state_info: 'q_645_ShoveXshove_ShoveXstare_66_Default_01' }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_646_Xshove' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_647_Dessertcrumble' }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_648_Baristaorders' }
	} 
	var q_649 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_649_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_650_Lovejuice' }
	} 
	var q_651 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_651_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_652_END' }
	} 

    var betweenstory_653 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_654 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_654_BEGIN' }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_655_Cutline' }
	} 
	var q_656 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera promptly stepped back in front of Jesse.', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_656_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_657_Sayexcuseme' }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_658_Subjectstares' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_659_Sayrelax' }
	} 
	var q_660 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Vera\'s head.', 'Jesse picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 'q_660_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 's_661_Creamsplash' }
	} 
	var q_662 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_662_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_10' }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_663_Baristaorders' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_664_Lovejuice' }
	} 
	var q_665 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_665_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_666_END' }
	} 

    var betweenstory_667 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_668 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_668_BEGIN' }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_669_Cutline' }
	} 
	var q_670 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Silvia.', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_670_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_671_Stepinfront' }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_672_Ignore' }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_673_Sayrelax' }
	} 
	var q_674 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_674_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_675_Dessertcrumble' }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_676_Callpoliceman' }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_677_Hatecoffee' }
	} 
	var q_678 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_678_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_679_END' }
	} 

    var betweenstory_680 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_681 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_681_BEGIN' }
	} 
	var q_682 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.'],
		data: { state_info: 'q_682_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_683_Cutline' }
	} 
	var q_684 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Vera.'],
		data: { state_info: 'q_684_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_685_Sayexcuseme' }
	} 
	var q_686 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera ignored her and proceeded to order a coffee.', 'Vera turned to Olivia and gave her a very mean look.'],
		data: { state_info: 'q_686_SayexcusemeIgnore_SayexcusemeSubjectstares_16_Default_01' }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_687_Ignore' }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_688_Xstare' }
	} 
	var q_689 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.', 'Vera snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_689_XstareCreamsplash_XstareDessertcrumble_90_Default_01' }
	} 
	var s_690 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_690_Creamsplash' }
	} 
	var q_691 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_691_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_692 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_692_Callpoliceman' }
	} 
	var q_693 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_693_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
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
  timeline: [intro1,intro2,intro3,intro4,intro5,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,s_10,s_11,s_12,s_13,s_14,s_15,s_16,s_17,s_18,
betweenstory_19,s_20,s_21,s_22,s_23,s_24,s_25,s_26,s_27,s_28,
betweenstory_29,s_30,s_31,s_32,s_33,s_34,s_35,s_36,s_37,s_38,
betweenstory_39,s_40,s_41,s_42,s_43,s_44,s_45,s_46,s_47,s_48,
betweenstory_49,questions_begin_50,s_51,s_52,q_53,s_54,q_55,s_56,s_57,s_58,q_59,s_60,s_61,q_62,s_63,
betweenstory_64,s_65,s_66,q_67,s_68,q_69,s_70,q_71,s_72,q_73,s_74,q_75,s_76,s_77,q_78,s_79,
betweenstory_80,s_81,q_82,s_83,s_84,q_85,s_86,q_87,s_88,s_89,s_90,q_91,s_92,s_93,
betweenstory_94,s_95,q_96,s_97,q_98,s_99,q_100,s_101,q_102,s_103,q_104,s_105,s_106,s_107,s_108,
betweenstory_109,s_110,s_111,s_112,q_113,s_114,s_115,s_116,s_117,q_118,s_119,s_120,
betweenstory_121,s_122,q_123,s_124,s_125,q_126,s_127,q_128,s_129,q_130,s_131,q_132,s_133,s_134,q_135,s_136,
betweenstory_137,s_138,s_139,q_140,s_141,s_142,q_143,s_144,q_145,s_146,s_147,s_148,q_149,s_150,
betweenstory_151,s_152,s_153,s_154,q_155,s_156,q_157,s_158,s_159,q_160,s_161,q_162,s_163,s_164,
betweenstory_165,s_166,q_167,s_168,s_169,q_170,s_171,q_172,s_173,s_174,q_175,s_176,q_177,s_178,q_179,s_180,
betweenstory_181,s_182,q_183,s_184,s_185,q_186,s_187,s_188,q_189,s_190,q_191,s_192,s_193,q_194,s_195,
betweenstory_196,s_197,q_198,s_199,s_200,s_201,s_202,q_203,s_204,s_205,q_206,s_207,s_208,
betweenstory_209,s_210,s_211,q_212,s_213,q_214,s_215,s_216,s_217,q_218,s_219,s_220,s_221,
betweenstory_222,s_223,s_224,q_225,s_226,q_227,s_228,q_229,s_230,q_231,s_232,q_233,s_234,s_235,q_236,s_237,
betweenstory_238,s_239,s_240,q_241,s_242,s_243,s_244,s_245,q_246,s_247,q_248,s_249,s_250,
betweenstory_251,s_252,s_253,q_254,s_255,s_256,q_257,s_258,s_259,q_260,s_261,s_262,s_263,
betweenstory_264,s_265,s_266,q_267,s_268,q_269,s_270,q_271,s_272,q_273,s_274,q_275,s_276,s_277,q_278,s_279,
betweenstory_280,s_281,q_282,s_283,s_284,s_285,q_286,s_287,s_288,s_289,q_290,s_291,q_292,s_293,
betweenstory_294,s_295,q_296,s_297,s_298,q_299,s_300,q_301,s_302,q_303,s_304,s_305,s_306,q_307,s_308,
betweenstory_309,s_310,s_311,q_312,s_313,s_314,q_315,s_316,s_317,q_318,s_319,s_320,q_321,s_322,
betweenstory_323,s_324,s_325,q_326,s_327,s_328,q_329,s_330,q_331,s_332,q_333,s_334,q_335,s_336,q_337,s_338,
betweenstory_339,s_340,s_341,s_342,q_343,s_344,q_345,s_346,s_347,q_348,s_349,s_350,q_351,s_352,
betweenstory_353,s_354,q_355,s_356,q_357,s_358,s_359,q_360,s_361,s_362,q_363,s_364,s_365,s_366,
betweenstory_367,s_368,q_369,s_370,q_371,s_372,s_373,q_374,s_375,s_376,q_377,s_378,s_379,s_380,
betweenstory_381,s_382,q_383,s_384,q_385,s_386,q_387,s_388,q_389,s_390,s_391,q_392,s_393,s_394,s_395,
betweenstory_396,s_397,q_398,s_399,q_400,s_401,q_402,s_403,s_404,q_405,s_406,s_407,s_408,s_409,
betweenstory_410,s_411,s_412,s_413,s_414,s_415,q_416,s_417,q_418,s_419,q_420,s_421,q_422,s_423,
betweenstory_424,s_425,s_426,q_427,s_428,q_429,s_430,q_431,s_432,q_433,s_434,q_435,s_436,q_437,s_438,q_439,s_440,
betweenstory_441,s_442,s_443,q_444,s_445,s_446,q_447,s_448,q_449,s_450,s_451,s_452,q_453,s_454,
betweenstory_455,s_456,q_457,s_458,s_459,q_460,s_461,q_462,s_463,q_464,s_465,q_466,s_467,s_468,q_469,s_470,
betweenstory_471,s_472,s_473,q_474,s_475,s_476,q_477,s_478,q_479,s_480,q_481,s_482,q_483,s_484,s_485,
betweenstory_486,s_487,q_488,s_489,q_490,s_491,q_492,s_493,q_494,s_495,q_496,s_497,q_498,s_499,q_500,s_501,q_502,s_503,
betweenstory_504,s_505,s_506,s_507,q_508,s_509,s_510,q_511,s_512,s_513,s_514,s_515,
betweenstory_516,s_517,s_518,s_519,q_520,s_521,q_522,s_523,q_524,s_525,s_526,s_527,q_528,s_529,
betweenstory_530,s_531,s_532,s_533,q_534,s_535,q_536,s_537,s_538,s_539,q_540,s_541,q_542,s_543,
betweenstory_544,s_545,s_546,q_547,s_548,s_549,s_550,q_551,s_552,s_553,q_554,s_555,s_556,
betweenstory_557,s_558,s_559,s_560,q_561,s_562,q_563,s_564,q_565,s_566,s_567,q_568,s_569,s_570,
betweenstory_571,s_572,q_573,s_574,q_575,s_576,q_577,s_578,s_579,q_580,s_581,s_582,q_583,s_584,q_585,s_586,
betweenstory_587,s_588,s_589,s_590,s_591,q_592,s_593,s_594,s_595,s_596,s_597,
betweenstory_598,s_599,s_600,s_601,s_602,q_603,s_604,q_605,s_606,s_607,q_608,s_609,q_610,s_611,
betweenstory_612,s_613,q_614,s_615,q_616,s_617,s_618,q_619,s_620,q_621,s_622,q_623,s_624,s_625,s_626,
betweenstory_627,s_628,s_629,s_630,q_631,s_632,s_633,s_634,s_635,q_636,s_637,s_638,
betweenstory_639,s_640,s_641,s_642,q_643,s_644,q_645,s_646,s_647,s_648,q_649,s_650,q_651,s_652,
betweenstory_653,s_654,s_655,q_656,s_657,s_658,s_659,q_660,s_661,q_662,s_663,s_664,q_665,s_666,
betweenstory_667,s_668,s_669,q_670,s_671,s_672,s_673,q_674,s_675,s_676,s_677,q_678,s_679,
betweenstory_680,s_681,q_682,s_683,q_684,s_685,q_686,s_687,s_688,q_689,s_690,q_691,s_692,q_693,s_694,s_695,
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

