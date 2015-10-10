var request = require('request');

var object = {
  getTags: function(url, cb) {
    request.post({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer K1Ce2dnTNbsxDW70uRdmbUGgwv29RS'
      },
      url: 'https://api.clarifai.com/v1/tag/',
      body: 'url=' + url
    }, function(error, response, body){
      cb(body);
    });
  }
};

module.exports = object;
