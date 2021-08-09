import { DateTime } from "./luxon.js";

let sound = new Howl({
  src: ['./src/sound1.webm'],
  sprite: {
    blast: [0, 3000],
    laser: [4000, 1000],
    winner: [6000, 5000]
  }
});

const timerValue = document.getElementById("timervalue");

let timerEl;

export function handleTimerStart(event) {
   
    event.preventDefault();
    let timerDateValue = (event.target.form[0].value).split(':');
    let timerDate  = DateTime.local().plus({hours: timerDateValue[0], minutes: timerDateValue[1], seconds: timerDateValue[2]});
    console.log(event.target.id)
    timerEl = setInterval(function() {
        let delta = timerDate.diff(DateTime.local()).shiftTo('hours', 'minutes', 'seconds', 'milliseconds')
        let {hours: h, minutes: m, seconds: s} = delta;
        if(h == 0 && m == 0 && s == 0) stopTimer();
        timerValue.innerHTML = `${h} часов ${m} минут ${s} секунд`;
    }, 1000)
    }

export function handleTimerStop(event) { 
  event.preventDefault();
  clearInterval(timerEl);
  timerValue.innerHTML = 'Таймер остановлен!!'
}

function stopTimer() {
  clearInterval(timerEl);
  sound.play('blast');
 
} 
