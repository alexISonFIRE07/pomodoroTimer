//create a listening event so that when user clicks on the text, text changes into a appropriately sized input box

document.getElementById("timer").onclick = function (){
    document.getElementById("timer").style.display = "none";
    document.getElementById("customTimer").style.display = "block";
};



//saves input from user into a variable
let userInput = document.getElementById("userInput").value;

console.log(userInput)

//
function submit(){
    event.preventDefault();
    console.log(userInput);
};