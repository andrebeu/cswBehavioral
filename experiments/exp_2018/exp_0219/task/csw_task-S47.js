

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
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_13_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_14_Sayexcuseme' }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_15_Subjectstares' }
	} 
	var q_16 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Ben\'s eyes.', 'Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_16_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_10' }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_17_Yell' }
	} 
	var q_18 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_18_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_19_Creamsplash' }
	} 
	var q_20 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_20_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_21_Baristaorders' }
	} 
	var q_22 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_22_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_23_Lovejuice' }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_24_END' }
	} 

    var betweenstory_25 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_26 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_26_BEGIN' }
	} 
	var q_27 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_27_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_28_Stepfoot' }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_29_Sayexcuseme' }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_30_Shove' }
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
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_34_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_35_Callpoliceman' }
	} 
	var q_36 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_36_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_37_Hatecoffee' }
	} 
	var q_38 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
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
	var q_42 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_42_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_43_Cutline' }
	} 
	var q_44 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_44_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_45_Sayexcuseme' }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_46_Shove' }
	} 
	var q_47 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_47_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_48_Yell' }
	} 
	var q_49 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_49_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_50_Creamsplash' }
	} 
	var q_51 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_51_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_52_Callpoliceman' }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_53_Hatecoffee' }
	} 
	var q_54 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_54_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_55_END' }
	} 

    var betweenstory_56 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_57 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_57_BEGIN' }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_58_Stepfoot' }
	} 
	var q_59 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_59_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_60_Sayexcuseme' }
	} 
	var q_61 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_61_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
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
	var q_64 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_64_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_65_Creamsplash' }
	} 
	var q_66 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_66_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_67_Callpoliceman' }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_68_Hatecoffee' }
	} 
	var q_69 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_69_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_70_END' }
	} 

    var betweenstory_71 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_72 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_72_BEGIN' }
	} 
	var q_73 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_73_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_74_Stepfoot' }
	} 
	var q_75 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_75_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_76_Sayexcuseme' }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_77_Shove' }
	} 
	var q_78 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_78_ShoveYell_ShoveXshove_20_victim.violent_10' }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_79_Yell' }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_80_Creamsplash' }
	} 
	var q_81 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_81_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_82_Callpoliceman' }
	} 
	var q_83 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_83_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_84_Hatecoffee' }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_85_END' }
	} 

    var betweenstory_86 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_87 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_87_BEGIN' }
	} 
	var q_88 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_88_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_89_Cutline' }
	} 
	var q_90 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_90_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_91_Cutback' }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_92_Shove' }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_93_Yell' }
	} 
	var q_94 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_94_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_95_Creamsplash' }
	} 
	var q_96 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_96_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_97_Callpoliceman' }
	} 
	var q_98 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_98_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_99_Hatecoffee' }
	} 
	var q_100 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_100_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
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
	var q_104 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_104_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_105_Stepfoot' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_106_Sayexcuseme' }
	} 
	var q_107 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Olivia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_107_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_108_Shove' }
	} 
	var q_109 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_109_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_110_Xshove' }
	} 
	var q_111 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Olivia\'s head.', 'Olivia snatched a cake and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_111_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_112_Dessertcrumble' }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_113_Baristaorders' }
	} 
	var q_114 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_114_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_115_Lovejuice' }
	} 
	var q_116 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_116_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_117_END' }
	} 

    var betweenstory_118 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_119 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_119_BEGIN' }
	} 
	var q_120 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_120_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_121_Cutline' }
	} 
	var q_122 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_122_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_123_Cutback' }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_124_Ignore' }
	} 
	var q_125 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'Olivia stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_125_IgnoreXstare_IgnoreXshove_20_victim.violent_10' }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_126_Xstare' }
	} 
	var q_127 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Silvia\'s head.', 'Silvia snatched a cake and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_127_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_128_Dessertcrumble' }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_129_Baristaorders' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_130_Lovejuice' }
	} 
	var q_131 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_131_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_132_END' }
	} 

    var betweenstory_133 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_134 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_134_BEGIN' }
	} 
	var q_135 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_135_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_136_Cutline' }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_137_Cutback' }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_138_Shove' }
	} 
	var q_139 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_139_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_140_Yell' }
	} 
	var q_141 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_141_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_142_Creamsplash' }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_143_Callpoliceman' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_144_Hatecoffee' }
	} 
	var q_145 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_145_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_146_END' }
	} 

    var betweenstory_147 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_148 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_148_BEGIN' }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_149_Stepfoot' }
	} 
	var q_150 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_150_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_151_Sayexcuseme' }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_152_Shove' }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_153_Yell' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_154_Creamsplash' }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_155_Callpoliceman' }
	} 
	var q_156 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_156_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_157_Hatecoffee' }
	} 
	var q_158 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_158_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_159_END' }
	} 

    var betweenstory_160 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_161 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_161_BEGIN' }
	} 
	var q_162 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_162_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_163_Stepfoot' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_164_Sayexcuseme' }
	} 
	var q_165 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben turned to Olivia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_165_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_01' }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_166_Shove' }
	} 
	var q_167 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_167_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_168_Xshove' }
	} 
	var q_169 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_169_XshoveCreamsplash_XshoveCreamsplash_100_permute_01' }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_170_Creamsplash' }
	} 
	var q_171 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_171_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_172_Callpoliceman' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_173_Hatecoffee' }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_174_END' }
	} 

    var betweenstory_175 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_176 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_176_BEGIN' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_177_Cutline' }
	} 
	var q_178 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_178_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_179_Cutback' }
	} 
	var q_180 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored her and proceeded to order a latte.', 'Silvia proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_180_CutbackIgnore_CutbackShove_80_subject.violent_01' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a latte.'],
		data: { state_info: 's_181_Ignore' }
	} 
	var q_182 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Silvia\'s eyes.', 'In retaliation, Olivia pushed Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_182_IgnoreXshove_IgnoreXstare_80_victim.violent_10' }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 's_183_Xshove' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_184_Creamsplash' }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_185_Callpoliceman' }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_186_Hatecoffee' }
	} 
	var q_187 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_187_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_188_END' }
	} 

    var betweenstory_189 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_190 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_190_BEGIN' }
	} 
	var q_191 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_191_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 's_192_Stepfoot' }
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
	var s_195 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_195_Yell' }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_196_Creamsplash' }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_197_Callpoliceman' }
	} 
	var q_198 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_198_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_199_Hatecoffee' }
	} 
	var q_200 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_200_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
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
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_206_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_207_Cutback' }
	} 
	var q_208 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a coffee.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_208_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_209_Shove' }
	} 
	var q_210 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_210_ShoveXshove_ShoveYell_80_victim.violent_10' }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_211_Xshove' }
	} 
	var q_212 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Olivia\'s head.', 'Olivia snatched a cake and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_212_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_213_Dessertcrumble' }
	} 
	var q_214 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_214_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_215_Baristaorders' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_216_Lovejuice' }
	} 
	var q_217 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_217_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_221_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_222_Cutline' }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_223_Sayexcuseme' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_224_Subjectstares' }
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
	var s_228 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_228_Callpoliceman' }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_229_Hatecoffee' }
	} 
	var q_230 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_230_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_231_END' }
	} 

    var betweenstory_232 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_233 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_233_BEGIN' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_234_Cutline' }
	} 
	var q_235 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_235_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_236_Cutback' }
	} 
	var q_237 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben ignored her and proceeded to order a mocha.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_237_CutbackIgnore_CutbackShove_80_subject.violent_01' }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['Ben ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_238_Ignore' }
	} 
	var q_239 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_239_IgnoreXshove_IgnoreXstare_80_victim.violent_01' }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_240_Xshove' }
	} 
	var q_241 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_241_XshoveCreamsplash_XshoveCreamsplash_100_permute_01' }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_242_Creamsplash' }
	} 
	var q_243 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_243_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_244_Callpoliceman' }
	} 
	var q_245 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_245_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_246_Lovejuice' }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_247_END' }
	} 

    var betweenstory_248 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_249 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_249_BEGIN' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_250_Cutline' }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_251_Cutback' }
	} 
	var q_252 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a latte.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_252_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_253_Shove' }
	} 
	var q_254 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_254_ShoveYell_ShoveXshove_20_victim.violent_01' }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_255_Yell' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_256_Creamsplash' }
	} 
	var q_257 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_257_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_258_Callpoliceman' }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_259_Hatecoffee' }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_260_END' }
	} 

    var betweenstory_261 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_262 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_262_BEGIN' }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_263_Cutline' }
	} 
	var q_264 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_264_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_265_Sayexcuseme' }
	} 
	var q_266 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_266_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_267_Shove' }
	} 
	var q_268 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_268_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_269_Yell' }
	} 
	var q_270 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_270_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_271_Creamsplash' }
	} 
	var q_272 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_272_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_273_Callpoliceman' }
	} 
	var q_274 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_274_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_275_Hatecoffee' }
	} 
	var q_276 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_276_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_277_END' }
	} 

    var betweenstory_278 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_279 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_279_BEGIN' }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_280_Stepfoot' }
	} 
	var q_281 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_281_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_282_Sayexcuseme' }
	} 
	var q_283 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_283_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_284_Shove' }
	} 
	var q_285 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Olivia.', 'Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_285_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_286_Yell' }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_287_Creamsplash' }
	} 
	var q_288 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_288_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_01' }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_289_Baristaorders' }
	} 
	var q_290 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_290_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_291_Lovejuice' }
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
	var s_299 = {
		type: 'instructions',
		pages: ['Jesse turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_299_Subjectstares' }
	} 
	var q_300 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'Olivia stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_300_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_01' }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_301_Yell' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_302_Creamsplash' }
	} 
	var q_303 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_303_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_304_Callpoliceman' }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_305_Hatecoffee' }
	} 
	var q_306 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_306_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_310_Cutline' }
	} 
	var q_311 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_311_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_312_Sayexcuseme' }
	} 
	var q_313 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_313_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_314_Subjectstares' }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_315_Xstare' }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_316_Dessertcrumble' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_317_Baristaorders' }
	} 
	var q_318 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_318_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_319_Lovejuice' }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_320_END' }
	} 

    var betweenstory_321 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_322 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_322_BEGIN' }
	} 
	var q_323 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_323_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_324_Stepfoot' }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_325_Sayexcuseme' }
	} 
	var q_326 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_326_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_327_Subjectstares' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_328_Yell' }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_329_Creamsplash' }
	} 
	var q_330 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_330_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_331_Baristaorders' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_332_Lovejuice' }
	} 
	var q_333 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_333_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_334_END' }
	} 

    var betweenstory_335 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_336 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_336_BEGIN' }
	} 
	var q_337 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Silvia\'s foot.', 'Without hesitating she cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_337_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_338_Stepfoot' }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_339_Sayexcuseme' }
	} 
	var q_340 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Olivia turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_340_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_341_Shove' }
	} 
	var q_342 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_342_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_343_Yell' }
	} 
	var q_344 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_344_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_345_Creamsplash' }
	} 
	var q_346 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_346_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_347_Callpoliceman' }
	} 
	var q_348 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_348_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_349_Lovejuice' }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_350_END' }
	} 

    var betweenstory_351 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_352 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_352_BEGIN' }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_353_Cutline' }
	} 
	var q_354 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_354_CutlineSayexcuseme_CutlineCutback_20_victim.violent_01' }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_355_Sayexcuseme' }
	} 
	var q_356 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_356_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_10' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_357_Shove' }
	} 
	var q_358 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_358_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_359_Xshove' }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_360_Creamsplash' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_361_Callpoliceman' }
	} 
	var q_362 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_362_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_363_Hatecoffee' }
	} 
	var q_364 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_364_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_365_END' }
	} 

    var betweenstory_366 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_367 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_367_BEGIN' }
	} 
	var q_368 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_368_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_369_Cutline' }
	} 
	var q_370 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_370_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_371_Sayexcuseme' }
	} 
	var q_372 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_372_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_373_Shove' }
	} 
	var q_374 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_374_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_375_Yell' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_376_Creamsplash' }
	} 
	var q_377 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_377_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_378_Callpoliceman' }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_379_Hatecoffee' }
	} 
	var q_380 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_380_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_381_END' }
	} 

    var betweenstory_382 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_383 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_383_BEGIN' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_384_Cutline' }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_385_Sayexcuseme' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_386_Subjectstares' }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_387_Yell' }
	} 
	var q_388 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_388_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_389_Creamsplash' }
	} 
	var q_390 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_390_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_01' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_391_Baristaorders' }
	} 
	var q_392 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_392_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_393_Lovejuice' }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_394_END' }
	} 

    var betweenstory_395 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_396 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_396_BEGIN' }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_397_Stepfoot' }
	} 
	var q_398 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_398_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_399_Sayexcuseme' }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_400_Subjectstares' }
	} 
	var q_401 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_401_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_402_Xstare' }
	} 
	var q_403 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Jesse\'s head.', 'Jesse snatched a cake and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_403_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_404_Dessertcrumble' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_405_Baristaorders' }
	} 
	var q_406 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_406_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_01' }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_407_Hatecoffee' }
	} 
	var q_408 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_408_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
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
	var q_412 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_412_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_413_Cutline' }
	} 
	var q_414 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Olivia.', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_414_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_415_Sayexcuseme' }
	} 
	var q_416 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_416_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_417_Shove' }
	} 
	var q_418 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_418_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_419_Yell' }
	} 
	var q_420 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_420_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_421_Creamsplash' }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_422_Callpoliceman' }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_423_Lovejuice' }
	} 
	var q_424 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_424_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_425_END' }
	} 

    var betweenstory_426 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_427 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_427_BEGIN' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_428_Stepfoot' }
	} 
	var q_429 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_429_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_430_Sayexcuseme' }
	} 
	var q_431 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_431_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_432_Shove' }
	} 
	var q_433 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_433_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_434_Yell' }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_435_Creamsplash' }
	} 
	var q_436 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_436_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_437_Callpoliceman' }
	} 
	var q_438 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_438_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_439_Hatecoffee' }
	} 
	var q_440 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_440_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_441_END' }
	} 

    var betweenstory_442 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_443 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_443_BEGIN' }
	} 
	var q_444 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_444_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_445_Cutline' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_446_Sayexcuseme' }
	} 
	var q_447 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_447_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_448_Shove' }
	} 
	var q_449 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_449_ShoveXshove_ShoveYell_20_victim.violent_10' }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Olivia.'],
		data: { state_info: 's_450_Xshove' }
	} 
	var q_451 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cookie and crumbled it above Ben\'s head.', 'Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_451_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_452_Dessertcrumble' }
	} 
	var q_453 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_453_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_454_Baristaorders' }
	} 
	var q_455 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_455_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_456_Lovejuice' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_457_END' }
	} 

    var betweenstory_458 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_459 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_459_BEGIN' }
	} 
	var q_460 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_460_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_461_Stepfoot' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_462_Sayexcuseme' }
	} 
	var q_463 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_463_SayexcusemeSubjectstares_SayexcusemeShove_20_subject.violent_10' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_464_Subjectstares' }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_465_Yell' }
	} 
	var q_466 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_466_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_467_Creamsplash' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_468_Callpoliceman' }
	} 
	var q_469 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_469_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_470_Hatecoffee' }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_471_END' }
	} 

    var betweenstory_472 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_473 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_473_BEGIN' }
	} 
	var q_474 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_474_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_475_Cutline' }
	} 
	var q_476 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_476_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_477_Cutback' }
	} 
	var q_478 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a mocha.', 'Olivia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_478_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_479_Shove' }
	} 
	var q_480 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_480_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_481_Xshove' }
	} 
	var q_482 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_482_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_10' }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_483_Dessertcrumble' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_484_Baristaorders' }
	} 
	var q_485 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_485_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_486_Lovejuice' }
	} 
	var q_487 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_487_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_488_END' }
	} 

    var betweenstory_489 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_490 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_490_BEGIN' }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_491_Stepfoot' }
	} 
	var q_492 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_492_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_493_Sayexcuseme' }
	} 
	var q_494 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Silvia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_494_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_495_Shove' }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_496_Yell' }
	} 
	var q_497 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_497_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_498_Creamsplash' }
	} 
	var q_499 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_499_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_500_Callpoliceman' }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_501_Lovejuice' }
	} 
	var q_502 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_502_LovejuiceEND_LovejuiceEND_100_alter_01' }
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
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_505_BEGIN' }
	} 
	var q_506 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_506_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_507_Cutline' }
	} 
	var q_508 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_508_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_509_Sayexcuseme' }
	} 
	var q_510 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_510_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_511_Shove' }
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_512_Yell' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_513_Creamsplash' }
	} 
	var q_514 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_514_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_01' }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_515_Baristaorders' }
	} 
	var q_516 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_516_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_517 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_517_Lovejuice' }
	} 
	var q_518 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_518_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_522_Cutline' }
	} 
	var q_523 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_523_CutlineCutback_CutlineSayexcuseme_20_victim.violent_10' }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_524_Cutback' }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_525_Shove' }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_526_Yell' }
	} 
	var q_527 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_527_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_528_Creamsplash' }
	} 
	var q_529 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_529_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_530_Callpoliceman' }
	} 
	var q_531 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_531_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_532_Hatecoffee' }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_533_END' }
	} 

    var betweenstory_534 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_535 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_535_BEGIN' }
	} 
	var q_536 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_536_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_537_Stepfoot' }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_538_Sayexcuseme' }
	} 
	var q_539 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Ben turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_539_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_540_Subjectstares' }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_541_Xstare' }
	} 
	var q_542 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.', 'Silvia snatched a lemonsquare and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_542_XstareDessertcrumble_XstareDessertcrumble_100_permute_01' }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_543_Dessertcrumble' }
	} 
	var q_544 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_544_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_545_Baristaorders' }
	} 
	var q_546 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_546_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_547_Lovejuice' }
	} 
	var q_548 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_548_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_549_END' }
	} 

    var betweenstory_550 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_551 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_551_BEGIN' }
	} 
	var q_552 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_552_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_553_Cutline' }
	} 
	var q_554 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Silvia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_554_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_555_Cutback' }
	} 
	var q_556 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored him and proceeded to order a coffee.', 'Silvia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_556_CutbackIgnore_CutbackShove_80_subject.violent_01' }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_557_Ignore' }
	} 
	var q_558 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'In retaliation, Jesse pushed Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_558_IgnoreXshove_IgnoreXstare_80_victim.violent_10' }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.'],
		data: { state_info: 's_559_Xshove' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_560_Creamsplash' }
	} 
	var q_561 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_561_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_562_Callpoliceman' }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_563_Hatecoffee' }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
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
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_567_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_568_Stepfoot' }
	} 
	var q_569 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_569_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
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
	var q_572 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_572_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_573_Xstare' }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_574_Dessertcrumble' }
	} 
	var q_575 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_575_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_576_Baristaorders' }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_577_Hatecoffee' }
	} 
	var q_578 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_578_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_579_END' }
	} 

    var betweenstory_580 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_581 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_581_BEGIN' }
	} 
	var q_582 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_582_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_583_Cutline' }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_584_Sayexcuseme' }
	} 
	var q_585 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_585_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_586_Subjectstares' }
	} 
	var q_587 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_587_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_588_Xstare' }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_589_Dessertcrumble' }
	} 
	var q_590 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_590_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_591_Baristaorders' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_592_Lovejuice' }
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
	var q_596 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_596_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_597_Cutline' }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_598_Sayexcuseme' }
	} 
	var q_599 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_599_SayexcusemeSubjectstares_SayexcusemeShove_20_subject.violent_10' }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_600_Subjectstares' }
	} 
	var q_601 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_601_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_602_Xstare' }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_603_Dessertcrumble' }
	} 
	var q_604 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_604_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_default_01' }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_605_Callpoliceman' }
	} 
	var q_606 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_606_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_607_Hatecoffee' }
	} 
	var q_608 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_608_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_609_END' }
	} 

    var betweenstory_610 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_611 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_611_BEGIN' }
	} 
	var q_612 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_612_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_613_Cutline' }
	} 
	var q_614 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Jesse.', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_614_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_615_Sayexcuseme' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_616_Shove' }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_617_Yell' }
	} 
	var q_618 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_618_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_619_Creamsplash' }
	} 
	var q_620 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_620_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_621_Callpoliceman' }
	} 
	var q_622 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_622_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_623_Lovejuice' }
	} 
	var q_624 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_624_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_625_END' }
	} 

    var betweenstory_626 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_627 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_627_BEGIN' }
	} 
	var q_628 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_628_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_629_Stepfoot' }
	} 
	var q_630 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_630_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_631_Sayexcuseme' }
	} 
	var q_632 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_632_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_633_Shove' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_634_Xshove' }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_635_Dessertcrumble' }
	} 
	var q_636 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_636_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_637_Baristaorders' }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_638_Lovejuice' }
	} 
	var q_639 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_639_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_640_END' }
	} 

    var betweenstory_641 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_642 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_642_BEGIN' }
	} 
	var s_643 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_643_Cutline' }
	} 
	var q_644 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_644_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_645_Sayexcuseme' }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_646_Shove' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_647_Yell' }
	} 
	var q_648 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_648_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_649_Creamsplash' }
	} 
	var q_650 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_650_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_651_Callpoliceman' }
	} 
	var q_652 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_652_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_653_Hatecoffee' }
	} 
	var q_654 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_654_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_655_END' }
	} 

    var betweenstory_656 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_657 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_657_BEGIN' }
	} 
	var q_658 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Jesse\'s foot.', 'Without hesitating he cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_658_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Jesse\'s foot.'],
		data: { state_info: 's_659_Stepfoot' }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_660_Sayexcuseme' }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_661_Subjectstares' }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_662_Yell' }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_663_Creamsplash' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_664_Callpoliceman' }
	} 
	var q_665 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_665_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_01' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_666_Lovejuice' }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_667_END' }
	} 

    var betweenstory_668 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_669 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_669_BEGIN' }
	} 
	var q_670 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_670_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_671_Cutline' }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_672_Sayexcuseme' }
	} 
	var q_673 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Jesse and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_673_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['Silvia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_674_Subjectstares' }
	} 
	var q_675 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'Jesse yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_675_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_10' }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_676_Yell' }
	} 
	var q_677 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_677_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_678_Creamsplash' }
	} 
	var q_679 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_679_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_680_Callpoliceman' }
	} 
	var q_681 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_681_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_682 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_682_Hatecoffee' }
	} 
	var q_683 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_683_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_684_END' }
	} 

    var betweenstory_685 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_686 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_686_BEGIN' }
	} 
	var q_687 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_687_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_688_Stepfoot' }
	} 
	var s_689 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_689_Sayexcuseme' }
	} 
	var q_690 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_690_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_691_Subjectstares' }
	} 
	var s_692 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_692_Xstare' }
	} 
	var q_693 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Silvia\'s head.', 'Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_693_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_694_Dessertcrumble' }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_695_Callpoliceman' }
	} 
	var q_696 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_696_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_697 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_697_Hatecoffee' }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_698_END' }
	} 

    var betweenstory_699 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_700 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_700_BEGIN' }
	} 
	var q_701 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_701_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_702_Cutline' }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_703_Cutback' }
	} 
	var s_704 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_704_Ignore' }
	} 
	var q_705 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Silvia.', 'Jesse stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_705_IgnoreXshove_IgnoreXstare_80_victim.violent_01' }
	} 
	var s_706 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.'],
		data: { state_info: 's_706_Xshove' }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_707_Creamsplash' }
	} 
	var q_708 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_708_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_709 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_709_Baristaorders' }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_710_Lovejuice' }
	} 
	var q_711 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_711_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_712 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_712_END' }
	} 

    var betweenstory_713 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_714 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_714_BEGIN' }
	} 
	var q_715 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_715_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_716_Stepfoot' }
	} 
	var s_717 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_717_Sayexcuseme' }
	} 
	var s_718 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_718_Subjectstares' }
	} 
	var q_719 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_719_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_720_Xstare' }
	} 
	var s_721 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_721_Dessertcrumble' }
	} 
	var q_722 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_722_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_723 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_723_Baristaorders' }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_724_Hatecoffee' }
	} 
	var q_725 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_725_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_726 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_726_END' }
	} 

    var betweenstory_727 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_728 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_728_BEGIN' }
	} 
	var q_729 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_729_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_730 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_730_Cutline' }
	} 
	var q_731 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_731_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_732 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_732_Sayexcuseme' }
	} 
	var s_733 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_733_Shove' }
	} 
	var q_734 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_734_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_735_Yell' }
	} 
	var s_736 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_736_Creamsplash' }
	} 
	var s_737 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_737_Baristaorders' }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_738_Lovejuice' }
	} 
	var q_739 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_739_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_740_END' }
	} 

    var betweenstory_741 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,questions_begin_10,s_11,s_12,q_13,s_14,s_15,q_16,s_17,q_18,s_19,q_20,s_21,q_22,s_23,s_24,
