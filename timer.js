//----------------------TIMER------------------
let clearTimer;
let timer = 60 * 25;

function startTimer(duration, display) {
    timer = duration;
    clearTimer = setInterval(function () {
        var minutes = parseInt(timer / 60, 10);
        var seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (timer-- == -1) {
            timer = duration;
            alert("Time to take a break!!!");
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(clearTimer);
}


document.getElementById("start").addEventListener("click", copiedStartTimer);

function copiedStartTimer() {
    display = document.querySelector('#timer');
    startTimer(timer, display);
    document.getElementById("start").removeEventListener("click", copiedStartTimer);
};



document.getElementById("stop").onclick = function(){
    stopTimer();
    document.getElementById("start").addEventListener("click", copiedStartTimer);
};

document.getElementById("reset").onclick = function(){
    stopTimer();
    timer = 60 * 25;
    document.getElementById("timer").innerHTML = "25:00";
    document.getElementById("start").addEventListener("click", copiedStartTimer);
};
