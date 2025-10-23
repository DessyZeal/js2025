// finding html elements by Id
const greeting = document.getElementById("greeting").innerHTML = "Hello World!";
const intro = document.getElementById("intro").textContent = "Introduction to DOM in Javascript";
console.log(typeof(intro));
// finding html elements by tagName
const headertwo = document.getElementsByTagName("h2");
// changes the color of the first h2
headertwo[0].style.color = "blue";
// changes the content in the second h2
headertwo[1].innerHTML = "Codwiz has changed my life"
// changes the bg of our body
document.body.style.backgroundColor = "lightblue"
// changing the title
document.title = "DOM for beginners"

const personName = " Desire !";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += personName === "" ? `Guest` : personName;

// querySelector
const msg = document.querySelector(".para").innerHTML = "This paragraph is selected using querySelector";



