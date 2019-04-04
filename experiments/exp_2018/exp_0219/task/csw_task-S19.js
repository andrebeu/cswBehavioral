

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
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_1_Stepfoot' }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_2_Sayexcuseme' }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_3_Shove' }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_4_Yell' }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_5_Creamsplash' }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_6_Baristaorders' }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_7_Hatecoffee' }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
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
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_11_BEGIN' }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_12_Cutline' }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_13_Sayexcuseme' }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_14_Subjectstares' }
	} 
	var q_15 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_15_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_01' }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_16_Yell' }
	} 
	var q_17 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_17_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_18_Creamsplash' }
	} 
	var q_19 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_19_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_01' }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_20_Baristaorders' }
	} 
	var q_21 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_21_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_22_Lovejuice' }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_23_END' }
	} 

    var betweenstory_24 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_25 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_25_BEGIN' }
	} 
	var q_26 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_26_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_27_Stepfoot' }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_28_Sayexcuseme' }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_29_Shove' }
	} 
	var q_30 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_30_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_31_Yell' }
	} 
	var q_32 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_32_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_33_Creamsplash' }
	} 
	var q_34 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_34_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_35_Callpoliceman' }
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
		data: { state_info: 'q_37_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
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
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_40_BEGIN' }
	} 
	var q_41 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_41_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_42_Cutline' }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_43_Sayexcuseme' }
	} 
	var q_44 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_44_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_45_Shove' }
	} 
	var q_46 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_46_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_47_Yell' }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_48_Creamsplash' }
	} 
	var q_49 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_49_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_50_Callpoliceman' }
	} 
	var q_51 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_51_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_52_Hatecoffee' }
	} 
	var q_53 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_53_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
	var q_57 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_57_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_58_Stepfoot' }
	} 
	var q_59 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_59_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_60_Sayexcuseme' }
	} 
	var q_61 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_61_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_62_Shove' }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_63_Yell' }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_64_Creamsplash' }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_65_Callpoliceman' }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_66_Hatecoffee' }
	} 
	var q_67 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_67_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_68_END' }
	} 

    var betweenstory_69 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_70 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_70_BEGIN' }
	} 
	var q_71 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_71_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_72_Stepfoot' }
	} 
	var q_73 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_73_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_74_Sayexcuseme' }
	} 
	var q_75 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_75_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_76_Shove' }
	} 
	var q_77 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Jesse pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_77_ShoveYell_ShoveXshove_20_victim.violent_01' }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_78_Yell' }
	} 
	var q_79 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_79_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_80_Creamsplash' }
	} 
	var q_81 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_81_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_82_Callpoliceman' }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_83_Hatecoffee' }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_84_END' }
	} 

    var betweenstory_85 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_86 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_86_BEGIN' }
	} 
	var q_87 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_87_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_88_Cutline' }
	} 
	var q_89 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_89_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_90_Cutback' }
	} 
	var q_91 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a coffee.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_91_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_92_Shove' }
	} 
	var q_93 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_93_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_94_Xshove' }
	} 
	var q_95 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cookie and crumbled it above Olivia\'s head.', 'Olivia snatched a cookie and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_95_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ['Jesse snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_96_Dessertcrumble' }
	} 
	var q_97 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_97_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_98_Baristaorders' }
	} 
	var q_99 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_99_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_100_Lovejuice' }
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
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_103_BEGIN' }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_104_Stepfoot' }
	} 
	var q_105 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_105_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_106_Sayexcuseme' }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_107_Shove' }
	} 
	var q_108 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_108_ShoveXshove_ShoveYell_80_victim.violent_10' }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_109_Xshove' }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_110_Dessertcrumble' }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_111_Baristaorders' }
	} 
	var q_112 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_112_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_113_Lovejuice' }
	} 
	var q_114 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_114_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_115_END' }
	} 

    var betweenstory_116 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_117 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_117_BEGIN' }
	} 
	var q_118 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_118_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_119_Cutline' }
	} 
	var q_120 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_120_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_121_Cutback' }
	} 
	var q_122 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Olivia.', 'Silvia ignored her and proceeded to order a mocha.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_122_CutbackIgnore_CutbackShove_80_subject.violent_10' }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_123_Ignore' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_124_Xstare' }
	} 
	var q_125 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Silvia\'s head.', 'Silvia snatched a cake and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_125_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_126_Dessertcrumble' }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_127_Baristaorders' }
	} 
	var q_128 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_128_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_129_Lovejuice' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_130_END' }
	} 

    var betweenstory_131 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_132 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_132_BEGIN' }
	} 
	var q_133 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_133_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_134_Cutline' }
	} 
	var q_135 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_135_CutlineCutback_CutlineSayexcuseme_20_victim.violent_10' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_136_Cutback' }
	} 
	var q_137 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia ignored him and proceeded to order a latte.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_137_CutbackShove_CutbackIgnore_80_subject.violent_01' }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_138_Shove' }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_139_Yell' }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_140_Creamsplash' }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_141_Callpoliceman' }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_142_Hatecoffee' }
	} 
	var q_143 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_143_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_144_END' }
	} 

    var betweenstory_145 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_146 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_146_BEGIN' }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_147_Stepfoot' }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_148_Sayexcuseme' }
	} 
	var q_149 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_149_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_10' }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_150_Shove' }
	} 
	var q_151 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Ben.', 'Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_151_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_152_Yell' }
	} 
	var q_153 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_153_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_154_Creamsplash' }
	} 
	var q_155 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_155_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_156_Callpoliceman' }
	} 
	var q_157 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_157_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_158_Hatecoffee' }
	} 
	var q_159 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_159_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_160_END' }
	} 

    var betweenstory_161 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_162 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_162_BEGIN' }
	} 
	var q_163 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_163_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_164_Stepfoot' }
	} 
	var q_165 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_165_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_166_Sayexcuseme' }
	} 
	var q_167 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_167_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_10' }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_168_Shove' }
	} 
	var q_169 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_169_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_170_Xshove' }
	} 
	var q_171 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_171_XshoveCreamsplash_XshoveCreamsplash_100_permute_10' }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_172_Creamsplash' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_173_Callpoliceman' }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_174_Hatecoffee' }
	} 
	var q_175 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_175_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_176_END' }
	} 

    var betweenstory_177 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_178 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_178_BEGIN' }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_179_Cutline' }
	} 
	var q_180 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_180_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_181_Cutback' }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a latte.'],
		data: { state_info: 's_182_Ignore' }
	} 
	var q_183 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'Olivia stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_183_IgnoreXshove_IgnoreXstare_80_victim.violent_01' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 's_184_Xshove' }
	} 
	var q_185 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_185_XshoveCreamsplash_XshoveCreamsplash_100_permute_10' }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_186_Creamsplash' }
	} 
	var q_187 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_187_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_188_Callpoliceman' }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_189_Hatecoffee' }
	} 
	var q_190 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_190_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_191_END' }
	} 

    var betweenstory_192 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_193 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_193_BEGIN' }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 's_194_Stepfoot' }
	} 
	var q_195 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_195_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_196_Sayexcuseme' }
	} 
	var q_197 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_197_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_198_Shove' }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_199_Yell' }
	} 
	var q_200 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_200_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_201_Creamsplash' }
	} 
	var q_202 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_202_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_203_Callpoliceman' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_204_Hatecoffee' }
	} 
	var q_205 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_205_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_206_END' }
	} 

    var betweenstory_207 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_208 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_208_BEGIN' }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_209_Cutline' }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_210_Cutback' }
	} 
	var q_211 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a coffee.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_211_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_212_Shove' }
	} 
	var q_213 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_213_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_214_Xshove' }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_215_Dessertcrumble' }
	} 
	var q_216 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_216_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_default_01' }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_217_Callpoliceman' }
	} 
	var q_218 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_218_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_219_Hatecoffee' }
	} 
	var q_220 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_220_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
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
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_223_BEGIN' }
	} 
	var q_224 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_224_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_225_Cutline' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_226_Sayexcuseme' }
	} 
	var q_227 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Jesse.', 'Ben turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_227_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_228_Subjectstares' }
	} 
	var q_229 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Ben\'s eyes.', 'Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_229_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_10' }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_230_Yell' }
	} 
	var q_231 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_231_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_232_Creamsplash' }
	} 
	var q_233 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_233_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_234_Callpoliceman' }
	} 
	var q_235 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_235_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_236_Hatecoffee' }
	} 
	var q_237 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_237_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_238_END' }
	} 

    var betweenstory_239 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_240 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_240_BEGIN' }
	} 
	var q_241 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_241_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_242_Cutline' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_243_Cutback' }
	} 
	var q_244 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben ignored her and proceeded to order a mocha.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_244_CutbackIgnore_CutbackShove_80_subject.violent_01' }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['Ben ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_245_Ignore' }
	} 
	var q_246 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_246_IgnoreXshove_IgnoreXstare_80_victim.violent_01' }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_247_Xshove' }
	} 
	var q_248 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_248_XshoveCreamsplash_XshoveCreamsplash_100_permute_01' }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_249_Creamsplash' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_250_Callpoliceman' }
	} 
	var q_251 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_251_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_252_Lovejuice' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_256_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_257_Cutline' }
	} 
	var q_258 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_258_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_259_Cutback' }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_260_Shove' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_261_Xshove' }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ['Jesse snatched a cookie and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_262_Dessertcrumble' }
	} 
	var q_263 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_263_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_264_Baristaorders' }
	} 
	var q_265 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_265_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_01' }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_266_Hatecoffee' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_267_END' }
	} 

    var betweenstory_268 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_269 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_269_BEGIN' }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_270_Cutline' }
	} 
	var q_271 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_271_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_272_Sayexcuseme' }
	} 
	var q_273 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_273_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_274_Shove' }
	} 
	var q_275 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_275_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_276_Yell' }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_277_Creamsplash' }
	} 
	var q_278 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_278_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_279_Callpoliceman' }
	} 
	var q_280 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_280_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_281_Hatecoffee' }
	} 
	var q_282 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_282_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_283_END' }
	} 

    var betweenstory_284 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_285 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_285_BEGIN' }
	} 
	var q_286 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_286_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_287_Stepfoot' }
	} 
	var q_288 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_288_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_289_Sayexcuseme' }
	} 
	var q_290 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_290_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_291_Shove' }
	} 
	var q_292 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_292_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_293_Yell' }
	} 
	var q_294 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_294_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_295_Creamsplash' }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_296_Baristaorders' }
	} 
	var q_297 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_297_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_298_Lovejuice' }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_299_END' }
	} 

    var betweenstory_300 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_301 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_301_BEGIN' }
	} 
	var q_302 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_302_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_303_Stepfoot' }
	} 
	var q_304 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_304_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_305_Sayexcuseme' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Jesse turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_306_Subjectstares' }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_307_Yell' }
	} 
	var q_308 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_308_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_309_Creamsplash' }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_310_Callpoliceman' }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_311_Hatecoffee' }
	} 
	var q_312 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_312_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
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
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_315_BEGIN' }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_316_Cutline' }
	} 
	var q_317 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Silvia.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_317_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_318_Sayexcuseme' }
	} 
	var q_319 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_319_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_320_Subjectstares' }
	} 
	var q_321 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_321_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_01' }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_322_Xstare' }
	} 
	var q_323 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Silvia\'s head.', 'Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_323_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_324_Dessertcrumble' }
	} 
	var q_325 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_325_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_326_Baristaorders' }
	} 
	var q_327 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_327_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_328_Lovejuice' }
	} 
	var q_329 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_329_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_330_END' }
	} 

    var betweenstory_331 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_332 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_332_BEGIN' }
	} 
	var q_333 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_333_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_334_Stepfoot' }
	} 
	var q_335 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_335_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_336_Sayexcuseme' }
	} 
	var q_337 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_337_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_338_Subjectstares' }
	} 
	var q_339 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_339_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_01' }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_340_Yell' }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_341_Creamsplash' }
	} 
	var q_342 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_342_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_343_Baristaorders' }
	} 
	var q_344 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_344_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_345_Lovejuice' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_346_END' }
	} 

    var betweenstory_347 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_348 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_348_BEGIN' }
	} 
	var q_349 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_349_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_350_Stepfoot' }
	} 
	var q_351 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_351_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_352_Sayexcuseme' }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_353_Shove' }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_354_Yell' }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_355_Creamsplash' }
	} 
	var q_356 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_356_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_357_Callpoliceman' }
	} 
	var q_358 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_358_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_359_Lovejuice' }
	} 
	var q_360 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_360_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_361_END' }
	} 

    var betweenstory_362 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_363 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_363_BEGIN' }
	} 
	var q_364 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_364_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_365_Cutline' }
	} 
	var q_366 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_366_CutlineSayexcuseme_CutlineCutback_20_victim.violent_10' }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_367_Sayexcuseme' }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_368_Shove' }
	} 
	var q_369 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_369_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_370_Xshove' }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_371_Creamsplash' }
	} 
	var q_372 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_372_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_373_Callpoliceman' }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_374_Hatecoffee' }
	} 
	var q_375 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_375_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_376_END' }
	} 

    var betweenstory_377 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_378 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_378_BEGIN' }
	} 
	var q_379 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_379_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_380_Cutline' }
	} 
	var q_381 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_381_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_382_Sayexcuseme' }
	} 
	var q_383 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_383_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_384_Shove' }
	} 
	var q_385 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_385_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_386_Yell' }
	} 
	var q_387 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_387_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_388_Creamsplash' }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_389_Callpoliceman' }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_390_Hatecoffee' }
	} 
	var q_391 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_391_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_392_END' }
	} 

    var betweenstory_393 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_394 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_394_BEGIN' }
	} 
	var q_395 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_395_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_396_Cutline' }
	} 
	var q_397 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Ben.', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_397_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_398_Sayexcuseme' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_399_Subjectstares' }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_400_Yell' }
	} 
	var q_401 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_401_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_402_Creamsplash' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_403_Baristaorders' }
	} 
	var q_404 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_404_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_405_Lovejuice' }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_406_END' }
	} 

    var betweenstory_407 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_408 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_408_BEGIN' }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_409_Stepfoot' }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_410_Sayexcuseme' }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_411_Subjectstares' }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_412_Xstare' }
	} 
	var q_413 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Jesse\'s head.', 'Jesse snatched a cake and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_413_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_414_Dessertcrumble' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_415_Baristaorders' }
	} 
	var q_416 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_416_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_10' }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_417_Hatecoffee' }
	} 
	var q_418 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_418_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_419_END' }
	} 

    var betweenstory_420 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_421 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_421_BEGIN' }
	} 
	var q_422 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_422_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_423_Cutline' }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_424_Sayexcuseme' }
	} 
	var q_425 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_425_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_426_Shove' }
	} 
	var q_427 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_427_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_428_Yell' }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_429_Creamsplash' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_430_Callpoliceman' }
	} 
	var q_431 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_431_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_432_Lovejuice' }
	} 
	var q_433 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_433_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_434_END' }
	} 

    var betweenstory_435 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_436 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_436_BEGIN' }
	} 
	var q_437 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_437_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_438_Stepfoot' }
	} 
	var q_439 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_439_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_440_Sayexcuseme' }
	} 
	var q_441 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_441_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_442_Shove' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_443_Yell' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_444_Creamsplash' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_445_Callpoliceman' }
	} 
	var q_446 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_446_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_447_Hatecoffee' }
	} 
	var q_448 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_448_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_449_END' }
	} 

    var betweenstory_450 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_451 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_451_BEGIN' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_452_Cutline' }
	} 
	var q_453 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_453_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_454_Sayexcuseme' }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_455_Shove' }
	} 
	var q_456 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_456_ShoveXshove_ShoveYell_20_victim.violent_10' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Olivia.'],
		data: { state_info: 's_457_Xshove' }
	} 
	var q_458 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Olivia\'s head.', 'Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_458_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_10' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_459_Dessertcrumble' }
	} 
	var q_460 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_460_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_461_Baristaorders' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_462_Lovejuice' }
	} 
	var q_463 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_463_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_464_END' }
	} 

    var betweenstory_465 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_466 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_466_BEGIN' }
	} 
	var q_467 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_467_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_468_Stepfoot' }
	} 
	var q_469 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_469_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_470_Sayexcuseme' }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_471_Subjectstares' }
	} 
	var q_472 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"', 'Jesse stared with rage into Olivia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_472_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_01' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_473_Yell' }
	} 
	var q_474 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_474_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_475_Creamsplash' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_476_Callpoliceman' }
	} 
	var q_477 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_477_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_478_Hatecoffee' }
	} 
	var q_479 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_479_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_480_END' }
	} 

    var betweenstory_481 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_482 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_482_BEGIN' }
	} 
	var q_483 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_483_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_484_Cutline' }
	} 
	var q_485 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_485_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_486_Cutback' }
	} 
	var q_487 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia ignored him and proceeded to order a mocha.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_487_CutbackShove_CutbackIgnore_80_subject.violent_01' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_488_Shove' }
	} 
	var q_489 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_489_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_490_Xshove' }
	} 
	var q_491 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_491_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_492_Dessertcrumble' }
	} 
	var q_493 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_493_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_494_Baristaorders' }
	} 
	var q_495 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_495_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_496_Lovejuice' }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_497_END' }
	} 

    var betweenstory_498 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_499 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_499_BEGIN' }
	} 
	var q_500 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_500_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_501_Stepfoot' }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_502_Sayexcuseme' }
	} 
	var q_503 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Silvia.', 'Jesse turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_503_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_504_Shove' }
	} 
	var q_505 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Jesse.', 'Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_505_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_506_Yell' }
	} 
	var q_507 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_507_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_508_Creamsplash' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_509_Callpoliceman' }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_510_Lovejuice' }
	} 
	var q_511 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_511_LovejuiceEND_LovejuiceEND_100_alter_10' }
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
	var q_515 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_515_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_516_Cutline' }
	} 
	var q_517 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_517_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_518_Sayexcuseme' }
	} 
	var q_519 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_519_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_520_Shove' }
	} 
	var q_521 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_521_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_522_Yell' }
	} 
	var q_523 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_523_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_524_Creamsplash' }
	} 
	var q_525 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_525_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_01' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_526_Baristaorders' }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_527_Lovejuice' }
	} 
	var q_528 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_528_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_532_Cutline' }
	} 
	var q_533 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_533_CutlineCutback_CutlineSayexcuseme_20_victim.violent_10' }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_534_Cutback' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_535_Shove' }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_536_Yell' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_537_Creamsplash' }
	} 
	var q_538 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_538_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_539_Callpoliceman' }
	} 
	var q_540 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_540_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
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
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_544_BEGIN' }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_545_Stepfoot' }
	} 
	var q_546 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_546_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_547_Sayexcuseme' }
	} 
	var q_548 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_548_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_549_Subjectstares' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_550_Xstare' }
	} 
	var q_551 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.', 'Silvia snatched a lemonsquare and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_551_XstareDessertcrumble_XstareDessertcrumble_100_permute_01' }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_552_Dessertcrumble' }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_553_Baristaorders' }
	} 
	var q_554 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_554_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_555_Lovejuice' }
	} 
	var q_556 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_556_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_557_END' }
	} 

    var betweenstory_558 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_559 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_559_BEGIN' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_560_Cutline' }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_561_Cutback' }
	} 
	var q_562 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored him and proceeded to order a coffee.', 'Silvia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_562_CutbackIgnore_CutbackShove_80_subject.violent_01' }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_563_Ignore' }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.'],
		data: { state_info: 's_564_Xshove' }
	} 
	var q_565 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_565_XshoveCreamsplash_XshoveCreamsplash_100_permute_01' }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_566_Creamsplash' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_567_Callpoliceman' }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_568_Hatecoffee' }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_569_END' }
	} 

    var betweenstory_570 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_571 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_571_BEGIN' }
	} 
	var q_572 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_572_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_573_Stepfoot' }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_574_Sayexcuseme' }
	} 
	var q_575 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_575_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_576_Subjectstares' }
	} 
	var q_577 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_577_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_01' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_578_Xstare' }
	} 
	var q_579 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Silvia\'s head.', 'Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_579_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_580_Dessertcrumble' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_581_Baristaorders' }
	} 
	var q_582 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_582_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_10' }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_583_Hatecoffee' }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_584_END' }
	} 

    var betweenstory_585 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_586 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_586_BEGIN' }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_587_Cutline' }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_588_Sayexcuseme' }
	} 
	var q_589 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_589_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_590_Subjectstares' }
	} 
	var q_591 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_591_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_592_Xstare' }
	} 
	var q_593 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cookie and crumbled it above Ben\'s head.', 'Ben snatched a cookie and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_593_XstareDessertcrumble_XstareDessertcrumble_100_permute_01' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_594_Dessertcrumble' }
	} 
	var q_595 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_595_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_596_Baristaorders' }
	} 
	var q_597 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_597_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_598_Lovejuice' }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_599_END' }
	} 

    var betweenstory_600 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_601 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_601_BEGIN' }
	} 
	var q_602 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_602_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_603_Cutline' }
	} 
	var q_604 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_604_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_605_Sayexcuseme' }
	} 
	var q_606 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_606_SayexcusemeSubjectstares_SayexcusemeShove_20_subject.violent_01' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_607_Subjectstares' }
	} 
	var q_608 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_608_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_609_Xstare' }
	} 
	var q_610 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_610_XstareDessertcrumble_XstareDessertcrumble_100_permute_01' }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_611_Dessertcrumble' }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_612_Callpoliceman' }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_613_Hatecoffee' }
	} 
	var s_614 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_614_END' }
	} 

    var betweenstory_615 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_616 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_616_BEGIN' }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_617_Cutline' }
	} 
	var q_618 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Jesse.', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_618_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_619_Sayexcuseme' }
	} 
	var q_620 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Silvia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_620_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_621_Shove' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_622_Yell' }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_623_Creamsplash' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_624_Callpoliceman' }
	} 
	var q_625 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_625_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_626_Lovejuice' }
	} 
	var q_627 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_627_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_628_END' }
	} 

    var betweenstory_629 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_630 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_630_BEGIN' }
	} 
	var q_631 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_631_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_632_Stepfoot' }
	} 
	var q_633 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_633_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_634_Sayexcuseme' }
	} 
	var q_635 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_635_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_636_Shove' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_637_Xshove' }
	} 
	var q_638 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_638_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_10' }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_639_Dessertcrumble' }
	} 
	var q_640 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_640_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_641_Baristaorders' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_642_Lovejuice' }
	} 
	var s_643 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_643_END' }
	} 

    var betweenstory_644 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_645 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_645_BEGIN' }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_646_Cutline' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_647_Sayexcuseme' }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_648_Shove' }
	} 
	var q_649 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_649_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_650_Yell' }
	} 
	var q_651 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_651_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_652_Creamsplash' }
	} 
	var q_653 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_653_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_654_Callpoliceman' }
	} 
	var q_655 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_655_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_656_Hatecoffee' }
	} 
	var q_657 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_657_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_658_END' }
	} 

    var betweenstory_659 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_660 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_660_BEGIN' }
	} 
	var q_661 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Jesse\'s foot.', 'Without hesitating he cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_661_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Jesse\'s foot.'],
		data: { state_info: 's_662_Stepfoot' }
	} 
	var q_663 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_663_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_664_Sayexcuseme' }
	} 
	var q_665 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Ben proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_665_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_666_Subjectstares' }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_667_Yell' }
	} 
	var q_668 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_668_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_669_Creamsplash' }
	} 
	var q_670 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_670_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_671_Callpoliceman' }
	} 
	var q_672 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_672_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_01' }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_673_Lovejuice' }
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
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_676_BEGIN' }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_677_Cutline' }
	} 
	var q_678 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Silvia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_678_CutlineSayexcuseme_CutlineCutback_20_victim.violent_10' }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_679_Sayexcuseme' }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ['Silvia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_680_Subjectstares' }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_681_Yell' }
	} 
	var s_682 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_682_Creamsplash' }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_683_Callpoliceman' }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_684_Hatecoffee' }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_685_END' }
	} 

    var betweenstory_686 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_687 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_687_BEGIN' }
	} 
	var q_688 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_688_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_689 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_689_Stepfoot' }
	} 
	var s_690 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_690_Sayexcuseme' }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_691_Subjectstares' }
	} 
	var q_692 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_692_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_693_Xstare' }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_694_Dessertcrumble' }
	} 
	var q_695 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_695_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_default_10' }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_696_Callpoliceman' }
	} 
	var q_697 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_697_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_698_Hatecoffee' }
	} 
	var s_699 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_699_END' }
	} 

    var betweenstory_700 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_701 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_701_BEGIN' }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_702_Cutline' }
	} 
	var q_703 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_703_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_704 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_704_Cutback' }
	} 
	var s_705 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_705_Ignore' }
	} 
	var q_706 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'In retaliation, Jesse pushed Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_706_IgnoreXshove_IgnoreXstare_80_victim.violent_10' }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.'],
		data: { state_info: 's_707_Xshove' }
	} 
	var q_708 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_708_XshoveCreamsplash_XshoveCreamsplash_100_permute_10' }
	} 
	var s_709 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_709_Creamsplash' }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_710_Baristaorders' }
	} 
	var q_711 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_711_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_712 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_712_Lovejuice' }
	} 
	var s_713 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_713_END' }
	} 

    var betweenstory_714 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_715 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_715_BEGIN' }
	} 
	var q_716 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_716_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_717 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_717_Stepfoot' }
	} 
	var q_718 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_718_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_719 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_719_Sayexcuseme' }
	} 
	var q_720 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_720_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_721 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_721_Subjectstares' }
	} 
	var s_722 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_722_Xstare' }
	} 
	var q_723 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_723_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_724_Dessertcrumble' }
	} 
	var s_725 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_725_Baristaorders' }
	} 
	var q_726 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_726_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_01' }
	} 
	var s_727 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_727_Hatecoffee' }
	} 
	var s_728 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_728_END' }
	} 

    var betweenstory_729 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_730 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_730_BEGIN' }
	} 
	var q_731 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_731_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_732 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_732_Cutline' }
	} 
	var q_733 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_733_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_734_Sayexcuseme' }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_735_Shove' }
	} 
	var s_736 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_736_Yell' }
	} 
	var q_737 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_737_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_738_Creamsplash' }
	} 
	var q_739 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_739_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_740_Baristaorders' }
	} 
	var q_741 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_741_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_742 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_742_Lovejuice' }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_743_END' }
	} 

    var betweenstory_744 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,questions_begin_10,s_11,s_12,s_13,s_14,q_15,s_16,q_17,s_18,q_19,s_20,q_21,s_22,s_23,
