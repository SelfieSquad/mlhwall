var express = require('express');
var twitter = require('./twitter.js');
var clarifai = require('./clarifai.js');

var app = express();

app.use(express.static('frontend_website'));

app.get('/test', function(req, res) {
  var html = '';
  var run = 0;

  twitter.getTweets('#LocalHackDay', function(tData) {

    for(i = 0; i < tData.statuses.length; i++) {
      console.log(i);
      console.log((tData.statuses.length));

      if(tData.statuses[i].entities.media) {
        clarifai.getTags(tData.statuses[i].entities.media[0].media_url, function(cData) {
          run++;

          console.log(cData);

          html = html + '<img src="' + JSON.parse(cData).results[0].url + '">'

          if(run >= tData.statuses.length - 1) {
            console.log(html);
            res.send(html);
          }

          console.log(run);
        });
      }
    }
  });
});

app.listen(8000);
