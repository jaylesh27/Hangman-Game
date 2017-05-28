/*
Pseudocode for Hangman:
1. Have computer pick a word from the set of words around the chosen theme
	-Display it as underscored blanks on the screen
	-theme will be national parks, change background to image of the national park after user wins/loses
2. User guesses a letter (have text on screen that says "Press any key to get started")
	-convert guessed letters to uppercase
	-if letter is part of word, display it on the screen as part of the underscored blanks that represent the word
	-don't change number of guesses remaining if correct letter is guessed
	-if not part of word, display letter on screen as part of a section that has guessed letters
	-reduce "number of guesses remaining" by one if incorrect letter is guessed
	-if user picks the same incorrect letter again, don't change "number of guesses remaining"
3. If user finishes the word before user runs out of guesses, increment "Wins" by 1
4. When user wins/loses, change screen/pic to match the word in the previous round and start a new round by changing to a new word
	-reset "number of guesses remaining"
	-clear "guessed letters" section
 */

var hangmanWords = [
	"WRANGELLSTELIAS",
	"GATESOFTHEARCTIC",
	"DENALI",
	"KATMAI",
	"DEATHVALLEY",
	"GLACIERBAY",
	"LAKECLARK",
	"YELLOWSTONE",
	"KOBUKVALLEY",
	"EVERGLADES",
	"GRANDCANYON",
	"GLACIER",
	"OLYMPIC",
	"BIGBEND",
	"JOSHUATREE",
	"YOSEMITE",
	"KENAIFJORDS",
	"ISLEROYALE",
	"THEGREATSMOKYMOUNTAINS",
	"NORTHCASCADES"
];

var wins = 0;
var losses = 0;
var totalGuesses = 12;
var lettersGuessed = [];
var userGuess;

function guessesRemaining() {
	totalGuesses--;
	document.getElementById("guessesleft").innerHTML = totalGuesses;
}

function lossFunction() {
	if (totalGuesses === 0) {
		losses++;
		console.log(losses);
		hangman.startGame();
		totalGuesses = 12;
		document.getElementById("guessesleft").innerHTML = "12";
	}
}

function winFunction() {

}

function handleKeyUp(event){
	// console.log(event);
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		console.log("User guess: " + userGuess);
	lettersGuessed.push(userGuess);
	document.getElementById("guessedletters").innerHTML = lettersGuessed;
	guessesRemaining();
	lossFunction();
}


var hangman = {
	startGame: function() {
			var randomWord = hangmanWords[Math.floor(Math.random()*hangmanWords.length)];
			var randomWordHidden = randomWord.replace(/[a-z0-9]/gi, "_ ");
			document.getElementById("current-word").innerHTML = randomWordHidden;
			console.log("starting/resetting game");
			document.onkeyup = handleKeyUp;
			lettersGuessed = [];
			document.getElementById("guessedletters").innerHTML = lettersGuessed;
		},
};

//pressing the startgame button will run the hangman.startgame property
document.getElementById("startgame").addEventListener("click", hangman.startGame);