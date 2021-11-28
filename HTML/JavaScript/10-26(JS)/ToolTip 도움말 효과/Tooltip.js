$(document).ready(function () {
  var tempTitle;
  var type;
  $("a").hover(
    function () {
      tempTitle = $(this).attr("title");
      type = $(this).attr("class");

      if (type == "img") {
        tempImg =
          "<img src= '" + tempTitle + "' width = '100px' height :'100px'/>";
      }

      $("body").append("<div id = 'tip'></div>");

      if (type == "img") {
        $("#tip").css("width", "100px");
      } else {
        $("#tip").text(tempTitle);
      }

      var pageY = $(this).offset().top - $("#tip").innerHeight();
      var pageX = $(this).offset().left - 20;

      $("#tip")
        .css({ left: pageX + "px", top: pageY + "px" })
        .fadeIn(500);
    },
    function () {
      $("#tip").remove();
    }
  );
});
