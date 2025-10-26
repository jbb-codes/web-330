"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Jarren Bess
      Date: Oct 26, 2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function Timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeId = null;
}

Timer.prototype.runPause = function (timer, minBox, secBox) {
  if (timer.timeId) {
    window.clearInterval(timer.timeId);
    timer.timeId = null;
  } else {
    timer.timeId = window.setInterval(countdown, 1000);
  }

  function countdown() {
    if (timer.seconds > 0) {
      timer.seconds--;
    } else if (timer.minutes > 0) {
      timer.minutes--;
      timer.seconds = 59;
    } else {
      window.clearInterval(timer.timeId);
      timer.timeId = null;
    }

    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
};

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

const myTimer = new Timer(minBox.value, secBox.value);

minBox.addEventListener("change", function () {
  myTimer.minutes = minBox.value;
});

secBox.addEventListener("change", function () {
  myTimer.seconds = secBox.value;
});

runPauseTimer.addEventListener("click", function () {
  myTimer.runPause(myTimer, minBox, secBox);
});
