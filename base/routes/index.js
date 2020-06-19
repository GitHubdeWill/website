var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/post/_*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/post/*', function(req, res){
  var reqpath = req.params[0];
  // reqpath = path.join(__dirname, '../public', reqpath);
  // console.log(reqpath);
  res.sendFile(reqpath, {root: path.join(__dirname, '../public')});
});

router.get('/*', function(req, res){
  var reqpath = req.params[0];
  // reqpath = path.join(__dirname, '../public', reqpath);
  // console.log(reqpath);
  res.sendFile(reqpath, {root: path.join(__dirname, '../public')});
});

module.exports = router;
