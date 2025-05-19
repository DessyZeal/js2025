document.getElementById("myh1").textContent = 'Hello';
document.getElementById("myp").innerHTML = 'I love pizza';

// declaration of a variable
let x; 
// assigning a value to the variable
x = 100;
console.log(x);

// Datatype Number
let age1 = 25;
let gpa = 3.5;
let price = 25.55;

// Datatype String
let firstName = "Desire";
let favFood = "Rice";
let email = "ude12@example.com"

// Datatype Boolean
let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`${firstName} is online: ${online}`);
console.log(`Is this car for sale? ${forSale}`);
console.log(`is ${firstName} a student? ${isStudent}`);

console.log(typeof firstName);
console.log(`You name is ${firstName}`);
console.log(`My favourite food is ${favFood}`);
console.log(`my email is ${email}`);

console.log(typeof age1);
console.log(`You are ${age1} years old`);
console.log(`The price is ${price}`);
console.log(`Your gpa is: ${gpa}`);

let fullName = "Ude Desire";
let age = 21;
let student = true;

document.getElementById("p1").innerHTML = `My name is ${fullName}`;
document.getElementById("p2").innerHTML = `I am ${age} yrs old`;
document.getElementById("p3").innerHTML = `Enrolled: ${student}`;