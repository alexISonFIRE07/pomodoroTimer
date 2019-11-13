//create a listening event so that when user clicks on the text, text changes into a appropriately sized input box

document.getElementById("timer").onclick = function (){
    document.getElementById("timer").style.display = "none";
    document.getElementById("customTimer").style.display = "block";
};

//When user clicks on the submit button, this function occurs
function submitCustomInput(){
    
    //saves input from user into a variable
    let userInput = document.getElementById("userInput").value;
    
    //assigns the userinput to the timer variable that's found in timer.js
    timer = userInput*60;     

    //changes the view to the timer rather than the custom entry form
    document.getElementById("customTimer").style.display = "none";
    document.getElementById("timer").style.display = "block";

    //needed to make another varaible to display the time in the HTML before the timer actually started. Just using the "timer" variable would interfere with the function in timer.js
    displayTimer = timer / 60; 

    //creates a 0 in front of the minutes if they are less than 10. ex: 04:00 vs 4:00
    if(displayTimer < 10){
        document.getElementById("timer").innerHTML = "0" + displayTimer + ":00";
    } else document.getElementById("timer").innerHTML = displayTimer + ":00";  
};