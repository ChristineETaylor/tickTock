
function clock() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  var ampm = 'am';
  
  let hours = function () {
    let displayHours = now.getHours();
    if (displayHours > 12) displayHours -=12
    if (displayHours < 10) displayHours = '0' + displayHours;
    return displayHours;
  }

  if (now.getHours() > 12) ampm = 'pm'; 

  if (now.getMinutes() < 10) minutes = '0' + minutes;
  if (now.getSeconds() < 10) seconds = '0' + seconds;

  document.querySelector('.hours').innerHTML = hours();
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;
  document.querySelector('.ampm').innerHTML = ampm;

}

setInterval(clock, 1000);
