$(document).ready(function(){  

  var tweetSource = $("#tweet-template").html();
  var tweetTemplate = Handlebars.compile(tweetSource);

    var tweetData = { 
    tweetList: [
      {user: "Tim", message: "Hello everyone", timestamp: "a few seconds ago"},
      {user: "Jessica", message: "Greetings earthlings", timestamp: "1 minute ago"},
      {user: "Mike", message: "Is this thing on?", timestamp: "3 minutes ago"}
    ]
  }

  var html = tweetTemplate(tweetData);
  
  $('.tweetList').append(html);
  
  // var $body = $('body');
  // var tweeted = 0;
  // var maxTweets = 5;
  // $body.html('');

  // var showTweet = function() {
  //   var tweet = streams.home[streams.home.length-1];
    
  //   var $tweet = $('<div class="tweet' + ' ' + tweet.user + '"></div>');
  //   var tweetTimeFromNow = moment(tweet.created_at).fromNow();
  //   $tweet.text('@' + tweet.user + ': ' + tweet.message + " - " + tweetTimeFromNow);
  //   $tweet.prependTo($body);
  //   tweeted++;
  // }

  // var removeTweet = function() {
  //   var $divs = $('div');
  //   $divs[$divs.length-1].remove();
  // }
  
  // var startTweets = setInterval(function () {
  //   showTweet();
  //    if (tweeted > maxTweets) {
  //     removeTweet();
  //   }
  // }, 2000);

});

