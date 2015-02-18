$(document).ready(function(){  
  
  var maxTweets = 10;
  var tweetDelay = 100;
  var tweetHistory = streams.home;
  var lastTweet;

  $(document.body).on('click', 'a', function() {
    var targetUser = this.className;
    if (targetUser !== "all") {
      tweetHistory = streams.users[targetUser];
    } else {
      tweetHistory = streams.home;
    }
  });

  var createTweets = function(tweetBank) {
    var tweetData = {
      tweetList: []
    }
    
    for (var i = 1; i <= maxTweets; i++) {
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
  }; 

  var showTweets = setInterval(function() {
      createTweets(tweetHistory);
  }, tweetDelay);

});



