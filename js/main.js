const slider = document.querySelector(".margin");
const items = document.querySelectorAll(".margin .item");
const widthItem = items[0].clientWidth + 10; // Added 10 pixels for margin or padding

let currentIndex = 0;

function nextShow() {
    currentIndex = (currentIndex + 1) % items.length;
    slider.style.marginLeft = "-" + currentIndex * widthItem + "px";
}

function prevShow() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    slider.style.marginLeft = "-" + currentIndex * widthItem + "px";
}

setInterval(() => {
    nextShow();
    setTimeout(() => {
        prevShow();
    }, 4000);
}, 5000);
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
console.log(countDownDate)
let Day = document.querySelector(".Day p"),
Hours = document.querySelector(".Hours p"),
Minutes = document.querySelector(".Minutes p"),
Seconds = document.querySelector(".Seconds p");

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
    
  // Display the result in the element with id="demo"
  Day.innerHTML = days;
  Hours.innerHTML = hours;
  Minutes.innerHTML = minutes;
  Seconds.innerHTML = seconds;
    
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    console.log("EXPIRED");
  }
}, 1000);

