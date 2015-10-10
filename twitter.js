var Twit = require('twit');

var T = new Twit({
  consumer_key: 'ROPX9kKZOnUUpyS8fNH7LxeQb',
  consumer_secret: 'C0lhgSxODncc5O9iArAnYB9K8GHmrlDzA9uHqlqecZANHoHiMi',
  access_token: '2837561099-VPWRcCg3Tte4xKnCegWGStie8dGb5Nb5K88AY3d',
  access_token_secret: 'KXEQQ6pTgVosy5ST5gS7vFQTDJGue5tFJLcK5FI4SNoCm'
})

module.exports = {
  getTweets: function(hashtag, cb) {
    T.get('search/tweets', { q: hashtag + ' filter:images', count: 50 }, function(err, data, res) {
      console.log(data.statuses[0].entities);
      cb(data);
    });
  }
}
