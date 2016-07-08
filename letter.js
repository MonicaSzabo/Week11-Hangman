function Letters() {
	this.checkIfLetter = function(letter) {
		letter = letter.toLowerCase();
		var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
			'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		for(var i = 0; i < abc.length; i++) {
			if(letter == abc[i]) {
				return true;
			}
		}
		return false;
	}
	this.replaceLetter = function(str, i, letter) {
		return str.substr(0, i) + letter + str.substr(i + 1);
	}
}

var letterFunctions = new Letters();


exports.letter = {
	letterFunctions: letterFunctions
}