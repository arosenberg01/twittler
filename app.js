$(document).ready(function(){  
  var tweetCount = 0;
  var maxTweets = 5;
  
  var createTweet = function() {
    var currentTweet = streams.home[streams.home.length-1];
    currentTweet.timestamp = moment(currentTweet.created_at).fromNow();

    var tweetData = {
      tweetList: [
        currentTweet
      ]
    }
    var tweetSource = $("#tweet-template").html();
    var tweetTemplate = Handlebars.compile(tweetSource);
    var tweetHtml = tweetTemplate(tweetData);
  
    $('.tweetList').prepend(tweetHtml);
  }

  var removeTweet = function() {
    var $li = $('li');
      $li[$li.length-1].remove();
  }

  var startTweets = setInterval(function() {
    if (tweetCount >= maxTweets) {
      removeTweet();
    }
    createTweet();
    tweetCount++
  }, 1000);



});

