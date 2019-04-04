

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
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_7 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
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
		pages: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.']
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
	var q_54 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Jesse.', 'Olivia turned to Jesse and gave him a very mean look.']
	} 
	var s_55 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_56 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_57 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_58 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_59 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_60 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
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
	var q_65 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_66 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_67 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Jesse.']
	} 
	var s_68 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var q_69 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_70 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_71 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
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
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_75 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
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
	var s_79 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var q_80 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_81 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_82 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_83 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Jesse.']
	} 
	var s_84 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var s_85 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_86 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_87 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_88 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_89 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_90 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.']
	} 
	var s_91 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.']
	} 
	var s_92 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a mocha.']
	} 
	var s_93 = {
		type: 'instructions',
		pages: ['Olivia stared with rage into Silvia\'s eyes.']
	} 
	var s_94 = {
		type: 'instructions',
		pages: ['Silvia snatched a cake and crumbled it above Olivia\'s head.']
	} 
	var s_95 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var q_96 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_97 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_98 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_99 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_100 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_101 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_102 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.']
	} 
	var q_103 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia ignored him and proceeded to order a latte.', 'Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_104 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_105 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_106 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_107 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_108 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_109 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_110 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_111 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_112 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_113 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_114 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_115 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_116 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_117 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Silvia.', 'Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_118 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Silvia.']
	} 
	var s_119 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var q_120 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_121 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_122 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_123 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_124 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_125 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_126 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_127 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_128 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Olivia\'s foot.', 'Without hesitating he cut Olivia, the first person in line.']
	} 
	var s_129 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_130 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_131 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Olivia.', 'Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_132 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.']
	} 
	var q_133 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Ben\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Ben.']
	} 
	var s_134 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var q_135 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_136 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var q_137 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Ben to leave.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_138 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_139 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_140 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_141 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_142 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_143 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_144 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Olivia, the first person in line.', 'Clumsily, she stepped on Olivia\'s foot.']
	} 
	var s_145 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Olivia, the first person in line.']
	} 
	var s_146 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Silvia.']
	} 
	var s_147 = {
		type: 'instructions',
		pages: ['Silvia ignored her and proceeded to order a latte.']
	} 
	var s_148 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Silvia.']
	} 
	var q_149 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_150 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var q_151 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_152 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_153 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_154 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_155 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_156 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_157 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_158 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Ben\'s foot.']
	} 
	var q_159 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_160 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_161 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.']
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
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_166 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_167 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_168 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
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
	var s_173 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_174 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Jesse.']
	} 
	var s_175 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var s_176 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var q_177 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"', 'In retaliation, Olivia pushed Jesse.']
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
	var q_181 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_182 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_183 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_184 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_185 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_186 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_187 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Jesse, the first person in line.', 'Clumsily, he stepped on Jesse\'s foot.']
	} 
	var s_188 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Jesse, the first person in line.']
	} 
	var q_189 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
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
	var q_194 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_195 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_196 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_197 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_198 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_199 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
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
		labels: ['Ben promptly stepped back in front of Olivia.', 'Olivia promptly stepped back in front of Ben.']
	} 
	var s_206 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Ben.']
	} 
	var q_207 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben ignored her and proceeded to order a mocha.', 'Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_208 = {
		type: 'instructions',
		pages: ['Ben ignored her and proceeded to order a mocha.']
	} 
	var q_209 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Ben\'s eyes.', 'In retaliation, Olivia pushed Ben.']
	} 
	var s_210 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var q_211 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.', 'Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_212 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_213 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_214 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_215 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_216 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_217 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_218 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_219 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_220 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Olivia promptly stepped back in front of Jesse.']
	} 
	var s_221 = {
		type: 'instructions',
		pages: ['Olivia promptly stepped back in front of Jesse.']
	} 
	var s_222 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Olivia.']
	} 
	var s_223 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_224 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_225 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_226 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_227 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_228 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
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
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.']
	} 
	var s_235 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_236 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.']
	} 
	var s_237 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_238 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_239 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_240 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_241 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_242 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_243 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_244 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_245 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_246 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_247 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Silvia\'s foot.', 'Without hesitating she cut Silvia, the first person in line.']
	} 
	var s_248 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.']
	} 
	var q_249 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_250 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_251 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Olivia turned to Silvia and gave her a very mean look.']
	} 
	var s_252 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var q_253 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Silvia pushed Olivia.']
	} 
	var s_254 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_255 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_256 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_257 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_258 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_259 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_260 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_261 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_262 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_263 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_264 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_265 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_266 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Jesse turned to Olivia and gave her a very mean look.']
	} 
	var s_267 = {
		type: 'instructions',
		pages: ['Jesse turned to Olivia and gave her a very mean look.']
	} 
	var q_268 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stared with rage into Jesse\'s eyes.', 'Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_269 = {
		type: 'instructions',
		pages: ['Olivia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_270 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_271 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_272 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_273 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_274 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_275 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_276 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_277 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_278 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_279 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_280 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_281 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var q_282 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stared with rage into Silvia\'s eyes.', 'Silvia stared with rage into Ben\'s eyes.']
	} 
	var s_283 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var q_284 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a muffin and crumbled it above Ben\'s head.', 'Ben snatched a muffin and crumbled it above Silvia\'s head.']
	} 
	var s_285 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var s_286 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var q_287 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_288 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_289 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_290 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_291 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_292 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_293 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_294 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned to Ben and gave him a very mean look.', 'Silvia proceeded to give a slight shove to Ben.']
	} 
	var s_295 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_296 = {
		type: 'instructions',
		pages: ['Ben yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var s_297 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_298 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_299 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_300 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_301 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_302 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_303 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Silvia, the first person in line.', 'Clumsily, she stepped on Silvia\'s foot.']
	} 
	var s_304 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Silvia\'s foot.']
	} 
	var q_305 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_306 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_307 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Silvia.', 'Silvia proceeded to give a slight shove to Olivia.']
	} 
	var s_308 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var s_309 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_310 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_311 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_312 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_313 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_314 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_315 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_316 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_317 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_318 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_319 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Olivia, the first person in line.', 'Clumsily, he stepped on Olivia\'s foot.']
	} 
	var s_320 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Olivia, the first person in line.']
	} 
	var q_321 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia promptly stepped back in front of Ben.', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_322 = {
		type: 'instructions',
		pages: ['Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_323 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Olivia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_324 = {
		type: 'instructions',
		pages: ['Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_325 = {
		type: 'instructions',
		pages: ['In retaliation, Olivia pushed Ben.']
	} 
	var s_326 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_327 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_328 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_329 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_330 = {
		type: 'instructions',
		pages: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_331 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_332 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_333 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.']
	} 
	var s_334 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var q_335 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Jesse.', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_336 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_337 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Jesse.']
	} 
	var s_338 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var q_339 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"', 'Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_340 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_341 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_342 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_343 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_344 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_345 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_346 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_347 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_348 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var q_349 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_350 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var q_351 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Silvia promptly stepped back in front of Ben.']
	} 
	var s_352 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_353 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Ben proceeded to give a slight shove to Silvia.']
	} 
	var s_354 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_355 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.']
	} 
	var q_356 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.', 'Silvia snatched a lemonsquare and crumbled it above Ben\'s head.']
	} 
	var s_357 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.']
	} 
	var s_358 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_359 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_360 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_361 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_362 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_363 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_364 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating he cut Silvia, the first person in line.', 'Clumsily, he stepped on Silvia\'s foot.']
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
		labels: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"', 'Silvia stared with rage into Jesse\'s eyes.']
	} 
	var s_369 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Jesse\'s eyes.']
	} 
	var q_370 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a cake and crumbled it above Jesse\'s head.', 'Jesse snatched a cake and crumbled it above Silvia\'s head.']
	} 
	var s_371 = {
		type: 'instructions',
		pages: ['Jesse snatched a cake and crumbled it above Silvia\'s head.']
	} 
	var q_372 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_373 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Jesse to leave.']
	} 
	var s_374 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_375 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_376 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_377 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_378 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Silvia, the first person in line.']
	} 
	var q_379 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_380 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_381 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Silvia.']
	} 
	var s_382 = {
		type: 'instructions',
		pages: ['Silvia yelled into Olivia\'s face, \"Hey! Relax.\"']
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
	var q_386 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_387 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_388 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_389 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_390 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Ben\'s foot.', 'Without hesitating she cut Ben, the first person in line.']
	} 
	var s_391 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var q_392 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_393 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_394 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_395 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.']
	} 
	var s_396 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_397 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_398 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_399 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var s_400 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_401 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_402 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_403 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_404 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_405 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_406 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_407 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_408 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var s_409 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_410 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Ben and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_411 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_412 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Ben pushed Olivia.', 'Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_413 = {
		type: 'instructions',
		pages: ['In retaliation, Ben pushed Olivia.']
	} 
	var q_414 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Olivia\'s head.', 'Olivia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_415 = {
		type: 'instructions',
		pages: ['Olivia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_416 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var q_417 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_418 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_419 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_420 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_421 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_422 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_423 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_424 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned to Jesse and gave him a very mean look.', 'Olivia proceeded to give a slight shove to Jesse.']
	} 
	var s_425 = {
		type: 'instructions',
		pages: ['Olivia turned to Jesse and gave him a very mean look.']
	} 
	var s_426 = {
		type: 'instructions',
		pages: ['Jesse yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_427 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_428 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_429 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_430 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_431 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_432 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_433 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_434 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_435 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_436 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, she stepped on Jesse\'s foot.', 'Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_437 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var q_438 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Olivia.']
	} 
	var s_439 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Olivia.']
	} 
	var s_440 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var q_441 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Jesse pushed Olivia.', 'In retaliation, Olivia pushed Jesse.']
	} 
	var s_442 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.']
	} 
	var s_443 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var s_444 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_445 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_446 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_447 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_448 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_449 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_450 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Silvia\'s foot.', 'Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_451 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_452 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_453 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_454 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Silvia.', 'Silvia proceeded to give a slight shove to Jesse.']
	} 
	var s_455 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.']
	} 
	var q_456 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"', 'Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_457 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_458 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.', 'Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_459 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var q_460 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_461 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_462 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_463 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_464 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_465 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_466 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_467 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_468 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.']
	} 
	var s_469 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_470 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Olivia turned to Ben and gave him a very mean look.']
	} 
	var s_471 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_472 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.']
	} 
	var s_473 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_474 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_475 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_476 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_477 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_478 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_479 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_480 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_481 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Olivia.']
	} 
	var s_482 = {
		type: 'instructions',
		pages: ['Ben promptly stepped back in front of Olivia.']
	} 
	var s_483 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var q_484 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"', 'In retaliation, Ben pushed Olivia.']
	} 
	var s_485 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var s_486 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_487 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.', 'Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var s_488 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Olivia to leave before anyone pressed charges.']
	} 
	var q_489 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"', 'Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_490 = {
		type: 'instructions',
		pages: ['Olivia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_491 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_492 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_493 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_494 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_495 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Silvia\'s foot.']
	} 
	var q_496 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia was really annoyed and said, \"Excuse me?!\"', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_497 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_498 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned to Silvia and gave her a very mean look.', 'Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_499 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_500 = {
		type: 'instructions',
		pages: ['Silvia stared with rage into Ben\'s eyes.']
	} 
	var q_501 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia snatched a lemonsquare and crumbled it above Ben\'s head.', 'Ben snatched a lemonsquare and crumbled it above Silvia\'s head.']
	} 
	var s_502 = {
		type: 'instructions',
		pages: ['Ben snatched a lemonsquare and crumbled it above Silvia\'s head.']
	} 
	var q_503 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Ben to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_504 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var q_505 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_506 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_507 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_508 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_509 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_510 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_511 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var q_512 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse was really annoyed and said, \"Excuse me?!\"', 'Jesse promptly stepped back in front of Silvia.']
	} 
	var s_513 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.']
	} 
	var s_514 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.']
	} 
	var s_515 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.']
	} 
	var q_516 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_517 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_518 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_519 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_520 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_521 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_522 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_523 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_524 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_525 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_526 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_527 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_528 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var q_529 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a muffin and crumbled it above Silvia\'s head.', 'Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var s_530 = {
		type: 'instructions',
		pages: ['Silvia snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var q_531 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_532 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_533 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_534 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_535 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_536 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var q_537 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Ben, the first person in line.', 'Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_538 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_539 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben promptly stepped back in front of Silvia.', 'Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_540 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_541 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_542 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var s_543 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_544 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var q_545 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_546 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
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
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var s_551 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_552 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse proceeded to give a slight shove to Ben.', 'Jesse turned to Ben and gave him a very mean look.']
	} 
	var s_553 = {
		type: 'instructions',
		pages: ['Jesse turned to Ben and gave him a very mean look.']
	} 
	var s_554 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Jesse\'s eyes.']
	} 
	var s_555 = {
		type: 'instructions',
		pages: ['Jesse snatched a muffin and crumbled it above Ben\'s head.']
	} 
	var s_556 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_557 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_558 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_559 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_560 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_561 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_562 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var s_563 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Silvia, the first person in line.']
	} 
	var s_564 = {
		type: 'instructions',
		pages: ['Silvia was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_565 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse turned to Silvia and gave her a very mean look.', 'Jesse proceeded to give a slight shove to Silvia.']
	} 
	var s_566 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Silvia.']
	} 
	var s_567 = {
		type: 'instructions',
		pages: ['Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_568 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_569 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_570 = {
		type: 'instructions',
		pages: ['Ben, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var s_571 = {
		type: 'instructions',
		pages: ['Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_572 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 
	var s_573 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_574 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_575 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var q_576 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Without hesitating she cut Jesse, the first person in line.', 'Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_577 = {
		type: 'instructions',
		pages: ['Clumsily, she stepped on Jesse\'s foot.']
	} 
	var s_578 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_579 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Jesse.']
	} 
	var q_580 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['In retaliation, Olivia pushed Jesse.', 'In retaliation, Jesse pushed Olivia.']
	} 
	var s_581 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Olivia.']
	} 
	var s_582 = {
		type: 'instructions',
		pages: ['Olivia snatched a muffin and crumbled it above Jesse\'s head.']
	} 
	var q_583 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Jesse to leave.', 'The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_584 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_585 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_586 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_587 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_588 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_589 = {
		type: 'instructions',
		pages: ['Jesse angrily walked into the coffee shop.']
	} 
	var q_590 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Clumsily, he stepped on Ben\'s foot.', 'Without hesitating he cut Ben, the first person in line.']
	} 
	var s_591 = {
		type: 'instructions',
		pages: ['Without hesitating he cut Ben, the first person in line.']
	} 
	var q_592 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Ben promptly stepped back in front of Jesse.']
	} 
	var s_593 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_594 = {
		type: 'instructions',
		pages: ['Jesse proceeded to give a slight shove to Ben.']
	} 
	var q_595 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"', 'Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_596 = {
		type: 'instructions',
		pages: ['Ben yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var q_597 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_598 = {
		type: 'instructions',
		pages: ['Jesse picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var s_599 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Jesse to leave before anyone pressed charges.']
	} 
	var q_600 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Jesse turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var s_601 = {
		type: 'instructions',
		pages: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var q_602 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_603 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_604 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_605 = {
		type: 'instructions',
		pages: ['Ben angrily walked into the coffee shop.']
	} 
	var s_606 = {
		type: 'instructions',
		pages: ['Clumsily, he stepped on Jesse\'s foot.']
	} 
	var s_607 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_608 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben proceeded to give a slight shove to Jesse.', 'Ben turned to Jesse and gave him a very mean look.']
	} 
	var s_609 = {
		type: 'instructions',
		pages: ['Ben turned to Jesse and gave him a very mean look.']
	} 
	var s_610 = {
		type: 'instructions',
		pages: ['Jesse yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_611 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_612 = {
		type: 'instructions',
		pages: ['Silvia, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_613 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben turned and ran out yelling \"Juice is better, anyway!\"', 'Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_614 = {
		type: 'instructions',
		pages: ['Ben turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_615 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_616 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_617 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_618 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_619 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_620 = {
		type: 'instructions',
		pages: ['Jesse was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_621 = {
		type: 'instructions',
		pages: ['Silvia turned to Jesse and gave him a very mean look.']
	} 
	var q_622 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"', 'Silvia yelled into Jesse\'s face, \"Hey! Relax.\"']
	} 
	var s_623 = {
		type: 'instructions',
		pages: ['Jesse yelled into Silvia\'s face, \"Hey! Relax.\"']
	} 
	var q_624 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.', 'Jesse picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_625 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var s_626 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_627 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Jesse stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_628 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_629 = {
		type: 'instructions',
		pages: ['The barista handed Jesse a bunch of napkins and gave him a free drink out of sympathy.']
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
		pages: ['Clumsily, she stepped on Ben\'s foot.']
	} 
	var s_633 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_634 = {
		type: 'instructions',
		pages: ['Silvia turned to Ben and gave him a very mean look.']
	} 
	var s_635 = {
		type: 'instructions',
		pages: ['Ben stared with rage into Silvia\'s eyes.']
	} 
	var q_636 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben snatched a cookie and crumbled it above Silvia\'s head.', 'Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var s_637 = {
		type: 'instructions',
		pages: ['Silvia snatched a cookie and crumbled it above Ben\'s head.']
	} 
	var q_638 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Silvia to leave.', 'Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var s_639 = {
		type: 'instructions',
		pages: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.']
	} 
	var q_640 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_641 = {
		type: 'instructions',
		pages: ['Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_642 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_643 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_644 = {
		type: 'instructions',
		pages: ['Silvia angrily walked into the coffee shop.']
	} 
	var s_645 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Jesse, the first person in line.']
	} 
	var s_646 = {
		type: 'instructions',
		pages: ['Jesse promptly stepped back in front of Silvia.']
	} 
	var s_647 = {
		type: 'instructions',
		pages: ['Silvia ignored him and proceeded to order a coffee.']
	} 
	var s_648 = {
		type: 'instructions',
		pages: ['In retaliation, Jesse pushed Silvia.']
	} 
	var s_649 = {
		type: 'instructions',
		pages: ['Silvia picked up a cup of cream and splashed it in Jesse\'s face.']
	} 
	var q_650 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia, the police officer, ordered Silvia to leave before anyone pressed charges.', 'The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_651 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Silvia to leave.']
	} 
	var s_652 = {
		type: 'instructions',
		pages: ['Silvia turned and ran out yelling \"Juice is better, anyway!\"']
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
	var s_658 = {
		type: 'instructions',
		pages: ['Ben turned to Silvia and gave her a very mean look.']
	} 
	var s_659 = {
		type: 'instructions',
		pages: ['Silvia yelled into Ben\'s face, \"Hey! Relax.\"']
	} 
	var s_660 = {
		type: 'instructions',
		pages: ['Ben picked up a cup of cream and splashed it in Silvia\'s face.']
	} 
	var s_661 = {
		type: 'instructions',
		pages: ['Jesse, the police officer, ordered Ben to leave before anyone pressed charges.']
	} 
	var q_662 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"', 'Silvia stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_663 = {
		type: 'instructions',
		pages: ['Ben stormed out of the coffee shop yelling \"I hate coffee!\"']
	} 
	var s_664 = {
		type: 'instructions',
		pages: ['The barista handed Silvia a bunch of napkins and gave her a free drink out of sympathy.']
	} 

    var betweenstory_665 = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } 

	var s_666 = {
		type: 'instructions',
		pages: ['Olivia angrily walked into the coffee shop.']
	} 
	var s_667 = {
		type: 'instructions',
		pages: ['Without hesitating she cut Ben, the first person in line.']
	} 
	var q_668 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Ben was really annoyed and said, \"Excuse me?!\"', 'Olivia was really annoyed and said, \"Excuse me?!\"']
	} 
	var s_669 = {
		type: 'instructions',
		pages: ['Ben was really annoyed and said, \"Excuse me?!\"']
	} 
	var q_670 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia proceeded to give a slight shove to Ben.', 'Ben proceeded to give a slight shove to Olivia.']
	} 
	var s_671 = {
		type: 'instructions',
		pages: ['Olivia proceeded to give a slight shove to Ben.']
	} 
	var s_672 = {
		type: 'instructions',
		pages: ['Ben yelled into Olivia\'s face, \"Hey! Relax.\"']
	} 
	var q_673 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.', 'Ben picked up a cup of cream and splashed it in Olivia\'s face.']
	} 
	var s_674 = {
		type: 'instructions',
		pages: ['Olivia picked up a cup of cream and splashed it in Ben\'s face.']
	} 
	var q_675 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista ran out from behind the counter and ordered Olivia to leave.', 'The barista ran out from behind the counter and ordered Ben to leave.']
	} 
	var s_676 = {
		type: 'instructions',
		pages: ['The barista ran out from behind the counter and ordered Olivia to leave.']
	} 
	var s_677 = {
		type: 'instructions',
		pages: ['Olivia turned and ran out yelling \"Juice is better, anyway!\"']
	} 
	var q_678 = {
		type: 'html-slider-response',
		stimulus: '<p> What happens next? <p>',
		labels: ['The barista handed Olivia a bunch of napkins and gave her a free drink out of sympathy.', 'The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 
	var s_679 = {
		type: 'instructions',
		pages: ['The barista handed Ben a bunch of napkins and gave him a free drink out of sympathy.']
	} 

    var betweenstory_680 = {
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
betweenstory_49,questions_begin_50,s_51,s_52,s_53,q_54,s_55,s_56,q_57,s_58,s_59,q_60,s_61,s_62,
betweenstory_63,s_64,q_65,s_66,q_67,s_68,q_69,s_70,s_71,s_72,s_73,q_74,s_75,s_76,
betweenstory_77,s_78,s_79,q_80,s_81,s_82,s_83,s_84,s_85,s_86,s_87,
betweenstory_88,s_89,s_90,s_91,s_92,s_93,s_94,s_95,q_96,s_97,s_98,
betweenstory_99,s_100,s_101,s_102,q_103,s_104,s_105,s_106,q_107,s_108,s_109,q_110,s_111,
betweenstory_112,s_113,s_114,q_115,s_116,q_117,s_118,s_119,q_120,s_121,q_122,s_123,s_124,s_125,
betweenstory_126,s_127,q_128,s_129,s_130,q_131,s_132,q_133,s_134,q_135,s_136,q_137,s_138,s_139,q_140,s_141,
betweenstory_142,s_143,q_144,s_145,s_146,s_147,s_148,q_149,s_150,q_151,s_152,q_153,s_154,s_155,
betweenstory_156,s_157,s_158,q_159,s_160,q_161,s_162,q_163,s_164,q_165,s_166,s_167,q_168,s_169,s_170,
betweenstory_171,s_172,s_173,q_174,s_175,s_176,q_177,s_178,q_179,s_180,q_181,s_182,s_183,s_184,
betweenstory_185,s_186,q_187,s_188,q_189,s_190,s_191,q_192,s_193,q_194,s_195,q_196,s_197,s_198,q_199,s_200,
betweenstory_201,s_202,q_203,s_204,q_205,s_206,q_207,s_208,q_209,s_210,q_211,s_212,s_213,q_214,s_215,s_216,
betweenstory_217,s_218,s_219,q_220,s_221,s_222,s_223,s_224,s_225,q_226,s_227,q_228,s_229,
betweenstory_230,s_231,q_232,s_233,q_234,s_235,q_236,s_237,s_238,s_239,q_240,s_241,q_242,s_243,s_244,
betweenstory_245,s_246,q_247,s_248,q_249,s_250,q_251,s_252,q_253,s_254,q_255,s_256,q_257,s_258,s_259,s_260,
betweenstory_261,s_262,q_263,s_264,s_265,q_266,s_267,q_268,s_269,q_270,s_271,s_272,q_273,s_274,q_275,s_276,
betweenstory_277,s_278,s_279,s_280,s_281,q_282,s_283,q_284,s_285,s_286,q_287,s_288,s_289,
betweenstory_290,s_291,s_292,s_293,q_294,s_295,s_296,s_297,s_298,s_299,s_300,
betweenstory_301,s_302,q_303,s_304,q_305,s_306,q_307,s_308,s_309,s_310,q_311,s_312,q_313,s_314,q_315,s_316,
betweenstory_317,s_318,q_319,s_320,q_321,s_322,q_323,s_324,s_325,s_326,s_327,s_328,q_329,s_330,
betweenstory_331,s_332,q_333,s_334,q_335,s_336,q_337,s_338,q_339,s_340,s_341,q_342,s_343,q_344,s_345,s_346,
betweenstory_347,s_348,q_349,s_350,q_351,s_352,q_353,s_354,s_355,q_356,s_357,s_358,s_359,q_360,s_361,
betweenstory_362,s_363,q_364,s_365,s_366,s_367,q_368,s_369,q_370,s_371,q_372,s_373,s_374,s_375,
betweenstory_376,s_377,s_378,q_379,s_380,s_381,s_382,s_383,s_384,s_385,q_386,s_387,
betweenstory_388,s_389,q_390,s_391,q_392,s_393,s_394,q_395,s_396,q_397,s_398,q_399,s_400,q_401,s_402,q_403,s_404,
betweenstory_405,s_406,q_407,s_408,s_409,q_410,s_411,q_412,s_413,q_414,s_415,s_416,q_417,s_418,s_419,
betweenstory_420,s_421,s_422,s_423,q_424,s_425,s_426,s_427,q_428,s_429,q_430,s_431,q_432,s_433,
betweenstory_434,s_435,q_436,s_437,q_438,s_439,s_440,q_441,s_442,s_443,s_444,s_445,q_446,s_447,
betweenstory_448,s_449,q_450,s_451,q_452,s_453,q_454,s_455,q_456,s_457,q_458,s_459,q_460,s_461,s_462,q_463,s_464,
betweenstory_465,s_466,s_467,q_468,s_469,q_470,s_471,q_472,s_473,s_474,s_475,s_476,s_477,
betweenstory_478,s_479,s_480,q_481,s_482,s_483,q_484,s_485,s_486,q_487,s_488,q_489,s_490,q_491,s_492,
betweenstory_493,s_494,s_495,q_496,s_497,q_498,s_499,s_500,q_501,s_502,q_503,s_504,q_505,s_506,q_507,s_508,
betweenstory_509,s_510,s_511,q_512,s_513,s_514,s_515,q_516,s_517,s_518,q_519,s_520,s_521,
betweenstory_522,s_523,q_524,s_525,s_526,s_527,s_528,q_529,s_530,q_531,s_532,s_533,s_534,
betweenstory_535,s_536,q_537,s_538,q_539,s_540,s_541,s_542,s_543,s_544,q_545,s_546,s_547,
betweenstory_548,s_549,s_550,s_551,q_552,s_553,s_554,s_555,s_556,q_557,s_558,q_559,s_560,
betweenstory_561,s_562,s_563,s_564,q_565,s_566,s_567,q_568,s_569,s_570,s_571,q_572,s_573,
betweenstory_574,s_575,q_576,s_577,s_578,s_579,q_580,s_581,s_582,q_583,s_584,s_585,q_586,s_587,
betweenstory_588,s_589,q_590,s_591,q_592,s_593,s_594,q_595,s_596,q_597,s_598,s_599,q_600,s_601,q_602,s_603,
betweenstory_604,s_605,s_606,s_607,q_608,s_609,s_610,s_611,s_612,q_613,s_614,q_615,s_616,
betweenstory_617,s_618,s_619,s_620,s_621,q_622,s_623,q_624,s_625,s_626,q_627,s_628,s_629,
betweenstory_630,s_631,s_632,s_633,s_634,s_635,q_636,s_637,q_638,s_639,q_640,s_641,s_642,
betweenstory_643,s_644,s_645,s_646,s_647,s_648,s_649,q_650,s_651,s_652,s_653,
betweenstory_654,s_655,s_656,s_657,s_658,s_659,s_660,s_661,q_662,s_663,s_664,
betweenstory_665,s_666,s_667,q_668,s_669,q_670,s_671,s_672,q_673,s_674,q_675,s_676,s_677,q_678,s_679,
betweenstory_680,],

  on_finish: function() {
    // psiturk save
    psiturk.saveData({
        success: function() { 
            psiturk.completeHIT(); 
        }
    });
  },
});

