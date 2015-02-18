$(document).ready(function(){  
  
  var maxTweets = 10;
  var tweetDelay = 1000;
  var tweetFilter = null;
  var feedHasStarted = false;

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
    feedHasStarted = true;
  } 

  var removeTweet = function() {
    var $li = $('li');
    $li[$li.length-1].remove();
  }

  var each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };

  var filter = function(collection, test) {
    var results = [];

    each(collection, function(item) {
      if (test(item)) {
        results.push(item);
      }
    });
    return results;
  };

  var showTweets = setInterval(function() {
      if (feedHasStarted) {
        removeTweet();
      }
      createTweet();
  }, tweetDelay);

});



