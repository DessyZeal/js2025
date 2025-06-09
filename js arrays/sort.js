const random = ["joy", "fruits", "love", "food"];
random.sort();
console.log(random);

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted);

// sorting an array of Objects
const students = [
    {name: "Zars", score: 88},
    {name: "Musa", score: 90},
    {name: "Ayo", score: 70}
];
students.sort((a, b) => b.score - a.score);
console.log(students);
// practice exercises
const solar = ["Sun", "Moon", "Stars"];
solar.sort();
console.log(solar);

// sort in acesending and desending num
const num = [20, 5, 15, 30];
// num.sort((a, b) => a - b);
num.sort((a, b) => b - a);
console.log(num);

// sort an array of people by their age
const people = [
    {name: "Ada", age: 30},
    {name: "Love", age: 20},
    {name: "Bola", age: 29}
];
// desending order
people.sort((a, b) => b.age - a.age);
console.log(people);