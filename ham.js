// Get menu button and nav links
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
// const closeBtn = document.getElementById('close-btn');

// Toggle menu visibility on button click
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu
// closeBtn.addEventListener('click', () => {
//   navLinks.classList.remove('open');
// });

// Optional: Close menu when a link is clicked (for single-page sites)
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
  }
});

let name = prompt('What is your name?');
alert('Hello ' + name + '!');