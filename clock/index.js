const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const time = new Date();
  const sec = time.getSeconds();
  secHand.style.transform = `rotate(${sec * 6 + 90}deg)`;
  const min = time.getMinutes();
  minHand.style.transform = `rotate(${min * 6 + 90}deg)`;
  const hour = time.getHours();
  hourHand.style.transform = `rotate(${hour * 30 + 90 + min / 2}deg)`;
}

setInterval(setDate, 1000);
