
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

  var url = 'http://nghiencuulichsu.com/2015/07/24/tu-nguyen-truong-to-toi-bo-ngu-vinh-quynh-ton-to-khoi-bai-2/';

  craw.queue([{
    uri: url,
    callback: function(err, result, $) {
      var content = $('#content').remove().html();
      res.send(content);
    }
  }]);
});

module.exports = router;
