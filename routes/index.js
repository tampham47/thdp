var express = require('express');
var router = express.Router();
var read = require('node-readability');
var jsdom = require('jsdom');
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {

  var url = 'http://www.triethocduongpho.com/2015/06/24/ban-ve-lam-dung-danh-xung/';
  // var url = 'http://genk.vn/kham-pha/nhung-buc-anh-dang-kinh-ngac-cho-thay-tinh-trang-o-nhiem-tai-trung-quoc-20150202143233258.chn';
  // read(url, {}, function(err, article, meta) {
  //   if (err) {
  //     res.send('err');
  //     console.log(err);
  //   } else {
  //     res.send(article.content);
  //     // res.send(article.html);
  //     article.close();
  //   }
  // });

  // jsdom.env(url, ['http://code.jquery.com/jquery.js'], function(err, window) {
  //   if (err) {
  //     console.log('err', err);
  //     res.send(err);
  //   } else {
  //     res.send(window.$('body'));
  //   }
  // });

  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      console.log(html);
      var $query = cheerio.load(html);
      $query = $query('main').remove();

      res.send($query.html());
    }
  });
});

module.exports = router;
