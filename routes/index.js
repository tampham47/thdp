var express = require('express');
var router = express.Router();
// var read = require('easy-read');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  // read('http://www.triethocduongpho.com/2015/06/05/vi-sao-chu-nghia-nha-nuoc-that-bai/', function(result) {
  //   // console.log(result.title, result.content);
  //   res.send(result.content);
  // });
});

module.exports = router;
