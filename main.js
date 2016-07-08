var inquirer = require('inquirer');
var words = require('./game.js');


var currentWord = words.wordList[Math.floor(Math.random()*words.wordList.length)];
var blankCurrentWord = "";

for(var i = 0; i < currentWord.length; i++) {
	blankCurrentWord += '_';
}

console.log(currentWord);
console.log(blankCurrentWord);


var letterCheck = require('./letter.js');
var letterObj = letterCheck.letter.letterFunctions;	//Holds the functions from the constructor in the letter.js

console.log(letterObj.checkIfLetter('_'));


function userGuess() {
	inquirer.prompt([
		{
			type: "input",
			message: "Guess A Letter: ",
			name: "letter"
		},
	]).then(function (user) {
		var inWord = false;
		var isLetter = letterObj.checkIfLetter(user.letter);

		if(isLetter) {
			for(var i = 0; i < currentWord.length; i++) {
				if(user.letter == currentWord[i]) {
					console.log("that letter is in the word");
					inWord = true;
				}
			}

			if(inWord) {
				console.log("then you do this");
			}	
		} else {
			console.log("That was not a letter. Please enter a letter A-Z.");
			userGuess();
		}

	});
}

userGuess();