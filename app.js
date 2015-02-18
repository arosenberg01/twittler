$(document).ready(function(){  
  
  var tweetIndex;
  var tweetCount = 0;
  var maxTweets = 5;
  
  var createTweet = function() {
    tweetIndex = streams.home.length-1;
    var currentTweet = streams.home[tweetIndex];
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

  var showTweets = setInterval(function() {
    if (tweetIndex !== streams.home.length-1) {
      console.log('new tweet');
      if (tweetCount >= maxTweets) {
        removeTweet();
      }
      createTweet();
      tweetCount++
    }
  }, 1);





});

