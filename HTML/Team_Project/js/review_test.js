$(document).ready(function () {
  var hidePhoto = $("#review .rbp_hide");
  var hidePhoto2 = $("#review .rbp_hide2");
  var hideAll = $(hidePhoto, hidePhoto2);
  $("#moreBtn").click(function () {
    $(hidePhoto).fadeIn();
    $(hidePhoto).fadeIn("slow");
    $(hidePhoto).fadeIn(3000);
    $("#moreBtn").hide();
    $("#moreBtn2").show();
  });
  $("#moreBtn2").click(function () {
    $(hidePhoto2).fadeIn();
    $(hidePhoto2).fadeIn("slow");
    $(hidePhoto2).fadeIn(3000);
    $("#moreBtn2").hide();
    $("#moreBtn3").show();
  });
  $("#moreBtn3").click(function () {
    $(hideAll).fadeOut();
    $(hideAll).fadeOut("slow");
    $(hideAll).fadeOut(1500);
    $("#moreBtn3").hide();
    $("#moreBtn").show();
  });
});
