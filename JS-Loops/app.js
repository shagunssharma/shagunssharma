let message = parseInt(prompt("Enter the maximum number!"));
while (!message) {
    message = parseInt(promt("Enter a valid number!"));
}
const targetNum = Math.floor((Math.random() * message)) + 1;

let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
    } else {
        guess = prompt(`Your guess is ${guess}, which is not highter or lower, please guess a number value: `);
    }
}
if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!");
    console.log(`You got it! It took you ${attempts} guesses`);
}