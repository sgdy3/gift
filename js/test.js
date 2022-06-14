
var interVal,timer,isPlay;
$(function(){
    $('#dowebok').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90',"red"],
    loopHorizontal: true,
    css3:true
    });
    $(".fp-controlArrow").remove();
  autoScoll()
  $(window).on("keyup",function (event) {
    switch (event.key) {
      case "1":
        $.fn.fullpage.moveTo(0,0)
        resetTime()
        break;
      case "2":
        $.fn.fullpage.moveTo(0,1)
        resetTime()
        break;
      case "3":
        $.fn.fullpage.moveTo(0,2)
        resetTime()
        break;
      case "4":
        $.fn.fullpage.moveTo(0,3)
        resetTime()
        break;
      case "5":
        $.fn.fullpage.moveTo(0,4)
        resetTime()
        break;
      case " ":
        isPlay?resetTime():autoScoll()
        break
    }
  })
  $(window).on("mousemove mousedown touchstart click",function (event) {
    resetTime()
  })
});

function autoScoll() {
  isPlay=true
  clearTimeout(timer);
  interVal = setInterval(function(){
    $.fn.fullpage.moveSlideRight();
  },1000)
}
function resetTime() {
  clearInterval(interVal);
  clearTimeout(timer);
  isPlay=false
  timer=setTimeout(function () {
    autoScoll();
  },3000)
}