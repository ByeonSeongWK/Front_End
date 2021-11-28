$(document).ready(function () {
  var ht = $(window).height();
  $("section").height(ht);

  $(window).on("resize", function () {
    var ht = $(window).height();
    $("section").height(ht);
  });

  $("section").on("mousewheel", function (event, delta) {
    // delta : 1 or 0  이벤트가 일어 났는지 안일어 났는지 판단해주는 변수
    if (delta > 0) {
      var prev = $(this).prev().offset().top;
      $("html, body").stop().animate({ scrollTop: prev }, 1000, "easeOutExpo");
    } else if (delta < 0) {
      var next = $(this).next().offset().top;
      $("html, body").stop().animate({ scrollTop: next }, 1000, "easeOutExpo");
    }
  });
}); //��
