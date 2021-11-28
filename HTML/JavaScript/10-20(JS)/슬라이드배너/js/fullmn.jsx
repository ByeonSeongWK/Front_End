/*************** 외부 스크립트 ***************/
// 1. $(function () {}); // <-- document.ready랑 똑같다.
// 2. $(document).ready(function(){});

// 1, 2 번 둘다 시작하는 것이다 뭘 사용해도 상관 없음

// 외부로 돌릴땐 $(document).ready(function () 가 필수도 들어 가야한다.
// 스타일시트, 자바스크립트는 외부로 돌리는게 원칙이다. 보안 때문에.
$(document).ready(function () {
  $("#submn_area").css({ height: "0px" });

  $("nav ul").mouseenter(function () {
    $("#submn_area").stop().animate({ height: "250px" }, 1000);
  });

  $("#submn_area").mouseleave(function () {
    $("#submn_area").stop().animate({ height: "0px" }, 500);
  });

  $("nav a").hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );
});
