csw_dir="/Users/abeukers/wd/csw"

echo " ** from server to local?"
read yn1
if [ ${yn1} == "yes" ];then
	rsync -r -vam "psiturk-abeukers.princeton.edu:/home/abeukers/csw/" \
				  "/Users/abeukers/wd/csw/mturk_data/"
fi

echo " ** from local to server?"
read yn2
if [ ${yn2} == "yes" ];then
	rsync -r -vam --update "${exp_dir}/"* \
						"psiturk-abeukers.princeton.edu:/home/abeukers/csw/exp_$(date +%m%d%H%M%S)"
fi