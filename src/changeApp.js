const dateCalcApp = document.getElementById("calc_date");
const timerApp = document.getElementById("timer");

export function handleTimerApp(event) {
  event.preventDefault();
  dateCalcApp.style.display = "block";
  timerApp.style.display = "none";
}

export function handleDateCalcApp(event) {
  event.preventDefault();
  dateCalcApp.style.display = "none";
  timerApp.style.display = "block";
}