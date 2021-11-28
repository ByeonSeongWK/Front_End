$(document).ready(function () {
  $("#wrap > div").scroll(function () {
    var sct = $(this).scrollTop({ top: 10 });
    $(this)
      .each()
      .animate({ bottom: sct + "px" });
  });
});
