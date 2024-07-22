$(document).ready(function() {
    //load movies on page load
    $.ajax({
      type: "POST",
      url: "movies.php",
      data: {},
      success: function(data) {
        var movies = JSON.parse(data);
        $.each(movies, function(index, movie) {
          var html = "<div class='movie' data-id='" + movie.id + "'>";
          html += "<h2>" + movie.title + "</h2>";
          html += "<p>Up Votes: <span class='up_votes'>" + movie.up_votes + "</span></p>";
          html += "<p>Down Votes: <span class='down_votes'>" + movie.down_votes + "</span></p>";
          html += "<button class='up-vote'>Up Vote</button>";
          html += "<button class='down-vote'>Down Vote</button>";
          html += "</div>";
          $(".movie-list").append(html);
        });
      }
    });
    
    //handle up/down vote clicks
    $(document).on("click", ".up-vote, .down-vote", function() {
      var movie_id = $(this).parent().data("id");
      var up_votes = parseInt($(this).parent().find(".up_votes").text());
      var down_votes = parseInt($(this).parent().find(".down_votes").text());
      if ($(this).hasClass("up-vote")) {
        up_votes++;
      } else {
        down_votes++;
      }
      $.ajax({
        type: "POST",
        url: "update_votes.php",
        data: { id: movie_id, up_votes: up_votes, down_votes: down_votes },
        success: function(data) {
          console.log(data);
          location.reload();
        }
      });
    });
  });