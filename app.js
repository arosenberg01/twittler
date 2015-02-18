$(document).ready(function(){  
  
  var maxTweets = 10;
  var tweetDelay = 100;
  var tweetFilter = null;
  var tweetHistory = streams.home;
  
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

  var createTweets = function() {
    var tweetData = {
      tweetList: [
      ]
    }
    
    for (var i = 1; i < maxTweets + 1; i++) {
      var currentTweet = tweetHistory[tweetHistory.length-i];
      currentTweet.timestamp = moment(currentTweet.created_at).fromNow();
      tweetData.tweetList.push(currentTweet);
    }  

    var tweetSource = $("#tweet-template").html();
    var tweetTemplate = Handlebars.compile(tweetSource);
    var tweetHtml = tweetTemplate(tweetData);
  
    $('.tweetList').html(tweetHtml);
  } 


  var showTweets = setInterval(function() {
      createTweets();
  }, tweetDelay);

});



