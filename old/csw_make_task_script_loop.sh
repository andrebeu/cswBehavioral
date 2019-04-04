nsubs=$1
npasses=$2 # number of story passes

# directories and folders
csw_dir="/Users/abeukers/wd/csw"
exp_dir="${csw_dir}/experiments/exp_$(date +%m%d)"
rm -r ${exp_dir}
task_folder="${exp_dir}/task"
expinfo_folder="${exp_dir}/exp_info"
mkdir -p ${task_folder} ${expinfo_folder}

for sub in $(seq 0 $((nsubs-1)));do

	# generate task script
	cd ${csw_dir}/utils
	python csw_make_task_script.py S${sub} ${expinfo_folder}/QA_S${sub}.txt
	mv "experiment_info-S"${sub}".txt" ${expinfo_folder}
	mv "csw_task-S"${sub}".js" ${task_folder}

done

# move task folder into ../experiments/csw_mturk_template/static/js/task
rm ${csw_dir}/experiments/csw_mturk_template/static/js/task/*
rm ${csw_dir}/experiments/csw_mturk_template/exp_info/*
rsync -r -vam "${exp_dir}/task" "${csw_dir}/experiments/csw_mturk_template/static/js/"
rsync -r -vam "${exp_dir}/exp_info" "${csw_dir}/experiments/csw_mturk_template/"

echo
echo "CONFIRM schema file: ${schema}"
echo 

# rsync 
bash csw_rsync.sh ${csw_dir}



