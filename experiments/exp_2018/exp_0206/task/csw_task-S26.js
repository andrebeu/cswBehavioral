

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
	var s_52 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_53 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_54 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_55 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_56 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_57 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_58 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_60 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_61 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_63 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_64 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_65 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_66 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Jesse.', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_67 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var q_68 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a coffee.']
	} 
	var s_69 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_71 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_73 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_74 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_75 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_76 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_77 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_78 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_79 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_80 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_82 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var q_85 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Olivia\'s head.', 'Olivia snatched a cake and crumbled it above Jesse\'s head.']
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var q_87 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_88 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_90 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_91 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_92 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_93 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_94 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.']
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.']
	} 
	var s_96 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.']
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.']
	} 
	var q_98 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Silvia\'s eyes.', 'In retaliation, Olivia pushed Silvia.']
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.']
	} 
	var s_100 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var q_102 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_105 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_106 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_107 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.']
	} 
	var s_110 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_111 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_112 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_116 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_117 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_118 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_119 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.']
	} 
	var q_122 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Ben.']
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_125 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_127 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_129 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_130 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_131 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_134 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.']
	} 
	var q_136 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'In retaliation, Olivia pushed Ben.']
	} 
	var s_137 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var q_139 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_140 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_141 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_142 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_143 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_144 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_145 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_146 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.']
	} 
	var q_148 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Silvia.', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.']
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a latte.']
	} 
	var q_151 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Silvia.', 'In retaliation, Silvia pushed Olivia.']
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Silvia.']
	} 
	var s_153 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_155 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_156 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_157 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_158 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_159 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Ben\'s foot.']
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_162 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var q_163 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Jesse.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_164 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_165 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_167 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_169 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_171 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_172 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_173 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_174 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var q_176 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_177 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_178 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var q_179 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Olivia\'s head.', 'Olivia snatched a cake and crumbled it above Jesse\'s head.']
	} 
	var s_180 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var q_182 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_184 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_185 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_186 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_187 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_188 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.']
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.']
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_191 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.']
	} 
	var q_192 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_193 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_195 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_198 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_199 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_200 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_201 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_202 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Ben.']
	} 
	var s_203 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.']
	} 
	var q_204 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben ignored her and proceeded to order a mocha.']
	} 
	var s_205 = {
		type: 'instructions',
		pages: ['Ben ignored her and proceeded to order a mocha.']
	} 
	var q_206 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'In retaliation, Olivia pushed Ben.']
	} 
	var s_207 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var q_208 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var q_210 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_212 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_214 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_216 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_217 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_218 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var q_220 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Jesse ignored her and proceeded to order a latte.']
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var q_222 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_224 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_227 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
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
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_231 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_232 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_234 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_235 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_236 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_240 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
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
		pages: ['Clumsily, she stepped on Silvia\'s foot.']
	} 
	var q_244 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_245 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var s_247 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_248 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_251 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_252 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_254 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_255 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var q_257 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_259 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Olivia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['Jesse turned to Olivia and gave her a very mean look.']
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_262 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var q_263 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_265 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_266 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_268 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_269 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_271 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Silvia.']
	} 
	var s_272 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_273 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var q_276 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_277 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_278 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_280 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_281 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_282 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var q_284 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_286 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var q_288 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Ben yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_289 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_291 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_294 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_296 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_297 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_298 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.']
	} 
	var s_299 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.']
	} 
	var q_300 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_301 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var s_303 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_307 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_309 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_310 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_311 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_312 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var q_316 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var q_318 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_320 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_321 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_322 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_323 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_324 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_325 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.']
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var q_327 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_332 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_335 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_336 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_337 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_338 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var q_342 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Ben\'s eyes.']
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_344 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_345 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_347 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_348 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_350 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_351 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_352 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_353 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.']
	} 
	var s_356 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.']
	} 
	var q_357 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Jesse\'s head.', 'Jesse snatched a cake and crumbled it above Silvia\'s head.']
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Silvia\'s head.']
	} 
	var q_359 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_360 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var q_361 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_362 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_363 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_364 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_365 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_366 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_367 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.']
	} 
	var s_368 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.']
	} 
	var q_369 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_370 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var q_372 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.']
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_375 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_377 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_379 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_380 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_381 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_382 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_383 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_384 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_385 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_386 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_387 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_389 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_392 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_393 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_395 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Olivia.']
	} 
	var s_399 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var q_400 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_401 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
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
	var s_406 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var q_407 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_408 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_409 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Jesse turned to Olivia and gave her a very mean look.']
	} 
	var s_410 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.']
	} 
	var q_411 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_412 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_414 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_415 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_418 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_419 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_420 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_421 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.']
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var q_424 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.']
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_428 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_430 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_431 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_432 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_433 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_434 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_435 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_436 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_437 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.']
	} 
	var q_439 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"', 'Jesse yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_441 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_442 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.', 'Ben, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_444 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_446 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_448 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_449 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_450 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_451 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_452 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_453 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_454 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_455 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_456 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_457 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_458 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_460 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_461 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_463 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.']
	} 
	var q_465 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia ignored him and proceeded to order a coffee.']
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_468 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_471 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_472 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_474 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_475 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_477 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_478 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_479 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.']
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_481 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.']
	} 
	var q_482 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.', 'Silvia snatched a lemonsquare and crumbled it above Ben\'s head.']
	} 
	var s_483 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.']
	} 
	var q_484 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var q_486 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_487 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_488 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_490 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_491 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.']
	} 
	var q_494 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored him and proceeded to order a coffee.', 'Jesse ignored her and proceeded to order a coffee.']
	} 
	var s_495 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.']
	} 
	var q_496 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Silvia.', 'Jesse stared with rage into Silvia\'s eyes.']
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.']
	} 
	var q_498 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_501 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_502 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_503 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_505 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_506 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_507 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var q_508 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_509 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_510 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var q_514 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_515 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_516 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_517 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_518 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_519 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_520 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_522 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_523 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var q_526 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cookie and crumbled it above Ben\'s head.', 'Ben snatched a cookie and crumbled it above Silvia\'s head.']
	} 
	var s_527 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var q_528 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_529 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_530 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_531 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_532 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_533 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_534 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_535 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.']
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.']
	} 
	var q_539 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Jesse\'s eyes.', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Jesse\'s eyes.']
	} 
	var q_541 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var q_543 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_544 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_545 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_546 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_547 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_548 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_549 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_550 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var q_551 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.']
	} 
	var q_554 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"', 'Jesse yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_557 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_558 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_559 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_561 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_562 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_563 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_566 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.']
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var q_568 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Jesse pushed Olivia.']
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.']
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_572 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_573 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_575 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_576 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_577 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Ben, the first person in line.', 'Clumsily, he stepped on Ben\'s foot.']
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var q_579 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_580 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_581 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Ben and gave him a very mean look.', 'Jesse proceeded to give a slight shove to Ben.']
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_584 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_585 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_586 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_588 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_589 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_591 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_592 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_593 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Jesse\'s foot.']
	} 
	var q_594 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_596 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Jesse.', 'Ben turned to Jesse and gave him a very mean look.']
	} 
	var s_597 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.']
	} 
	var q_598 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Ben\'s eyes.', 'Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_600 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_601 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_602 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_603 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_605 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_606 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Silvia turned to Jesse and gave him a very mean look.']
	} 
	var q_610 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"', 'Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_613 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_614 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_615 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_616 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_617 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_618 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_619 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var q_621 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_622 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_623 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.']
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_627 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_630 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_631 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.']
	} 
	var q_634 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Jesse.', 'Silvia ignored him and proceeded to order a coffee.']
	} 
	var s_635 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.']
	} 
	var q_636 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'In retaliation, Jesse pushed Silvia.']
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.']
	} 
	var q_638 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_643 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_644 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_645 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_647 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.']
	} 
	var q_651 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.']
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.']
	} 
	var s_653 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_654 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_655 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_657 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_658 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_660 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_662 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_663 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_665 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_667 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_668 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_669 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_670 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_672 = {
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
betweenstory_49,questions_begin_50,s_51,s_52,s_53,s_54,s_55,q_56,s_57,q_58,s_59,q_60,s_61,s_62,
betweenstory_63,s_64,s_65,q_66,s_67,q_68,s_69,s_70,q_71,s_72,s_73,q_74,s_75,q_76,s_77,
betweenstory_78,s_79,q_80,s_81,s_82,s_83,s_84,q_85,s_86,q_87,s_88,s_89,q_90,s_91,
betweenstory_92,s_93,q_94,s_95,s_96,s_97,q_98,s_99,s_100,s_101,q_102,s_103,s_104,
betweenstory_105,s_106,q_107,s_108,s_109,s_110,s_111,s_112,s_113,s_114,s_115,
betweenstory_116,s_117,s_118,q_119,s_120,s_121,q_122,s_123,s_124,q_125,s_126,q_127,s_128,s_129,
betweenstory_130,s_131,s_132,s_133,q_134,s_135,q_136,s_137,s_138,q_139,s_140,q_141,s_142,q_143,s_144,
betweenstory_145,s_146,s_147,q_148,s_149,s_150,q_151,s_152,s_153,s_154,s_155,q_156,s_157,
betweenstory_158,s_159,s_160,s_161,s_162,q_163,s_164,q_165,s_166,q_167,s_168,s_169,s_170,
betweenstory_171,s_172,q_173,s_174,s_175,q_176,s_177,s_178,q_179,s_180,s_181,q_182,s_183,q_184,s_185,
betweenstory_186,s_187,q_188,s_189,s_190,s_191,q_192,s_193,s_194,s_195,s_196,s_197,
betweenstory_198,s_199,q_200,s_201,q_202,s_203,q_204,s_205,q_206,s_207,q_208,s_209,q_210,s_211,q_212,s_213,q_214,s_215,
betweenstory_216,s_217,s_218,s_219,q_220,s_221,q_222,s_223,q_224,s_225,s_226,s_227,s_228,
betweenstory_229,s_230,q_231,s_232,s_233,s_234,q_235,s_236,s_237,s_238,s_239,s_240,
betweenstory_241,s_242,s_243,q_244,s_245,s_246,s_247,q_248,s_249,s_250,s_251,q_252,s_253,
betweenstory_254,s_255,s_256,q_257,s_258,q_259,s_260,s_261,s_262,q_263,s_264,s_265,q_266,s_267,
betweenstory_268,s_269,s_270,q_271,s_272,s_273,s_274,s_275,q_276,s_277,s_278,s_279,
betweenstory_280,s_281,q_282,s_283,q_284,s_285,q_286,s_287,q_288,s_289,s_290,q_291,s_292,s_293,q_294,s_295,
betweenstory_296,s_297,q_298,s_299,q_300,s_301,s_302,s_303,s_304,s_305,s_306,q_307,s_308,
betweenstory_309,s_310,s_311,q_312,s_313,s_314,s_315,q_316,s_317,q_318,s_319,q_320,s_321,s_322,
betweenstory_323,s_324,q_325,s_326,q_327,s_328,s_329,s_330,s_331,q_332,s_333,s_334,q_335,s_336,
betweenstory_337,s_338,s_339,s_340,s_341,q_342,s_343,s_344,q_345,s_346,s_347,q_348,s_349,
betweenstory_350,s_351,q_352,s_353,s_354,s_355,s_356,q_357,s_358,q_359,s_360,q_361,s_362,q_363,s_364,
betweenstory_365,s_366,q_367,s_368,q_369,s_370,s_371,q_372,s_373,s_374,s_375,s_376,q_377,s_378,
betweenstory_379,s_380,q_381,s_382,s_383,s_384,s_385,q_386,s_387,s_388,q_389,s_390,s_391,
betweenstory_392,s_393,s_394,q_395,s_396,s_397,s_398,s_399,q_400,s_401,s_402,s_403,
betweenstory_404,s_405,s_406,q_407,s_408,q_409,s_410,q_411,s_412,s_413,s_414,q_415,s_416,s_417,
betweenstory_418,s_419,q_420,s_421,s_422,s_423,q_424,s_425,s_426,s_427,q_428,s_429,q_430,s_431,
betweenstory_432,s_433,q_434,s_435,q_436,s_437,s_438,q_439,s_440,s_441,q_442,s_443,q_444,s_445,q_446,s_447,
betweenstory_448,s_449,s_450,q_451,s_452,s_453,s_454,s_455,s_456,q_457,s_458,s_459,
betweenstory_460,s_461,s_462,q_463,s_464,q_465,s_466,s_467,q_468,s_469,s_470,q_471,s_472,s_473,
betweenstory_474,s_475,s_476,q_477,s_478,q_479,s_480,s_481,q_482,s_483,q_484,s_485,q_486,s_487,q_488,s_489,
betweenstory_490,s_491,s_492,s_493,q_494,s_495,q_496,s_497,q_498,s_499,s_500,q_501,s_502,q_503,s_504,
betweenstory_505,s_506,s_507,q_508,s_509,q_510,s_511,s_512,s_513,q_514,s_515,s_516,s_517,
betweenstory_518,s_519,q_520,s_521,q_522,s_523,s_524,s_525,q_526,s_527,q_528,s_529,s_530,q_531,s_532,
betweenstory_533,s_534,q_535,s_536,s_537,s_538,q_539,s_540,q_541,s_542,q_543,s_544,s_545,q_546,s_547,
betweenstory_548,s_549,s_550,q_551,s_552,s_553,q_554,s_555,s_556,s_557,q_558,s_559,s_560,
betweenstory_561,s_562,q_563,s_564,s_565,q_566,s_567,q_568,s_569,s_570,s_571,s_572,q_573,s_574,
betweenstory_575,s_576,q_577,s_578,q_579,s_580,q_581,s_582,s_583,q_584,s_585,q_586,s_587,s_588,q_589,s_590,
betweenstory_591,s_592,s_593,q_594,s_595,q_596,s_597,q_598,s_599,s_600,s_601,s_602,q_603,s_604,
betweenstory_605,s_606,s_607,s_608,s_609,q_610,s_611,s_612,s_613,q_614,s_615,q_616,s_617,
betweenstory_618,s_619,s_620,q_621,s_622,q_623,s_624,s_625,s_626,s_627,s_628,s_629,
betweenstory_630,s_631,s_632,s_633,q_634,s_635,q_636,s_637,q_638,s_639,s_640,s_641,s_642,
betweenstory_643,s_644,q_645,s_646,q_647,s_648,s_649,s_650,q_651,s_652,s_653,s_654,q_655,s_656,
betweenstory_657,s_658,s_659,q_660,s_661,q_662,s_663,s_664,q_665,s_666,q_667,s_668,q_669,s_670,s_671,
betweenstory_672,],

  on_finish: function() {
    // psiturk save
    psiturk.saveData({
        success: function() { 
            psiturk.completeHIT(); 
        }
    });
  },
});

