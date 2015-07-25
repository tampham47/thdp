
var Crawler = require('crawler');
var Express = require('express');

var router = Express.Router();
var url = require('url');
var craw = new Crawler({
  maxConnections : 10,
  // This will be called for each crawled page
  callback : function (error, result, $) {
    // $ is Cheerio by default
    //a lean implementation of core jQuery designed specifically for the server
    $('a').each(function(index, a) {
      var toQueueUrl = $(a).attr('href');
      craw.queue(toQueueUrl);
    });
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {

  craw.queue([{
    uri: 'http://www.triethocduongpho.com/2015/06/24/ban-ve-lam-dung-danh-xung/',
    callback: function(err, result, $) {
      var $content = $('main').remove();
      res.send($content.html());
    }
  }]);
});

module.exports = router;
