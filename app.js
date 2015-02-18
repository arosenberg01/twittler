$(document).ready(function(){  
  
  var tweetIndex;
  var tweetCount = 0;
  var maxTweets = 10;
  var tweetDelay = 1000;
  var tweetFilter = null;

  var createTweet = function() {
  
    var tweetData = {
      tweetList: [
      ]
    }
    
    for (var i = 1; i < maxTweets + 1; i++) {
      var currentIndex = streams.home.length-i; 
      var currentTweet = streams.home[currentIndex];
      currentTweet.timestamp = moment(currentTweet.created_at).fromNow();
      tweetData.tweetList.push(currentTweet);
    }
    var tweetSource = $("#tweet-template").html();
    var tweetTemplate = Handlebars.compile(tweetSource);
    var tweetHtml = tweetTemplate(tweetData);
  
    $('.tweetList').prepend(tweetHtml);
    maxTweets = 1;
  } 

  var removeTweet = function() {
    var $li = $('li');
    $li[$li.length-1].remove();
  }

  var showTweets = setInterval(function() {
    if (tweetIndex !== streams.home.length-1) {
      if (tweetCount >= maxTweets) {
        removeTweet();
      }
      createTweet();
      tweetCount++
    }
  }, tweetDelay);

});



