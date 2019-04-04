

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
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_36_Baristaorders' }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_37_Lovejuice' }
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
	var q_55 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Jesse.', 'Nick turned to Jesse and gave him a very mean look.'],
		data: { state_info: 'q_55_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
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
	var q_58 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a small cup of cream and splashed it in Nick\'s face.', 'Nick picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_58_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
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
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_61_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
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
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 'q_66_BEGINCutline_BEGINStepfoot_80_Default_10' }
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
	var q_69 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 'q_69_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_70_Subjectstares' }
	} 
	var q_71 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Jesse, \"Hey! Relax.\"', 'Jesse simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 'q_71_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Ben simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_72_Sayrelax' }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_73_Creamsplash' }
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
	var q_83 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_83_StepinfrontShove_StepinfrontShove_100_Permute_10' }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_84_Shove' }
	} 
	var q_85 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia stared with rage into Ben\'s eyes.'],
		data: { state_info: 'q_85_ShoveXshove_ShoveXstare_66_Default_01' }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_86_Xshove' }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_87_Dessertcrumble' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['Vera, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_88_Callpoliceman' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_89_Hatecoffee' }
	} 
	var q_90 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_90_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
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
	var s_94 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_94_Cutline' }
	} 
	var q_95 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Nick.', 'Nick promptly stepped back in front of Ben.'],
		data: { state_info: 'q_95_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Nick.'],
		data: { state_info: 's_96_Stepinfront' }
	} 
	var q_97 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick proceeded to give a slight shove to Ben.', 'Nick turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_97_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
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
	var s_102 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_102_Callpoliceman' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_103_Lovejuice' }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_104_END' }
	} 

    var betweenstory_105 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_106 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_106_BEGIN' }
	} 
	var q_107 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 'q_107_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_108_Cutline' }
	} 
	var q_109 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera was extremely annoyed and said, \"Excuse me?!\"', 'Vera promptly stepped back in front of Ben.'],
		data: { state_info: 'q_109_CutlineSayexcuseme_CutlineStepinfront_30_Default_01' }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_110_Sayexcuseme' }
	} 
	var q_111 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Vera and gave her a very mean look.', 'Ben proceeded to give a slight shove to Vera.'],
		data: { state_info: 'q_111_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['Ben turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_112_Subjectstares' }
	} 
	var q_113 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Vera.', 'In retaliation, Vera pushed Ben.'],
		data: { state_info: 'q_113_SubjectstaresXshove_SubjectstaresXshove_100_Permute_10' }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Ben.'],
		data: { state_info: 's_114_Xshove' }
	} 
	var q_115 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Vera\'s face.', 'Ben snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_115_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
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
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_118_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_119_Lovejuice' }
	} 
	var q_120 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_120_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_121_END' }
	} 

    var betweenstory_122 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_123 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_123_BEGIN' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_124_Cutline' }
	} 
	var q_125 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Vera.', 'Vera promptly stepped back in front of Nick.'],
		data: { state_info: 'q_125_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Vera.'],
		data: { state_info: 's_126_Stepinfront' }
	} 
	var q_127 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera proceeded to give a slight shove to Nick.', 'Vera turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_127_StepinfrontSubjectstares_StepinfrontShove_55_Default_10' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Vera turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_128_Subjectstares' }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ['Nick simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_129_Sayrelax' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Vera snatched a cookie and crumbled it above Nick\'s head.'],
		data: { state_info: 's_130_Dessertcrumble' }
	} 
	var q_131 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_131_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_132_Callpoliceman' }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_133_Lovejuice' }
	} 
	var q_134 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_134_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_135_END' }
	} 

    var betweenstory_136 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_137 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_137_BEGIN' }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Vera\'s foot.'],
		data: { state_info: 's_138_Stepfoot' }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_139_Sayexcuseme' }
	} 
	var q_140 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned to Vera and gave her a very mean look.', 'Vera turned to Nick and gave him a very mean look.'],
		data: { state_info: 'q_140_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_01' }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['Nick turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_141_Subjectstares' }
	} 
	var q_142 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera simply said to Nick, \"Hey! Relax.\"', 'In retaliation, Vera pushed Nick.'],
		data: { state_info: 'q_142_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
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
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_145_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_146_Baristaorders' }
	} 
	var q_147 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_147_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_148_Lovejuice' }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_149_END' }
	} 

    var betweenstory_150 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_151 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_151_BEGIN' }
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
	var q_154 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Olivia and gave her a very mean look.', 'Silvia proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_154_StepinfrontSubjectstares_StepinfrontShove_55_Default_01' }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_155_Subjectstares' }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_156_Sayrelax' }
	} 
	var q_157 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.', 'Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 'q_157_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_158_Dessertcrumble' }
	} 
	var q_159 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_159_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_Default_01' }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_160_Callpoliceman' }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_161_Lovejuice' }
	} 
	var q_162 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_162_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_163_END' }
	} 

    var betweenstory_164 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_165 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_165_BEGIN' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_166_Stepfoot' }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_167_Sayexcuseme' }
	} 
	var q_168 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_168_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_169_Subjectstares' }
	} 
	var q_170 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben simply said to Silvia, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 'q_170_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_171_Sayrelax' }
	} 
	var q_172 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Ben\'s head.', 'Ben snatched a cake and crumbled it above Silvia\'s head.'],
		data: { state_info: 'q_172_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_173_Dessertcrumble' }
	} 
	var q_174 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_174_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_175_Baristaorders' }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_176_Lovejuice' }
	} 
	var q_177 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_177_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_181_Cutline' }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Silvia.'],
		data: { state_info: 's_182_Stepinfront' }
	} 
	var q_183 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 'q_183_StepinfrontShove_StepinfrontSubjectstares_44_Default_01' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_184_Shove' }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Silvia.'],
		data: { state_info: 's_185_Xshove' }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Ben\'s head.'],
		data: { state_info: 's_186_Dessertcrumble' }
	} 
	var q_187 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_187_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_10' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_188_Baristaorders' }
	} 
	var q_189 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_189_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_10' }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_190_Hatecoffee' }
	} 
	var q_191 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_191_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
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
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_194_BEGIN' }
	} 
	var q_195 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_195_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_196_Cutline' }
	} 
	var q_197 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Nick.', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_197_CutlineSayexcuseme_CutlineStepinfront_30_Default_10' }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_198_Sayexcuseme' }
	} 
	var q_199 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Nick and gave him a very mean look.', 'Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 'q_199_SayexcusemeSubjectstares_SayexcusemeSubjectstares_100_Permute_10' }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_200_Subjectstares' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_201_Sayrelax' }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_202_Creamsplash' }
	} 
	var q_203 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_203_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_204_Callpoliceman' }
	} 
	var q_205 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_205_CallpolicemanLovejuice_CallpolicemanLovejuice_100_Alter_01' }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_206_Lovejuice' }
	} 
	var q_207 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_207_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
	var s_212 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_212_Sayexcuseme' }
	} 
	var q_213 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 'q_213_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_01' }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_214_Shove' }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_215_Xshove' }
	} 
	var q_216 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.', 'Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_216_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_217_Dessertcrumble' }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_218_Callpoliceman' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_219_Hatecoffee' }
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
	var s_224 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Olivia.'],
		data: { state_info: 's_224_Stepinfront' }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_225_Shove' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Silvia simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_226_Sayrelax' }
	} 
	var q_227 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 'q_227_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_228_Creamsplash' }
	} 
	var q_229 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_229_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_230_Callpoliceman' }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_231_Hatecoffee' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_232_END' }
	} 

    var betweenstory_233 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_234 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_234_BEGIN' }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_235_Stepfoot' }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['Ben was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_236_Sayexcuseme' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_237_Subjectstares' }
	} 
	var q_238 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Ben, \"Hey! Relax.\"', 'Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_238_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_10' }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Ben simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_239_Sayrelax' }
	} 
	var q_240 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Ben\'s face.', 'Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_240_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
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
	var s_248 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_248_Cutline' }
	} 
	var q_249 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 'q_249_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_250_Stepinfront' }
	} 
	var q_251 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 'q_251_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_252_Shove' }
	} 
	var q_253 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 'q_253_ShoveXshove_ShoveXshove_100_Permute_01' }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_254_Xshove' }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ['Olivia snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_255_Dessertcrumble' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_256_Baristaorders' }
	} 
	var q_257 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_257_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_258_Lovejuice' }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_259_END' }
	} 

    var betweenstory_260 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_261 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_261_BEGIN' }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_262_Cutline' }
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
	var s_268 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_268_Baristaorders' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_269_Lovejuice' }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_270_END' }
	} 

    var betweenstory_271 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_272 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_272_BEGIN' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_273_Cutline' }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_274_Stepinfront' }
	} 
	var q_275 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Nick and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_275_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_276_Shove' }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['In retaliation, Nick pushed Olivia.'],
		data: { state_info: 's_277_Xshove' }
	} 
	var q_278 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 'q_278_XshoveDessertcrumble_XshoveDessertcrumble_100_Permute_10' }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Nick\'s head.'],
		data: { state_info: 's_279_Dessertcrumble' }
	} 
	var q_280 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_280_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_281_Baristaorders' }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_282_Hatecoffee' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_283_END' }
	} 

    var betweenstory_284 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_285 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_285_BEGIN' }
	} 
	var q_286 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_286_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_287_Stepfoot' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_288_Sayexcuseme' }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_289_Shove' }
	} 
	var q_290 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 'q_290_ShoveXstare_ShoveXstare_100_Permute_10' }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_291_Xstare' }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_292_Creamsplash' }
	} 
	var q_293 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_293_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_294_Callpoliceman' }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_295_Hatecoffee' }
	} 
	var q_296 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_296_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_297_END' }
	} 

    var betweenstory_298 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_299 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_299_BEGIN' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_300_Cutline' }
	} 
	var q_301 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_301_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_302_Sayexcuseme' }
	} 
	var q_303 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Olivia and gave her a very mean look.', 'Silvia proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_303_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Silvia turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_304_Subjectstares' }
	} 
	var q_305 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Silvia, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 'q_305_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_01' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Olivia simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_306_Sayrelax' }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ['Silvia picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_307_Creamsplash' }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_308_Callpoliceman' }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_309_Hatecoffee' }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_310_END' }
	} 

    var betweenstory_311 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_312 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_312_BEGIN' }
	} 
	var q_313 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 'q_313_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_314_Stepfoot' }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_315_Sayexcuseme' }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_316_Ignore' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Silvia simply said to Vera, \"Hey! Relax.\"'],
		data: { state_info: 's_317_Sayrelax' }
	} 
	var q_318 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a muffin and crumbled it above Silvia\'s head.', 'Silvia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_318_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_319_Dessertcrumble' }
	} 
	var q_320 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Vera to leave.', 'Jesse, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 'q_320_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_321_Baristaorders' }
	} 
	var q_322 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_322_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_323_Lovejuice' }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_324_END' }
	} 

    var betweenstory_325 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_326 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_326_BEGIN' }
	} 
	var q_327 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.'],
		data: { state_info: 'q_327_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_328_Cutline' }
	} 
	var q_329 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Nick.', 'Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_329_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Nick.'],
		data: { state_info: 's_330_Stepinfront' }
	} 
	var q_331 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored him and proceeded to order a latte.', 'Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 'q_331_StepinfrontIgnore_StepinfrontIgnore_100_Alter_10' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Nick ignored him and proceeded to order a latte.'],
		data: { state_info: 's_332_Ignore' }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Jesse simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_333_Sayrelax' }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['Nick snatched a lemonsquare and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_334_Dessertcrumble' }
	} 
	var q_335 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_335_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_336_Baristaorders' }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_337_Lovejuice' }
	} 
	var q_338 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_338_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_339_END' }
	} 

    var betweenstory_340 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_341 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_341_BEGIN' }
	} 
	var q_342 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_342_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_343_Cutline' }
	} 
	var q_344 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Nick.', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_344_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Nick.'],
		data: { state_info: 's_345_Stepinfront' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['Nick turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_346_Subjectstares' }
	} 
	var q_347 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia simply said to Nick, \"Hey! Relax.\"', 'Silvia stared with rage into Nick\'s eyes.'],
		data: { state_info: 'q_347_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Silvia simply said to Nick, \"Hey! Relax.\"'],
		data: { state_info: 's_348_Sayrelax' }
	} 
	var q_349 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_349_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_01' }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_350_Creamsplash' }
	} 
	var q_351 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_351_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_352_Callpoliceman' }
	} 
	var q_353 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_353_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_10' }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_354_Hatecoffee' }
	} 
	var q_355 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_355_HatecoffeeEND_HatecoffeeEND_100_Alter_01' }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_356_END' }
	} 

    var betweenstory_357 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_358 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_358_BEGIN' }
	} 
	var q_359 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_359_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_360_Cutline' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_361_Sayexcuseme' }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['Jesse ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_362_Ignore' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Silvia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_363_Sayrelax' }
	} 
	var q_364 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Silvia\'s head.', 'Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_364_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_365_Creamsplash' }
	} 
	var q_366 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 'q_366_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_367_Callpoliceman' }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_368_Lovejuice' }
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
	var q_372 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Nick\'s foot.', 'Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 'q_372_BEGINCutline_BEGINStepfoot_80_Default_10' }
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
		labels: ['Nick simply said to Olivia, \"Hey! Relax.\"', 'Nick stared with rage into Olivia\'s eyes.'],
		data: { state_info: 'q_376_SubjectstaresSayrelax_SubjectstaresXstare_85_Default_01' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_377_Sayrelax' }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_378_Creamsplash' }
	} 
	var q_379 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 'q_379_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_10' }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_380_Callpoliceman' }
	} 
	var q_381 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_381_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_382_Lovejuice' }
	} 
	var q_383 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_383_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 'q_387_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_388_Cutline' }
	} 
	var q_389 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_389_CutlineSayexcuseme_CutlineSayexcuseme_100_Alter_01' }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Jesse was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_390_Sayexcuseme' }
	} 
	var q_391 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 'q_391_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_01' }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_392_Subjectstares' }
	} 
	var q_393 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Olivia, \"Hey! Relax.\"', 'Olivia simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_393_SubjectstaresSayrelax_SubjectstaresSayrelax_100_Permute_01' }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['Jesse simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_394_Sayrelax' }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_395_Creamsplash' }
	} 
	var q_396 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_396_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_10' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_397_Baristaorders' }
	} 
	var q_398 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_398_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_399_Hatecoffee' }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_400_END' }
	} 

    var betweenstory_401 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_402 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_402_BEGIN' }
	} 
	var q_403 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Vera\'s foot.', 'Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 'q_403_BEGINStepfoot_BEGINCutline_20_Default_01' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_404_Stepfoot' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_405_Sayexcuseme' }
	} 
	var q_406 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Vera and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 'q_406_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_407_Shove' }
	} 
	var s_408 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_408_Xshove' }
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
	var q_411 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_411_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_412_Lovejuice' }
	} 
	var q_413 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_413_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_414_END' }
	} 

    var betweenstory_415 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_416 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_416_BEGIN' }
	} 
	var q_417 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_417_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_418_Cutline' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_419_Sayexcuseme' }
	} 
	var q_420 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben ignored her and proceeded to order a coffee.'],
		data: { state_info: 'q_420_SayexcusemeSubjectstares_SayexcusemeIgnore_83_Default_01' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_421_Subjectstares' }
	} 
	var q_422 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'In retaliation, Silvia pushed Ben.'],
		data: { state_info: 'q_422_SubjectstaresXshove_SubjectstaresXshove_100_Permute_10' }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['In retaliation, Silvia pushed Ben.'],
		data: { state_info: 's_423_Xshove' }
	} 
	var q_424 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Silvia\'s head.', 'Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_424_XshoveDessertcrumble_XshoveCreamsplash_90_Default_01' }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_425_Dessertcrumble' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_426_Baristaorders' }
	} 
	var q_427 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_427_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_01' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_428_Lovejuice' }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_429_END' }
	} 

    var betweenstory_430 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_431 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_431_BEGIN' }
	} 
	var q_432 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 'q_432_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_433_Cutline' }
	} 
	var q_434 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 'q_434_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Nick.'],
		data: { state_info: 's_435_Stepinfront' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['Nick turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_436_Subjectstares' }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Nick\'s eyes.'],
		data: { state_info: 's_437_Xstare' }
	} 
	var q_438 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_438_XstareCreamsplash_XstareCreamsplash_100_Permute_01' }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_439_Creamsplash' }
	} 
	var q_440 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 'q_440_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_01' }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_441_Callpoliceman' }
	} 
	var q_442 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_442_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_10' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_443_Lovejuice' }
	} 
	var q_444 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_444_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_445_END' }
	} 

    var betweenstory_446 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_447 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_447_BEGIN' }
	} 
	var q_448 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 'q_448_BEGINCutline_BEGINStepfoot_80_Default_01' }
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
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned to Jesse and gave him a very mean look.', 'Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_451_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Vera turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_452_Subjectstares' }
	} 
	var q_453 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Vera.', 'In retaliation, Vera pushed Jesse.'],
		data: { state_info: 'q_453_SubjectstaresXshove_SubjectstaresXshove_100_Permute_01' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Vera.'],
		data: { state_info: 's_454_Xshove' }
	} 
	var q_455 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera picked up a small cup of cream and splashed it in Jesse\'s face.', 'Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_455_XshoveDessertcrumble_XshoveCreamsplash_90_Default_10' }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ['Vera snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_456_Dessertcrumble' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 's_457_Baristaorders' }
	} 
	var q_458 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera stormed out of the coffee shop yelling \"I hate coffee!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_458_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_459_Lovejuice' }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_460_END' }
	} 

    var betweenstory_461 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_462 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_462_BEGIN' }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Vera, the first person in line.'],
		data: { state_info: 's_463_Cutline' }
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
	var q_466 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Silvia.', 'Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 'q_466_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['Vera simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_467_Sayrelax' }
	} 
	var q_468 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera snatched a lemonsquare and crumbled it above Silvia\'s head.', 'Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 'q_468_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_10' }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['Silvia snatched a lemonsquare and crumbled it above Vera\'s head.'],
		data: { state_info: 's_469_Dessertcrumble' }
	} 
	var q_470 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_470_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_471_Baristaorders' }
	} 
	var q_472 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_472_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_01' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_473_Lovejuice' }
	} 
	var q_474 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_474_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_475_END' }
	} 

    var betweenstory_476 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_477 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_477_BEGIN' }
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
	var q_480 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Vera.', 'Olivia turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_480_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_01' }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_481_Shove' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['Vera stared with rage into Olivia\'s eyes.'],
		data: { state_info: 's_482_Xstare' }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Vera\'s head.'],
		data: { state_info: 's_483_Dessertcrumble' }
	} 
	var q_484 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_484_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
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
	var q_487 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_487_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_488_END' }
	} 

    var betweenstory_489 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_490 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_490_BEGIN' }
	} 
	var q_491 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_491_BEGINCutline_BEGINStepfoot_80_Default_10' }
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
	var q_498 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick snatched a lemonsquare and crumbled it above Silvia\'s head.', 'Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_498_SayrelaxCreamsplash_SayrelaxDessertcrumble_50_Default_10' }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_499_Creamsplash' }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_500_Callpoliceman' }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_501_Lovejuice' }
	} 
	var q_502 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_502_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_503_END' }
	} 

    var betweenstory_504 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_505 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_505_BEGIN' }
	} 
	var q_506 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 'q_506_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_507_Cutline' }
	} 
	var q_508 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Ben.', 'Silvia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_508_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Silvia promptly stepped back in front of Ben.'],
		data: { state_info: 's_509_Stepinfront' }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_510_Shove' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_511_Xstare' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_512_Creamsplash' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_513_Baristaorders' }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_514_Lovejuice' }
	} 
	var q_515 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_515_LovejuiceEND_LovejuiceEND_100_Alter_10' }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_516_END' }
	} 

    var betweenstory_517 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_518 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_518_BEGIN' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Nick, the first person in line.'],
		data: { state_info: 's_519_Cutline' }
	} 
	var q_520 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick promptly stepped back in front of Olivia.', 'Nick was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_520_CutlineStepinfront_CutlineSayexcuseme_70_Default_01' }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['Nick promptly stepped back in front of Olivia.'],
		data: { state_info: 's_521_Stepinfront' }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ['Olivia turned to Nick and gave him a very mean look.'],
		data: { state_info: 's_522_Subjectstares' }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Nick simply said to Olivia, \"Hey! Relax.\"'],
		data: { state_info: 's_523_Sayrelax' }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Olivia picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_524_Creamsplash' }
	} 
	var q_525 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_525_CreamsplashCallpoliceman_CreamsplashCallpoliceman_100_Alter_01' }
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
	var q_531 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 'q_531_BEGINCutline_BEGINStepfoot_80_Default_01' }
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
	var q_536 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.', 'Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 'q_536_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_537_Creamsplash' }
	} 
	var q_538 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_538_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 's_539_Callpoliceman' }
	} 
	var q_540 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_540_CallpolicemanHatecoffee_CallpolicemanHatecoffee_100_Alter_01' }
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
		labels: ['Ben promptly stepped back in front of Jesse.', 'Jesse promptly stepped back in front of Ben.'],
		data: { state_info: 'q_547_CutlineStepinfront_CutlineStepinfront_100_Permute_01' }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Jesse.'],
		data: { state_info: 's_548_Stepinfront' }
	} 
	var q_549 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 'q_549_StepinfrontSubjectstares_StepinfrontSubjectstares_100_Permute_01' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_550_Subjectstares' }
	} 
	var q_551 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Jesse\'s eyes.', 'In retaliation, Ben pushed Jesse.'],
		data: { state_info: 'q_551_SubjectstaresXshove_SubjectstaresXstare_74_Default_10' }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Jesse.'],
		data: { state_info: 's_552_Xshove' }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_553_Dessertcrumble' }
	} 
	var q_554 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 'q_554_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_555_Baristaorders' }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_556_Lovejuice' }
	} 
	var q_557 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 'q_557_LovejuiceEND_LovejuiceEND_100_Alter_01' }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_558_END' }
	} 

    var betweenstory_559 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_560 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_560_BEGIN' }
	} 
	var q_561 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 'q_561_BEGINCutline_BEGINStepfoot_80_Default_10' }
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
	var q_566 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a small cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 'q_566_SayrelaxCreamsplash_SayrelaxCreamsplash_100_Permute_10' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Jesse picked up a small cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_567_Creamsplash' }
	} 
	var q_568 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 'q_568_CreamsplashBaristaorders_CreamsplashBaristaorders_100_Alter_01' }
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
	var q_577 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 'q_577_StepinfrontShove_StepinfrontSubjectstares_44_Default_10' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_578_Shove' }
	} 
	var q_579 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia simply said to Ben, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Ben.'],
		data: { state_info: 'q_579_ShoveXshove_ShoveSayrelax_85_Default_10' }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_580_Xshove' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['Ben snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_581_Dessertcrumble' }
	} 
	var q_582 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 'q_582_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_10' }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_583_Baristaorders' }
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
	var q_589 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Vera, the first person in line.', 'Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 'q_589_BEGINStepfoot_BEGINCutline_20_Default_10' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Vera\'s foot.'],
		data: { state_info: 's_590_Stepfoot' }
	} 
	var q_591 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was extremely annoyed and said, \"Excuse me?!\"', 'Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 'q_591_StepfootSayexcuseme_StepfootSayexcuseme_100_Alter_10' }
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
		labels: ['Vera simply said to Olivia, \"Hey! Relax.\"', 'In retaliation, Vera pushed Olivia.'],
		data: { state_info: 'q_594_SubjectstaresXshove_SubjectstaresSayrelax_33_Default_10' }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Olivia.'],
		data: { state_info: 's_595_Xshove' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Olivia snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_596_Dessertcrumble' }
	} 
	var q_597 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Vera to leave.'],
		data: { state_info: 'q_597_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_598_Baristaorders' }
	} 
	var q_599 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_599_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_600_Hatecoffee' }
	} 
	var q_601 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_601_HatecoffeeEND_HatecoffeeEND_100_Alter_10' }
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
	var s_605 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_605_Cutline' }
	} 
	var q_606 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 'q_606_CutlineStepinfront_CutlineStepinfront_100_Permute_10' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_607_Stepinfront' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['Ben turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_608_Subjectstares' }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Olivia simply said to Ben, \"Hey! Relax.\"'],
		data: { state_info: 's_609_Sayrelax' }
	} 
	var q_610 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a small cup of cream and splashed it in Olivia\'s face.', 'Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 'q_610_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_10' }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_611_Dessertcrumble' }
	} 
	var q_612 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 'q_612_DessertcrumbleBaristaorders_DessertcrumbleBaristaorders_100_Alter_01' }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_613_Baristaorders' }
	} 
	var q_614 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_614_BaristaordersLovejuice_BaristaordersHatecoffee_70_Default_10' }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_615_Lovejuice' }
	} 
	var q_616 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 'q_616_LovejuiceEND_LovejuiceEND_100_Alter_10' }
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
		labels: ['Ben turned to Nick and gave him a very mean look.', 'Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 'q_623_SayexcusemeShove_SayexcusemeSubjectstares_44_Default_10' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Nick.'],
		data: { state_info: 's_624_Shove' }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['Nick stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_625_Xstare' }
	} 
	var q_626 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Nick picked up a small cup of cream and splashed it in Ben\'s face.', 'Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 'q_626_XstareCreamsplash_XstareCreamsplash_100_Permute_10' }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['Ben picked up a small cup of cream and splashed it in Nick\'s face.'],
		data: { state_info: 's_627_Creamsplash' }
	} 
	var q_628 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 'q_628_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_Default_10' }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_629_Callpoliceman' }
	} 
	var q_630 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_630_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_01' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_631_Hatecoffee' }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['The barista handed Nick a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_632_END' }
	} 

    var betweenstory_633 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_634 = {
		type: 'instructions',
		pages: ['Nick angrily walked into the coffee shop.'],
		data: { state_info: 's_634_BEGIN' }
	} 
	var q_635 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 'q_635_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_636_Cutline' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_637_Sayexcuseme' }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['Nick proceeded to give a slight shove to Vera.'],
		data: { state_info: 's_638_Shove' }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['In retaliation, Vera pushed Nick.'],
		data: { state_info: 's_639_Xshove' }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['Nick snatched a cookie and crumbled it above Vera\'s head.'],
		data: { state_info: 's_640_Dessertcrumble' }
	} 
	var q_641 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Nick to leave.', 'Silvia, the police officer, ordered Nick to leave before anyone pressed charges.'],
		data: { state_info: 'q_641_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_Default_01' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Nick to leave.'],
		data: { state_info: 's_642_Baristaorders' }
	} 
	var q_643 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_643_BaristaordersLovejuice_BaristaordersLovejuice_100_Alter_10' }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ['Nick turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_644_Lovejuice' }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_645_END' }
	} 

    var betweenstory_646 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_647 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_647_BEGIN' }
	} 
	var q_648 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Vera\'s foot.', 'Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 'q_648_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Vera, the first person in line.'],
		data: { state_info: 's_649_Cutline' }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Vera was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_650_Sayexcuseme' }
	} 
	var q_651 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Vera.', 'Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 'q_651_SayexcusemeSubjectstares_SayexcusemeShove_55_Default_10' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Jesse turned to Vera and gave her a very mean look.'],
		data: { state_info: 's_652_Subjectstares' }
	} 
	var q_653 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Vera pushed Jesse.', 'Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 'q_653_SubjectstaresSayrelax_SubjectstaresXshove_66_Default_10' }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ['Vera simply said to Jesse, \"Hey! Relax.\"'],
		data: { state_info: 's_654_Sayrelax' }
	} 
	var q_655 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Vera\'s head.', 'Vera snatched a cake and crumbled it above Jesse\'s head.'],
		data: { state_info: 'q_655_SayrelaxDessertcrumble_SayrelaxDessertcrumble_100_Permute_01' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Vera\'s head.'],
		data: { state_info: 's_656_Dessertcrumble' }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_657_Baristaorders' }
	} 
	var q_658 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 'q_658_BaristaordersHatecoffee_BaristaordersLovejuice_30_Default_01' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_659_Hatecoffee' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['The barista handed Vera a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_660_END' }
	} 

    var betweenstory_661 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_662 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_662_BEGIN' }
	} 
	var q_663 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 'q_663_BEGINCutline_BEGINStepfoot_80_Default_10' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_664_Cutline' }
	} 
	var q_665 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was extremely annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 'q_665_CutlineStepinfront_CutlineSayexcuseme_70_Default_10' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_666_Stepinfront' }
	} 
	var q_667 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored him and proceeded to order a mocha.', 'Silvia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 'q_667_StepinfrontIgnore_StepinfrontSubjectstares_16_Default_01' }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a mocha.'],
		data: { state_info: 's_668_Ignore' }
	} 
	var q_669 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse simply said to Silvia, \"Hey! Relax.\"', 'Jesse stared with rage into Silvia\'s eyes.'],
		data: { state_info: 'q_669_IgnoreSayrelax_IgnoreXstare_33_Default_01' }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ['Jesse simply said to Silvia, \"Hey! Relax.\"'],
		data: { state_info: 's_670_Sayrelax' }
	} 
	var q_671 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.', 'Silvia picked up a small cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 'q_671_SayrelaxDessertcrumble_SayrelaxCreamsplash_50_Default_01' }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_672_Dessertcrumble' }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_673_Callpoliceman' }
	} 
	var q_674 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_674_CallpolicemanHatecoffee_CallpolicemanLovejuice_70_Default_10' }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_675_Hatecoffee' }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_676_END' }
	} 

    var betweenstory_677 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_678 = {
		type: 'instructions',
		pages: ['Vera angrily walked into the coffee shop.'],
		data: { state_info: 's_678_BEGIN' }
	} 
	var q_679 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.'],
		data: { state_info: 'q_679_BEGINCutline_BEGINStepfoot_80_Default_01' }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_680_Cutline' }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['Olivia was extremely annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_681_Sayexcuseme' }
	} 
	var s_682 = {
		type: 'instructions',
		pages: ['Vera ignored her and proceeded to order a coffee.'],
		data: { state_info: 's_682_Ignore' }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Vera\'s eyes.'],
		data: { state_info: 's_683_Xstare' }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ['Vera picked up a small cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_684_Creamsplash' }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Vera to leave before anyone pressed charges.'],
		data: { state_info: 's_685_Callpoliceman' }
	} 
	var q_686 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Vera turned and ran out yelling \"Juice is better, anyway!\"', 'Vera stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 'q_686_CallpolicemanLovejuice_CallpolicemanHatecoffee_30_Default_01' }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ['Vera turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_687_Lovejuice' }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_688_END' }
	} 

    var betweenstory_689 = {
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
betweenstory_49,questions_begin_50,s_51,q_52,s_53,s_54,q_55,s_56,s_57,q_58,s_59,s_60,q_61,s_62,s_63,
betweenstory_64,s_65,q_66,s_67,s_68,q_69,s_70,q_71,s_72,s_73,s_74,s_75,s_76,
betweenstory_77,s_78,q_79,s_80,q_81,s_82,q_83,s_84,q_85,s_86,s_87,s_88,s_89,q_90,s_91,
betweenstory_92,s_93,s_94,q_95,s_96,q_97,s_98,q_99,s_100,s_101,s_102,s_103,s_104,
betweenstory_105,s_106,q_107,s_108,q_109,s_110,q_111,s_112,q_113,s_114,q_115,s_116,s_117,q_118,s_119,q_120,s_121,
betweenstory_122,s_123,s_124,q_125,s_126,q_127,s_128,s_129,s_130,q_131,s_132,s_133,q_134,s_135,
betweenstory_136,s_137,s_138,s_139,q_140,s_141,q_142,s_143,s_144,q_145,s_146,q_147,s_148,s_149,
betweenstory_150,s_151,s_152,s_153,q_154,s_155,s_156,q_157,s_158,q_159,s_160,s_161,q_162,s_163,
betweenstory_164,s_165,s_166,s_167,q_168,s_169,q_170,s_171,q_172,s_173,q_174,s_175,s_176,q_177,s_178,
betweenstory_179,s_180,s_181,s_182,q_183,s_184,s_185,s_186,q_187,s_188,q_189,s_190,q_191,s_192,
betweenstory_193,s_194,q_195,s_196,q_197,s_198,q_199,s_200,s_201,s_202,q_203,s_204,q_205,s_206,q_207,s_208,
betweenstory_209,s_210,s_211,s_212,q_213,s_214,s_215,q_216,s_217,s_218,s_219,s_220,
betweenstory_221,s_222,s_223,s_224,s_225,s_226,q_227,s_228,q_229,s_230,s_231,s_232,
betweenstory_233,s_234,s_235,s_236,s_237,q_238,s_239,q_240,s_241,s_242,s_243,q_244,s_245,
betweenstory_246,s_247,s_248,q_249,s_250,q_251,s_252,q_253,s_254,s_255,s_256,q_257,s_258,s_259,
betweenstory_260,s_261,s_262,s_263,q_264,s_265,s_266,s_267,s_268,s_269,s_270,
betweenstory_271,s_272,s_273,s_274,q_275,s_276,s_277,q_278,s_279,q_280,s_281,s_282,s_283,
betweenstory_284,s_285,q_286,s_287,s_288,s_289,q_290,s_291,s_292,q_293,s_294,s_295,q_296,s_297,
betweenstory_298,s_299,s_300,q_301,s_302,q_303,s_304,q_305,s_306,s_307,s_308,s_309,s_310,
betweenstory_311,s_312,q_313,s_314,s_315,s_316,s_317,q_318,s_319,q_320,s_321,q_322,s_323,s_324,
betweenstory_325,s_326,q_327,s_328,q_329,s_330,q_331,s_332,s_333,s_334,q_335,s_336,s_337,q_338,s_339,
betweenstory_340,s_341,q_342,s_343,q_344,s_345,s_346,q_347,s_348,q_349,s_350,q_351,s_352,q_353,s_354,q_355,s_356,
betweenstory_357,s_358,q_359,s_360,s_361,s_362,s_363,q_364,s_365,q_366,s_367,s_368,s_369,
betweenstory_370,s_371,q_372,s_373,s_374,s_375,q_376,s_377,s_378,q_379,s_380,q_381,s_382,q_383,s_384,
betweenstory_385,s_386,q_387,s_388,q_389,s_390,q_391,s_392,q_393,s_394,s_395,q_396,s_397,q_398,s_399,s_400,
betweenstory_401,s_402,q_403,s_404,s_405,q_406,s_407,s_408,s_409,s_410,q_411,s_412,q_413,s_414,
betweenstory_415,s_416,q_417,s_418,s_419,q_420,s_421,q_422,s_423,q_424,s_425,s_426,q_427,s_428,s_429,
betweenstory_430,s_431,q_432,s_433,q_434,s_435,s_436,s_437,q_438,s_439,q_440,s_441,q_442,s_443,q_444,s_445,
betweenstory_446,s_447,q_448,s_449,s_450,q_451,s_452,q_453,s_454,q_455,s_456,s_457,q_458,s_459,s_460,
betweenstory_461,s_462,s_463,s_464,s_465,q_466,s_467,q_468,s_469,q_470,s_471,q_472,s_473,q_474,s_475,
betweenstory_476,s_477,s_478,s_479,q_480,s_481,s_482,s_483,q_484,s_485,s_486,q_487,s_488,
betweenstory_489,s_490,q_491,s_492,q_493,s_494,q_495,s_496,s_497,q_498,s_499,s_500,s_501,q_502,s_503,
betweenstory_504,s_505,q_506,s_507,q_508,s_509,s_510,s_511,s_512,s_513,s_514,q_515,s_516,
betweenstory_517,s_518,s_519,q_520,s_521,s_522,s_523,s_524,q_525,s_526,s_527,s_528,
betweenstory_529,s_530,q_531,s_532,s_533,s_534,s_535,q_536,s_537,q_538,s_539,q_540,s_541,s_542,
betweenstory_543,s_544,q_545,s_546,q_547,s_548,q_549,s_550,q_551,s_552,s_553,q_554,s_555,s_556,q_557,s_558,
betweenstory_559,s_560,q_561,s_562,s_563,s_564,s_565,q_566,s_567,q_568,s_569,s_570,q_571,s_572,
betweenstory_573,s_574,s_575,s_576,q_577,s_578,q_579,s_580,s_581,q_582,s_583,s_584,q_585,s_586,
betweenstory_587,s_588,q_589,s_590,q_591,s_592,s_593,q_594,s_595,s_596,q_597,s_598,q_599,s_600,q_601,s_602,
betweenstory_603,s_604,s_605,q_606,s_607,s_608,s_609,q_610,s_611,q_612,s_613,q_614,s_615,q_616,s_617,
betweenstory_618,s_619,q_620,s_621,s_622,q_623,s_624,s_625,q_626,s_627,q_628,s_629,q_630,s_631,s_632,
betweenstory_633,s_634,q_635,s_636,s_637,s_638,s_639,s_640,q_641,s_642,q_643,s_644,s_645,
betweenstory_646,s_647,q_648,s_649,s_650,q_651,s_652,q_653,s_654,q_655,s_656,s_657,q_658,s_659,s_660,
betweenstory_661,s_662,q_663,s_664,q_665,s_666,q_667,s_668,q_669,s_670,q_671,s_672,s_673,q_674,s_675,s_676,
betweenstory_677,s_678,q_679,s_680,s_681,s_682,s_683,s_684,s_685,q_686,s_687,s_688,
betweenstory_689,],

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

