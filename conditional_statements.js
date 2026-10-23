
/*
Q1: Check whether a number is positive, negative, or zero.
*/

let number1 = -5;

if (number1 > 0) {
    console.log("Q1: Positive number");
} else if (number1 < 0) {
    console.log("Q1: Negative number");
} else {
    console.log("Q1: Zero");
}


/*
Q2: Check whether an integer is even or odd.
*/

let number2 = 7;

if (number2 % 2 === 0) {
    console.log("Q2: Even number");
} else {
    console.log("Q2: Odd number");
}


/*
Q3: Find the largest of two numbers.
*/

let a = 25;
let b = 40;

if (a > b) {
    console.log("Q3: Largest number is", a);
} else if (b > a) {
    console.log("Q3: Largest number is", b);
} else {
    console.log("Q3: Both numbers are equal");
}


/*
Q4: Assign a grade based on percentage.
A: 90-100, B: 80-89, C: 70-79,
D: 60-69, F: Below 60.
*/

let percentage = 85;

if (percentage < 0 || percentage > 100) {
    console.log("Q4: Invalid percentage");
} else if (percentage >= 90) {
    console.log("Q4: Grade A");
} else if (percentage >= 80) {
    console.log("Q4: Grade B");
} else if (percentage >= 70) {
    console.log("Q4: Grade C");
} else if (percentage >= 60) {
    console.log("Q4: Grade D");
} else {
    console.log("Q4: Grade F");
}


/*
Q5: Check whether a year is a leap year.
*/

let year = 2024;

if (year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Q5: Leap year");
} else {
    console.log("Q5: Not a leap year");
}


/*
Q6: Print the day of the week using switch-case.
1 = Monday, 7 = Sunday.
*/

let day = 3;

switch (day) {
    case 1:
        console.log("Q6: Monday");
        break;
    case 2:
        console.log("Q6: Tuesday");
        break;
    case 3:
        console.log("Q6: Wednesday");
        break;
    case 4:
        console.log("Q6: Thursday");
        break;
    case 5:
        console.log("Q6: Friday");
        break;
    case 6:
        console.log("Q6: Saturday");
        break;
    case 7:
        console.log("Q6: Sunday");
        break;
    default:
        console.log("Q6: Invalid day number");
}


/*
Q7: Create a simple calculator using switch-case.
*/

let num1 = 20;
let num2 = 5;
let operator = "*";

switch (operator) {
    case "+":
        console.log("Q7: Result =", num1 + num2);
        break;
    case "-":
        console.log("Q7: Result =", num1 - num2);
        break;
    case "*":
        console.log("Q7: Result =", num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log("Q7: Result =", num1 / num2);
        } else {
            console.log("Q7: Cannot divide by zero");
        }
        break;
    default:
        console.log("Q7: Invalid operator");
}


/*
Q8: Check whether a character is a vowel or consonant.
*/

let character = "e".toLowerCase();

switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Q8: Vowel");
        break;
    default:
        if (character.length === 1 &&
            character >= "a" && character <= "z") {
            console.log("Q8: Consonant");
        } else {
            console.log("Q8: Invalid character");
        }
}


/*
Q9: Traffic light instructions using switch-case.
*/

let trafficLight = "Red".toLowerCase();

switch (trafficLight) {
    case "red":
        console.log("Q9: Stop");
        break;
    case "yellow":
        console.log("Q9: Wait");
        break;
    case "green":
        console.log("Q9: Go");
        break;
    default:
        console.log("Q9: Invalid traffic light color");
}


/*
Q10: Menu-driven program.
1 = Check Balance, 2 = Deposit,
3 = Withdraw, 4 = Exit.
*/

let balance = 1000;
let menuChoice = 2;
let amount = 200;

switch (menuChoice) {
    case 1:
        console.log("Q10: Current balance =", balance);
        break;

    case 2:
        if (amount > 0) {
            balance += amount;
            console.log("Q10: Deposit successful");
            console.log("Q10: New balance =", balance);
        } else {
            console.log("Q10: Invalid deposit amount");
        }
        break;

    case 3:
        if (amount <= 0) {
            console.log("Q10: Invalid withdrawal amount");
        } else if (amount > balance) {
            console.log("Q10: Insufficient balance");
        } else {
            balance -= amount;
            console.log("Q10: Withdrawal successful");
            console.log("Q10: New balance =", balance);
        }
        break;

    case 4:
        console.log("Q10: Exiting program");
        break;

    default:
        console.log("Q10: Invalid menu choice");
}
