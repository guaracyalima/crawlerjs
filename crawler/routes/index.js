var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');


/* GET home page. */
router.get('/', function(req, res, next) {

    var $ = cheerio.load('<h1 class="title">Wellcome to Express</h1>>')

    $('.title').css('color', 'blue')
    $('.title').addClass('welcome')
    $('.welcome').css('font-size', '90em');

    $('<h2 class="school">SON</h2>').prependTo('.title');
    res.send($.html())

  // var options = {
  //   url: 'https://br.search.yahoo.com/search?p=forebex&fr=yfp-t&fp=1&toggle=1&cop=mss&ei=UTF-8',
  //     form: {
  //
  //     },
  //     headers: {
  //
  //     }
  // }
  // request(options, function (error, response, body) {
  //     if(error || response.statusCode  != 200){
  //       return;
  //     }
  //
  //     res.render('index', {
  //       title: 'Express',
  //       body: body
  //     });
  // })
//  res.render('index', { title: 'Express' });
});

module.exports = router;
