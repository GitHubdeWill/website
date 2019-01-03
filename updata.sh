git add *
git commit -am "$(date +%s%N)"
scp -r ./* ziweihe@webadmin.oit.umass.edu:~/public_html/

