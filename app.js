var visitor = "ansel" || prompt("What's your name?");
streams.users[visitor] = [];

$(document).ready(function(){  
  
  var maxTweets = 10;
  var tweetDelay = 10;
  var tweetHistory = streams.home;
  var prevTotal;
  var tweetSource = $("#tweet-format").html();
  var tweetTemplate = Handlebars.compile(tweetSource);

  $('#submitTweet').on('click', function() {
    var userTweet = $('#userTweet').val();
    writeTweet(userTweet);
  });

  $(document.body).on('click', 'a', function() {
    var targetUser = this.className;
    if (targetUser !== "all") {
      tweetHistory = streams.users[targetUser];
    } else {
      tweetHistory = streams.home;
    }
  });

  var createTweets = function() {
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

    var tweetHtml = tweetTemplate(tweetData);
    $('.tweetList').html(tweetHtml);
  }; 

  (function showTweets() {
    if (prevTotal !== tweetHistory.length) {
      prevTotal = tweetHistory.length;
      createTweets();
    }
    setTimeout(showTweets, tweetDelay);
  })();

});



