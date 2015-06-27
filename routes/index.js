var express = require('express');
var router = express.Router();
var read = require('node-readability');

/* GET home page. */
router.get('/', function(req, res, next) {

  var url = 'http://www.triethocduongpho.com/2015/06/24/ban-ve-lam-dung-danh-xung/';
  read(url, {}, function(err, article, meta) {
    if (err) {
      res.send('err');
      console.log(err);
    } else {
      res.send(article.content);
      // res.send(article.html);
      article.close();
    }
  });
});

module.exports = router;
