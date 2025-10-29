// finding html elements by Id
// const greeting = document.getElementById("greeting");
// greeting.innerHTML = "<strong>Hello, Desire</strong>";
// greeting.textContent =" Welcome to DOM manipulation in Javascript";
// const intro = document.getElementById("intro").textContent = "Introduction to DOM in Javascript";
// console.log(typeof(intro));
// finding html elements by tagName
// const headertwo = document.getElementsByTagName("h2");
// changes the color of the first h2
// headertwo[0].style.color = "blue";
// changes the content in the second h2
// headertwo[1].innerHTML = "Codwiz has changed my life"
// changes the bg of our body
// document.body.style.backgroundColor = "lightblue"
// changing the title
// document.title = "DOM for beginners"

// const personName = " Desire !";
// const welcomeMsg = document.getElementById("welcome-msg");
// welcomeMsg.textContent += personName === "" ? `Guest` : personName;

// document.getElementById("date").textContent = "Date: " + Date();

// document.write("I love javascript");
// querySelector
// const msg = document.querySelector(".para").innerHTML = "This paragraph is selected using querySelector";

// changing the attributes of html elements
// const light = (sw) => {
    // const pic = sw == 0 ? "./img/pic_bulboff.gif" : "./img/pic_bulbon.gif";
    // document.getElementById("bulb").src = pic;
// }

const bdcounterEl = document.getElementById('bdCounter');
const bddaysEl = document.getElementById('days');
const bdhoursEl = document.getElementById('hours');
const bdminsEl =  document.getElementById('mins');
const bdsecsEl = document.getElementById('secs');

// getting my next birthday
const thisYear = new Date().getFullYear() + 1;
const myBirthday = new Date(`April 15, ${thisYear} 00:00:00`);

// function to update the countdown
function updatebdCountdown() {
    const currentTime = new Date();
    const diffbd = myBirthday - currentTime;

    // converting from milliseconds to days, hours, minutes, seconds
    const daysbd = Math.floor(diffbd / 1000 /60 / 60 / 24);
    const hoursbd = Math.floor((diffbd / 1000 / 60 / 60) % 24);
    const minsbd = Math.floor((diffbd / 1000 / 60) % 60);
    const secsbd = Math.floor((diffbd / 1000) % 60);

    bddaysEl.innerText = `${daysbd} Days`;
    bdhoursEl.innerText = `${hoursbd} Hours`;
    bdminsEl.innerText = `${minsbd} Minutes`;
    bdsecsEl.innerText = `${secsbd} Seconds`;
}

setInterval(updatebdCountdown, 1000);
updatebdCountdown();
