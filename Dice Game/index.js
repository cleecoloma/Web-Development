var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

const imgRandom1 = document.querySelector(".img1");
imgRandom1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

const imgRandom2 = document.querySelector(".img2");
imgRandom2.setAttribute("src", "images/dice" + randomNumber2+ ".png");

function gameWinner(number1, number2) {
    if (number1 > number2) {
        return "Player 1 Wins!";
    } else if (number1 < number2) {
        return "Player 2 Wins!";
    } else {
        return "Draw!";
    }
}

document.querySelector("h1").innerHTML = gameWinner(randomNumber1, randomNumber2);
