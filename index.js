

// booking range bar //
//1/
$(document).ready(function(){
  $("#slider").on("input change", function(){
    $("#range-value").text($("#slider").val());
  });
});
//2//
$(document).ready(function(){
  $("#slider2").on("input change", function(){
    $("#range-value2").text($("#slider2").val());
  });
});

//3//
