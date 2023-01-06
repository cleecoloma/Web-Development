// alert("Hello World!");

var buttonColours = ["red", "blue", "green", "yellow"]; 
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
});


function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4); //picks a random number from 0 to 3
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" +randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour); //initiates playSound function
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


