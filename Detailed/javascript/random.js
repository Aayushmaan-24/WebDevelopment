let numMin = 1, numMax = 100;
const answer = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
let attempts = 0;
let guess;
let running = true;  // Set running to true

while(running){
    guess = window.prompt(`Guess a number between ${numMin} and ${numMax}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
        continue;
    }
    else if(guess < numMin || guess > numMax){
        window.alert(`Please enter a number between ${numMin} and ${numMax}`);
        continue;
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low! Try again.");
        }
        else if(guess > answer){
            window.alert("Too high! Try again.");
        }
        else{
            window.alert(`Yay! You got it! The number was ${guess}. It took you ${attempts} guesses.`);
            running = false;  // Stop the loop once the correct number is guessed
        }
    }
}
