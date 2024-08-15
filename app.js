// Set the date we're counting down to
const newYear = new Date(
  `Jan 1, ${new Date().getFullYear() + 1} 00:00:00`
).getTime();

// Update the countdown every 1 second
const countdown = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = newYear - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements with respective ids
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished, display a message
  if (distance <= 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Happy New Year!";
  }
}, 1000);
