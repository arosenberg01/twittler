$(document).ready(function(){  
  
  var maxTweets = 10;
  var tweetDelay = 100;
  var tweetFilter = null;
  var tweetHistory = streams.home;
  var lastTweet;
  
  var generateTweets = function(tweetSelection) {
    
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

  $(document.body).on('click', 'a', function() {
    
    var targetUser = this.className;
    var userTweets = streams.users[targetUser];
    console.log(targetUser + " length: " + userTweets.length);
    tweetHistory = userTweets;

  });

  var createTweets = function(tweetBank) {
    var tweetData = {
      tweetList: [
      ]
    }
    
    for (var i = 1; i < maxTweets + 1; i++) {
      var currentTweet = tweetHistory[tweetHistory.length-i];
      if (currentTweet !== undefined) {
        currentTweet.timestamp = moment(currentTweet.created_at).fromNow();
        tweetData.tweetList.push(currentTweet);
      } 
    }  

    var tweetSource = $("#tweet-template").html();
    var tweetTemplate = Handlebars.compile(tweetSource);
    var tweetHtml = tweetTemplate(tweetData);
    
    if (tweetHtml !== lastTweet) {
      $('.tweetList').html(tweetHtml);
      lastTweet = tweetTemplate(tweetData);
    }
    
  } 

  var showTweets = setInterval(function() {
      createTweets(tweetHistory);
  }, tweetDelay);

});



