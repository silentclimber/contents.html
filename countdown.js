//new Date(year, month, day, hours, minutes, seconds, milliseconds)

// Set the date we're counting down to
var countDownDate = new Date("june 24, 2022 12:48:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //target below the value of days, hourse, minutes and seconds.
  document.getElementById('big1').value = days;
  document.getElementById('big2').value = hours;
  document.getElementById('big3').value = minutes;
  document.getElementById('big4').value = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("secondcount").innerHTML = "EXPIRED";
    document.getElementById('big1').value = "0";
    document.getElementById('big2').value = "0";
    document.getElementById('big3').value = "0";
    document.getElementById('big4').value = "0";
  }
  else{
    document.getElementById("secondcount").innerHTML = "Time is going up!"; 
  }
}, 1000);
//Here is the code is complete! 
