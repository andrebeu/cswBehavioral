

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
	var q_13 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Ben.', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_13_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_14_Sayexcuseme' }
	} 
	var q_15 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Ben turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_15_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_16_Subjectstares' }
	} 
	var q_17 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_17_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_01' }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_18_Yell' }
	} 
	var q_19 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_19_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_20_Creamsplash' }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_21_Baristaorders' }
	} 
	var q_22 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_22_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_23_Lovejuice' }
	} 
	var q_24 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_24_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_25 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_25_END' }
	} 

    var betweenstory_26 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_27 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_27_BEGIN' }
	} 
	var q_28 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_28_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_29_Stepfoot' }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_30_Sayexcuseme' }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_31_Shove' }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_32_Yell' }
	} 
	var q_33 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_33_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_34_Creamsplash' }
	} 
	var q_35 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_35_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_36_Callpoliceman' }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_37_Hatecoffee' }
	} 
	var q_38 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_38_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_39_END' }
	} 

    var betweenstory_40 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_41 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_41_BEGIN' }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_42_Cutline' }
	} 
	var q_43 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_43_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_44_Sayexcuseme' }
	} 
	var q_45 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_45_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_46_Shove' }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_47_Yell' }
	} 
	var q_48 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_48_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_49_Creamsplash' }
	} 
	var q_50 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_50_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_51_Callpoliceman' }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_52_Hatecoffee' }
	} 
	var q_53 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
	var q_63 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_63_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_64_Yell' }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_65_Creamsplash' }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_66_Callpoliceman' }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_67_Hatecoffee' }
	} 
	var q_68 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_68_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_69_END' }
	} 

    var betweenstory_70 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_71 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_71_BEGIN' }
	} 
	var q_72 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_72_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_73_Stepfoot' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_74_Sayexcuseme' }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_75_Shove' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_76_Yell' }
	} 
	var q_77 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_77_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_78_Creamsplash' }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_79_Callpoliceman' }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_80_Hatecoffee' }
	} 
	var q_81 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_81_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
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
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_85_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_86_Cutline' }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_87_Cutback' }
	} 
	var q_88 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a coffee.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_88_CutbackShove_CutbackIgnore_80_subject.violent_01' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_89_Shove' }
	} 
	var q_90 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_90_ShoveYell_ShoveXshove_20_victim.violent_01' }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_91_Yell' }
	} 
	var q_92 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_92_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_93_Creamsplash' }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_94_Callpoliceman' }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_95_Hatecoffee' }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_96_END' }
	} 

    var betweenstory_97 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_98 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_98_BEGIN' }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_99_Stepfoot' }
	} 
	var q_100 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_100_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_101_Sayexcuseme' }
	} 
	var q_102 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_102_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_103_Shove' }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_104_Xshove' }
	} 
	var q_105 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Olivia\'s head.', 'Olivia snatched a cake and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_105_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_106_Dessertcrumble' }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_107_Baristaorders' }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_108_Lovejuice' }
	} 
	var q_109 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_109_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_110_END' }
	} 

    var betweenstory_111 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_112 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_112_BEGIN' }
	} 
	var q_113 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_113_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_114_Cutline' }
	} 
	var q_115 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_115_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_116_Cutback' }
	} 
	var q_117 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored her and proceeded to order a mocha.', 'Silvia proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_117_CutbackIgnore_CutbackShove_80_subject.violent_01' }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_118_Ignore' }
	} 
	var q_119 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'Olivia stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_119_IgnoreXstare_IgnoreXshove_20_victim.violent_10' }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_120_Xstare' }
	} 
	var q_121 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Silvia\'s head.', 'Silvia snatched a cake and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_121_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_122_Dessertcrumble' }
	} 
	var q_123 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_123_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_124_Baristaorders' }
	} 
	var q_125 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_125_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_126_Lovejuice' }
	} 
	var q_127 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_127_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_128_END' }
	} 

    var betweenstory_129 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_130 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_130_BEGIN' }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_131_Cutline' }
	} 
	var q_132 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_132_CutlineCutback_CutlineSayexcuseme_20_victim.violent_01' }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_133_Cutback' }
	} 
	var q_134 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a latte.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_134_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_135_Shove' }
	} 
	var q_136 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_136_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_137_Yell' }
	} 
	var q_138 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_138_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_139_Creamsplash' }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_140_Callpoliceman' }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_141_Hatecoffee' }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_142_END' }
	} 

    var betweenstory_143 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_144 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_144_BEGIN' }
	} 
	var q_145 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_145_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_146_Stepfoot' }
	} 
	var q_147 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_147_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_148_Sayexcuseme' }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_149_Shove' }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_150_Yell' }
	} 
	var q_151 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_151_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_152_Creamsplash' }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_153_Callpoliceman' }
	} 
	var q_154 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_154_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_155_Hatecoffee' }
	} 
	var q_156 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_156_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_157_END' }
	} 

    var betweenstory_158 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_159 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_159_BEGIN' }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_160_Stepfoot' }
	} 
	var q_161 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_161_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_162_Sayexcuseme' }
	} 
	var q_163 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_163_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_01' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_164_Shove' }
	} 
	var q_165 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Ben\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_165_ShoveXshove_ShoveYell_80_victim.violent_10' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_166_Xshove' }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_167_Creamsplash' }
	} 
	var q_168 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_168_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_169_Callpoliceman' }
	} 
	var q_170 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_170_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_171_Hatecoffee' }
	} 
	var q_172 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_172_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_176_Cutline' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_177_Cutback' }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a latte.'],
		data: { state_info: 's_178_Ignore' }
	} 
	var q_179 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Silvia\'s eyes.', 'In retaliation, Olivia pushed Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_179_IgnoreXshove_IgnoreXstare_80_victim.violent_10' }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 's_180_Xshove' }
	} 
	var q_181 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_181_XshoveCreamsplash_XshoveCreamsplash_100_permute_10' }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_182_Creamsplash' }
	} 
	var q_183 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_183_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_184_Callpoliceman' }
	} 
	var q_185 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_185_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_186_Hatecoffee' }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_187_END' }
	} 

    var betweenstory_188 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_189 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_189_BEGIN' }
	} 
	var q_190 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_190_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 's_191_Stepfoot' }
	} 
	var q_192 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_192_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_193_Sayexcuseme' }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_194_Shove' }
	} 
	var q_195 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_195_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_196_Yell' }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_197_Creamsplash' }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_198_Callpoliceman' }
	} 
	var q_199 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_199_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_200_Hatecoffee' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_201_END' }
	} 

    var betweenstory_202 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_203 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_203_BEGIN' }
	} 
	var q_204 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_204_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_205_Cutline' }
	} 
	var q_206 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_206_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_207_Cutback' }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_208_Shove' }
	} 
	var q_209 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_209_ShoveXshove_ShoveYell_80_victim.violent_10' }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_210_Xshove' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_211_Dessertcrumble' }
	} 
	var q_212 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_212_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_213_Baristaorders' }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_214_Lovejuice' }
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
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_217_BEGIN' }
	} 
	var q_218 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_218_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_219_Cutline' }
	} 
	var q_220 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Ben.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_220_CutlineSayexcuseme_CutlineCutback_20_victim.violent_10' }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_221_Sayexcuseme' }
	} 
	var q_222 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Ben proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_222_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_223_Subjectstares' }
	} 
	var q_224 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"', 'Jesse stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_224_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_01' }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_225_Yell' }
	} 
	var q_226 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_226_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_227_Creamsplash' }
	} 
	var q_228 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_228_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_229_Callpoliceman' }
	} 
	var q_230 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_230_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_231_Hatecoffee' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_232_END' }
	} 

    var betweenstory_233 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_234 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_234_BEGIN' }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_235_Cutline' }
	} 
	var q_236 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_236_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_237_Cutback' }
	} 
	var q_238 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben ignored her and proceeded to order a mocha.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_238_CutbackIgnore_CutbackShove_80_subject.violent_01' }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Ben ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_239_Ignore' }
	} 
	var q_240 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Ben\'s eyes.', 'In retaliation, Olivia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_240_IgnoreXshove_IgnoreXstare_80_victim.violent_10' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_241_Xshove' }
	} 
	var q_242 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_242_XshoveCreamsplash_XshoveCreamsplash_100_permute_01' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_243_Creamsplash' }
	} 
	var q_244 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_244_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_245_Callpoliceman' }
	} 
	var q_246 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_246_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_01' }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_247_Lovejuice' }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_248_END' }
	} 

    var betweenstory_249 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_250 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_250_BEGIN' }
	} 
	var q_251 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_251_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_252_Cutline' }
	} 
	var q_253 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_253_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_254_Cutback' }
	} 
	var q_255 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a latte.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_255_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_256_Shove' }
	} 
	var q_257 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_257_ShoveYell_ShoveXshove_20_victim.violent_01' }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_258_Yell' }
	} 
	var q_259 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_259_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_260_Creamsplash' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_261_Callpoliceman' }
	} 
	var q_262 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_262_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_263_Hatecoffee' }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_264_END' }
	} 

    var betweenstory_265 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_266 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_266_BEGIN' }
	} 
	var q_267 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_267_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_268_Cutline' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_269_Sayexcuseme' }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_270_Shove' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_271_Yell' }
	} 
	var q_272 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_272_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_273_Creamsplash' }
	} 
	var q_274 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_274_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_275_Callpoliceman' }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_276_Hatecoffee' }
	} 
	var q_277 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_277_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
	var s_281 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_281_Stepfoot' }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_282_Sayexcuseme' }
	} 
	var q_283 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Olivia turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_283_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_284_Shove' }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_285_Yell' }
	} 
	var q_286 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_286_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_287_Creamsplash' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_288_Baristaorders' }
	} 
	var q_289 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_289_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_290_Lovejuice' }
	} 
	var q_291 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_291_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_292_END' }
	} 

    var betweenstory_293 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_294 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_294_BEGIN' }
	} 
	var q_295 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_295_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_296_Stepfoot' }
	} 
	var q_297 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_297_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_298_Sayexcuseme' }
	} 
	var q_299 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_299_SayexcusemeSubjectstares_SayexcusemeShove_20_subject.violent_10' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Jesse turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_300_Subjectstares' }
	} 
	var q_301 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Jesse\'s eyes.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_301_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_10' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_302_Yell' }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_303_Creamsplash' }
	} 
	var q_304 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_304_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_305_Callpoliceman' }
	} 
	var q_306 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_306_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_307_Hatecoffee' }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_311_Cutline' }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_312_Sayexcuseme' }
	} 
	var q_313 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_313_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_314_Subjectstares' }
	} 
	var q_315 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_315_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_316_Xstare' }
	} 
	var q_317 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Silvia\'s head.', 'Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_317_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_318_Dessertcrumble' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_319_Baristaorders' }
	} 
	var q_320 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_320_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_321_Lovejuice' }
	} 
	var q_322 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_322_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_323_END' }
	} 

    var betweenstory_324 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_325 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_325_BEGIN' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_326_Stepfoot' }
	} 
	var q_327 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_327_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_328_Sayexcuseme' }
	} 
	var q_329 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_329_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_330_Subjectstares' }
	} 
	var q_331 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_331_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_10' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_332_Yell' }
	} 
	var q_333 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_333_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_334_Creamsplash' }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_335_Baristaorders' }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_336_Lovejuice' }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_337_END' }
	} 

    var betweenstory_338 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_339 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_339_BEGIN' }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_340_Stepfoot' }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_341_Sayexcuseme' }
	} 
	var q_342 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_342_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_343_Shove' }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_344_Yell' }
	} 
	var q_345 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_345_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_346_Creamsplash' }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_347_Callpoliceman' }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_348_Lovejuice' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_349_END' }
	} 

    var betweenstory_350 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_351 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_351_BEGIN' }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_352_Cutline' }
	} 
	var q_353 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_353_CutlineSayexcuseme_CutlineCutback_20_victim.violent_10' }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_354_Sayexcuseme' }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_355_Shove' }
	} 
	var q_356 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_356_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_357_Xshove' }
	} 
	var q_358 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_358_XshoveCreamsplash_XshoveCreamsplash_100_permute_01' }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_359_Creamsplash' }
	} 
	var q_360 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Jesse, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_360_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_361_Callpoliceman' }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_362_Hatecoffee' }
	} 
	var q_363 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_363_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_364_END' }
	} 

    var betweenstory_365 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_366 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_366_BEGIN' }
	} 
	var q_367 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_367_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_368_Cutline' }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_369_Sayexcuseme' }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_370_Shove' }
	} 
	var q_371 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_371_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_372_Yell' }
	} 
	var q_373 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_373_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_374_Creamsplash' }
	} 
	var q_375 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_375_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_376_Callpoliceman' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_377_Hatecoffee' }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_378_END' }
	} 

    var betweenstory_379 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_380 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_380_BEGIN' }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_381_Cutline' }
	} 
	var q_382 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_382_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_383_Sayexcuseme' }
	} 
	var q_384 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_384_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_385_Subjectstares' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_386_Yell' }
	} 
	var q_387 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_387_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_388_Creamsplash' }
	} 
	var q_389 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_389_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_01' }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_390_Baristaorders' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_391_Lovejuice' }
	} 
	var q_392 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_392_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_393_END' }
	} 

    var betweenstory_394 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_395 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_395_BEGIN' }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_396_Stepfoot' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_397_Sayexcuseme' }
	} 
	var q_398 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Silvia.', 'Jesse turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_398_SayexcusemeSubjectstares_SayexcusemeShove_20_subject.violent_10' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_399_Subjectstares' }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_400_Xstare' }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_401_Dessertcrumble' }
	} 
	var q_402 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_402_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_403_Baristaorders' }
	} 
	var q_404 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_404_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_10' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_405_Hatecoffee' }
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
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_408_BEGIN' }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_409_Cutline' }
	} 
	var q_410 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Olivia.', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_410_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_411_Sayexcuseme' }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_412_Shove' }
	} 
	var q_413 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Olivia.', 'Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_413_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_414_Yell' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_415_Creamsplash' }
	} 
	var q_416 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_416_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_417_Callpoliceman' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_418_Lovejuice' }
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
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_422_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_423_Stepfoot' }
	} 
	var q_424 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_424_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_425_Sayexcuseme' }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_426_Shove' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_427_Yell' }
	} 
	var q_428 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_428_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_429_Creamsplash' }
	} 
	var q_430 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_430_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_431_Callpoliceman' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_432_Hatecoffee' }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_433_END' }
	} 

    var betweenstory_434 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_435 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_435_BEGIN' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_436_Cutline' }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_437_Sayexcuseme' }
	} 
	var q_438 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_438_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_439_Shove' }
	} 
	var q_440 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_440_ShoveXshove_ShoveYell_20_victim.violent_01' }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Olivia.'],
		data: { state_info: 's_441_Xshove' }
	} 
	var q_442 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cookie and crumbled it above Ben\'s head.', 'Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_442_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_443_Dessertcrumble' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_444_Baristaorders' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_445_Lovejuice' }
	} 
	var q_446 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_446_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_447_END' }
	} 

    var betweenstory_448 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_449 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_449_BEGIN' }
	} 
	var q_450 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_450_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_451_Stepfoot' }
	} 
	var q_452 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_452_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_453_Sayexcuseme' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_454_Subjectstares' }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_455_Yell' }
	} 
	var q_456 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_456_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_457_Creamsplash' }
	} 
	var q_458 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_458_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_459_Callpoliceman' }
	} 
	var q_460 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_460_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_461_Hatecoffee' }
	} 
	var q_462 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_462_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
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
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_465_BEGIN' }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_466_Cutline' }
	} 
	var q_467 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_467_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_468_Cutback' }
	} 
	var q_469 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a mocha.', 'Olivia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_469_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_470_Shove' }
	} 
	var q_471 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_471_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_472_Xshove' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_473_Dessertcrumble' }
	} 
	var q_474 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_474_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_475_Baristaorders' }
	} 
	var q_476 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_476_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_477_Lovejuice' }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_478_END' }
	} 

    var betweenstory_479 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_480 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_480_BEGIN' }
	} 
	var q_481 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_481_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_482_Stepfoot' }
	} 
	var q_483 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_483_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_484_Sayexcuseme' }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_485_Shove' }
	} 
	var q_486 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Jesse.', 'Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_486_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_487_Yell' }
	} 
	var q_488 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_488_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_489_Creamsplash' }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_490_Callpoliceman' }
	} 
	var q_491 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_491_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_01' }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_492_Lovejuice' }
	} 
	var q_493 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_493_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_494_END' }
	} 

    var betweenstory_495 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_496 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_496_BEGIN' }
	} 
	var q_497 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_497_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_498_Cutline' }
	} 
	var q_499 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_499_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_500_Sayexcuseme' }
	} 
	var q_501 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_501_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_502_Shove' }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_503_Yell' }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_504_Creamsplash' }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_505_Baristaorders' }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_506_Lovejuice' }
	} 
	var q_507 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_507_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_508_END' }
	} 

    var betweenstory_509 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_510 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_510_BEGIN' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_511_Cutline' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_512_Cutback' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_513_Shove' }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_514_Yell' }
	} 
	var q_515 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_515_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_516_Creamsplash' }
	} 
	var q_517 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_517_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_518_Callpoliceman' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_519_Hatecoffee' }
	} 
	var q_520 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_520_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_521_END' }
	} 

    var betweenstory_522 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_523 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_523_BEGIN' }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_524_Stepfoot' }
	} 
	var q_525 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_525_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_526_Sayexcuseme' }
	} 
	var q_527 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_527_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_528_Subjectstares' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_529_Xstare' }
	} 
	var q_530 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a lemonsquare and crumbled it above Ben\'s head.', 'Ben snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_530_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_531_Dessertcrumble' }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_532_Baristaorders' }
	} 
	var q_533 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_533_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_534_Lovejuice' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_535_END' }
	} 

    var betweenstory_536 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_537 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_537_BEGIN' }
	} 
	var q_538 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_538_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_539_Cutline' }
	} 
	var q_540 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Silvia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_540_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_541_Cutback' }
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_542_Ignore' }
	} 
	var q_543 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Silvia.', 'Jesse stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_543_IgnoreXstare_IgnoreXshove_20_victim.violent_10' }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ['Jesse stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_544_Xstare' }
	} 
	var q_545 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Silvia\'s head.', 'Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_545_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_546_Dessertcrumble' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_547_Baristaorders' }
	} 
	var q_548 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_548_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_549_Lovejuice' }
	} 
	var q_550 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_550_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_551_END' }
	} 

    var betweenstory_552 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_553 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_553_BEGIN' }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_554_Stepfoot' }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_555_Sayexcuseme' }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_556_Subjectstares' }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_557_Xstare' }
	} 
	var q_558 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_558_XstareDessertcrumble_XstareDessertcrumble_100_permute_01' }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_559_Dessertcrumble' }
	} 
	var q_560 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_560_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_561_Baristaorders' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_562_Hatecoffee' }
	} 
	var q_563 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_563_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_564_END' }
	} 

    var betweenstory_565 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_566 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_566_BEGIN' }
	} 
	var q_567 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_567_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_568_Cutline' }
	} 
	var q_569 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_569_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_570_Sayexcuseme' }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_571_Subjectstares' }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_572_Xstare' }
	} 
	var q_573 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Silvia\'s head.', 'Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_573_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_574_Dessertcrumble' }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_575_Baristaorders' }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_576_Lovejuice' }
	} 
	var q_577 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_577_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_578_END' }
	} 

    var betweenstory_579 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_580 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_580_BEGIN' }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_581_Cutline' }
	} 
	var q_582 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_582_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_583_Sayexcuseme' }
	} 
	var q_584 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_584_SayexcusemeSubjectstares_SayexcusemeShove_20_subject.violent_10' }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_585_Subjectstares' }
	} 
	var q_586 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_586_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_587_Xstare' }
	} 
	var q_588 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_588_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_589_Dessertcrumble' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_590_Callpoliceman' }
	} 
	var q_591 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_591_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_592_Hatecoffee' }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_593_END' }
	} 

    var betweenstory_594 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_595 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_595_BEGIN' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_596_Cutline' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_597_Sayexcuseme' }
	} 
	var q_598 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Silvia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_598_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_599_Shove' }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_600_Yell' }
	} 
	var q_601 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_601_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_602_Creamsplash' }
	} 
	var q_603 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_603_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_604_Callpoliceman' }
	} 
	var q_605 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_605_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_606_Lovejuice' }
	} 
	var q_607 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_607_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_608_END' }
	} 

    var betweenstory_609 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_610 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_610_BEGIN' }
	} 
	var q_611 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_611_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_612_Stepfoot' }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_613_Sayexcuseme' }
	} 
	var q_614 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_614_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_615_Shove' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_616_Xshove' }
	} 
	var q_617 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_617_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_618_Dessertcrumble' }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_619_Baristaorders' }
	} 
	var q_620 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_620_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_621_Lovejuice' }
	} 
	var q_622 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_622_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_623_END' }
	} 

    var betweenstory_624 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_625 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_625_BEGIN' }
	} 
	var q_626 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_626_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_627_Cutline' }
	} 
	var q_628 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_628_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_629_Sayexcuseme' }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_630_Shove' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_631_Yell' }
	} 
	var q_632 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_632_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_633_Creamsplash' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_634_Callpoliceman' }
	} 
	var q_635 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_635_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_636_Hatecoffee' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_637_END' }
	} 

    var betweenstory_638 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_639 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_639_BEGIN' }
	} 
	var q_640 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Jesse\'s foot.', 'Without hesitating he cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_640_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Jesse\'s foot.'],
		data: { state_info: 's_641_Stepfoot' }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_642_Sayexcuseme' }
	} 
	var q_643 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Ben proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_643_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_644_Subjectstares' }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_645_Yell' }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_646_Creamsplash' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_647_Callpoliceman' }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_648_Lovejuice' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_649_END' }
	} 

    var betweenstory_650 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_651 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_651_BEGIN' }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_652_Cutline' }
	} 
	var q_653 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Silvia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_653_CutlineSayexcuseme_CutlineCutback_20_victim.violent_10' }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_654_Sayexcuseme' }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ['Silvia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_655_Subjectstares' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_656_Yell' }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_657_Creamsplash' }
	} 
	var q_658 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_658_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_659_Callpoliceman' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_660_Hatecoffee' }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_661_END' }
	} 

    var betweenstory_662 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_663 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_663_BEGIN' }
	} 
	var q_664 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_664_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_665_Stepfoot' }
	} 
	var q_666 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_666_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_667_Sayexcuseme' }
	} 
	var q_668 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_668_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_669_Subjectstares' }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_670_Xstare' }
	} 
	var q_671 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Silvia\'s head.', 'Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_671_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_672_Dessertcrumble' }
	} 
	var q_673 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_673_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_default_01' }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_674_Callpoliceman' }
	} 
	var q_675 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_675_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_676_Hatecoffee' }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_677_END' }
	} 

    var betweenstory_678 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_679 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_679_BEGIN' }
	} 
	var q_680 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_680_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_681_Cutline' }
	} 
	var q_682 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_682_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_683_Cutback' }
	} 
	var q_684 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored him and proceeded to order a coffee.', 'Silvia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_684_CutbackIgnore_CutbackShove_80_subject.violent_01' }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_685_Ignore' }
	} 
	var q_686 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Silvia.', 'Jesse stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_686_IgnoreXshove_IgnoreXstare_80_victim.violent_01' }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.'],
		data: { state_info: 's_687_Xshove' }
	} 
	var q_688 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_688_XshoveCreamsplash_XshoveCreamsplash_100_permute_10' }
	} 
	var s_689 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_689_Creamsplash' }
	} 
	var q_690 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_690_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_691_Baristaorders' }
	} 
	var q_692 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_692_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_693_Lovejuice' }
	} 
	var q_694 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_694_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_695_END' }
	} 

    var betweenstory_696 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_697 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_697_BEGIN' }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_698_Stepfoot' }
	} 
	var q_699 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_699_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_700 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_700_Sayexcuseme' }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_701_Subjectstares' }
	} 
	var q_702 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_702_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_703_Xstare' }
	} 
	var q_704 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_704_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_705 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_705_Dessertcrumble' }
	} 
	var q_706 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_706_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_707_Baristaorders' }
	} 
	var s_708 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_708_Hatecoffee' }
	} 
	var s_709 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_709_END' }
	} 

    var betweenstory_710 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_711 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_711_BEGIN' }
	} 
	var s_712 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_712_Cutline' }
	} 
	var q_713 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_713_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_714_Sayexcuseme' }
	} 
	var q_715 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_715_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_716_Shove' }
	} 
	var s_717 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_717_Yell' }
	} 
	var s_718 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_718_Creamsplash' }
	} 
	var q_719 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_719_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_720_Baristaorders' }
	} 
	var q_721 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_721_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_722 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_722_Lovejuice' }
	} 
	var q_723 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_723_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_724_END' }
	} 

    var betweenstory_725 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,questions_begin_10,s_11,s_12,q_13,s_14,q_15,s_16,q_17,s_18,q_19,s_20,s_21,q_22,s_23,q_24,s_25,
