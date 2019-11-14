//----------------------COUNTER--------------

//create a variables that stores the value of 0 for the beginning of the counter
let seconds = 0;
let minutes = 0;

//creates a variable so that I can store setInterval method in it. A variable with the setInterval is required so that later, the user can use the clearInterval method
let clear;

//create a function that increments the variable above
function updateCounter(){
    seconds++;
//create a if statement to increment minutes when 60 second is reached
    if (seconds >= 60){
        seconds = 0;
        minutes++;
        return "0" + minutes + ":" + "0" + seconds;
    }
//create a if statement to ensure that minutes and seconds are displayed correctly "01:15" vs "01:015"
    if(seconds >=10){
        return "0" + minutes + ":" + seconds;
    } else return "0" + minutes + ":" + "0" + seconds;
    
};

//Create a function (setInterval) to iterate the counter every one second
function startCounter(){
    //assigns the setInterval method to a variable for later use with clearInterval
    clear=setInterval( function(){
        document.getElementById("count").innerHTML = updateCounter();
    }, 1000)
    //removes the eventlistener so that when the start button is pressed again while timer is going, it doesn't call the startcounter function again, thus making the timer go twice as fast
    document.getElementById("startC").removeEventListener("click", startCounter);
};    
//stop the counting. see comments on line 28 and 7
function stopCounter(){
    clearInterval(clear);    
}
//Create a function that envokes the start counter function when the start button is clicked
//Target the Start button
document.getElementById("startC").addEventListener("click", startCounter);


//Create a function that envokes the stop counter function when the stop button is clicked
document.getElementById("stopC").onclick = function(){
    stopCounter();
    //resets the event listener so that the start button will work again after removeeventlistener was envoked
    document.getElementById("startC").addEventListener("click", startCounter);
};

//Create a function that resets the function to zero when the reset button is clicked
document.getElementById("resetC").onclick = function(){
    stopCounter();
    seconds = 0;
    minutes = 0;
    document.getElementById("count").innerHTML = "00:00";
    
    //resets the event listener so that the start button will work again after removeeventlistener was envoked
    document.getElementById("startC").addEventListener("click", startCounter);

};