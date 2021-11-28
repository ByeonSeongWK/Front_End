// 외부로 돌리는 스크립트 파일은 document ready사 필요하다.
$(function () {
  $("#top_menu li").click(function (event) {
    event.preventDefault();
    var tg = $(this).index(); // tg = 클릭한 인덱스값

    // addClass로 선택된 부분의 버튼 스타일 변경
    // $("#top_menu li").removeClass("on");
    // $(this).addClass("on");

    var section = $("#contents > div").eq(tg);
    // 찾아가고자 하는 대상들 중 현재 인덱스값과 대칭되는 대상을 선택

    var tt = section.offset().top;
    // 목적지가 되는 대상의 기준을 top를 기준으로 함

    // 현재 html에 있는
    $("html, body").stop().animate({ scrollTop: tt });
    // 화면이동이므로 현재 html이나 웹브라우저에 보이는 부분을 대상으로
    // 스크롤의 세로값을 선택된 대상의 기준값으로 스크롤을 움직이게 한다.
  });

  // each : div를 처음부터 순환처리 하겠다.
  $(window).scroll(function () {
    var sct = $(window).scrollTop();

    $("#contents > div").each(function () {
      var tg = $(this); // div1, div2, div3
      var i = tg.index();
      if (tg.offset().top <= sct) {
        $("#top_menu li").removeClass("on");
        $("#top_menu li").eq(i).addClass("on");
      }
    });
  });
});
