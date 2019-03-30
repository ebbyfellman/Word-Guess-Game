function test (){

//Create array of cosmic word.
var cosmicWords = ["planet", "galaxy", "sun", "star", "comet", "astroid", "meteor", "eclipse", "equinox", "extraterrestrial", "moon", "nebula", "supernova", "satellite"];

//Choose random word from array.
var index = Math.floor(Math.random() * cosmicWords.length)
var word = cosmicWords[index];


console.log(word)
var wordLength = word.length;
var currentWord = [];

//Create blank word
for (i = 0; i < wordLength; i++) {
    currentWord[i] = "_";
}


var wins = document.getElementById("wins");
var current = document.getElementById("current");
var guesses = document.getElementById("guesses");
var letters = document.getElementById("letters"); 


//Write current word to page
for (i = 0; i < currentWord.length; i++) {
    current.innerHTML += currentWord[i];
}



// This function is run whenever the user presses a key.


var guessRemaining = 20;
var lettersGuessed = [];
var answer = "n";


    // This function is run whenever the user presses a key.
    document.onkeyup = function (event){

    // Determines which key was pressed.
    var userGuess = event.key;
    

    //Compare user guess to each letter in array
    for (j = 0; j < currentWord.length; j++) {
        if (word.charAt(j) === userGuess) {
            currentWord[j] = userGuess;
        }

    }

    //Keep track of letters guessed and add to array.
    if (!lettersGuessed.includes(userGuess.toUpperCase())) {
        lettersGuessed.push(userGuess.toUpperCase());
    }

    current.innerHTML = ""
    for (i = 0; i < currentWord.length; i++) {
        current.innerHTML += currentWord[i];
    }


    //Keep track of guesses remaining
    guessRemaining--;
    guesses.textContent = guessRemaining;

    letters.textContent = lettersGuessed;


    //If user guesses word, print you win.  
    //If they run out of guesses, print you lose.
    if (current.innerHTML == word) {
        wins.innerHTML = "You WIN!!!";
    }

    if (guessRemaining < 0){
        lose.innerHTML = "You LOSE!!!";
    }
}

}



