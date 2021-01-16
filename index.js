// Attach a button listener to the button
// On click on the button, make an AJAX request to reddit for results of cute puppies
// http://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail

$(".btn").click(function () {
    $(".text").text("loading...");
    $.ajax({
      type: "get",
      url: "http://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true",
      success: function(response) {
        $(".text").text("");
        for (var i = 0; i < response.data.children.length; i++) {
          var source = response.data.children[i].data.thumbnail;
          var image = "<img src='" + source + "'>"
          $(".text").append(image);
        }
      }
    });
  });