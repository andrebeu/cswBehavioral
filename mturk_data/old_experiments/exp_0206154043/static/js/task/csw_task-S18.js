

// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var sid = `${uniqueId}`
var cb = `{condition}`

jsPsych.data.addProperties({
  subject_id: sid,
  condition: cb
});

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
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_1 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_2 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_3 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.']
	} 
	var s_4 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_5 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_6 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_7 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_8 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_9 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_10 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_11 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_12 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_13 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_14 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_15 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_16 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_17 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_18 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_19 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_20 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_21 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_22 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_23 = {
		type: 'instructions',
		pages: ['Silvia proceeded to give a slight shove to Ben.']
	} 
	var s_24 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_25 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_26 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_27 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_28 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_29 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_30 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_31 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var s_32 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_33 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var s_34 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_35 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_36 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_37 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_38 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_39 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_40 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_41 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_42 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_43 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_44 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_45 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_46 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_47 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_48 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
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
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_52 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_53 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var q_54 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_55 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_56 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_58 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_59 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_60 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_61 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_63 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_64 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_65 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_66 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var q_69 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a coffee.']
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var q_71 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'In retaliation, Jesse pushed Olivia.']
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var s_73 = {
		type: 'instructions',
		pages: ['Jesse snatched a cookie and crumbled it above Olivia\'s head.']
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var q_75 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_77 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_78 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_79 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_80 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_82 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_83 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var q_85 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'In retaliation, Olivia pushed Jesse.']
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var q_88 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var q_90 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_91 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_93 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_94 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.']
	} 
	var q_96 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Silvia promptly stepped back in front of Olivia.']
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.']
	} 
	var q_98 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Olivia.', 'Silvia ignored her and proceeded to order a mocha.']
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.']
	} 
	var q_100 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Silvia\'s eyes.', 'Silvia stared with rage into Olivia\'s eyes.']
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.']
	} 
	var q_102 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Olivia\'s head.', 'Olivia snatched a cake and crumbled it above Silvia\'s head.']
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var q_105 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_107 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_109 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_110 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_111 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.']
	} 
	var q_114 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_116 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_118 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_120 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_122 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_124 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_125 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_126 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_127 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_129 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_131 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.']
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.']
	} 
	var q_133 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Ben.', 'Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_134 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var q_135 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_137 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_139 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_142 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_143 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_144 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_145 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var q_149 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_151 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_153 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_155 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_156 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_157 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.']
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.']
	} 
	var q_159 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.']
	} 
	var q_161 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored her and proceeded to order a latte.', 'Silvia proceeded to give a slight shove to Olivia.']
	} 
	var s_162 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a latte.']
	} 
	var q_163 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Silvia\'s eyes.', 'In retaliation, Olivia pushed Silvia.']
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Silvia.']
	} 
	var q_165 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_167 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_168 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_170 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_172 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_173 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Ben\'s foot.']
	} 
	var q_175 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_177 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.']
	} 
	var s_178 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var q_179 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_180 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_181 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_185 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_186 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_187 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var q_190 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a coffee.']
	} 
	var s_191 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_192 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var q_193 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Jesse\'s head.', 'Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var q_195 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_197 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_199 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_200 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_201 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_202 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_203 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.']
	} 
	var q_204 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Ben.']
	} 
	var s_205 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_206 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Jesse turned to Ben and gave him a very mean look.']
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.']
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_210 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_214 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_215 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_216 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_217 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_218 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.']
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['Ben ignored her and proceeded to order a mocha.']
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var q_222 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var q_224 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_226 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_227 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_228 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_229 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_230 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_231 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var q_234 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a latte.']
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Jesse snatched a cookie and crumbled it above Olivia\'s head.']
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_240 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_241 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_242 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_244 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.']
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_251 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_253 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_254 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_255 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.']
	} 
	var q_256 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_257 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var q_259 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.']
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_261 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_262 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_263 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_265 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_266 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_268 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_269 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_272 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse turned to Olivia and gave her a very mean look.']
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Jesse turned to Olivia and gave her a very mean look.']
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_275 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_278 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_280 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_282 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_283 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_284 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_286 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Silvia.', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_288 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_289 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var q_291 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Silvia\'s head.', 'Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var q_294 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_296 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_298 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_299 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var q_301 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_303 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var q_305 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_307 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_309 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_310 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_311 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_312 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.']
	} 
	var q_314 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var q_317 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"', 'Olivia yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_322 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_323 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_324 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_325 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_327 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var q_330 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var q_332 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_334 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_335 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_336 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_338 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_339 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_340 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.']
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var s_342 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var q_344 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_347 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_350 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_351 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_352 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_353 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var q_355 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Ben.']
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_360 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_363 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_364 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_366 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.']
	} 
	var q_368 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'Silvia stared with rage into Jesse\'s eyes.']
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.']
	} 
	var s_370 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Silvia\'s head.']
	} 
	var q_371 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_372 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_375 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_376 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_377 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.']
	} 
	var q_378 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_379 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_380 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_382 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_383 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_385 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_386 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_387 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_388 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_389 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var q_391 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_392 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_393 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_395 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'Olivia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_398 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_400 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_401 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_402 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_403 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_404 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_405 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_406 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_408 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_410 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Olivia.']
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var q_413 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_415 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_418 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_419 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_420 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.']
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_424 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_428 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_429 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_430 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_431 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var q_432 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Jesse.']
	} 
	var s_433 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.']
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_435 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.']
	} 
	var q_436 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.', 'Jesse snatched a muffin and crumbled it above Olivia\'s head.']
	} 
	var s_437 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_440 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_442 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_443 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_444 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_446 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_448 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.']
	} 
	var s_449 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_451 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_453 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_455 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_456 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_457 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_458 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_460 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_463 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_465 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_467 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_468 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_470 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_471 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.']
	} 
	var q_474 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_477 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_479 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_481 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_482 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_483 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_484 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_486 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_487 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_488 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var q_490 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Ben\'s eyes.', 'Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_491 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.']
	} 
	var q_492 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a lemonsquare and crumbled it above Ben\'s head.', 'Ben snatched a lemonsquare and crumbled it above Silvia\'s head.']
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.']
	} 
	var q_494 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_495 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var q_496 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_498 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_500 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_501 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_502 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.']
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.']
	} 
	var q_506 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Silvia.', 'In retaliation, Silvia pushed Jesse.']
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.']
	} 
	var q_508 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_510 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_512 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_515 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_516 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_517 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_519 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_520 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var q_522 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Silvia stared with rage into Ben\'s eyes.']
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_527 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_529 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_530 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_531 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_532 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_533 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Silvia.', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_534 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_535 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_541 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_543 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_544 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_545 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.']
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var q_547 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_548 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_549 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.']
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Jesse\'s eyes.']
	} 
	var s_551 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var q_552 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_555 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_557 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_558 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_559 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var q_560 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_561 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.']
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_564 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_567 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_568 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_569 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_571 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_572 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_573 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_575 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_576 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var q_577 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.']
	} 
	var q_579 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_580 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_582 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_585 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_586 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_587 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.']
	} 
	var s_588 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var q_589 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_591 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var s_592 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_593 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_595 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_597 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_599 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_601 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_602 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Jesse\'s foot.']
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_605 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.']
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_608 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_610 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_612 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_613 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_614 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_615 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_616 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_619 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Jesse and gave him a very mean look.', 'Jesse turned to Silvia and gave her a very mean look.']
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Silvia turned to Jesse and gave him a very mean look.']
	} 
	var q_621 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'Jesse yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_624 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_627 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_629 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_630 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_631 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_634 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_635 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var q_637 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cookie and crumbled it above Ben\'s head.', 'Ben snatched a cookie and crumbled it above Silvia\'s head.']
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_642 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_643 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_644 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_645 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.']
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.']
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.']
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var q_650 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_651 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_652 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_654 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_655 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_657 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_658 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var q_660 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Ben\'s eyes.', 'Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.']
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.']
	} 
	var s_663 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_665 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_667 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_668 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_669 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_670 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_673 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_674 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_675 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_676 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_677 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_678 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_679 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_680 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_682 = {
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
betweenstory_49,questions_begin_50,s_51,q_52,s_53,q_54,s_55,s_56,s_57,s_58,q_59,s_60,q_61,s_62,q_63,s_64,
betweenstory_65,s_66,s_67,s_68,q_69,s_70,q_71,s_72,s_73,s_74,q_75,s_76,q_77,s_78,
betweenstory_79,s_80,s_81,s_82,q_83,s_84,q_85,s_86,s_87,q_88,s_89,q_90,s_91,s_92,
betweenstory_93,s_94,s_95,q_96,s_97,q_98,s_99,q_100,s_101,q_102,s_103,s_104,q_105,s_106,q_107,s_108,
betweenstory_109,s_110,q_111,s_112,s_113,q_114,s_115,q_116,s_117,q_118,s_119,q_120,s_121,q_122,s_123,q_124,s_125,
betweenstory_126,s_127,s_128,q_129,s_130,q_131,s_132,q_133,s_134,q_135,s_136,q_137,s_138,q_139,s_140,s_141,
betweenstory_142,s_143,q_144,s_145,s_146,s_147,s_148,q_149,s_150,s_151,s_152,q_153,s_154,
betweenstory_155,s_156,q_157,s_158,q_159,s_160,q_161,s_162,q_163,s_164,q_165,s_166,s_167,q_168,s_169,q_170,s_171,
betweenstory_172,s_173,s_174,q_175,s_176,q_177,s_178,q_179,s_180,q_181,s_182,s_183,s_184,s_185,
betweenstory_186,s_187,s_188,s_189,q_190,s_191,s_192,q_193,s_194,q_195,s_196,q_197,s_198,q_199,s_200,
betweenstory_201,s_202,s_203,q_204,s_205,q_206,s_207,s_208,s_209,q_210,s_211,s_212,s_213,
betweenstory_214,s_215,q_216,s_217,q_218,s_219,s_220,s_221,q_222,s_223,q_224,s_225,q_226,s_227,s_228,
betweenstory_229,s_230,q_231,s_232,s_233,q_234,s_235,s_236,s_237,s_238,s_239,s_240,
betweenstory_241,s_242,s_243,q_244,s_245,s_246,s_247,s_248,s_249,s_250,q_251,s_252,
betweenstory_253,s_254,s_255,q_256,s_257,s_258,q_259,s_260,q_261,s_262,q_263,s_264,q_265,s_266,s_267,
betweenstory_268,s_269,s_270,s_271,q_272,s_273,s_274,q_275,s_276,s_277,q_278,s_279,q_280,s_281,
betweenstory_282,s_283,q_284,s_285,q_286,s_287,q_288,s_289,s_290,q_291,s_292,s_293,q_294,s_295,q_296,s_297,
betweenstory_298,s_299,s_300,q_301,s_302,q_303,s_304,q_305,s_306,s_307,s_308,s_309,s_310,
betweenstory_311,s_312,s_313,q_314,s_315,s_316,q_317,s_318,s_319,s_320,s_321,q_322,s_323,
betweenstory_324,s_325,s_326,s_327,s_328,s_329,q_330,s_331,q_332,s_333,q_334,s_335,q_336,s_337,
betweenstory_338,s_339,q_340,s_341,s_342,s_343,q_344,s_345,s_346,q_347,s_348,s_349,s_350,
betweenstory_351,s_352,q_353,s_354,q_355,s_356,s_357,s_358,s_359,s_360,s_361,s_362,
betweenstory_363,s_364,s_365,s_366,s_367,q_368,s_369,s_370,q_371,s_372,s_373,s_374,
betweenstory_375,s_376,s_377,q_378,s_379,s_380,s_381,q_382,s_383,s_384,s_385,s_386,
betweenstory_387,s_388,q_389,s_390,q_391,s_392,q_393,s_394,q_395,s_396,s_397,q_398,s_399,q_400,s_401,q_402,s_403,
betweenstory_404,s_405,q_406,s_407,s_408,s_409,q_410,s_411,s_412,q_413,s_414,q_415,s_416,s_417,
betweenstory_418,s_419,s_420,s_421,s_422,s_423,q_424,s_425,s_426,s_427,s_428,
betweenstory_429,s_430,s_431,q_432,s_433,s_434,s_435,q_436,s_437,s_438,s_439,q_440,s_441,
betweenstory_442,s_443,q_444,s_445,q_446,s_447,s_448,s_449,s_450,q_451,s_452,q_453,s_454,q_455,s_456,
betweenstory_457,s_458,s_459,q_460,s_461,s_462,s_463,s_464,q_465,s_466,q_467,s_468,s_469,
betweenstory_470,s_471,s_472,s_473,q_474,s_475,s_476,q_477,s_478,s_479,s_480,s_481,
betweenstory_482,s_483,q_484,s_485,q_486,s_487,q_488,s_489,q_490,s_491,q_492,s_493,q_494,s_495,q_496,s_497,q_498,s_499,
betweenstory_500,s_501,q_502,s_503,s_504,s_505,q_506,s_507,q_508,s_509,q_510,s_511,q_512,s_513,s_514,
betweenstory_515,s_516,q_517,s_518,s_519,q_520,s_521,q_522,s_523,s_524,s_525,s_526,q_527,s_528,
betweenstory_529,s_530,q_531,s_532,q_533,s_534,q_535,s_536,s_537,s_538,s_539,s_540,q_541,s_542,
betweenstory_543,s_544,q_545,s_546,q_547,s_548,s_549,s_550,s_551,q_552,s_553,s_554,q_555,s_556,
betweenstory_557,s_558,s_559,q_560,s_561,s_562,s_563,q_564,s_565,s_566,q_567,s_568,q_569,s_570,
betweenstory_571,s_572,q_573,s_574,s_575,s_576,q_577,s_578,q_579,s_580,s_581,q_582,s_583,s_584,
betweenstory_585,s_586,q_587,s_588,q_589,s_590,s_591,s_592,q_593,s_594,q_595,s_596,q_597,s_598,q_599,s_600,
betweenstory_601,s_602,s_603,s_604,s_605,s_606,s_607,q_608,s_609,q_610,s_611,q_612,s_613,
betweenstory_614,s_615,q_616,s_617,s_618,q_619,s_620,q_621,s_622,s_623,q_624,s_625,s_626,q_627,s_628,
betweenstory_629,s_630,q_631,s_632,s_633,q_634,s_635,s_636,q_637,s_638,s_639,s_640,s_641,
betweenstory_642,s_643,s_644,s_645,s_646,s_647,s_648,s_649,q_650,s_651,q_652,s_653,
betweenstory_654,s_655,s_656,s_657,q_658,s_659,q_660,s_661,s_662,s_663,s_664,q_665,s_666,
betweenstory_667,s_668,q_669,s_670,s_671,s_672,s_673,q_674,s_675,q_676,s_677,q_678,s_679,q_680,s_681,
betweenstory_682,],

  on_finish: function() {
    // psiturk save
    psiturk.saveData({
        success: function() { 
            psiturk.completeHIT(); 
        }
    });
  },
});

