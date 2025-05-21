// creating the min and max num in the game using a const

const minNum = 2;
const maxNum = 100;

// generate a random num between minNum and maxNum

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// display answer in console

console.log(answer);

// create a variable called attempts to keep track of the attempts it takes a user

let attempts = 0;
let guess;
// to exit the game when it is over
let running = true;

// to keep the game running
while(running == true) {
// to get user input 
    guess = window.prompt(`Guess a number beteen ${minNum} - ${maxNum}`);
    // change guess output to a number by reassigning
    guess = Number(guess);
    // display the typeof guess and what guess is
    console.log(typeof guess, guess);
    // lets use an if statement to check if an input is not a number
    if(isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    }
    else {
        attempts++;
        if(guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else {
            window.alert(`CORRECT! The answer was ${guess} It took you ${attempts} attempts.`);
            running = false;
        }
    }
}