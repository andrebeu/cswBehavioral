

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
	var s_54 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_55 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Jesse.']
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
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_60 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_61 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_62 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_63 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_64 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_65 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
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
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_72 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_73 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_74 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_75 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_76 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_77 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_78 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_79 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_80 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_82 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var q_83 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.']
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var s_85 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var q_86 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var q_88 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_89 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_90 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
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
	var s_94 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.']
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.']
	} 
	var q_96 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia ignored her and proceeded to order a mocha.', 'Silvia proceeded to give a slight shove to Olivia.']
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.']
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.']
	} 
	var s_99 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var q_100 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_102 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_103 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_104 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_105 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_106 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_107 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_108 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Olivia.']
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
	var q_112 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_113 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_115 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_116 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_117 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_118 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_119 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_120 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_121 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_122 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.']
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var q_125 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_126 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_127 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_128 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_129 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_131 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_132 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_133 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var q_134 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_135 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_137 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_140 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_142 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_143 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_144 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_145 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_146 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Olivia\'s foot.', 'Without hesitating she cut Olivia, the first person in line.']
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.']
	} 
	var q_148 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Silvia.']
	} 
	var s_149 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.']
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a latte.']
	} 
	var s_151 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Silvia.']
	} 
	var q_152 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_153 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_155 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_156 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_157 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_159 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_160 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_161 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Ben\'s foot.']
	} 
	var s_162 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_163 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var q_164 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Jesse.']
	} 
	var s_165 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_167 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_168 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_169 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_170 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_171 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_172 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_173 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_174 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var q_177 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_178 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_179 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var q_180 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia snatched a cake and crumbled it above Jesse\'s head.', 'Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var s_181 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var q_183 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
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
	var s_188 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.']
	} 
	var s_189 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_190 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.']
	} 
	var q_191 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_192 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var q_193 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_194 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_195 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_196 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_197 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_199 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_200 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_201 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_202 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_203 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_204 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_205 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Ben promptly stepped back in front of Olivia.']
	} 
	var s_206 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.']
	} 
	var q_207 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben ignored her and proceeded to order a mocha.', 'Olivia ignored him and proceeded to order a mocha.']
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Ben ignored her and proceeded to order a mocha.']
	} 
	var s_209 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var q_210 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_211 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_213 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_214 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
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
	var q_219 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Jesse.']
	} 
	var s_220 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_222 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_223 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var q_225 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_226 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_227 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_228 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_229 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_230 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_231 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_232 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_233 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_234 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_236 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_238 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_240 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_241 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_242 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_243 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_244 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_245 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_246 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_247 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_248 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_249 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.']
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_251 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Silvia.']
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var s_253 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_255 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_257 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_259 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_260 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_261 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var q_262 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_263 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['Jesse turned to Olivia and gave her a very mean look.']
	} 
	var q_265 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'Olivia stared with rage into Jesse\'s eyes.']
	} 
	var s_266 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_267 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_268 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_270 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_271 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_272 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_273 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_274 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_275 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_277 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_278 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_280 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var q_282 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_284 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_285 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_286 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_287 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_289 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_290 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_291 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var q_292 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_294 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_296 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
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
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.']
	} 
	var q_301 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_302 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_303 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_305 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_307 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_309 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_310 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_311 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_312 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_313 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_314 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Ben.']
	} 
	var s_315 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_316 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Ben turned to Olivia and gave her a very mean look.']
	} 
	var s_317 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_318 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var s_319 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_321 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_322 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_323 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_325 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_326 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_327 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var q_328 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_329 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_330 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.']
	} 
	var s_331 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var q_332 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_333 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_334 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_335 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_336 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_337 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_338 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_339 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_341 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_342 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_343 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_344 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_346 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_347 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_348 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_349 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_350 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_351 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_353 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_355 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_356 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Jesse turned to Silvia and gave her a very mean look.']
	} 
	var q_360 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'Silvia stared with rage into Jesse\'s eyes.']
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.']
	} 
	var q_362 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a cake and crumbled it above Silvia\'s head.', 'Silvia snatched a cake and crumbled it above Jesse\'s head.']
	} 
	var s_363 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Silvia\'s head.']
	} 
	var q_364 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_365 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var q_366 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_367 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_368 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_370 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_371 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_372 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Silvia\'s foot.', 'Without hesitating she cut Silvia, the first person in line.']
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.']
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_375 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Silvia and gave her a very mean look.', 'Olivia proceeded to give a slight shove to Silvia.']
	} 
	var s_376 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var q_377 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Silvia\'s face, \"Hey! Relax.\"', 'Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_379 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_380 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_382 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_383 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_384 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_385 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_386 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_387 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_388 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_389 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_390 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_392 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_395 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_396 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_397 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_398 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_399 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_400 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_401 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.']
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_403 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_405 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.']
	} 
	var s_406 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Olivia.']
	} 
	var s_407 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var q_408 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_410 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_412 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_414 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_415 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_416 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_417 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var q_418 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_420 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.']
	} 
	var q_421 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Olivia\'s eyes.', 'Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_423 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_424 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_425 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_428 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_430 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_431 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_432 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_433 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_434 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.']
	} 
	var s_435 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_436 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.']
	} 
	var s_437 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_438 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_439 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_441 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_443 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_444 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_446 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.']
	} 
	var q_448 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"', 'Jesse yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_449 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_450 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_451 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
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
	var s_455 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_456 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_457 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_458 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_460 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Olivia.', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_462 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_463 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_465 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_466 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_468 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_470 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_471 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_472 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_473 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_474 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.']
	} 
	var q_476 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_477 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_478 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.']
	} 
	var s_479 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_481 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_483 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_484 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_485 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_487 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_488 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_489 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_490 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_491 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_493 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.']
	} 
	var s_494 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.']
	} 
	var q_495 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_496 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var q_497 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_498 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_499 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_501 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_502 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_503 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var q_504 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Silvia.']
	} 
	var s_505 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.']
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.']
	} 
	var q_507 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Silvia pushed Jesse.', 'In retaliation, Jesse pushed Silvia.']
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.']
	} 
	var q_509 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_510 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_512 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_513 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
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
	var q_519 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_520 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_521 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.']
	} 
	var s_522 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var q_523 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stared with rage into Ben\'s eyes.', 'Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_524 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_527 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
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
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
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
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_536 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_537 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var q_538 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Silvia\'s head.', 'Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_539 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_541 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_542 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_544 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_545 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
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
	var q_551 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_552 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var q_553 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_555 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_557 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_558 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_559 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_560 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_561 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_562 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var q_563 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_565 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.']
	} 
	var q_566 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"', 'Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_568 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_570 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_572 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_574 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_575 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_576 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_577 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_580 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.']
	} 
	var q_582 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse snatched a muffin and crumbled it above Olivia\'s head.', 'Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_583 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_585 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_586 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_587 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_588 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_589 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var s_590 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_591 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var q_592 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_593 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_594 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_595 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_597 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_600 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_601 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_602 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.']
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Jesse\'s foot.']
	} 
	var s_604 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_605 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Jesse and gave him a very mean look.', 'Jesse turned to Ben and gave him a very mean look.']
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.']
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_608 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_610 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_613 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_614 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_615 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_617 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Silvia and gave her a very mean look.', 'Silvia turned to Jesse and gave him a very mean look.']
	} 
	var s_618 = {
		type: 'instructions',
		pages: ['Silvia turned to Jesse and gave him a very mean look.']
	} 
	var q_619 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'Jesse yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_622 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_624 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_626 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_627 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_630 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia proceeded to give a slight shove to Ben.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_631 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_632 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var q_633 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Silvia\'s head.', 'Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var q_635 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_636 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_637 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_638 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_639 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_640 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_641 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_642 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_643 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.']
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
	var q_647 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stared with rage into Silvia\'s eyes.', 'In retaliation, Jesse pushed Silvia.']
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.']
	} 
	var q_649 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_650 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_651 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var q_653 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_654 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_655 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_656 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_657 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_658 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_661 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_662 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var q_663 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Silvia stared with rage into Ben\'s eyes.']
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.']
	} 
	var s_665 = {
		type: 'instructions',
		pages: ['Ben snatched a muffin and crumbled it above Silvia\'s head.']
	} 
	var s_666 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_668 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_669 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_670 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_671 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_673 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_675 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_677 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Ben\'s face, \"Hey! Relax.\"', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_678 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_679 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_680 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_681 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_682 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_683 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_684 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_685 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_686 = {
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
betweenstory_49,questions_begin_50,s_51,q_52,s_53,s_54,q_55,s_56,s_57,s_58,q_59,s_60,q_61,s_62,s_63,
betweenstory_64,s_65,s_66,s_67,q_68,s_69,s_70,q_71,s_72,s_73,s_74,q_75,s_76,
betweenstory_77,s_78,q_79,s_80,s_81,s_82,q_83,s_84,s_85,q_86,s_87,q_88,s_89,q_90,s_91,
betweenstory_92,s_93,s_94,s_95,q_96,s_97,s_98,s_99,q_100,s_101,s_102,s_103,
betweenstory_104,s_105,q_106,s_107,q_108,s_109,s_110,s_111,q_112,s_113,s_114,s_115,q_116,s_117,
betweenstory_118,s_119,s_120,q_121,s_122,s_123,s_124,q_125,s_126,s_127,s_128,q_129,s_130,
betweenstory_131,s_132,s_133,q_134,s_135,s_136,s_137,s_138,s_139,q_140,s_141,q_142,s_143,
betweenstory_144,s_145,q_146,s_147,q_148,s_149,s_150,s_151,q_152,s_153,s_154,q_155,s_156,q_157,s_158,
betweenstory_159,s_160,s_161,s_162,s_163,q_164,s_165,s_166,q_167,s_168,q_169,s_170,s_171,
betweenstory_172,s_173,q_174,s_175,s_176,q_177,s_178,s_179,q_180,s_181,s_182,q_183,s_184,s_185,
betweenstory_186,s_187,s_188,s_189,s_190,q_191,s_192,q_193,s_194,q_195,s_196,q_197,s_198,q_199,s_200,
betweenstory_201,s_202,q_203,s_204,q_205,s_206,q_207,s_208,s_209,q_210,s_211,s_212,q_213,s_214,s_215,
betweenstory_216,s_217,s_218,q_219,s_220,s_221,s_222,q_223,s_224,q_225,s_226,s_227,q_228,s_229,
betweenstory_230,s_231,q_232,s_233,q_234,s_235,q_236,s_237,q_238,s_239,s_240,q_241,s_242,q_243,s_244,q_245,s_246,
betweenstory_247,s_248,s_249,s_250,q_251,s_252,s_253,s_254,s_255,s_256,q_257,s_258,
betweenstory_259,s_260,s_261,q_262,s_263,s_264,q_265,s_266,q_267,s_268,s_269,s_270,q_271,s_272,
betweenstory_273,s_274,s_275,s_276,q_277,s_278,s_279,s_280,s_281,q_282,s_283,s_284,
betweenstory_285,s_286,s_287,s_288,q_289,s_290,s_291,q_292,s_293,s_294,s_295,q_296,s_297,
betweenstory_298,s_299,s_300,q_301,s_302,s_303,s_304,s_305,s_306,q_307,s_308,s_309,
betweenstory_310,s_311,q_312,s_313,q_314,s_315,q_316,s_317,s_318,s_319,s_320,q_321,s_322,q_323,s_324,
betweenstory_325,s_326,s_327,q_328,s_329,q_330,s_331,q_332,s_333,q_334,s_335,q_336,s_337,q_338,s_339,s_340,
betweenstory_341,s_342,q_343,s_344,s_345,q_346,s_347,s_348,s_349,q_350,s_351,s_352,q_353,s_354,
betweenstory_355,s_356,s_357,s_358,s_359,q_360,s_361,q_362,s_363,q_364,s_365,q_366,s_367,q_368,s_369,
betweenstory_370,s_371,q_372,s_373,s_374,q_375,s_376,q_377,s_378,s_379,s_380,s_381,q_382,s_383,
betweenstory_384,s_385,q_386,s_387,s_388,q_389,s_390,s_391,q_392,s_393,s_394,s_395,q_396,s_397,
betweenstory_398,s_399,s_400,q_401,s_402,q_403,s_404,q_405,s_406,s_407,q_408,s_409,q_410,s_411,q_412,s_413,
betweenstory_414,s_415,q_416,s_417,q_418,s_419,s_420,q_421,s_422,q_423,s_424,q_425,s_426,s_427,q_428,s_429,
betweenstory_430,s_431,q_432,s_433,s_434,s_435,s_436,s_437,s_438,q_439,s_440,q_441,s_442,
betweenstory_443,s_444,s_445,s_446,s_447,q_448,s_449,q_450,s_451,s_452,q_453,s_454,s_455,
betweenstory_456,s_457,q_458,s_459,q_460,s_461,q_462,s_463,s_464,q_465,s_466,s_467,q_468,s_469,s_470,
betweenstory_471,s_472,q_473,s_474,s_475,q_476,s_477,q_478,s_479,s_480,q_481,s_482,q_483,s_484,q_485,s_486,
betweenstory_487,s_488,s_489,s_490,q_491,s_492,s_493,s_494,q_495,s_496,q_497,s_498,q_499,s_500,
betweenstory_501,s_502,s_503,q_504,s_505,s_506,q_507,s_508,q_509,s_510,s_511,s_512,q_513,s_514,
betweenstory_515,s_516,q_517,s_518,q_519,s_520,q_521,s_522,q_523,s_524,s_525,s_526,s_527,s_528,
betweenstory_529,s_530,q_531,s_532,q_533,s_534,q_535,s_536,s_537,q_538,s_539,s_540,s_541,q_542,s_543,
betweenstory_544,s_545,s_546,q_547,s_548,s_549,s_550,q_551,s_552,q_553,s_554,q_555,s_556,q_557,s_558,
betweenstory_559,s_560,q_561,s_562,q_563,s_564,s_565,q_566,s_567,q_568,s_569,q_570,s_571,q_572,s_573,s_574,
betweenstory_575,s_576,q_577,s_578,s_579,s_580,s_581,q_582,s_583,s_584,s_585,s_586,
betweenstory_587,s_588,s_589,s_590,s_591,q_592,s_593,q_594,s_595,s_596,q_597,s_598,s_599,
betweenstory_600,s_601,q_602,s_603,s_604,q_605,s_606,s_607,s_608,s_609,q_610,s_611,s_612,
betweenstory_613,s_614,s_615,s_616,q_617,s_618,q_619,s_620,s_621,q_622,s_623,s_624,s_625,
betweenstory_626,s_627,s_628,s_629,q_630,s_631,s_632,q_633,s_634,q_635,s_636,q_637,s_638,q_639,s_640,
betweenstory_641,s_642,q_643,s_644,s_645,s_646,q_647,s_648,q_649,s_650,q_651,s_652,q_653,s_654,q_655,s_656,
betweenstory_657,s_658,s_659,s_660,q_661,s_662,q_663,s_664,s_665,s_666,s_667,q_668,s_669,
betweenstory_670,s_671,s_672,q_673,s_674,q_675,s_676,q_677,s_678,s_679,q_680,s_681,q_682,s_683,q_684,s_685,
betweenstory_686,],

  on_finish: function() {
    // psiturk save
    psiturk.saveData({
        success: function() { 
            psiturk.completeHIT(); 
        }
    });
  },
});

