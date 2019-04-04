

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
	var q_12 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_12_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_13_Cutline' }
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
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_16_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_01' }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_17_Yell' }
	} 
	var q_18 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_18_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_19_Creamsplash' }
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
	var q_23 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_23_LovejuiceEND_LovejuiceEND_100_alter_01' }
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
	var s_27 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_27_Stepfoot' }
	} 
	var q_28 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_28_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_29_Sayexcuseme' }
	} 
	var q_30 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_30_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_01' }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_31_Shove' }
	} 
	var q_32 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Silvia.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_32_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_33_Yell' }
	} 
	var q_34 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_34_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_35_Creamsplash' }
	} 
	var q_36 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_36_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_37_Callpoliceman' }
	} 
	var q_38 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_38_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_39_Hatecoffee' }
	} 
	var q_40 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_40_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_41_END' }
	} 

    var betweenstory_42 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_43 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_43_BEGIN' }
	} 
	var q_44 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_44_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_45_Cutline' }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_46_Sayexcuseme' }
	} 
	var q_47 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_47_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_48_Shove' }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_49_Yell' }
	} 
	var q_50 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_50_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_51_Creamsplash' }
	} 
	var q_52 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_52_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_53_Callpoliceman' }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_54_Hatecoffee' }
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
	var q_58 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_58_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_59_Stepfoot' }
	} 
	var q_60 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_60_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_61 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_61_Sayexcuseme' }
	} 
	var q_62 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_62_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_63_Shove' }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_64_Yell' }
	} 
	var q_65 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_65_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_66_Creamsplash' }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_67_Callpoliceman' }
	} 
	var q_68 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_68_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_69_Hatecoffee' }
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
	var q_75 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_75_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_76_Shove' }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_77_Yell' }
	} 
	var q_78 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_78_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_79_Creamsplash' }
	} 
	var q_80 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_80_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_81_Callpoliceman' }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_82_Hatecoffee' }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_83_END' }
	} 

    var betweenstory_84 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_85 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_85_BEGIN' }
	} 
	var q_86 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_86_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_87_Cutline' }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_88_Cutback' }
	} 
	var q_89 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse ignored her and proceeded to order a coffee.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_89_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_90_Shove' }
	} 
	var q_91 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_91_ShoveYell_ShoveXshove_20_victim.violent_10' }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_92_Yell' }
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
	var s_100 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_100_Sayexcuseme' }
	} 
	var q_101 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Olivia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_101_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_102_Shove' }
	} 
	var q_103 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_103_ShoveXshove_ShoveYell_80_victim.violent_10' }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_104_Xshove' }
	} 
	var q_105 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Jesse\'s head.', 'Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_105_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_10' }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_106_Dessertcrumble' }
	} 
	var q_107 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_107_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_108_Baristaorders' }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_109_Lovejuice' }
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
	var s_113 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_113_Cutline' }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_114_Cutback' }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_115_Ignore' }
	} 
	var q_116 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Silvia\'s eyes.', 'In retaliation, Olivia pushed Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_116_IgnoreXstare_IgnoreXshove_20_victim.violent_01' }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_117_Xstare' }
	} 
	var q_118 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Silvia\'s head.', 'Silvia snatched a cake and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_118_XstareDessertcrumble_XstareDessertcrumble_100_permute_10' }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_119_Dessertcrumble' }
	} 
	var q_120 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_120_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_121_Baristaorders' }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_122_Lovejuice' }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_123_END' }
	} 

    var betweenstory_124 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_125 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_125_BEGIN' }
	} 
	var q_126 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_126_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_127_Cutline' }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_128_Cutback' }
	} 
	var q_129 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a latte.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_129_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_130_Shove' }
	} 
	var q_131 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_131_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_132_Yell' }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_133_Creamsplash' }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_134_Callpoliceman' }
	} 
	var q_135 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_135_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_136_Hatecoffee' }
	} 
	var q_137 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_137_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_138_END' }
	} 

    var betweenstory_139 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_140 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_140_BEGIN' }
	} 
	var q_141 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_141_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_142_Stepfoot' }
	} 
	var q_143 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_143_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_144_Sayexcuseme' }
	} 
	var q_145 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_145_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_10' }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_146_Shove' }
	} 
	var q_147 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_147_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_148_Yell' }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_149_Creamsplash' }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_150_Callpoliceman' }
	} 
	var q_151 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_151_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_152_Hatecoffee' }
	} 
	var q_153 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_153_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_154_END' }
	} 

    var betweenstory_155 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_156 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_156_BEGIN' }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_157_Stepfoot' }
	} 
	var q_158 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_158_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_159_Sayexcuseme' }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_160_Shove' }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_161_Xshove' }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_162_Creamsplash' }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_163_Callpoliceman' }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_164_Hatecoffee' }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_165_END' }
	} 

    var betweenstory_166 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_167 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_167_BEGIN' }
	} 
	var q_168 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_168_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.'],
		data: { state_info: 's_169_Cutline' }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.'],
		data: { state_info: 's_170_Cutback' }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a latte.'],
		data: { state_info: 's_171_Ignore' }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Silvia.'],
		data: { state_info: 's_172_Xshove' }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_173_Creamsplash' }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_174_Callpoliceman' }
	} 
	var q_175 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_175_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_176_Hatecoffee' }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_177_END' }
	} 

    var betweenstory_178 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_179 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_179_BEGIN' }
	} 
	var q_180 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_180_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Ben\'s foot.'],
		data: { state_info: 's_181_Stepfoot' }
	} 
	var q_182 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_182_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_183_Sayexcuseme' }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_184_Shove' }
	} 
	var q_185 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_185_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_186_Yell' }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_187_Creamsplash' }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_188_Callpoliceman' }
	} 
	var q_189 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_189_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_190_Hatecoffee' }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
	var q_194 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_194_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_195_Cutline' }
	} 
	var q_196 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_196_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_197_Cutback' }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_198_Shove' }
	} 
	var q_199 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_199_ShoveXshove_ShoveYell_80_victim.violent_01' }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.'],
		data: { state_info: 's_200_Xshove' }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.'],
		data: { state_info: 's_201_Dessertcrumble' }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_202_Baristaorders' }
	} 
	var q_203 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_203_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_204_Lovejuice' }
	} 
	var q_205 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_205_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_206_END' }
	} 

    var betweenstory_207 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_208 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_208_BEGIN' }
	} 
	var q_209 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_209_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.'],
		data: { state_info: 's_210_Cutline' }
	} 
	var q_211 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_211_CutlineSayexcuseme_CutlineCutback_20_victim.violent_01' }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_212_Sayexcuseme' }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_213_Subjectstares' }
	} 
	var q_214 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Ben\'s eyes.', 'Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_214_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_10' }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_215_Yell' }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_216_Creamsplash' }
	} 
	var q_217 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_217_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_218_Callpoliceman' }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_219_Hatecoffee' }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_220_END' }
	} 

    var betweenstory_221 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_222 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_222_BEGIN' }
	} 
	var q_223 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_223_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_224_Cutline' }
	} 
	var q_225 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_225_CutlineCutback_CutlineSayexcuseme_80_victim.violent_10' }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.'],
		data: { state_info: 's_226_Cutback' }
	} 
	var q_227 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben ignored her and proceeded to order a mocha.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_227_CutbackIgnore_CutbackShove_80_subject.violent_10' }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['Ben ignored her and proceeded to order a mocha.'],
		data: { state_info: 's_228_Ignore' }
	} 
	var q_229 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Ben.', 'Olivia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_229_IgnoreXshove_IgnoreXstare_80_victim.violent_01' }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_230_Xshove' }
	} 
	var q_231 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_231_XshoveCreamsplash_XshoveCreamsplash_100_permute_10' }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_232_Creamsplash' }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_233_Callpoliceman' }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_234_Lovejuice' }
	} 
	var q_235 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_235_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_236_END' }
	} 

    var betweenstory_237 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_238 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_238_BEGIN' }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_239_Cutline' }
	} 
	var q_240 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_240_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.'],
		data: { state_info: 's_241_Cutback' }
	} 
	var q_242 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a latte.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_242_CutbackShove_CutbackIgnore_80_subject.violent_01' }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_243_Shove' }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_244_Yell' }
	} 
	var q_245 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_245_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_246_Creamsplash' }
	} 
	var q_247 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_247_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_10' }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_248_Callpoliceman' }
	} 
	var q_249 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_249_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_250_Hatecoffee' }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
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
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_254_Cutline' }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_255_Sayexcuseme' }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_256_Shove' }
	} 
	var q_257 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_257_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_258_Yell' }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_259_Creamsplash' }
	} 
	var q_260 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_260_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_261_Callpoliceman' }
	} 
	var q_262 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_262_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_263_Hatecoffee' }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
		labels: ['Clumsily, she stepped on Silvia\'s foot.', 'Without hesitating she cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_267_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_268_Stepfoot' }
	} 
	var q_269 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_269_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_270_Sayexcuseme' }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_271_Shove' }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_272_Yell' }
	} 
	var q_273 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_273_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_274_Creamsplash' }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_275_Baristaorders' }
	} 
	var q_276 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_276_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_277_Lovejuice' }
	} 
	var q_278 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_278_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_279_END' }
	} 

    var betweenstory_280 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_281 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_281_BEGIN' }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.'],
		data: { state_info: 's_282_Stepfoot' }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_283_Sayexcuseme' }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['Jesse turned to Olivia and gave her a very mean look.'],
		data: { state_info: 's_284_Subjectstares' }
	} 
	var q_285 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'Olivia stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_285_SubjectstaresYell_SubjectstaresXstare_80_victim.violent_01' }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_286_Yell' }
	} 
	var q_287 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_287_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_288_Creamsplash' }
	} 
	var q_289 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_289_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_290_Callpoliceman' }
	} 
	var q_291 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_291_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_292_Hatecoffee' }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_293_END' }
	} 

    var betweenstory_294 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_295 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_295_BEGIN' }
	} 
	var q_296 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_296_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_297_Cutline' }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_298_Sayexcuseme' }
	} 
	var q_299 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_299_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_300_Subjectstares' }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_301_Xstare' }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_302_Dessertcrumble' }
	} 
	var q_303 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_303_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_304_Baristaorders' }
	} 
	var q_305 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_305_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_306_Lovejuice' }
	} 
	var q_307 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_307_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_311_Stepfoot' }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_312_Sayexcuseme' }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_313_Subjectstares' }
	} 
	var q_314 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_314_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_10' }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_315_Yell' }
	} 
	var q_316 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_316_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_317_Creamsplash' }
	} 
	var q_318 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_318_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_01' }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_319_Baristaorders' }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_320_Lovejuice' }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_321_END' }
	} 

    var betweenstory_322 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_323 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_323_BEGIN' }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.'],
		data: { state_info: 's_324_Stepfoot' }
	} 
	var q_325 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_325_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_326_Sayexcuseme' }
	} 
	var q_327 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Olivia turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_327_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_328_Shove' }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_329_Yell' }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_330_Creamsplash' }
	} 
	var q_331 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_331_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_332_Callpoliceman' }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_333_Lovejuice' }
	} 
	var q_334 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_334_LovejuiceEND_LovejuiceEND_100_alter_01' }
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
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_337_BEGIN' }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.'],
		data: { state_info: 's_338_Cutline' }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_339_Sayexcuseme' }
	} 
	var q_340 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_340_SayexcusemeShove_SayexcusemeSubjectstares_20_subject.violent_10' }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.'],
		data: { state_info: 's_341_Shove' }
	} 
	var q_342 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Ben\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_342_ShoveXshove_ShoveYell_80_victim.violent_10' }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.'],
		data: { state_info: 's_343_Xshove' }
	} 
	var q_344 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_344_XshoveCreamsplash_XshoveCreamsplash_100_permute_10' }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		data: { state_info: 's_345_Creamsplash' }
	} 
	var q_346 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_346_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_347_Callpoliceman' }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_348_Hatecoffee' }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_349_END' }
	} 

    var betweenstory_350 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_351 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_351_BEGIN' }
	} 
	var q_352 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_352_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_353_Cutline' }
	} 
	var q_354 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_354_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_355_Sayexcuseme' }
	} 
	var q_356 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_356_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_357_Shove' }
	} 
	var q_358 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_358_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_359_Yell' }
	} 
	var q_360 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_360_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_361_Creamsplash' }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_362_Callpoliceman' }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_363_Hatecoffee' }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_364_END' }
	} 

    var betweenstory_365 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_366 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_366_BEGIN' }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_367_Cutline' }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_368_Sayexcuseme' }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_369_Subjectstares' }
	} 
	var q_370 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_370_SubjectstaresYell_SubjectstaresXstare_20_victim.violent_01' }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_371_Yell' }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_372_Creamsplash' }
	} 
	var q_373 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_373_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_374_Baristaorders' }
	} 
	var q_375 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_375_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_376_Lovejuice' }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_377_END' }
	} 

    var betweenstory_378 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_379 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_379_BEGIN' }
	} 
	var q_380 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_380_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_381_Stepfoot' }
	} 
	var q_382 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_382_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_383_Sayexcuseme' }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_384_Subjectstares' }
	} 
	var q_385 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Jesse\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_385_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_386_Xstare' }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_387_Dessertcrumble' }
	} 
	var q_388 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_388_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.'],
		data: { state_info: 's_389_Baristaorders' }
	} 
	var q_390 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_390_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_01' }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_391_Hatecoffee' }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_392_END' }
	} 

    var betweenstory_393 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_394 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_394_BEGIN' }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.'],
		data: { state_info: 's_395_Cutline' }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_396_Sayexcuseme' }
	} 
	var q_397 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Olivia turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_397_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_398_Shove' }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_399_Yell' }
	} 
	var q_400 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_400_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_401_Creamsplash' }
	} 
	var q_402 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_402_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_403_Callpoliceman' }
	} 
	var q_404 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_404_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_405_Lovejuice' }
	} 
	var q_406 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_406_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_407_END' }
	} 

    var betweenstory_408 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_409 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_409_BEGIN' }
	} 
	var q_410 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_410_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_411_Stepfoot' }
	} 
	var q_412 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_412_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_413_Sayexcuseme' }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_414_Shove' }
	} 
	var q_415 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_415_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_416_Yell' }
	} 
	var q_417 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_417_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_418_Creamsplash' }
	} 
	var q_419 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_419_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_420_Callpoliceman' }
	} 
	var q_421 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_421_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_422_Hatecoffee' }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_423_END' }
	} 

    var betweenstory_424 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_425 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_425_BEGIN' }
	} 
	var q_426 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_426_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_427_Cutline' }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_428_Sayexcuseme' }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_429_Shove' }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Olivia.'],
		data: { state_info: 's_430_Xshove' }
	} 
	var q_431 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cookie and crumbled it above Ben\'s head.', 'Ben snatched a cookie and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_431_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_432_Dessertcrumble' }
	} 
	var q_433 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_433_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_434_Baristaorders' }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_435_Lovejuice' }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_436_END' }
	} 

    var betweenstory_437 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_438 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_438_BEGIN' }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_439_Stepfoot' }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_440_Sayexcuseme' }
	} 
	var q_441 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_441_SayexcusemeSubjectstares_SayexcusemeShove_20_subject.violent_01' }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_442_Subjectstares' }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_443_Yell' }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_444_Creamsplash' }
	} 
	var q_445 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_445_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_446_Callpoliceman' }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_447_Hatecoffee' }
	} 
	var q_448 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_448_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
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
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_451_BEGIN' }
	} 
	var q_452 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_452_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_453_Cutline' }
	} 
	var q_454 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_454_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.'],
		data: { state_info: 's_455_Cutback' }
	} 
	var q_456 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia ignored him and proceeded to order a mocha.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_456_CutbackShove_CutbackIgnore_80_subject.violent_01' }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_457_Shove' }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_458_Xshove' }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_459_Dessertcrumble' }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_460_Baristaorders' }
	} 
	var q_461 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_461_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_462_Lovejuice' }
	} 
	var q_463 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_463_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_464_END' }
	} 

    var betweenstory_465 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_466 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_466_BEGIN' }
	} 
	var q_467 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_467_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_468_Stepfoot' }
	} 
	var q_469 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_469_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_470_Sayexcuseme' }
	} 
	var q_471 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Silvia.', 'Jesse turned to Silvia and gave her a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_471_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_472_Shove' }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_473_Yell' }
	} 
	var q_474 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_474_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_475_Creamsplash' }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_476_Callpoliceman' }
	} 
	var q_477 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_477_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_10' }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_478_Lovejuice' }
	} 
	var q_479 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_479_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
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
	var s_483 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_483_Cutline' }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_484_Sayexcuseme' }
	} 
	var q_485 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_485_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_486_Shove' }
	} 
	var q_487 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_487_ShoveYell_ShoveXshove_80_victim.violent_01' }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_488_Yell' }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_489_Creamsplash' }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_490_Baristaorders' }
	} 
	var q_491 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_491_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_492_Lovejuice' }
	} 
	var q_493 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_493_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
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
	var s_499 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.'],
		data: { state_info: 's_499_Cutback' }
	} 
	var q_500 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a coffee.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_500_CutbackShove_CutbackIgnore_80_subject.violent_10' }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_501_Shove' }
	} 
	var q_502 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_502_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_503_Yell' }
	} 
	var q_504 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_504_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_505_Creamsplash' }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		data: { state_info: 's_506_Callpoliceman' }
	} 
	var q_507 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_507_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_508_Hatecoffee' }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_509_END' }
	} 

    var betweenstory_510 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_511 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_511_BEGIN' }
	} 
	var q_512 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_512_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_513_Stepfoot' }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_514_Sayexcuseme' }
	} 
	var q_515 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_515_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_516_Subjectstares' }
	} 
	var s_517 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_517_Xstare' }
	} 
	var q_518 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.', 'Silvia snatched a lemonsquare and crumbled it above Ben\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_518_XstareDessertcrumble_XstareDessertcrumble_100_permute_01' }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_519_Dessertcrumble' }
	} 
	var q_520 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_520_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_10' }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_521_Baristaorders' }
	} 
	var q_522 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_522_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_523_Lovejuice' }
	} 
	var q_524 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_524_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_525_END' }
	} 

    var betweenstory_526 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_527 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_527_BEGIN' }
	} 
	var q_528 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_528_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_529_Cutline' }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_530_Cutback' }
	} 
	var q_531 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Jesse.', 'Silvia ignored him and proceeded to order a coffee.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_531_CutbackIgnore_CutbackShove_80_subject.violent_10' }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_532_Ignore' }
	} 
	var q_533 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Silvia.', 'Jesse stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_533_IgnoreXshove_IgnoreXstare_80_victim.violent_01' }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.'],
		data: { state_info: 's_534_Xshove' }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_535_Creamsplash' }
	} 
	var q_536 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_536_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_537_Callpoliceman' }
	} 
	var q_538 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_538_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_10' }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_539_Hatecoffee' }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_540_END' }
	} 

    var betweenstory_541 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_542 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_542_BEGIN' }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_543_Stepfoot' }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_544_Sayexcuseme' }
	} 
	var q_545 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_545_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_546_Subjectstares' }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_547_Xstare' }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_548_Dessertcrumble' }
	} 
	var q_549 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_549_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_550_Baristaorders' }
	} 
	var q_551 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_551_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_01' }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_552_Hatecoffee' }
	} 
	var q_553 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_553_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_554_END' }
	} 

    var betweenstory_555 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_556 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_556_BEGIN' }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_557_Cutline' }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_558_Sayexcuseme' }
	} 
	var q_559 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_559_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_560_Subjectstares' }
	} 
	var q_561 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"', 'Ben stared with rage into Silvia\'s eyes.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_561_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_10' }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_562_Xstare' }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_563_Dessertcrumble' }
	} 
	var q_564 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_564_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_565_Baristaorders' }
	} 
	var q_566 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_566_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_567_Lovejuice' }
	} 
	var q_568 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_568_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_569_END' }
	} 

    var betweenstory_570 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_571 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_571_BEGIN' }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_572_Cutline' }
	} 
	var q_573 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_573_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_574_Sayexcuseme' }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_575_Subjectstares' }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Jesse\'s eyes.'],
		data: { state_info: 's_576_Xstare' }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.'],
		data: { state_info: 's_577_Dessertcrumble' }
	} 
	var q_578 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_578_DessertcrumbleCallpoliceman_DessertcrumbleBaristaorders_20_default_10' }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_579_Callpoliceman' }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_580_Hatecoffee' }
	} 
	var q_581 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_581_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_582_END' }
	} 

    var betweenstory_583 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_584 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_584_BEGIN' }
	} 
	var q_585 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_585_BEGINCutline_BEGINStepfoot_60_default_10' }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.'],
		data: { state_info: 's_586_Cutline' }
	} 
	var q_587 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia promptly stepped back in front of Jesse.', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_587_CutlineSayexcuseme_CutlineCutback_80_victim.violent_10' }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_588_Sayexcuseme' }
	} 
	var q_589 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Silvia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_589_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.'],
		data: { state_info: 's_590_Shove' }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_591_Yell' }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		data: { state_info: 's_592_Creamsplash' }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_593_Callpoliceman' }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_594_Lovejuice' }
	} 
	var q_595 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_595_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_596_END' }
	} 

    var betweenstory_597 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_598 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_598_BEGIN' }
	} 
	var q_599 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_599_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.'],
		data: { state_info: 's_600_Stepfoot' }
	} 
	var q_601 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_601_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_602_Sayexcuseme' }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.'],
		data: { state_info: 's_603_Shove' }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.'],
		data: { state_info: 's_604_Xshove' }
	} 
	var q_605 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Olivia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_605_XshoveDessertcrumble_XshoveDessertcrumble_100_permute_01' }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.'],
		data: { state_info: 's_606_Dessertcrumble' }
	} 
	var q_607 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Ben, the police officer, ordered Olivia to leave before anyone pressed charges.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_607_DessertcrumbleBaristaorders_DessertcrumbleCallpoliceman_80_default_01' }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_608_Baristaorders' }
	} 
	var q_609 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_609_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_10' }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_610_Lovejuice' }
	} 
	var q_611 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_611_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_612_END' }
	} 

    var betweenstory_613 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_614 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.'],
		data: { state_info: 's_614_BEGIN' }
	} 
	var q_615 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_615_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.'],
		data: { state_info: 's_616_Cutline' }
	} 
	var q_617 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_617_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_618_Sayexcuseme' }
	} 
	var q_619 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_619_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_01' }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_620_Shove' }
	} 
	var q_621 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_621_ShoveYell_ShoveXshove_80_victim.violent_10' }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_622_Yell' }
	} 
	var q_623 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_623_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_624_Creamsplash' }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.'],
		data: { state_info: 's_625_Callpoliceman' }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_626_Hatecoffee' }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_627_END' }
	} 

    var betweenstory_628 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_629 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_629_BEGIN' }
	} 
	var q_630 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Jesse\'s foot.', 'Without hesitating he cut Jesse, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_630_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Jesse\'s foot.'],
		data: { state_info: 's_631_Stepfoot' }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_632_Sayexcuseme' }
	} 
	var q_633 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Ben proceeded to give a slight shove to Jesse.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_633_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_634_Subjectstares' }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_635_Yell' }
	} 
	var q_636 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_636_YellCreamsplash_YellCreamsplash_100_permute_10' }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_637_Creamsplash' }
	} 
	var q_638 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_638_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.'],
		data: { state_info: 's_639_Callpoliceman' }
	} 
	var q_640 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_640_CallpolicemanLovejuice_CallpolicemanHatecoffee_20_default_01' }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_641_Lovejuice' }
	} 
	var q_642 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_642_LovejuiceEND_LovejuiceEND_100_alter_10' }
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
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_645_BEGIN' }
	} 
	var q_646 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_646_BEGINCutline_BEGINStepfoot_60_default_01' }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_647_Cutline' }
	} 
	var q_648 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Silvia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_648_CutlineSayexcuseme_CutlineCutback_20_victim.violent_10' }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_649_Sayexcuseme' }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Silvia turned to Jesse and gave him a very mean look.'],
		data: { state_info: 's_650_Subjectstares' }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_651_Yell' }
	} 
	var q_652 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_652_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_653_Creamsplash' }
	} 
	var q_654 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_654_CreamsplashCallpoliceman_CreamsplashBaristaorders_80_default_01' }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_655_Callpoliceman' }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_656_Hatecoffee' }
	} 
	var q_657 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_657_HatecoffeeEND_HatecoffeeEND_100_alter_10' }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_658_END' }
	} 

    var betweenstory_659 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_660 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_660_BEGIN' }
	} 
	var q_661 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_661_BEGINStepfoot_BEGINCutline_40_default_01' }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.'],
		data: { state_info: 's_662_Stepfoot' }
	} 
	var q_663 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_663_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_01' }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_664_Sayexcuseme' }
	} 
	var q_665 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_665_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_10' }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.'],
		data: { state_info: 's_666_Subjectstares' }
	} 
	var q_667 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_667_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_01' }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.'],
		data: { state_info: 's_668_Xstare' }
	} 
	var q_669 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cookie and crumbled it above Ben\'s head.', 'Ben snatched a cookie and crumbled it above Silvia\'s head.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_669_XstareDessertcrumble_XstareDessertcrumble_100_permute_01' }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.'],
		data: { state_info: 's_670_Dessertcrumble' }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.'],
		data: { state_info: 's_671_Callpoliceman' }
	} 
	var q_672 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_672_CallpolicemanHatecoffee_CallpolicemanLovejuice_80_default_01' }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_673_Hatecoffee' }
	} 
	var q_674 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_674_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_675_END' }
	} 

    var betweenstory_676 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_677 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.'],
		data: { state_info: 's_677_BEGIN' }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.'],
		data: { state_info: 's_678_Cutline' }
	} 
	var q_679 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Silvia.', 'Jesse was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_679_CutlineCutback_CutlineSayexcuseme_80_victim.violent_01' }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.'],
		data: { state_info: 's_680_Cutback' }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.'],
		data: { state_info: 's_681_Ignore' }
	} 
	var s_682 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.'],
		data: { state_info: 's_682_Xshove' }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.'],
		data: { state_info: 's_683_Creamsplash' }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.'],
		data: { state_info: 's_684_Baristaorders' }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_685_Lovejuice' }
	} 
	var q_686 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_686_LovejuiceEND_LovejuiceEND_100_alter_01' }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_687_END' }
	} 

    var betweenstory_688 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_689 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.'],
		data: { state_info: 's_689_BEGIN' }
	} 
	var q_690 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_690_BEGINStepfoot_BEGINCutline_40_default_10' }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.'],
		data: { state_info: 's_691_Stepfoot' }
	} 
	var q_692 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_692_StepfootSayexcuseme_StepfootSayexcuseme_100_alter_10' }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_693_Sayexcuseme' }
	} 
	var q_694 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_694_SayexcusemeSubjectstares_SayexcusemeShove_80_subject.violent_01' }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.'],
		data: { state_info: 's_695_Subjectstares' }
	} 
	var q_696 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Ben\'s eyes.', 'Silvia yelled into Ben\'s face, \"Hey! Relax.\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_696_SubjectstaresXstare_SubjectstaresYell_80_victim.violent_01' }
	} 
	var s_697 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.'],
		data: { state_info: 's_697_Xstare' }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.'],
		data: { state_info: 's_698_Dessertcrumble' }
	} 
	var s_699 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.'],
		data: { state_info: 's_699_Baristaorders' }
	} 
	var q_700 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_700_BaristaordersHatecoffee_BaristaordersLovejuice_20_default_01' }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"'],
		data: { state_info: 's_701_Hatecoffee' }
	} 
	var q_702 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_702_HatecoffeeEND_HatecoffeeEND_100_alter_01' }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.'],
		data: { state_info: 's_703_END' }
	} 

    var betweenstory_704 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_705 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.'],
		data: { state_info: 's_705_BEGIN' }
	} 
	var s_706 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.'],
		data: { state_info: 's_706_Cutline' }
	} 
	var q_707 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_707_CutlineSayexcuseme_CutlineCutback_80_victim.violent_01' }
	} 
	var s_708 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"'],
		data: { state_info: 's_708_Sayexcuseme' }
	} 
	var q_709 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_709_SayexcusemeShove_SayexcusemeSubjectstares_80_subject.violent_10' }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.'],
		data: { state_info: 's_710_Shove' }
	} 
	var s_711 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"'],
		data: { state_info: 's_711_Yell' }
	} 
	var q_712 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_712_YellCreamsplash_YellCreamsplash_100_permute_01' }
	} 
	var s_713 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.'],
		data: { state_info: 's_713_Creamsplash' }
	} 
	var q_714 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_714_CreamsplashBaristaorders_CreamsplashCallpoliceman_20_default_10' }
	} 
	var s_715 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.'],
		data: { state_info: 's_715_Baristaorders' }
	} 
	var q_716 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_716_BaristaordersLovejuice_BaristaordersHatecoffee_80_default_01' }
	} 
	var s_717 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"'],
		data: { state_info: 's_717_Lovejuice' }
	} 
	var q_718 = {
		type: 'html-keyboard-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		choices: ['leftarrow', 'rightarrow'],
		data: { state_info: 'q_718_LovejuiceEND_LovejuiceEND_100_alter_10' }
	} 
	var s_719 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.'],
		data: { state_info: 's_719_END' }
	} 

    var betweenstory_720 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_0,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,
