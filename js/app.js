
$(document).ready(function(){

	var randomNum = Math.floor(Math.random() * 100) + 1;
	console.log(randomNum);
	var theCount = 1;
	var theGuess;
	var guessBox = document.getElementById('guessList');
	var guessArray = new Array();

	function newGame() {

		randomNum = Math.floor(Math.random() * 100) + 1;
		console.log(randomNum);
		document.getElementById('feedback').innerHTML = "Make your Guess!"
		theCount = 1;
		document.getElementById('count').innerHTML = 0;
		document.getElementById('jabroni').reset();
		guessArray = [];

		while (guessBox.hasChildNodes()) {
			guessBox.removeChild(guessBox.lastChild);
		}
	}

  	$(".new").click(function() {
  		newGame();
  	});

	$("#jabroni").on('submit', function(event) {
    	event.preventDefault();
    	$("#guessButton").trigger('click');

	})

  	$("#guessButton").click(function() {

  		var theGuess = parseInt(document.getElementById('userGuess').value);

		if (isNaN(theGuess)) {
			document.getElementById('feedback').innerHTML = "Please enter a number!";
		}

		if (guessBox.hasChildNodes() && guessArray.indexOf(theGuess) >= 0) {
			document.getElementById('feedback').innerHTML = "Try a new number!";
		}
		
		else {
			if (isNaN(theGuess) === false) {
				var addGuess = document.createElement('li');
				addGuess.innerHTML = theGuess;

				guessBox.appendChild(addGuess);

				document.getElementById('count').innerHTML = theCount++;

				guessArray.push(theGuess);

				var difference = Math.abs(theGuess - randomNum);

				if (theGuess === randomNum) {
					document.getElementById('feedback').innerHTML = "NAILED IT! You win";
				}

				if (difference >= 50) {
					document.getElementById('feedback').innerHTML = "ICE COLD";
				}

				if (difference >= 30 && difference < 50) {
					document.getElementById('feedback').innerHTML = "COLD"
				}

				if (difference >= 20 && difference < 30) {
					document.getElementById('feedback').innerHTML = "HOT";
				}

				if (difference >= 1 && difference < 10) {
					document.getElementById('feedback').innerHTML = "SCORCHING HOT";
				}

			}

		}

		document.getElementById('jabroni').reset();
  	});


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


});
