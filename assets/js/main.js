var score = 0;



function random(min,max){
 	return Math.round(Math.random() * (max-min) + min);
}

function setBG(){
    if (Math.round(Math.random())){
      return "https://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/256/bad-pig-icon.png";
    } else {
      return "https://icons.iconarchive.com/icons/chrisl21/minecraft/256/Tnt-icon.png";
    }
  }
  function dropBox(){
    var length = random(100, ($(".game").width() - 90));
    var velocity = random(900, 10000);
    var size = random(150, 150);
    var thisBox = $("<div/>", {
      class: "box",
      style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
    });
     //set data and bg based on data
  thisBox.data("test", Math.round(Math.random()));
  if(thisBox.data("test")){
    thisBox.css({"background": "url('https://icons.iconarchive.com/icons/thesquid.ink/free-flat-sample/256/bad-pig-icon.png')", "background-size":"contain"});
  } else {
    thisBox.css({"background": "url('https://icons.iconarchive.com/icons/chrisl21/minecraft/256/Tnt-icon.png')", "background-size":"contain"});
  }
  //insert gift element
  $(".game").append(thisBox);
  
  //random start for animation
  setTimeout(function(){
    thisBox.addClass("move");
  }, random(0, 5000) );
    //remove this object when animation is over
    thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
    function(event) {
$(this).remove();
});
}

for (i = 0; i < 10; i++) { 
dropBox();
}

$(document).on('click', '.box', function(){


if($(this).data("test")){
score += 1;
} else {
score -= 1;
if(score==-3){
return alert ("gmae end");


}




}

$(".score").html(score);
$(this).remove();
});

var runGame = setInterval(function(){
      for (i = 0; i < 10; i++) { 
        dropBox();
      }  
    }, 5000);

function countdown() {
var seconds = 1000;
function tick() {
  var counter = document.getElementById("counter");
  seconds--;
  counter.innerHTML = (seconds < 10 ? "0" : "")  + String(seconds) + "S";
  if( seconds > 0  ) {
      setTimeout(tick, 1000);
      draw();
         update();
  } else {
      alert("Game over");
      clearInterval(runGame);
  }
}
tick();
}

countdown();