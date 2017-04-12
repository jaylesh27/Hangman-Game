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
var totalGuesses = 12;

function startGame() {
	("#startgame").click(function(){
		var randomWord = hangmanWords[Math.floor(Math.random()*hangmanWords.length)];
		var randomWordLength = randomWord.length;
	});
}


// document.onkeyup = function(event) {
// 	var randomWord = hangmanWords[Math.floor(Math.random()*hangmanWords.length)];
// 	document.getElementById("current-word").innerHTML = randomWord;
// }

var hangman = {
	//the startGame property here sets the 
	startGame: function() {
				("#startgame").onclick(function(){
					var randomWord = hangmanWords[Math.floor(Math.random()*hangmanWords.length)];
					//var randomWordLength = randomWord.length;
					var randomWordHidden = randomWord.replace(/[^a-z0-9]/gi, "_ ");
					document.getElementById("current-word").innerHTML = randomWordHidden;
				});
		}




}