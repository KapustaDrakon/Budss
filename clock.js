const hoursArrow = document.querySelector('.clock__hours-arrow');
const minutesArrow = document.querySelector('.clock__minutes-arrow');
const secondsArrow = document.querySelector('.clock__seconds-arrow');

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

const startTime = () => {
    interval = setInterval(() => {
        let date = new Date();
        seconds = date.getSeconds();
        minutes = date.getMinutes();
        hours = date.getHours();
        
        hoursArrow.style.transform = `rotate(${30 * (hours % 12) + 0.5 * minutes}deg)`;
        minutesArrow.style.transform = `rotate(${6 * minutes + 0.1 * seconds}deg)`;
        secondsArrow.style.transform = `rotate(${6 * seconds}deg)`;
    }, 1000);
};


const buttonStart = document.querySelector('.clock__start');
const buttonStop = document.querySelector('.clock__stop');

buttonStart.addEventListener('click', () => startTime());
buttonStop.addEventListener('click', () => clearInterval(interval));

