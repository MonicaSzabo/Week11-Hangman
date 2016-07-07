var inquirer = require('inquirer');

var words = require('./game.js');

var currentWord = words.wordList[Math.floor(Math.random()*words.wordList.length)];


console.log(currentWord);


function userGuess() {
	inquirer.prompt([
		{
			type: "input",
			message: "Guess A Letter: ",
			name: "letter"
		},
	]).then(function (user) {
		var inWord = false;

		for(var i = 0; i < currentWord.length; i++) {
			if(user.letter == currentWord[i]) {
				console.log("that letter is in the word");
				inWord = true;
			}
		}

		if(inWord) {
			console.log("then you do this");
		}

	});
}

userGuess();