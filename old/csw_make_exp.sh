nsubs=$1
schema=$2
npasses=$3 # number of story passes

csw_dir=$(pwd)

exp_dir="${csw_dir}/experiments/exp_$(date +%m%d)"
mkdir ${exp_dir}
cp -r utils/* ${exp_dir}


for sub in $(seq 1 ${nsubs});do

	# initialize subject folder 
	subj_folder=${exp_dir}/S_${sub}
	mkdir ${subj_folder}

	# generate QA files into subject folder
	cd ${csw_dir}/engine/src
	python run_engine.py $schema $npasses 1
	mv ../story/${schema}_${npasses}_1/${schema}_QA_${npasses}_1.txt ${subj_folder}

	# generate experiment file
	cd ${exp_dir}
	python csw_make_task_script.py ${subj_folder}

	# jspsych files
	cp -r jspsych-master ${subj_folder}

done