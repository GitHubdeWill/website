var express = require("express");
var path = require('path');

var router = express.Router();

const { promisify } = require('util');
const exec = promisify(require('child_process').exec)


var list_dir = async function list_dir (dir_name) {
    const file_list = await exec('ls -l '+dir_name+" | sed 1d | awk '{print $9} {print $6, $7, $8}'");
    return file_list;
};

router.get("/list_posts", async function(req, res, next) {
    var post_dir =  path.join(__dirname, '../public_resources/markdowns');
    var ret = await list_dir(post_dir);
    var retjson = '{"posts":['+JSON.stringify(ret.stdout.trim()).replace(/\\n/g, '","')+']}';
    console.log(retjson);

    res.setHeader('Content-Type',"application/json");
    res.send(retjson);
});

module.exports = router;