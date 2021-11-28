var mRect = document.querySelector("#rect");

// mouseover 이벤트 처리
mRect.addEventListener("mouseover", function () {
  mRect.style.background = "red";
  mRect.style.borderRadius = "50%";
  mRect.style.width = "300px";
  mRect.style.height = "300px";
});

// mouseout 이벤트 처리
mRect.addEventListener("mouseout", function () {
  mRect.style.background = "";
  mRect.style.borderRadius = "";
  mRect.style.width = "";
  mRect.style.height = "";
});
