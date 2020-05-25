git add *
git commit -am "$(date +%s%N)"
git push
scp -r ./* ziweihe@webadmin.oit.umass.edu:~/public_html/

