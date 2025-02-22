const dayBox = document.getElementById("day-box");
const hrBox = document.getElementById("hr-box");
const minBox = document.getElementById("min-box");
const secBox = document.getElementById("sec-box");

const targetDate = new Date("March 1, 2025 00:00:00");



(function updateCountdown() {
  const currentDate = new Date();
  const diff = targetDate - currentDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

dayBox.textContent = days < 10 ? "0" + days : days;
hrBox.textContent = hours < 10 ? "0" + hours : hours;
minBox.textContent = minutes < 10 ? "0" + minutes : minutes;
  secBox.textContent = seconds < 10 ? "0 " + seconds : seconds;
})()

function sec (){
  setInterval(() => {
    let secBox = box.Date.seconds()
    console.log(secBox)
  },1000);
}
sec()