betweenstory_26,s_27,q_28,s_29,s_30,s_31,s_32,q_33,s_34,q_35,s_36,s_37,q_38,s_39,
betweenstory_40,s_41,s_42,q_43,s_44,q_45,s_46,s_47,q_48,s_49,q_50,s_51,s_52,q_53,s_54,
betweenstory_55,s_56,q_57,s_58,q_59,s_60,q_61,s_62,q_63,s_64,s_65,s_66,s_67,q_68,s_69,
betweenstory_70,s_71,q_72,s_73,s_74,s_75,s_76,q_77,s_78,s_79,s_80,q_81,s_82,
betweenstory_83,s_84,q_85,s_86,s_87,q_88,s_89,q_90,s_91,q_92,s_93,s_94,s_95,s_96,
betweenstory_97,s_98,s_99,q_100,s_101,q_102,s_103,s_104,q_105,s_106,s_107,s_108,q_109,s_110,
betweenstory_111,s_112,q_113,s_114,q_115,s_116,q_117,s_118,q_119,s_120,q_121,s_122,q_123,s_124,q_125,s_126,q_127,s_128,
betweenstory_129,s_130,s_131,q_132,s_133,q_134,s_135,q_136,s_137,q_138,s_139,s_140,s_141,s_142,
betweenstory_143,s_144,q_145,s_146,q_147,s_148,s_149,s_150,q_151,s_152,s_153,q_154,s_155,q_156,s_157,
betweenstory_158,s_159,s_160,q_161,s_162,q_163,s_164,q_165,s_166,s_167,q_168,s_169,q_170,s_171,q_172,s_173,
betweenstory_174,s_175,s_176,s_177,s_178,q_179,s_180,q_181,s_182,q_183,s_184,q_185,s_186,s_187,
betweenstory_188,s_189,q_190,s_191,q_192,s_193,s_194,q_195,s_196,s_197,s_198,q_199,s_200,s_201,
betweenstory_202,s_203,q_204,s_205,q_206,s_207,s_208,q_209,s_210,s_211,q_212,s_213,s_214,s_215,
betweenstory_216,s_217,q_218,s_219,q_220,s_221,q_222,s_223,q_224,s_225,q_226,s_227,q_228,s_229,q_230,s_231,s_232,
betweenstory_233,s_234,s_235,q_236,s_237,q_238,s_239,q_240,s_241,q_242,s_243,q_244,s_245,q_246,s_247,s_248,
betweenstory_249,s_250,q_251,s_252,q_253,s_254,q_255,s_256,q_257,s_258,q_259,s_260,s_261,q_262,s_263,s_264,
betweenstory_265,s_266,q_267,s_268,s_269,s_270,s_271,q_272,s_273,q_274,s_275,s_276,q_277,s_278,
betweenstory_279,s_280,s_281,s_282,q_283,s_284,s_285,q_286,s_287,s_288,q_289,s_290,q_291,s_292,
betweenstory_293,s_294,q_295,s_296,q_297,s_298,q_299,s_300,q_301,s_302,s_303,q_304,s_305,q_306,s_307,s_308,
betweenstory_309,s_310,s_311,s_312,q_313,s_314,q_315,s_316,q_317,s_318,s_319,q_320,s_321,q_322,s_323,
betweenstory_324,s_325,s_326,q_327,s_328,q_329,s_330,q_331,s_332,q_333,s_334,s_335,s_336,s_337,
betweenstory_338,s_339,s_340,s_341,q_342,s_343,s_344,q_345,s_346,s_347,s_348,s_349,
betweenstory_350,s_351,s_352,q_353,s_354,s_355,q_356,s_357,q_358,s_359,q_360,s_361,s_362,q_363,s_364,
betweenstory_365,s_366,q_367,s_368,s_369,s_370,q_371,s_372,q_373,s_374,q_375,s_376,s_377,s_378,
betweenstory_379,s_380,s_381,q_382,s_383,q_384,s_385,s_386,q_387,s_388,q_389,s_390,s_391,q_392,s_393,
betweenstory_394,s_395,s_396,s_397,q_398,s_399,s_400,s_401,q_402,s_403,q_404,s_405,s_406,
betweenstory_407,s_408,s_409,q_410,s_411,s_412,q_413,s_414,s_415,q_416,s_417,s_418,s_419,
betweenstory_420,s_421,q_422,s_423,q_424,s_425,s_426,s_427,q_428,s_429,q_430,s_431,s_432,s_433,
betweenstory_434,s_435,s_436,s_437,q_438,s_439,q_440,s_441,q_442,s_443,s_444,s_445,q_446,s_447,
betweenstory_448,s_449,q_450,s_451,q_452,s_453,s_454,s_455,q_456,s_457,q_458,s_459,q_460,s_461,q_462,s_463,
betweenstory_464,s_465,s_466,q_467,s_468,q_469,s_470,q_471,s_472,s_473,q_474,s_475,q_476,s_477,s_478,
betweenstory_479,s_480,q_481,s_482,q_483,s_484,s_485,q_486,s_487,q_488,s_489,s_490,q_491,s_492,q_493,s_494,
betweenstory_495,s_496,q_497,s_498,q_499,s_500,q_501,s_502,s_503,s_504,s_505,s_506,q_507,s_508,
betweenstory_509,s_510,s_511,s_512,s_513,s_514,q_515,s_516,q_517,s_518,s_519,q_520,s_521,
betweenstory_522,s_523,s_524,q_525,s_526,q_527,s_528,s_529,q_530,s_531,s_532,q_533,s_534,s_535,
betweenstory_536,s_537,q_538,s_539,q_540,s_541,s_542,q_543,s_544,q_545,s_546,s_547,q_548,s_549,q_550,s_551,
betweenstory_552,s_553,s_554,s_555,s_556,s_557,q_558,s_559,q_560,s_561,s_562,q_563,s_564,
betweenstory_565,s_566,q_567,s_568,q_569,s_570,s_571,s_572,q_573,s_574,s_575,s_576,q_577,s_578,
betweenstory_579,s_580,s_581,q_582,s_583,q_584,s_585,q_586,s_587,q_588,s_589,s_590,q_591,s_592,s_593,
betweenstory_594,s_595,s_596,s_597,q_598,s_599,s_600,q_601,s_602,q_603,s_604,q_605,s_606,q_607,s_608,
betweenstory_609,s_610,q_611,s_612,s_613,q_614,s_615,s_616,q_617,s_618,s_619,q_620,s_621,q_622,s_623,
betweenstory_624,s_625,q_626,s_627,q_628,s_629,s_630,s_631,q_632,s_633,s_634,q_635,s_636,s_637,
betweenstory_638,s_639,q_640,s_641,s_642,q_643,s_644,s_645,s_646,s_647,s_648,s_649,
betweenstory_650,s_651,s_652,q_653,s_654,s_655,s_656,s_657,q_658,s_659,s_660,s_661,
betweenstory_662,s_663,q_664,s_665,q_666,s_667,q_668,s_669,s_670,q_671,s_672,q_673,s_674,q_675,s_676,s_677,
betweenstory_678,s_679,q_680,s_681,q_682,s_683,q_684,s_685,q_686,s_687,q_688,s_689,q_690,s_691,q_692,s_693,q_694,s_695,
betweenstory_696,s_697,s_698,q_699,s_700,s_701,q_702,s_703,q_704,s_705,q_706,s_707,s_708,s_709,
betweenstory_710,s_711,s_712,q_713,s_714,q_715,s_716,s_717,s_718,q_719,s_720,q_721,s_722,q_723,s_724,
betweenstory_725,],

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

