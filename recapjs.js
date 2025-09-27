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
userDetails.age += 1; // Increment age by 1
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

console.log(student);