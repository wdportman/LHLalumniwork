let prompt = require("prompt-sync")({sigint: true});

const randomNumber = Math.floor(Math.random()*100);

let guess;
let guessCounter = 0;

while (guess !== randomNumber) {

  guess = Number(prompt("Guess a number between 1 and 100: "));

  guessCounter += 1;

  if (isNaN(guess)) {
    console.log("Please guess a number!")
  } else if (guess > randomNumber) {
    console.log("Too high!");
  } else if (guess < randomNumber) {
    console.log("Too low!");
  } else {
    console.log(`Correct! You got the right answer, ${randomNumber}. You took ${guessCounter} guesses.`);
  }

};