


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 1;

$(document).keypress(function(){
if (!started){
  $("#level-title").text("Level " + level);
  nextSequence();
  started = true;
}
});

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  console.log(userClickedPattern);
});


function checkAnswer(currentLevel) {
  
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("success");

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }

  }else {

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function(){
    $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Kew to Restart");

    startOver();


    console.log("wrong");

  }
  

}




function nextSequence(){

  userClickedPattern=[];
  level++;
  $("#Level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);
  animatePress(randomChosenColour);

  console.log(randomChosenColour);

}


function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}


function animatePress(currentColour) {
  var active
 $("#" + currentColour).addClass("pressed");

 setTimeout(function() {
  $("#" + currentColour).removeClass("pressed");
 }, 100);
}

function startOver() {

  level = 0;
  gamePattern = [];
  started = false;
  

}

























