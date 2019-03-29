var cosmicWords = ["planet", "galaxy", "sun", "star", "comet", "astroid", "meteor", "eclipse", "equinox", "extraterrestrial", "moon", "nebula", "supernova", "satellite"];

var index = Math.floor(Math.random() * cosmicWords.length)

var word = cosmicWords[index];
console.log(word)
var wordLength = word.length;
var currentWord = [];
for (i = 0; i < wordLength; i++) {
    currentWord[i] = "_";
}
var winsText = document.getElementById("wins");
var current = document.getElementById("current");
var guesses = document.getElementById("guesses");
var letters = document.getElementById("letters"); 

for (i = 0; i < currentWord.length; i++) {
    current.innerHTML += currentWord[i];
}



// This function is run whenever the user presses a key.


var guessRemaining = 20;
var lettersGuessed = [];

document.onkeyup = function (event) {

    // This function is run whenever the user presses a key.


    // Determines which key was pressed.
    var userGuess = event.key;

    for (j = 0; j < currentWord.length; j++) {
        if (word.charAt(j) === userGuess) {
            currentWord[j] = userGuess;
        }

    }

    if (!lettersGuessed.includes(userGuess.toUpperCase())) {
        lettersGuessed.push(userGuess.toUpperCase());
    }

    current.innerHTML = ""
    for (i = 0; i < currentWord.length; i++) {
        current.innerHTML += currentWord[i];
    }

    guessRemaining--;
    guesses.textContent = guessRemaining;

    letters.textContent = lettersGuessed;

    if (current.innerHTML == word) {
        winsText.innerHTML = "You win!"
        setTimeout(location.reload(), 150000);
    }

    if (guessRemaining < 0){
        lose.innerHTML = "You LOSE!!!"
        setTimeout(location.reload(), 150000);
    }



}
