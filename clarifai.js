var request = require('request');

module.exports = {
  getTags: function(url, cb) {
    request.post({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer K1Ce2dnTNbsxDW70uRdmbUGgwv29RS'
      },
      url: 'https://api.clarifai.com/v1/tag/',
      body: 'url=' + url
    }, function(err, res, data){
      cb(data);
    });
  }
};
