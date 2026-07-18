var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Catch /post/_anything and serve the SPA (client-side routing)
router.get(/^\/post\/_.+/, function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// For other /post/* paths, try to serve the file from public
router.get(/^\/post\/.+/, function(req, res){
  var reqpath = req.path;
  res.sendFile(reqpath, {root: path.join(__dirname, '../public')});
});

// Fallback: try to serve from public
router.get(/.+/, function(req, res){
  var reqpath = req.path;
  res.sendFile(reqpath, {root: path.join(__dirname, '../public')});
});

module.exports = router;