betweenstory_25,s_26,q_27,s_28,s_29,s_30,s_31,q_32,s_33,q_34,s_35,q_36,s_37,q_38,s_39,
betweenstory_40,s_41,q_42,s_43,q_44,s_45,s_46,q_47,s_48,q_49,s_50,q_51,s_52,s_53,q_54,s_55,
betweenstory_56,s_57,s_58,q_59,s_60,q_61,s_62,s_63,q_64,s_65,q_66,s_67,s_68,q_69,s_70,
betweenstory_71,s_72,q_73,s_74,q_75,s_76,s_77,q_78,s_79,s_80,q_81,s_82,q_83,s_84,s_85,
betweenstory_86,s_87,q_88,s_89,q_90,s_91,s_92,s_93,q_94,s_95,q_96,s_97,q_98,s_99,q_100,s_101,
betweenstory_102,s_103,q_104,s_105,s_106,q_107,s_108,q_109,s_110,q_111,s_112,s_113,q_114,s_115,q_116,s_117,
betweenstory_118,s_119,q_120,s_121,q_122,s_123,s_124,q_125,s_126,q_127,s_128,s_129,s_130,q_131,s_132,
betweenstory_133,s_134,q_135,s_136,s_137,s_138,q_139,s_140,q_141,s_142,s_143,s_144,q_145,s_146,
betweenstory_147,s_148,s_149,q_150,s_151,s_152,s_153,s_154,s_155,q_156,s_157,q_158,s_159,
betweenstory_160,s_161,q_162,s_163,s_164,q_165,s_166,q_167,s_168,q_169,s_170,q_171,s_172,s_173,s_174,
betweenstory_175,s_176,s_177,q_178,s_179,q_180,s_181,q_182,s_183,s_184,s_185,s_186,q_187,s_188,
betweenstory_189,s_190,q_191,s_192,s_193,s_194,s_195,s_196,s_197,q_198,s_199,q_200,s_201,
betweenstory_202,s_203,q_204,s_205,q_206,s_207,q_208,s_209,q_210,s_211,q_212,s_213,q_214,s_215,s_216,q_217,s_218,
betweenstory_219,s_220,q_221,s_222,s_223,s_224,s_225,q_226,s_227,s_228,s_229,q_230,s_231,
betweenstory_232,s_233,s_234,q_235,s_236,q_237,s_238,q_239,s_240,q_241,s_242,q_243,s_244,q_245,s_246,s_247,
betweenstory_248,s_249,s_250,s_251,q_252,s_253,q_254,s_255,s_256,q_257,s_258,s_259,s_260,
betweenstory_261,s_262,s_263,q_264,s_265,q_266,s_267,q_268,s_269,q_270,s_271,q_272,s_273,q_274,s_275,q_276,s_277,
betweenstory_278,s_279,s_280,q_281,s_282,q_283,s_284,q_285,s_286,s_287,q_288,s_289,q_290,s_291,s_292,
betweenstory_293,s_294,q_295,s_296,q_297,s_298,s_299,q_300,s_301,s_302,q_303,s_304,s_305,q_306,s_307,
betweenstory_308,s_309,s_310,q_311,s_312,q_313,s_314,s_315,s_316,s_317,q_318,s_319,s_320,
betweenstory_321,s_322,q_323,s_324,s_325,q_326,s_327,s_328,s_329,q_330,s_331,s_332,q_333,s_334,
betweenstory_335,s_336,q_337,s_338,s_339,q_340,s_341,q_342,s_343,q_344,s_345,q_346,s_347,q_348,s_349,s_350,
betweenstory_351,s_352,s_353,q_354,s_355,q_356,s_357,q_358,s_359,s_360,s_361,q_362,s_363,q_364,s_365,
betweenstory_366,s_367,q_368,s_369,q_370,s_371,q_372,s_373,q_374,s_375,s_376,q_377,s_378,s_379,q_380,s_381,
betweenstory_382,s_383,s_384,s_385,s_386,s_387,q_388,s_389,q_390,s_391,q_392,s_393,s_394,
betweenstory_395,s_396,s_397,q_398,s_399,s_400,q_401,s_402,q_403,s_404,s_405,q_406,s_407,q_408,s_409,
betweenstory_410,s_411,q_412,s_413,q_414,s_415,q_416,s_417,q_418,s_419,q_420,s_421,s_422,s_423,q_424,s_425,
betweenstory_426,s_427,s_428,q_429,s_430,q_431,s_432,q_433,s_434,s_435,q_436,s_437,q_438,s_439,q_440,s_441,
betweenstory_442,s_443,q_444,s_445,s_446,q_447,s_448,q_449,s_450,q_451,s_452,q_453,s_454,q_455,s_456,s_457,
betweenstory_458,s_459,q_460,s_461,s_462,q_463,s_464,s_465,q_466,s_467,s_468,q_469,s_470,s_471,
betweenstory_472,s_473,q_474,s_475,q_476,s_477,q_478,s_479,q_480,s_481,q_482,s_483,s_484,q_485,s_486,q_487,s_488,
betweenstory_489,s_490,s_491,q_492,s_493,q_494,s_495,s_496,q_497,s_498,q_499,s_500,s_501,q_502,s_503,
betweenstory_504,s_505,q_506,s_507,q_508,s_509,q_510,s_511,s_512,s_513,q_514,s_515,q_516,s_517,q_518,s_519,
betweenstory_520,s_521,s_522,q_523,s_524,s_525,s_526,q_527,s_528,q_529,s_530,q_531,s_532,s_533,
betweenstory_534,s_535,q_536,s_537,s_538,q_539,s_540,s_541,q_542,s_543,q_544,s_545,q_546,s_547,q_548,s_549,
betweenstory_550,s_551,q_552,s_553,q_554,s_555,q_556,s_557,q_558,s_559,s_560,q_561,s_562,s_563,s_564,
betweenstory_565,s_566,q_567,s_568,q_569,s_570,s_571,q_572,s_573,s_574,q_575,s_576,s_577,q_578,s_579,
betweenstory_580,s_581,q_582,s_583,s_584,q_585,s_586,q_587,s_588,s_589,q_590,s_591,s_592,s_593,
betweenstory_594,s_595,q_596,s_597,s_598,q_599,s_600,q_601,s_602,s_603,q_604,s_605,q_606,s_607,q_608,s_609,
betweenstory_610,s_611,q_612,s_613,q_614,s_615,s_616,s_617,q_618,s_619,q_620,s_621,q_622,s_623,q_624,s_625,
betweenstory_626,s_627,q_628,s_629,q_630,s_631,q_632,s_633,s_634,s_635,q_636,s_637,s_638,q_639,s_640,
betweenstory_641,s_642,s_643,q_644,s_645,s_646,s_647,q_648,s_649,q_650,s_651,q_652,s_653,q_654,s_655,
betweenstory_656,s_657,q_658,s_659,s_660,s_661,s_662,s_663,s_664,q_665,s_666,s_667,
betweenstory_668,s_669,q_670,s_671,s_672,q_673,s_674,q_675,s_676,q_677,s_678,q_679,s_680,q_681,s_682,q_683,s_684,
betweenstory_685,s_686,q_687,s_688,s_689,q_690,s_691,s_692,q_693,s_694,s_695,q_696,s_697,s_698,
betweenstory_699,s_700,q_701,s_702,s_703,s_704,q_705,s_706,s_707,q_708,s_709,s_710,q_711,s_712,
betweenstory_713,s_714,q_715,s_716,s_717,s_718,q_719,s_720,s_721,q_722,s_723,s_724,q_725,s_726,
betweenstory_727,s_728,q_729,s_730,q_731,s_732,s_733,q_734,s_735,s_736,s_737,s_738,q_739,s_740,
betweenstory_741,],

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

