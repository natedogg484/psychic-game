// psychic game
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(letters)


var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice)



var attempts = 13;


var losses = 0;
var wins = 0;

var userGuess = "";

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var attemptsText = document.getElementById("attempts-left");

document.onkeyup = function (event) {
    var userGuess = event.key

    if (userGuess === computerChoice) {
        alert("You win!");
        wins++;
        location.reload(true);
    }

    else (attempts--); {
        if (attempts <= 0) {
            alert("You lose!");
            losses++;
            location.reload(true);

        }
    }

    document.getElementById("guessed").innerHTML += (" " + userGuess)
    attemptsText.textContent = attempts
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
}