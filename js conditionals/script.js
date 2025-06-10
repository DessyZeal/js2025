let isStudent = false;

if (isStudent) {
    console.log("I Love school")
} else {
    console.log("I hate school")
}
// switch
let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Almost weekend");
        break;
    default:
        console.log("Just another day");
}
// exercise on switch
let days = "Sunday";

switch (days) {
    case "Sunday":
        console.log("Weekend");
        break;
    case "Friday":
        console.log("Weekday");
        break;
    default:
        console.log("No day");
        break;
}
// exercise 2 on switch
let lightColor = "yellow";

switch (lightColor) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
        break;
}
