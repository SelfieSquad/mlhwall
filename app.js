var twitter = require('./twitter.js');
var clarifai = require('./clarifai.js');

twitter.getTweets('#LocalHackDay', function(tData) {
  tData.statuses.forEach(function(i) {
    clarifai.getTags(i.entities.media[0].media_url, function(cData) {
      console.log(cData);
    });
  });
});
