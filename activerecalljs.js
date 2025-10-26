// Variables and DataType
let nameZ = "Zaya Coder";
let ageZ = 7;
let favColorZ = "Green";
console.log(nameZ + " is " + ageZ + " years old and likes " + favColorZ + ".");

// create 3 variables with numbers and calculate their average
let num1 = 8;
let num2 = 12;
let num3 = 20;
let average = (num1 + num2 + num3) % 3;
console.log("The average of " + num1 + ", " + num2 + ", and " + num3 + " is " + average + ".");

// create a variable with boolean value and use it in an if statement
let isRegistered = true;
if (isRegistered) {
    console.log(nameZ + " is registered.");
} else {
    console.log(nameZ + " is not registered.");
}

// create an array with different data types and print the type of each element
let Diff = ["JAVA", 23, true];
for (let i = 0; i < Diff.length; i++) {
    console.log(typeof(Diff[i]));
}

// Mini Project
let userN = "Alice Cooper";
let userA = 30;
let userC = "USA";
let userH = ["Playing Tennis", "Dancing", "Travelling"];
console.log("User Profile:");
console.log("Name: " + userN);
console.log("Age: " + userA);
console.log("Country: " + userC);
console.log("Hobbies: " + userH.join(", "));

// Operators
let Beans = 900;
let Fish = 1000;
let Maggi = 200;
let totalCost = (Beans + Fish + Maggi);
console.log("Total cost: " + totalCost + "Naira" );

// use logical operator to check if a user is logged in and registered
let userLoggedIn = true;
let userRegistered = true;
if (userLoggedIn && userRegistered) {
    console.log("User can access the dashboard.");
} else {
    console.log("Access denied. Please log in and register.");
}
// write a program that increases a score by 10 points if a player wins
let score = 0;
let winning = true;
if (winning) {
    score += 10;
}
console.log("Player's score: " + score);

// Ask a user for two numbers and perform all arithmetic operations on them
let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));
let Operator = prompt("Enter an operator (+, -, *, /, %):");
let result;
switch (Operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        break;
    case "/":
        if (num2 !== 0) {
            result = number1 / number2
        } else {
            result = "Error, Cannot divide by 0";
        }
        break;
    default:
        "Invalid operator!";
}
alert("Result: " + result);

// Control Flow
let numCheck = Number(prompt("Enter Number"))
if (numCheck > 0) {
    console.log("This number is positive");
} else if (numCheck < 0) {
    console.log("This number is negative");
} else if (numCheck === 0) {
    console.log("This number is zero");
} else {
    console.log("Undefined");
}
// Create a switch statement that prints the days of the week based on a number from 1-7
let dayNum = Number(prompt("Enter a number between 1-7:"))
let dayName;

switch (dayNum) {
    case 1:
        dayName = "Sunday"
        break;
    case 2:
        dayName = "Monday"
        break;
    case 3:
        dayName = "Tuesday"
        break;
    case 4:
        dayName = "Wednesday"
        break;
    case 5:
        dayName = "Thursday"
        break;
    case 6:
        dayName = "Friday"
        break;
    case 7: 
        dayName = "Saturday"
        break;
    default:
        break;
}
alert(dayName);

// Mini project
let todaysWeatherSun = true;
let todaysWeatherRai = true;

if (todaysWeatherSun) {
    console.log("It's sunny, wear something light");
} else if (todaysWeatherRai) {
    console.log("It's cold, wear a sweat shirt");
} else {
    console.log("I can't tell the weather now try again later");
}

// javascript onclick method

const studentBio = {
    nameStu : "Anaya",
    ageStu : 22,
    greeting : function () {
        console.log("I am " + this.nameStu + " and I am " + this.ageStu + " years old.");
    }
};
studentBio.greeting();