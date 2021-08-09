import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { handleTimerStart, handleTimerStop } from "./timers.js";

import { handleTimerApp, handleDateCalcApp } from "./changeApp.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); 
}


const timerStart = document.getElementById("timerstart");
const timerStop = document.getElementById("timerstop");

timerStart.addEventListener("click", handleTimerStart);
timerStop.addEventListener("click", handleTimerStop);



const timerButton = document.getElementById("calcdatebutton");
const calcButton = document.getElementById("timerbutton");

timerButton.addEventListener("click", handleTimerApp);
calcButton.addEventListener("click", handleDateCalcApp);
