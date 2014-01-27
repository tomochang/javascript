window.onload = function(){
  alert("眠い");
  var time = 180;
  var counter;
  var min = document.getElementById("min");
  var sec = document.getElementById("sec");
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var reset = document.getElementById("reset");

  start.onclick = function() {
  	alert("スタートしたよ");
    // toggle();
    counter = setInterval( count, 1000 );
  }

  stop.onclick = function() {
    // toggle();
    clearInterval( counter );
  }
}