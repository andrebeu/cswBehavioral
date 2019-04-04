

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
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_3_Shove' }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Ben.'],
		data: { state_info: 's_4_Xshove' }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_5_Dessertcrumble' }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_6_Baristaorders' }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_7_Lovejuice' }
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
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 'q_53_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
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
		labels: ['Nick simply said to Jesse, \"Hey! Relax.\"', 'Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_56_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_57_Sayrelax' }
	} 
	var q_58 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_58_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
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
	var q_61 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_61_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_62_Lovejuice' }
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
	var q_66 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 'q_66_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_67_Cutline' }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_68_Sayexcuseme' }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_69_Subjectstares' }
	} 
	var q_70 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Jesse, \"Hey! Relax.\"', 'Jesse simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_70_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_71_Sayrelax' }
	} 
	var q_72 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cookie and crumbled it above Ben\'s head.', 'Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 'q_72_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_73_Creamsplash' }
	} 
	var q_74 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Vera, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_74_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_01' }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_75_Baristaorders' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_76_Lovejuice' }
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
	var q_80 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_80_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_81_Cutline' }
	} 
	var q_82 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_82_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_83_Stepinfront' }
	} 
	var q_84 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_84_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_85_Shove' }
	} 
	var q_86 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'In retaliation, Ben pushed Olivia.'],
		data: { state_info: 'q_86_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_87_Xshove' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_88_Dessertcrumble' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_89_Callpoliceman' }
	} 
	var q_90 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_90_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_91_Hatecoffee' }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_92_END' }
	} 

    var betweenstory_93 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_94 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_94_BEGIN' }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_95_Cutline' }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_96_Stepinfront' }
	} 
	var q_97 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Ben and gave him a very mean look.', 'Ben turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_97_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
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
		labels: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.', 'Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_100_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_101_Creamsplash' }
	} 
	var q_102 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 'q_102_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
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
	var s_111 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_111_Subjectstares' }
	} 
	var q_112 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Ben.', 'Vera simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_112_SubjectstaresXshove_SubjectstaresSayrelax_33_Default_01' }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_113_Xshove' }
	} 
	var q_114 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.', 'Ben picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 'q_114_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_115_Dessertcrumble' }
	} 
	var q_116 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 'q_116_DessertcrumbleCallpoliceman_DessertcrumbleCallpoliceman_100_Alter_01' }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_117_Callpoliceman' }
	} 
	var q_118 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_118_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
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
	var s_123 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_123_Cutline' }
	} 
	var q_124 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Vera.', 'Vera promptly stepped back in front of Nick.'],
		data: { state_info: 'q_124_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_125_Stepinfront' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Vera proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_126_Shove' }
	} 
	var q_127 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Nick pushed Vera.', 'Nick stared with rage into Vera\'s eyes.'],
		data: { state_info: 'q_127_ShoveXstare_ShoveXshove_33_Default_10' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_128_Xstare' }
	} 
	var q_129 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.', 'Vera snatched a cookie and crumbled it above Nick\'s head.'],
		data: { state_info: 'q_129_XstareCreamsplash_XstareDessertcrumble_90_Default_01' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_130_Creamsplash' }
	} 
	var q_131 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_131_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_132_Callpoliceman' }
	} 
	var q_133 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_133_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
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
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_140_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
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
	var s_143 = {
		type: 'instructions',
		pages: ['Vera simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_143_Sayrelax' }
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
	var s_153 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_153_Stepinfront' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_154_Subjectstares' }
	} 
	var q_155 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_155_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_156_Sayrelax' }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_157_Dessertcrumble' }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_158_Callpoliceman' }
	} 
	var q_159 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_159_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
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
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 'q_164_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_165_Stepfoot' }
	} 
	var q_166 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_166_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_167_Sayexcuseme' }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_168_Subjectstares' }
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
	var s_171 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_171_Baristaorders' }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_172_Lovejuice' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_173_END' }
	} 

    var betweenstory_174 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_175 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_175_BEGIN' }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_176_Cutline' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_177_Stepinfront' }
	} 
	var q_178 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_178_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_179_Shove' }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_180_Xshove' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_181_Dessertcrumble' }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_182_Baristaorders' }
	} 
	var q_183 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_183_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_184_Hatecoffee' }
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
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_187_BEGIN' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_188_Cutline' }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_189_Sayexcuseme' }
	} 
	var q_190 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Nick and gave him a very mean look.', 'Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_190_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_191_Subjectstares' }
	} 
	var q_192 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Nick simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_192_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_193_Sayrelax' }
	} 
	var q_194 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Nick snatched a cookie and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_194_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_195_Creamsplash' }
	} 
	var q_196 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 'q_196_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_197_Callpoliceman' }
	} 
	var q_198 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_198_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_199_Lovejuice' }
	} 
	var q_200 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_200_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_201_END' }
	} 

    var betweenstory_202 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_203 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_203_BEGIN' }
	} 
	var q_204 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 'q_204_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_205_Cutline' }
	} 
	var q_206 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_206_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_10' }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_207_Sayexcuseme' }
	} 
	var q_208 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_208_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_209_Shove' }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_210_Xshove' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_211_Dessertcrumble' }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_212_Callpoliceman' }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_213_Hatecoffee' }
	} 
	var q_214 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_214_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_215_END' }
	} 

    var betweenstory_216 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_217 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_217_BEGIN' }
	} 
	var q_218 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Silvia\'s foot.', 'Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 'q_218_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_219_Cutline' }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_220_Stepinfront' }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_221_Shove' }
	} 
	var q_222 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Olivia.', 'Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_222_ShoveSayrelax_ShoveXshove_14_Default_10' }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_223_Sayrelax' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_224_Creamsplash' }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_225_Callpoliceman' }
	} 
	var q_226 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_226_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_227_Hatecoffee' }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_228_END' }
	} 

    var betweenstory_229 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_230 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_230_BEGIN' }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_231_Stepfoot' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_232_Sayexcuseme' }
	} 
	var q_233 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_233_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_234_Subjectstares' }
	} 
	var q_235 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_235_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_236_Sayrelax' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_237_Creamsplash' }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_238_Baristaorders' }
	} 
	var q_239 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_239_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_240_Lovejuice' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_244_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_245_Cutline' }
	} 
	var q_246 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_246_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_247_Stepinfront' }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_248_Shove' }
	} 
	var q_249 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Olivia, \"Hey! Relax.\"', 'In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 'q_249_ShoveXshove_ShoveSayrelax_85_Default_10' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_250_Xshove' }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_251_Dessertcrumble' }
	} 
	var q_252 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_252_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_253_Baristaorders' }
	} 
	var q_254 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_254_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_255_Lovejuice' }
	} 
	var q_256 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_256_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_257_END' }
	} 

    var betweenstory_258 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_259 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_259_BEGIN' }
	} 
	var q_260 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_260_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_261_Cutline' }
	} 
	var q_262 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 'q_262_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_263_Sayexcuseme' }
	} 
	var q_264 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_264_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_265_Shove' }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_266_Xshove' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['Jesse snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_267_Dessertcrumble' }
	} 
	var q_268 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_268_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_269_Baristaorders' }
	} 
	var q_270 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_270_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_271_Lovejuice' }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_272_END' }
	} 

    var betweenstory_273 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_274 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_274_BEGIN' }
	} 
	var q_275 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Nick, the first person in line.', 'Clumsily, she stepped on Nick\'s foot.'],
		data: { state_info: 'q_275_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_276_Cutline' }
	} 
	var q_277 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_277_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_278_Stepinfront' }
	} 
	var q_279 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Nick and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_279_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_280_Shove' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_281_Xshove' }
	} 
	var q_282 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 'q_282_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_283_Dessertcrumble' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_284_Baristaorders' }
	} 
	var q_285 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_285_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_286_Hatecoffee' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_287_END' }
	} 

    var betweenstory_288 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_289 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_289_BEGIN' }
	} 
	var q_290 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_290_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_291_Stepfoot' }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_292_Sayexcuseme' }
	} 
	var q_293 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Silvia.', 'Silvia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 'q_293_SayexcusemeShove_SayexcusemeShove_100_Permute_01' }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_294_Shove' }
	} 
	var q_295 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Jesse.', 'Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 'q_295_ShoveXstare_ShoveXshove_33_Default_10' }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_296_Xstare' }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_297_Creamsplash' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_298_Callpoliceman' }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_299_Hatecoffee' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_300_END' }
	} 

    var betweenstory_301 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_302 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_302_BEGIN' }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_303_Cutline' }
	} 
	var q_304 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_304_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_305_Sayexcuseme' }
	} 
	var q_306 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Olivia and gave her a very mean look.', 'Silvia proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_306_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_307_Subjectstares' }
	} 
	var q_308 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_308_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_309_Sayrelax' }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_310_Creamsplash' }
	} 
	var q_311 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 'q_311_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_312_Callpoliceman' }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_313_Hatecoffee' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_314_END' }
	} 

    var betweenstory_315 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_316 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_316_BEGIN' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_317_Stepfoot' }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_318_Sayexcuseme' }
	} 
	var q_319 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored her and proceeded to order a coffee.', 'Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_319_SayexcusemeIgnore_SayexcusemeIgnore_100_Alter_10' }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_320_Ignore' }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_321_Sayrelax' }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_322_Dessertcrumble' }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_323_Baristaorders' }
	} 
	var q_324 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_324_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_325_Lovejuice' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_326_END' }
	} 

    var betweenstory_327 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_328 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_328_BEGIN' }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_329_Cutline' }
	} 
	var q_330 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 'q_330_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_331_Stepinfront' }
	} 
	var q_332 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick ignored him and proceeded to order a latte.', 'Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 'q_332_StepinfrontIgnore_StepinfrontSubjectstares_16_Default_01' }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_333_Ignore' }
	} 
	var q_334 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Nick\'s eyes.', 'Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_334_IgnoreSayrelax_IgnoreXstare_33_Default_10' }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_335_Sayrelax' }
	} 
	var q_336 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.', 'Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_336_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_337_Dessertcrumble' }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_338_Baristaorders' }
	} 
	var q_339 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_339_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_340_Lovejuice' }
	} 
	var q_341 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_341_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_342_END' }
	} 

    var betweenstory_343 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_344 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_344_BEGIN' }
	} 
	var q_345 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_345_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_346_Cutline' }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_347_Stepinfront' }
	} 
	var q_348 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Silvia.', 'Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_348_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_349_Subjectstares' }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_350_Sayrelax' }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_351_Creamsplash' }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_352_Callpoliceman' }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_353_Hatecoffee' }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_354_END' }
	} 

    var betweenstory_355 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_356 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_356_BEGIN' }
	} 
	var q_357 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_357_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_358_Cutline' }
	} 
	var q_359 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_359_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_360_Sayexcuseme' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_361_Ignore' }
	} 
	var q_362 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Jesse, \"Hey! Relax.\"', 'Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 'q_362_IgnoreSayrelax_IgnoreXstare_33_Default_01' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_363_Sayrelax' }
	} 
	var q_364 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_364_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_365_Creamsplash' }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_366_Callpoliceman' }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_367_Lovejuice' }
	} 
	var q_368 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_368_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_371_BEGIN' }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_372_Cutline' }
	} 
	var q_373 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick was extremely annoyed and said, \"Excuse me?!\"', 'Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_373_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
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
	var s_376 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_376_Sayrelax' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_377_Creamsplash' }
	} 
	var q_378 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_378_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_379_Callpoliceman' }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_380_Lovejuice' }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_381_END' }
	} 

    var betweenstory_382 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_383 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_383_BEGIN' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_384_Cutline' }
	} 
	var q_385 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_385_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_386_Sayexcuseme' }
	} 
	var q_387 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 'q_387_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_388_Subjectstares' }
	} 
	var q_389 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Jesse, \"Hey! Relax.\"', 'Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 'q_389_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_390_Sayrelax' }
	} 
	var q_391 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.', 'Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_391_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_392_Creamsplash' }
	} 
	var q_393 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_393_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_01' }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_394_Baristaorders' }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_395_Hatecoffee' }
	} 
	var q_396 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_396_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_397_END' }
	} 

    var betweenstory_398 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_399 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_399_BEGIN' }
	} 
	var q_400 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 'q_400_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_401_Stepfoot' }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_402_Sayexcuseme' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_403_Shove' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_404_Xshove' }
	} 
	var q_405 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cookie and crumbled it above Vera\'s head.', 'Olivia picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 'q_405_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_406_Dessertcrumble' }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_407_Baristaorders' }
	} 
	var s_408 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_408_Lovejuice' }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_409_END' }
	} 

    var betweenstory_410 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_411 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_411_BEGIN' }
	} 
	var q_412 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_412_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_413_Cutline' }
	} 
	var q_414 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 'q_414_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_415_Sayexcuseme' }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_416_Subjectstares' }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_417_Xshove' }
	} 
	var q_418 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_418_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_419_Dessertcrumble' }
	} 
	var q_420 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_420_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_421_Baristaorders' }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_422_Lovejuice' }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_423_END' }
	} 

    var betweenstory_424 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_425 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_425_BEGIN' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_426_Cutline' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_427_Stepinfront' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_428_Subjectstares' }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_429_Xstare' }
	} 
	var q_430 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_430_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_431_Creamsplash' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_432_Callpoliceman' }
	} 
	var q_433 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_433_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_10' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_434_Lovejuice' }
	} 
	var q_435 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_435_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_436_END' }
	} 

    var betweenstory_437 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_438 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_438_BEGIN' }
	} 
	var q_439 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 'q_439_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_440_Cutline' }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Vera.'],
		data: { state_info: 's_441_Stepinfront' }
	} 
	var q_442 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Vera and gave her a very mean look.', 'Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 'q_442_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_443_Subjectstares' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_444_Xshove' }
	} 
	var q_445 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Vera\'s head.', 'Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_445_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_446_Dessertcrumble' }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_447_Baristaorders' }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_448_Lovejuice' }
	} 
	var q_449 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_449_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_450_END' }
	} 

    var betweenstory_451 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_452 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_452_BEGIN' }
	} 
	var q_453 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 'q_453_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_454_Cutline' }
	} 
	var q_455 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Vera.', 'Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_455_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ['Vera promptly stepped back in front of Silvia.'],
		data: { state_info: 's_456_Stepinfront' }
	} 
	var q_457 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Vera.', 'Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_457_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ['Silvia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_458_Subjectstares' }
	} 
	var q_459 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Silvia.', 'Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_459_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_460_Sayrelax' }
	} 
	var q_461 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.', 'Silvia picked up a small cup of cream and splashed it in Vera\'s face.'],
		data: { state_info: 'q_461_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_462_Dessertcrumble' }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_463_Baristaorders' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_464_Lovejuice' }
	} 
	var q_465 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_465_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_466_END' }
	} 

    var betweenstory_467 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_468 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_468_BEGIN' }
	} 
	var q_469 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 'q_469_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_470_Stepfoot' }
	} 
	var q_471 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_471_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_01' }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_472_Sayexcuseme' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_473_Shove' }
	} 
	var q_474 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Olivia.', 'Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 'q_474_ShoveXstare_ShoveXshove_33_Default_10' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_475_Xstare' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_476_Dessertcrumble' }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_477_Baristaorders' }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_478_Lovejuice' }
	} 
	var q_479 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_479_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_480_END' }
	} 

    var betweenstory_481 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_482 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_482_BEGIN' }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_483_Cutline' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_484_Stepinfront' }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_485_Subjectstares' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_486_Sayrelax' }
	} 
	var q_487 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Nick\'s face.', 'Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_487_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_488_Creamsplash' }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_489_Callpoliceman' }
	} 
	var q_490 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_490_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_491_Lovejuice' }
	} 
	var q_492 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_492_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_493_END' }
	} 

    var betweenstory_494 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_495 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_495_BEGIN' }
	} 
	var q_496 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_496_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_497_Cutline' }
	} 
	var q_498 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_498_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_499_Stepinfront' }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_500_Shove' }
	} 
	var q_501 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 'q_501_ShoveXstare_ShoveXstare_100_Permute_10' }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_502_Xstare' }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_503_Creamsplash' }
	} 
	var q_504 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_504_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_Default_10' }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_505_Baristaorders' }
	} 
	var q_506 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_506_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_507_Lovejuice' }
	} 
	var q_508 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_508_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_509_END' }
	} 

    var betweenstory_510 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_511 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_511_BEGIN' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_512_Cutline' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_513_Stepinfront' }
	} 
	var q_514 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Nick.', 'Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_514_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_515_Subjectstares' }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_516_Sayrelax' }
	} 
	var s_517 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_517_Creamsplash' }
	} 
	var q_518 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_518_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_519_Callpoliceman' }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_520_Hatecoffee' }
	} 
	var q_521 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_521_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_522_END' }
	} 

    var betweenstory_523 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_524 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_524_BEGIN' }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_525_Cutline' }
	} 
	var q_526 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Nick.', 'Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_526_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_527_Sayexcuseme' }
	} 
	var q_528 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Ben and gave him a very mean look.', 'Nick proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_528_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_529_Subjectstares' }
	} 
	var q_530 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick simply said to Ben, \"Hey! Relax.\"', 'Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 'q_530_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ['Ben simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_531_Sayrelax' }
	} 
	var q_532 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.', 'Nick snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 'q_532_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_01' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_533_Creamsplash' }
	} 
	var q_534 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_534_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_535_Callpoliceman' }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_536_Hatecoffee' }
	} 
	var q_537 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_537_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_538_END' }
	} 

    var betweenstory_539 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_540 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_540_BEGIN' }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_541_Cutline' }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_542_Stepinfront' }
	} 
	var q_543 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_543_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_10' }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_544_Subjectstares' }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_545_Xshove' }
	} 
	var q_546 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_546_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_01' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_547_Dessertcrumble' }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_548_Baristaorders' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_549_Lovejuice' }
	} 
	var q_550 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_550_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_554_Cutline' }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_555_Stepinfront' }
	} 
	var q_556 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Silvia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 'q_556_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_557_Subjectstares' }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_558_Sayrelax' }
	} 
	var q_559 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_559_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_560_Creamsplash' }
	} 
	var q_561 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_561_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_01' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_562_Baristaorders' }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_563_Lovejuice' }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_564_END' }
	} 

    var betweenstory_565 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_566 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_566_BEGIN' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_567_Cutline' }
	} 
	var q_568 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_568_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_569_Stepinfront' }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_570_Shove' }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_571_Xshove' }
	} 
	var q_572 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.', 'Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_572_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_573_Dessertcrumble' }
	} 
	var q_574 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_574_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_575_Baristaorders' }
	} 
	var q_576 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_576_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_577_Lovejuice' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_578_END' }
	} 

    var betweenstory_579 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_580 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_580_BEGIN' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_581_Stepfoot' }
	} 
	var q_582 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_582_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_583_Sayexcuseme' }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_584_Subjectstares' }
	} 
	var q_585 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Vera.', 'In retaliation, Vera pushed Olivia.'],
		data: { state_info: 'q_585_SubjectstaresXshove_SubjectstaresXshove_100_Permute_10' }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_586_Xshove' }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_587_Dessertcrumble' }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_588_Baristaorders' }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_589_Hatecoffee' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_590_END' }
	} 

    var betweenstory_591 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_592 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_592_BEGIN' }
	} 
	var q_593 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 'q_593_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_594_Cutline' }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_595_Stepinfront' }
	} 
	var q_596 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_596_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_597_Subjectstares' }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_598_Sayrelax' }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_599_Dessertcrumble' }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_600_Baristaorders' }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_601_Lovejuice' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
	var s_605 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Nick\'s foot.'],
		data: { state_info: 's_605_Stepfoot' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_606_Sayexcuseme' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_607_Shove' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['Nick simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_608_Sayrelax' }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_609_Creamsplash' }
	} 
	var q_610 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 'q_610_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_611_Callpoliceman' }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_612_Lovejuice' }
	} 
	var q_613 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_613_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_614 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_614_END' }
	} 

    var betweenstory_615 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_616 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_616_BEGIN' }
	} 
	var q_617 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 'q_617_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_618_Cutline' }
	} 
	var q_619 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Vera promptly stepped back in front of Nick.'],
		data: { state_info: 'q_619_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_620_Sayexcuseme' }
	} 
	var q_621 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera proceeded to give a slight shove to Nick.', 'Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 'q_621_SayexcusemeShove_SayexcusemeShove_100_Permute_10' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_622_Shove' }
	} 
	var q_623 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stared with rage into Nick\'s eyes.', 'In retaliation, Vera pushed Nick.'],
		data: { state_info: 'q_623_ShoveXshove_ShoveXstare_66_Default_10' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_624_Xshove' }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_625_Dessertcrumble' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_626_Baristaorders' }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_627_Lovejuice' }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_628_END' }
	} 

    var betweenstory_629 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_630 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_630_BEGIN' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_631_Cutline' }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_632_Sayexcuseme' }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_633_Subjectstares' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_634_Sayrelax' }
	} 
	var q_635 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a cake and crumbled it above Jesse\'s head.', 'Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_635_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_636_Dessertcrumble' }
	} 
	var q_637 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_637_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_638_Baristaorders' }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_639_Hatecoffee' }
	} 
	var q_640 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_640_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_641_END' }
	} 

    var betweenstory_642 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_643 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_643_BEGIN' }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_644_Cutline' }
	} 
	var q_645 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Jesse.', 'Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_645_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_646_Stepinfront' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_647_Ignore' }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_648_Sayrelax' }
	} 
	var q_649 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_649_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_650_Dessertcrumble' }
	} 
	var q_651 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_651_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_652_Callpoliceman' }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_653_Hatecoffee' }
	} 
	var q_654 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_654_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_655_END' }
	} 

    var betweenstory_656 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_657 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_657_BEGIN' }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_658_Cutline' }
	} 
	var q_659 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Vera.', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_659_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_660_Sayexcuseme' }
	} 
	var q_661 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored her and proceeded to order a coffee.', 'Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_661_SayexcusemeIgnore_SayexcusemeIgnore_100_Alter_10' }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_662_Ignore' }
	} 
	var q_663 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Vera\'s eyes.', 'Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 'q_663_IgnoreXstare_IgnoreXstare_100_Permute_01' }
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
	var q_667 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_667_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_668_Lovejuice' }
	} 
	var q_669 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_669_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_670_END' }
	} 

    var betweenstory_671 = {
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
betweenstory_49,questions_begin_50,s_51,s_52,q_53,s_54,s_55,q_56,s_57,q_58,s_59,s_60,q_61,s_62,s_63,
betweenstory_64,s_65,q_66,s_67,s_68,s_69,q_70,s_71,q_72,s_73,q_74,s_75,s_76,s_77,
betweenstory_78,s_79,q_80,s_81,q_82,s_83,q_84,s_85,q_86,s_87,s_88,s_89,q_90,s_91,s_92,
betweenstory_93,s_94,s_95,s_96,q_97,s_98,s_99,q_100,s_101,q_102,s_103,s_104,s_105,
betweenstory_106,s_107,q_108,s_109,s_110,s_111,q_112,s_113,q_114,s_115,q_116,s_117,q_118,s_119,s_120,
betweenstory_121,s_122,s_123,q_124,s_125,s_126,q_127,s_128,q_129,s_130,q_131,s_132,q_133,s_134,q_135,s_136,
betweenstory_137,s_138,s_139,q_140,s_141,s_142,s_143,s_144,q_145,s_146,s_147,s_148,
betweenstory_149,s_150,q_151,s_152,s_153,s_154,q_155,s_156,s_157,s_158,q_159,s_160,s_161,
betweenstory_162,s_163,q_164,s_165,q_166,s_167,s_168,s_169,s_170,s_171,s_172,s_173,
betweenstory_174,s_175,s_176,s_177,q_178,s_179,s_180,s_181,s_182,q_183,s_184,s_185,
betweenstory_186,s_187,s_188,s_189,q_190,s_191,q_192,s_193,q_194,s_195,q_196,s_197,q_198,s_199,q_200,s_201,
betweenstory_202,s_203,q_204,s_205,q_206,s_207,q_208,s_209,s_210,s_211,s_212,s_213,q_214,s_215,
betweenstory_216,s_217,q_218,s_219,s_220,s_221,q_222,s_223,s_224,s_225,q_226,s_227,s_228,
betweenstory_229,s_230,s_231,s_232,q_233,s_234,q_235,s_236,s_237,s_238,q_239,s_240,s_241,
betweenstory_242,s_243,q_244,s_245,q_246,s_247,s_248,q_249,s_250,s_251,q_252,s_253,q_254,s_255,q_256,s_257,
betweenstory_258,s_259,q_260,s_261,q_262,s_263,q_264,s_265,s_266,s_267,q_268,s_269,q_270,s_271,s_272,
betweenstory_273,s_274,q_275,s_276,q_277,s_278,q_279,s_280,s_281,q_282,s_283,s_284,q_285,s_286,s_287,
betweenstory_288,s_289,q_290,s_291,s_292,q_293,s_294,q_295,s_296,s_297,s_298,s_299,s_300,
betweenstory_301,s_302,s_303,q_304,s_305,q_306,s_307,q_308,s_309,s_310,q_311,s_312,s_313,s_314,
betweenstory_315,s_316,s_317,s_318,q_319,s_320,s_321,s_322,s_323,q_324,s_325,s_326,
betweenstory_327,s_328,s_329,q_330,s_331,q_332,s_333,q_334,s_335,q_336,s_337,s_338,q_339,s_340,q_341,s_342,
betweenstory_343,s_344,q_345,s_346,s_347,q_348,s_349,s_350,s_351,s_352,s_353,s_354,
betweenstory_355,s_356,q_357,s_358,q_359,s_360,s_361,q_362,s_363,q_364,s_365,s_366,s_367,q_368,s_369,
betweenstory_370,s_371,s_372,q_373,s_374,s_375,s_376,s_377,q_378,s_379,s_380,s_381,
betweenstory_382,s_383,s_384,q_385,s_386,q_387,s_388,q_389,s_390,q_391,s_392,q_393,s_394,s_395,q_396,s_397,
betweenstory_398,s_399,q_400,s_401,s_402,s_403,s_404,q_405,s_406,s_407,s_408,s_409,
betweenstory_410,s_411,q_412,s_413,q_414,s_415,s_416,s_417,q_418,s_419,q_420,s_421,s_422,s_423,
betweenstory_424,s_425,s_426,s_427,s_428,s_429,q_430,s_431,s_432,q_433,s_434,q_435,s_436,
betweenstory_437,s_438,q_439,s_440,s_441,q_442,s_443,s_444,q_445,s_446,s_447,s_448,q_449,s_450,
betweenstory_451,s_452,q_453,s_454,q_455,s_456,q_457,s_458,q_459,s_460,q_461,s_462,s_463,s_464,q_465,s_466,
betweenstory_467,s_468,q_469,s_470,q_471,s_472,s_473,q_474,s_475,s_476,s_477,s_478,q_479,s_480,
betweenstory_481,s_482,s_483,s_484,s_485,s_486,q_487,s_488,s_489,q_490,s_491,q_492,s_493,
betweenstory_494,s_495,q_496,s_497,q_498,s_499,s_500,q_501,s_502,s_503,q_504,s_505,q_506,s_507,q_508,s_509,
betweenstory_510,s_511,s_512,s_513,q_514,s_515,s_516,s_517,q_518,s_519,s_520,q_521,s_522,
betweenstory_523,s_524,s_525,q_526,s_527,q_528,s_529,q_530,s_531,q_532,s_533,q_534,s_535,s_536,q_537,s_538,
betweenstory_539,s_540,s_541,s_542,q_543,s_544,s_545,q_546,s_547,s_548,s_549,q_550,s_551,
betweenstory_552,s_553,s_554,s_555,q_556,s_557,s_558,q_559,s_560,q_561,s_562,s_563,s_564,
betweenstory_565,s_566,s_567,q_568,s_569,s_570,s_571,q_572,s_573,q_574,s_575,q_576,s_577,s_578,
betweenstory_579,s_580,s_581,q_582,s_583,s_584,q_585,s_586,s_587,s_588,s_589,s_590,
betweenstory_591,s_592,q_593,s_594,s_595,q_596,s_597,s_598,s_599,s_600,s_601,s_602,
betweenstory_603,s_604,s_605,s_606,s_607,s_608,s_609,q_610,s_611,s_612,q_613,s_614,
betweenstory_615,s_616,q_617,s_618,q_619,s_620,q_621,s_622,q_623,s_624,s_625,s_626,s_627,s_628,
betweenstory_629,s_630,s_631,s_632,s_633,s_634,q_635,s_636,q_637,s_638,s_639,q_640,s_641,
betweenstory_642,s_643,s_644,q_645,s_646,s_647,s_648,q_649,s_650,q_651,s_652,s_653,q_654,s_655,
betweenstory_656,s_657,s_658,q_659,s_660,q_661,s_662,q_663,s_664,s_665,s_666,q_667,s_668,q_669,s_670,
betweenstory_671,],

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

