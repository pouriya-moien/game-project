var score = 0;



function random(min,max){
 	return Math.round(Math.random() * (max-min) + min);
}

function setBG(){
    if (Math.round(Math.random())){
      return "";
    } else {
      return "";
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
    thisBox.css({"background": "url('')", "background-size":"contain"});
  } else {
    thisBox.css({"background": "url('')", "background-size":"contain"});
  }
  //insert gift element
  $(".game").append(thisBox);
  
  //random start for animation
  setTimeout(function(){
    thisBox.addClass("move");
  }, random(0, 5000) );