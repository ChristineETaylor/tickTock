
function clock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;

}

setInterval(clock, 1000);
