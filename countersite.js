const countDisplay = document.getElementById('count');
const countUpBtn = document.getElementById('countUp');
const countDownBtn = document.getElementById('countDown');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

countUpBtn.addEventListener('click', () => {
    count++;
    countDisplay.innerHTML = count;
})
countDownBtn.addEventListener('click', () => {
    count--;
    countDisplay.innerHTML = count;
})
resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.innerHTML = count;
})