var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        this.style.color = "#FFFFFF";
        //What happens when button is clicked.
    });
}

// var audio = new Audio('sounds/tom-1.mp3')
// audio.play();