betweenstory_9,questions_begin_10,s_11,q_12,s_13,s_14,s_15,q_16,s_17,q_18,s_19,s_20,q_21,s_22,q_23,s_24,
betweenstory_25,s_26,s_27,q_28,s_29,q_30,s_31,q_32,s_33,q_34,s_35,q_36,s_37,q_38,s_39,q_40,s_41,
betweenstory_42,s_43,q_44,s_45,s_46,q_47,s_48,s_49,q_50,s_51,q_52,s_53,s_54,s_55,
betweenstory_56,s_57,q_58,s_59,q_60,s_61,q_62,s_63,s_64,q_65,s_66,s_67,q_68,s_69,s_70,
betweenstory_71,s_72,s_73,s_74,q_75,s_76,s_77,q_78,s_79,q_80,s_81,s_82,s_83,
betweenstory_84,s_85,q_86,s_87,s_88,q_89,s_90,q_91,s_92,s_93,s_94,s_95,s_96,
betweenstory_97,s_98,s_99,s_100,q_101,s_102,q_103,s_104,q_105,s_106,q_107,s_108,s_109,s_110,
betweenstory_111,s_112,s_113,s_114,s_115,q_116,s_117,q_118,s_119,q_120,s_121,s_122,s_123,
betweenstory_124,s_125,q_126,s_127,s_128,q_129,s_130,q_131,s_132,s_133,s_134,q_135,s_136,q_137,s_138,
betweenstory_139,s_140,q_141,s_142,q_143,s_144,q_145,s_146,q_147,s_148,s_149,s_150,q_151,s_152,q_153,s_154,
betweenstory_155,s_156,s_157,q_158,s_159,s_160,s_161,s_162,s_163,s_164,s_165,
betweenstory_166,s_167,q_168,s_169,s_170,s_171,s_172,s_173,s_174,q_175,s_176,s_177,
betweenstory_178,s_179,q_180,s_181,q_182,s_183,s_184,q_185,s_186,s_187,s_188,q_189,s_190,s_191,
betweenstory_192,s_193,q_194,s_195,q_196,s_197,s_198,q_199,s_200,s_201,s_202,q_203,s_204,q_205,s_206,
betweenstory_207,s_208,q_209,s_210,q_211,s_212,s_213,q_214,s_215,s_216,q_217,s_218,s_219,s_220,
betweenstory_221,s_222,q_223,s_224,q_225,s_226,q_227,s_228,q_229,s_230,q_231,s_232,s_233,s_234,q_235,s_236,
betweenstory_237,s_238,s_239,q_240,s_241,q_242,s_243,s_244,q_245,s_246,q_247,s_248,q_249,s_250,s_251,
betweenstory_252,s_253,s_254,s_255,s_256,q_257,s_258,s_259,q_260,s_261,q_262,s_263,s_264,
betweenstory_265,s_266,q_267,s_268,q_269,s_270,s_271,s_272,q_273,s_274,s_275,q_276,s_277,q_278,s_279,
betweenstory_280,s_281,s_282,s_283,s_284,q_285,s_286,q_287,s_288,q_289,s_290,q_291,s_292,s_293,
betweenstory_294,s_295,q_296,s_297,s_298,q_299,s_300,s_301,s_302,q_303,s_304,q_305,s_306,q_307,s_308,
betweenstory_309,s_310,s_311,s_312,s_313,q_314,s_315,q_316,s_317,q_318,s_319,s_320,s_321,
betweenstory_322,s_323,s_324,q_325,s_326,q_327,s_328,s_329,s_330,q_331,s_332,s_333,q_334,s_335,
betweenstory_336,s_337,s_338,s_339,q_340,s_341,q_342,s_343,q_344,s_345,q_346,s_347,s_348,s_349,
betweenstory_350,s_351,q_352,s_353,q_354,s_355,q_356,s_357,q_358,s_359,q_360,s_361,s_362,s_363,s_364,
betweenstory_365,s_366,s_367,s_368,s_369,q_370,s_371,s_372,q_373,s_374,q_375,s_376,s_377,
betweenstory_378,s_379,q_380,s_381,q_382,s_383,s_384,q_385,s_386,s_387,q_388,s_389,q_390,s_391,s_392,
betweenstory_393,s_394,s_395,s_396,q_397,s_398,s_399,q_400,s_401,q_402,s_403,q_404,s_405,q_406,s_407,
betweenstory_408,s_409,q_410,s_411,q_412,s_413,s_414,q_415,s_416,q_417,s_418,q_419,s_420,q_421,s_422,s_423,
betweenstory_424,s_425,q_426,s_427,s_428,s_429,s_430,q_431,s_432,q_433,s_434,s_435,s_436,
betweenstory_437,s_438,s_439,s_440,q_441,s_442,s_443,s_444,q_445,s_446,s_447,q_448,s_449,
betweenstory_450,s_451,q_452,s_453,q_454,s_455,q_456,s_457,s_458,s_459,s_460,q_461,s_462,q_463,s_464,
betweenstory_465,s_466,q_467,s_468,q_469,s_470,q_471,s_472,s_473,q_474,s_475,s_476,q_477,s_478,q_479,s_480,
betweenstory_481,s_482,s_483,s_484,q_485,s_486,q_487,s_488,s_489,s_490,q_491,s_492,q_493,s_494,
betweenstory_495,s_496,q_497,s_498,s_499,q_500,s_501,q_502,s_503,q_504,s_505,s_506,q_507,s_508,s_509,
betweenstory_510,s_511,q_512,s_513,s_514,q_515,s_516,s_517,q_518,s_519,q_520,s_521,q_522,s_523,q_524,s_525,
betweenstory_526,s_527,q_528,s_529,s_530,q_531,s_532,q_533,s_534,s_535,q_536,s_537,q_538,s_539,s_540,
betweenstory_541,s_542,s_543,s_544,q_545,s_546,s_547,s_548,q_549,s_550,q_551,s_552,q_553,s_554,
betweenstory_555,s_556,s_557,s_558,q_559,s_560,q_561,s_562,s_563,q_564,s_565,q_566,s_567,q_568,s_569,
betweenstory_570,s_571,s_572,q_573,s_574,s_575,s_576,s_577,q_578,s_579,s_580,q_581,s_582,
betweenstory_583,s_584,q_585,s_586,q_587,s_588,q_589,s_590,s_591,s_592,s_593,s_594,q_595,s_596,
betweenstory_597,s_598,q_599,s_600,q_601,s_602,s_603,s_604,q_605,s_606,q_607,s_608,q_609,s_610,q_611,s_612,
betweenstory_613,s_614,q_615,s_616,q_617,s_618,q_619,s_620,q_621,s_622,q_623,s_624,s_625,s_626,s_627,
betweenstory_628,s_629,q_630,s_631,s_632,q_633,s_634,s_635,q_636,s_637,q_638,s_639,q_640,s_641,q_642,s_643,
betweenstory_644,s_645,q_646,s_647,q_648,s_649,s_650,s_651,q_652,s_653,q_654,s_655,s_656,q_657,s_658,
betweenstory_659,s_660,q_661,s_662,q_663,s_664,q_665,s_666,q_667,s_668,q_669,s_670,s_671,q_672,s_673,q_674,s_675,
betweenstory_676,s_677,s_678,q_679,s_680,s_681,s_682,s_683,s_684,s_685,q_686,s_687,
betweenstory_688,s_689,q_690,s_691,q_692,s_693,q_694,s_695,q_696,s_697,s_698,s_699,q_700,s_701,q_702,s_703,
betweenstory_704,s_705,s_706,q_707,s_708,q_709,s_710,s_711,q_712,s_713,q_714,s_715,q_716,s_717,q_718,s_719,
betweenstory_720,],

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

