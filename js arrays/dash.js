// first create an array of students
const students = [
    {name: "Abiola", score: 90},
    {name: "Bolu", score: 70},
    {name: "Ada", score: 95},
    {name: "Bisi", score: 60},
    {name: "Zainab", score: 55}
];
// A function to assign grades
function Grades(score) {
    if (score >= 90) 
        return "A";
    else if (score >= 80)
        return "B"
    else if (score >= 70)
        return "C"
    else if (score >= 60)
        return "D"
    else return "F"
}
// console.log(Grades);
const list = document.getElementById("studentList");
// loop through the array students
// student => {...} is an arrow function and can also be written as
// function student {
//     do something with each student
// }
students.forEach(student => {
    // this line of code creats a new <li> element like in html
    const li = document.createElement("li");
    // this builds a string to display on the browser
    li.textContent = `Name: ${student.name} | Score: ${student.score} | Grade: ${Grades(student.score)}`;
    // this line of code adds a new li to the parent ul in our html
    list.appendChild(li);
});