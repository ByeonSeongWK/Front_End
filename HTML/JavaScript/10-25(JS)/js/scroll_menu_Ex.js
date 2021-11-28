$(document).ready(function () {
  $("#top_menu > ul > li").click(function (event) {
    event.preventDefault();
    // 변수 tg에 자기 자신 클릭할때마다 받는 인덱스 값을 받아온다.
    var tg = $(this).index();

    // 변수 section에 tg에 담은인덱스 값을 받아와 contents 아이디안 div 순서를 잡아준다.
    var section = $("#contents > div").eq(tg);

    // 현재 브라우저를 기준으로 offset이 전체 화면을 기준으로
    var tt = section.offset().top;

    $(document).stop().animate({ scrollTop: tt });
  });
});
