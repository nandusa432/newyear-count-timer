const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("secs");

function getNextNewYear() {
    const now = new Date();
    const nextYear = now.getMonth() === 0 && now.getDate() === 1 && now.getHours() === 0
      ? now.getFullYear()
      : now.getFullYear() + 1;
    return new Date(`1 Jan ${nextYear}`);
  }
function countdown() {
    const newYears = getNextNewYear();
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = Math.floor(newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const secs = Math.floor(totalSeconds) % 60;
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(secs);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
