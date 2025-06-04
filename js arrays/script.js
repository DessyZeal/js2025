const Favmovies = ["frozen", "moana", "tinkerbell","sing"];
// remove the last item on the array
Favmovies.pop();
// add a new movie to the end of the array
Favmovies.push("migration");
// check array length
Favmovies.length;
// Favmovies[2];
console.log(Favmovies.toString());
// console.log(Array.isArray(Favmovies));


const MyGirls = ["Joy", "Love", "Peace"];
const MyBoys = ["David", "Daniel"];
// to concatenate two arrays
const MyChildren = MyGirls.concat(MyBoys);
console.log(MyChildren);
// js array search
console.log(Favmovies.indexOf("moana"));
console.log(Favmovies.includes("tinkerbell"));
// convert the following array into a nice sentence using join
const hobbies = ["reading", "coding", "drawing"];
const hobby = `My hobbies are ${hobbies.join(", ")}`;
console.log(hobby)

