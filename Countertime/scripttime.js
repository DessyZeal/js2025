const countDownContainer = document.getElementById('countDown');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

// getting the new year 2026
const nextYear = new Date().getFullYear() + 1;
const targetDate = new Date(`January 1, ${nextYear} 00:00:00`);

// get the current time with new Date(), subtract the future time from the current time
function updateCountdown() {
    const currentTime = new Date();
    const diff = targetDate - currentTime;
// convert from milliseconds to days, hours, minutes, seconds
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    daysEl.innerText = `${days} Days`;
    hoursEl.innerText = `${hours} Hours`;
    minsEl.innerText = `${mins} Minutes`;
    secsEl.innerText = `${secs} Seconds`;
}
setInterval(updateCountdown, 1000);
updateCountdown();