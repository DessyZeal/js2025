// declares a variable called username so it can be used later
let username;
// sets up an event listner that tells js when the submit button is clicked run the function in the block
document.getElementById("mySubmit").onclick = function() {
    // this get the users input from thr html input element with id myText
    username = document.getElementById("myText").value;
    // console.log(username);
    document.getElementById("myHi").textContent = `Hello ${username}`
}