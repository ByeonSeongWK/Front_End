// querySelector HTML 하나만 가져오고 싶을때
// id 값으로 선택자를 지정해놓고 사용한다.
var bigPic = document.querySelector("#cup"); // 큰 이미지를 찾아옴

// querySelectorAll HTML 여러개를 가져오고 싶을때
// class를 가져오고 싶은 태그에 똑같이 지정해놓고 클래스로 가져온다.
var smallPic = document.querySelectorAll(".small"); // 작은 이미지를 찾아옴

// 상세창이 열렸는지 닫혔는지 확인해주는 변수
var isOpen = false;

for (var i = 0; i < smallPic.length; i++) {
  // 작은 이미지 노드리스트들을 클릭을 하면 changePic()가 호출이 된다.
  // 대상.addEventListener("이벤트", 함수명)
  smallPic[i].addEventListener("click", changePic);
  //       ↑ 배열로 선언
}

function changePic() {
  // click 이벤트가 발생한 대상(this)의 src속성을 newPic에 저장
  var newPic = this.src;
  // newPic에 값을 큰 이미지의 src속성으로 대입이 되어 큰 이미지로 나타남.
  bigPic.setAttribute("src", newPic);
  // 대상.setAttribute("속성", 속성값(변수));
}

var view = document.querySelector("#view");

view.addEventListener("click", function () {
  if (isOpen == false) {
    // 상세창 보기(참일시)
    document.querySelector("#detail").style.display = "block";

    // HTML 텍스트 바꾸기
    view.innerHTML = "상세 설명 닫기";

    isOpen = true;
  } else {
    // 상세창 숨기기(거짓일시)
    document.querySelector("#detail").style.display = "none";

    // HTML 텍스트 바꾸기
    view.innerHTML = "상세 설명 보기";

    isOpen = false;
  }
});
