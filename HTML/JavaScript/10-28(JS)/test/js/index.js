$(document).ready(function () {
  var main = $(".main_nav > ul > li");
  var sub = $(".sub_mn");
  //초기값 설정
  sub.css({ display: "none" });

  main.hover(
    function () {
      $(this).find(".sub_mn").fadeIn(1000);
    },
    function () {
      sub.each(function () {
        if ($(this).css({ display: "block" })) {
          $(this).hide();
        }
      });
    }
  );

  sub.find("li").mouseover(function () {
    $(this).addClass("on");
  });
  sub.find("li").mouseout(function () {
    $(this).removeClass("on");
  });

  /********** 애니메이션 ************/
  var curent = 0;
  var setIntervalId;

  $(".btns > li").click(function () {
    var i = $(this).index();
    move(i);
    $(".btns > li").removeClass();
    $(this).addClass("on2");
  });

  $("#main_img").on({
    mouseover: function () {
      clearInterval(setIntervalId);
    },
    mouseout: function () {
      timer();
    },
  });
  timer();

  function timer() {
    setIntervalId = setInterval(function () {
      var n = curent + 1;
      if (n == 3) {
        n = 0;
      }
      move(n);
    }, 3000);
  }
  function move(i) {
    if (curent == i) return;

    var curentEl = $(".imgs > li").eq(curent);
    var nextEl = $(".imgs > li").eq(i);

    curentEl.css({ opacity: 1 }).animate({ opacity: 0 });
    nextEl.css({ opacity: 0 }).animate({ opacity: 1 });

    curent = i;
  }
  // 탭박스
  $(".tab_box h3").click(function () {
    var tab_index = $(this).index();
    $(".tab_box > article").hide();
    $(".tab_box > article").eq(tab_index).show();

    ////// 설명 : 두개의 똑같은 배너가 있는데 공지사항과 갤러리를 똑같이 만들어 둔다.
    /////         두 배너의 글자는 같지만 다른 요소이다. 하지만 같은 클릭할때 같은
    ////          인덱스 값을 주게 하면 같은 버튼으로 보이게 할 수 있다.
    ///
    // ※ 여기 탭박스, 팝업창, 슬라이드 배너, 메뉴 애니메이션 4가지 1시간 반만에 다 하면 웹기능사 실기
  });
});
