// Variables and Data Types
// exercise 1
let userName = "Ude Desire";
let age = 22;
let loveCoding = true;

console.log("My name is " + userName + ", I am " + age + " years old and I love coding: " + loveCoding);

// excercise 2
let favFoods = ["Rice", "Beans", "Yam", "Plantain"];
let userDetails = {
    name: userName,
    age: age,
    loveCoding: loveCoding,
    favFoods: favFoods
};
userDetails.age = 23; // Set age to 23
console.log(userDetails);

// exercise 3
// banking system
let accounts = {
    owner: "John Doe",
    balance: 12000,
    isActive: false
};
accounts.balance += 500;
accounts.isActive = true;

console.log(accounts);

// exercise 4
let student = {
    nameStudent: "Jane Doe",
    subjects: ["English", "Math", "Sciences"],
    grades: {
        English: "A",
        Math: "B",
        Sciences: "C"
    }
};
student.Sciences = "A";
student.History = "B";

console.log(student.subjects);
console.log(student.grades);

// exercise 5
// shopping cart
let cart = ["Laptop", "Mouse", "Keyboard"];
cart.push("Headphone");
delete cart[2]; // Remove the item at index 2 (Keyboard)
// how do i change an item in an array
cart[0] = "Gaming Laptop";

console.log(cart);

// exercise 6
// Library System (Mini Project)
let library = [
    {title: "Book A", author: "Author A", isBorrowered: false},
    {title: "Book B", author: "Author B", isBorrowed: true}
];
// Add a new book to the library
library.push({title: "Book C", author: "Author C", isBorrowed: false});
library.isBorrowed = true; // Mark Book A as borrowed
console.log(library);

let studentInfo = {
    studentName: "Alice",
    studentAge: 24,
    Hobbies: ["Singing", "Painting", "Drawing"]
};
studentInfo.studentAge = 26; // Update age
studentInfo.Hobbies.push("Sports");
console.log(studentInfo);


// Operators in Javascript
let a = 10;
a -= 5; 
// x = x - 5
console.log(a);
// exercise 1
// Arithmetic Operators
let x = 10;
let y = 3;
console.log("Addition: " + (x + y));
console.log("Substraction: " + (x - y));
console.log("Multiplication: " + (x * y));
console.log("Division: " + (x / y));
console.log("Modulus: " + (x % y));

// exercise 2
// assignment Operators
let score = 50;
score += 10; // score = score + 10
score *= 2;
score -= 30;
console.log("Final Score:" + score);

// exercise 3
// comparison and logical operators
let age1 = 20;
let hasID = true;
if (age1 >= 18 && hasID) {
    console.log("You are allowed to enter.");
} else {
    console.log("You are not allowed to enter.");
}

isWeekend = false;
isHoliday = true;
console.log(isWeekend || isHoliday);

let enteredPassword = true;
let correctPassword = false;
if (enteredPassword && correctPassword) {
    console.log("Access granted");
} else {
    console.log("Access not granted");
}

// exercise 4
// string operators
let firstName = "Zaya";
let lastName = "Coder";
let fullName = firstName +  " " + lastName;
console.log("Full Name: " + fullName);

// Control flow in Javascript
let citizenAge = 21;

if (citizenAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}
// Exercise 2
// Traffic light
let trafficLight = "green";
switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("Go");
        break;
}
// Exercise 4
// Print the current day of the week using switch statement
let date = new Date().getDay();
switch (date) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
}

let username = prompt("Enter your username:");
if (username) {
    console.log("Hello, " + username + "!");
} else {
    console.log("Hello, Guest!");
}

// loops
// for loop
for (let n = 1; n<=10; n++) {
    console.log(n);
}
// while loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
// do while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);
// for...of loop
fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}
// for...in loop
let student = {
    name: "John",
    age: 22,
    isEnrolled: true
}
for (let key in student) {
    console.log(key + ":" + student[key]);
}

// Functions in js
// function declaration
function functionName() {
    alert('Hello World!');
}