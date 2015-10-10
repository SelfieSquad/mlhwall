var request = require('request');

module.exports = {
  getTags: function(url, cb) {
    request.post({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ZkLAouo1lTUR9pGtLvQR4tWMpaLGea'
      },
      url: 'https://api.clarifai.com/v1/tag/',
      body: 'url=' + url
    }, function(err, res, data){
      console.log(err);
      cb(data);
    });
  }
};
