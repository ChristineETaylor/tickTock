
function clock() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  var ampm = 'am';
  
  let hours = function () {
    let displayHours = now.getHours();
    if (displayHours > 12) {
      displayHours -=12
    }
    return displayHours;
  }

  if (now.getHours() > 12) ampm = 'pm'; 

  document.querySelector('.hours').innerHTML = hours();
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;
  document.querySelector('.ampm').innerHTML = ampm;

}

setInterval(clock, 1000);
