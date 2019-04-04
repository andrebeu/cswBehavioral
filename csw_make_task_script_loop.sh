nsubs=$1
npasses=$2 


# this script will create a folder called exp_(date)
# containing an mturk experiment with task scripts in there
# it will also rsync this folder into VM


# directories and folders
csw_dir="/Users/abeukers/wd/csw"

# make new experiment folder
exp_dir="${csw_dir}/experiments/exp_$(date +%m%d)"
rm -r ${exp_dir}
mkdir -p ${exp_dir}
echo "making experiment folder in:"
echo ${exp_dir}

# copy cotents of mturk_template_folder into exp_dir
cp -r "${csw_dir}/experiments/csw_mturk_template/"* ${exp_dir}


cd "${csw_dir}/cswEngine"
# run tests
python "cswTests.py"
# generate N scripts with k passes in /Users/abeukers/wd/csw/experiments/task_scripts/
python -c "import cswMturk; cswMturk.write_N_mturk_taskscripts(${nsubs},${npasses})"

# move task scripts into ${exp_dir}/static/js/task
task_folder="${exp_dir}/static/js/task"
mkdir -p ${task_folder} 
mv "${csw_dir}/experiments/task_scripts/"* "${task_folder}"

# copy cswEngine into task folder
cp "${csw_dir}/cswEngine/cswEngine.py" "${task_folder}"
cp "${csw_dir}/cswEngine/"*".sch" "${task_folder}"
cp "${csw_dir}/cswEngine/"*".rfc" "${task_folder}"
cp "${csw_dir}/cswEngine/cswTests.out" "${task_folder}"

## rsync to VM
rsync -r -vam --update "${exp_dir}/"* \
						"psiturk-abeukers.princeton.edu:/home/abeukers/csw/exp_$(date +%m%d%H%M%S)"





