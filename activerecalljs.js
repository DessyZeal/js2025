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