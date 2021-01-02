$(function () {
  $(".carousel").carousel({ interval: 2000, pause: "false" });
  // toggle carousel button class on click
  $("#carouselButton").click(function () {
    // on click check if carousel button is set to pause using icon class
    //if paused, run carousel pause method, remove pause class, apply play class
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
      $(".carousel").carousel("pause");
      $("#carouselButton").children("i").removeClass("fa-pause");
      $("#carouselButton").children("i").addClass("fa-play");
      //on click if class is set to play, run carousel cycle method, remove play class, add pause class
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton").children("i").removeClass("fa-play");
      $("#carouselButton").children("i").addClass("fa-pause");
    }
  });

  // click event for reserve and login buttons to show reservation modal
  $("#reserveButton").click(() => {
    $("#reserveModal").modal("show");
  });

  $("#loginButton").click(() => {
    $("#loginModal").modal("show");
  });
});
