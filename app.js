function startTimer(duration, display) {
    var timer = duration;
    setInterval(function () {
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

document.getElementById("start").addEventListener("click", function () {
    var twentyFiveMinutes = 60 * 25,
        display = document.querySelector('#timer');
    startTimer(twentyFiveMinutes, display);
});


*/
















/*

function startTimer(duration, display) {
    var timer = duration;
    var minutes;
    var seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

document.getElementById("start").addEventListener("click", function () {
    var twentyFiveMinutes = 60 * 25,
        display = document.querySelector('#timer');
    startTimer(twentyFiveMinutes, display);
});




/*document.getElementById("start").addEventListener("click", startTimer);

function startTimer() {
    var timer = 
    setInterval(function(){

    } ,1000)


  document.getElementById("timer").innerHTML = updatedTime;
}; */