betweenstory_24,s_25,q_26,s_27,s_28,s_29,q_30,s_31,q_32,s_33,q_34,s_35,s_36,q_37,s_38,
betweenstory_39,s_40,q_41,s_42,s_43,q_44,s_45,q_46,s_47,s_48,q_49,s_50,q_51,s_52,q_53,s_54,
betweenstory_55,s_56,q_57,s_58,q_59,s_60,q_61,s_62,s_63,s_64,s_65,s_66,q_67,s_68,
betweenstory_69,s_70,q_71,s_72,q_73,s_74,q_75,s_76,q_77,s_78,q_79,s_80,q_81,s_82,s_83,s_84,
betweenstory_85,s_86,q_87,s_88,q_89,s_90,q_91,s_92,q_93,s_94,q_95,s_96,q_97,s_98,q_99,s_100,s_101,
betweenstory_102,s_103,s_104,q_105,s_106,s_107,q_108,s_109,s_110,s_111,q_112,s_113,q_114,s_115,
betweenstory_116,s_117,q_118,s_119,q_120,s_121,q_122,s_123,s_124,q_125,s_126,s_127,q_128,s_129,s_130,
betweenstory_131,s_132,q_133,s_134,q_135,s_136,q_137,s_138,s_139,s_140,s_141,s_142,q_143,s_144,
betweenstory_145,s_146,s_147,s_148,q_149,s_150,q_151,s_152,q_153,s_154,q_155,s_156,q_157,s_158,q_159,s_160,
betweenstory_161,s_162,q_163,s_164,q_165,s_166,q_167,s_168,q_169,s_170,q_171,s_172,s_173,s_174,q_175,s_176,
betweenstory_177,s_178,s_179,q_180,s_181,s_182,q_183,s_184,q_185,s_186,q_187,s_188,s_189,q_190,s_191,
betweenstory_192,s_193,s_194,q_195,s_196,q_197,s_198,s_199,q_200,s_201,q_202,s_203,s_204,q_205,s_206,
betweenstory_207,s_208,s_209,s_210,q_211,s_212,q_213,s_214,s_215,q_216,s_217,q_218,s_219,q_220,s_221,
betweenstory_222,s_223,q_224,s_225,s_226,q_227,s_228,q_229,s_230,q_231,s_232,q_233,s_234,q_235,s_236,q_237,s_238,
betweenstory_239,s_240,q_241,s_242,s_243,q_244,s_245,q_246,s_247,q_248,s_249,s_250,q_251,s_252,s_253,
betweenstory_254,s_255,q_256,s_257,q_258,s_259,s_260,s_261,s_262,q_263,s_264,q_265,s_266,s_267,
betweenstory_268,s_269,s_270,q_271,s_272,q_273,s_274,q_275,s_276,s_277,q_278,s_279,q_280,s_281,q_282,s_283,
betweenstory_284,s_285,q_286,s_287,q_288,s_289,q_290,s_291,q_292,s_293,q_294,s_295,s_296,q_297,s_298,s_299,
betweenstory_300,s_301,q_302,s_303,q_304,s_305,s_306,s_307,q_308,s_309,s_310,s_311,q_312,s_313,
betweenstory_314,s_315,s_316,q_317,s_318,q_319,s_320,q_321,s_322,q_323,s_324,q_325,s_326,q_327,s_328,q_329,s_330,
betweenstory_331,s_332,q_333,s_334,q_335,s_336,q_337,s_338,q_339,s_340,s_341,q_342,s_343,q_344,s_345,s_346,
betweenstory_347,s_348,q_349,s_350,q_351,s_352,s_353,s_354,s_355,q_356,s_357,q_358,s_359,q_360,s_361,
betweenstory_362,s_363,q_364,s_365,q_366,s_367,s_368,q_369,s_370,s_371,q_372,s_373,s_374,q_375,s_376,
betweenstory_377,s_378,q_379,s_380,q_381,s_382,q_383,s_384,q_385,s_386,q_387,s_388,s_389,s_390,q_391,s_392,
betweenstory_393,s_394,q_395,s_396,q_397,s_398,s_399,s_400,q_401,s_402,s_403,q_404,s_405,s_406,
betweenstory_407,s_408,s_409,s_410,s_411,s_412,q_413,s_414,s_415,q_416,s_417,q_418,s_419,
betweenstory_420,s_421,q_422,s_423,s_424,q_425,s_426,q_427,s_428,s_429,s_430,q_431,s_432,q_433,s_434,
betweenstory_435,s_436,q_437,s_438,q_439,s_440,q_441,s_442,s_443,s_444,s_445,q_446,s_447,q_448,s_449,
betweenstory_450,s_451,s_452,q_453,s_454,s_455,q_456,s_457,q_458,s_459,q_460,s_461,s_462,q_463,s_464,
betweenstory_465,s_466,q_467,s_468,q_469,s_470,s_471,q_472,s_473,q_474,s_475,s_476,q_477,s_478,q_479,s_480,
betweenstory_481,s_482,q_483,s_484,q_485,s_486,q_487,s_488,q_489,s_490,q_491,s_492,q_493,s_494,q_495,s_496,s_497,
betweenstory_498,s_499,q_500,s_501,s_502,q_503,s_504,q_505,s_506,q_507,s_508,s_509,s_510,q_511,s_512,
betweenstory_513,s_514,q_515,s_516,q_517,s_518,q_519,s_520,q_521,s_522,q_523,s_524,q_525,s_526,s_527,q_528,s_529,
betweenstory_530,s_531,s_532,q_533,s_534,s_535,s_536,s_537,q_538,s_539,q_540,s_541,s_542,
betweenstory_543,s_544,s_545,q_546,s_547,q_548,s_549,s_550,q_551,s_552,s_553,q_554,s_555,q_556,s_557,
betweenstory_558,s_559,s_560,s_561,q_562,s_563,s_564,q_565,s_566,s_567,s_568,s_569,
betweenstory_570,s_571,q_572,s_573,s_574,q_575,s_576,q_577,s_578,q_579,s_580,s_581,q_582,s_583,s_584,
betweenstory_585,s_586,s_587,s_588,q_589,s_590,q_591,s_592,q_593,s_594,q_595,s_596,q_597,s_598,s_599,
betweenstory_600,s_601,q_602,s_603,q_604,s_605,q_606,s_607,q_608,s_609,q_610,s_611,s_612,s_613,s_614,
betweenstory_615,s_616,s_617,q_618,s_619,q_620,s_621,s_622,s_623,s_624,q_625,s_626,q_627,s_628,
betweenstory_629,s_630,q_631,s_632,q_633,s_634,q_635,s_636,s_637,q_638,s_639,q_640,s_641,s_642,s_643,
betweenstory_644,s_645,s_646,s_647,s_648,q_649,s_650,q_651,s_652,q_653,s_654,q_655,s_656,q_657,s_658,
betweenstory_659,s_660,q_661,s_662,q_663,s_664,q_665,s_666,s_667,q_668,s_669,q_670,s_671,q_672,s_673,s_674,
betweenstory_675,s_676,s_677,q_678,s_679,s_680,s_681,s_682,s_683,s_684,s_685,
betweenstory_686,s_687,q_688,s_689,s_690,s_691,q_692,s_693,s_694,q_695,s_696,q_697,s_698,s_699,
betweenstory_700,s_701,s_702,q_703,s_704,s_705,q_706,s_707,q_708,s_709,s_710,q_711,s_712,s_713,
betweenstory_714,s_715,q_716,s_717,q_718,s_719,q_720,s_721,s_722,q_723,s_724,s_725,q_726,s_727,s_728,
betweenstory_729,s_730,q_731,s_732,q_733,s_734,s_735,s_736,q_737,s_738,q_739,s_740,q_741,s_742,s_743,
betweenstory_744,],

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

