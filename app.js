$(document).ready(function(){  

  var createTweet = function() {
    var tweetData = {
      tweetList: [
        streams.home[streams.home.length-1]
      ]
    }
    
    var tweetSource = $("#tweet-template").html();
    var tweetTemplate = Handlebars.compile(tweetSource);
    var html = tweetTemplate(tweetData);
  
    $('.tweetList').append(html);
  }

  createTweet();

});

