var express = require("express"); 
var path = require('path');
var router = express.Router();

const { promisify } = require('util');
const exec = promisify(require('child_process').exec)


var list_dir = async function list_dir (dir_name) {
    const file_list = await exec('ls -t '+dir_name);
    return file_list;
};

router.get("/list_posts", async function(req, res, next) {
    var post_dir =  path.join(__dirname, '../public_resources/posts');
    var ret = await list_dir(post_dir);
    console.log(ret.stdout.trim().split('\n'));
    var filenames = ret.stdout.trim().split('\n');
    var array = [];
    for (let i = 0; i < filenames.length; i++) {
        let filename = filenames[i];
        var splitret = filename.split(":=");
        if (splitret.length != 2) continue;
        array.push({
            "date": splitret[0],
            "title": splitret[1].replace(".md", ""),
            "filename": filename
        });
    }
        
    var retjson = JSON.stringify(array);

    res.setHeader('Content-Type',"application/json");
    res.send(retjson);
});

module.exports = router;