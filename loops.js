
/*
Q1: Print numbers from 1 to 10 using a for loop.
*/

console.log("\nQ1: Numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


/*
Q2: Calculate the sum of the first N natural numbers using while.
*/

let n = 10;
let counter = 1;
let sum = 0;

while (counter <= n) {
    sum += counter;
    counter++;
}

console.log("\nQ2: Sum of first", n, "numbers =", sum);


/*
Q3: Print the multiplication table of a given number.
*/

let tableNumber = 5;

console.log("\nQ3: Multiplication table of", tableNumber);

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}


/*
Q4: Calculate the factorial of a number using while.
*/

let factorialNumber = 5;
let factorial = 1;
let i = 1;

while (i <= factorialNumber) {
    factorial *= i;
    i++;
}

console.log(
    "\nQ4: Factorial of",
    factorialNumber,
    "=",
    factorial
);


/*
Q5: Print numbers from 10 down to 1 using a for loop.
*/

console.log("\nQ5: Reverse counting");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


/*
Q6: Print even numbers up to N using do-while.
*/

let limit = 20;
let evenNumber = 2;

console.log("\nQ6: Even numbers up to", limit);

if (limit >= 2) {
    do {
        console.log(evenNumber);
        evenNumber += 2;
    } while (evenNumber <= limit);
} else {
    console.log("No even numbers in this range");
}


/*
Q7: Calculate the sum of digits using while.
*/

let digitNumber = 12345;
let digitSum = 0;
let tempNumber = Math.abs(digitNumber);

while (tempNumber > 0) {
    let digit = tempNumber % 10;
    digitSum += digit;
    tempNumber = Math.floor(tempNumber / 10);
}

console.log("\nQ7: Sum of digits =", digitSum);


/*
Q8: Generate the first 10 terms of the Fibonacci series.
*/

let first = 0;
let second = 1;

console.log("\nQ8: Fibonacci series");

for (let i = 1; i <= 10; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}


/*
Q9: Guessing game using do-while.
*/

let secretNumber = 7;
let guesses = [3, 5, 7];
let guessIndex = 0;
let guess;

console.log("\nQ9: Guessing game");

do {
    guess = guesses[guessIndex];
    console.log("Your guess:", guess);

    if (guess !== secretNumber) {
        console.log("Wrong guess! Try again.");
    }

    guessIndex++;
} while (guess !== secretNumber && guessIndex < guesses.length);

if (guess === secretNumber) {
    console.log("Correct! You guessed the number.");
} else {
    console.log("Game over! The number was", secretNumber);
}


/*
Q10: Check whether a number is prime using a for loop.
*/

let primeNumber = 17;
let isPrime = primeNumber >= 2;

for (let i = 2; i <= Math.sqrt(primeNumber); i++) {
    if (primeNumber % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("\nQ10: " + primeNumber + " is a prime number");
} else {
    console.log("\nQ10: " + primeNumber + " is not a prime number");
}
