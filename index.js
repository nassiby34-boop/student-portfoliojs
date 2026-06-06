// home.js
// JavaScript features for the Home Page (index.html)

// ============================================================
// FEATURE 1: REAL-TIME DIGITAL CLOCK
// Updates every second using setInterval
// ============================================================
function startClock() {
  // Find the clock element in the HTML
  var clockEl = document.getElementById("liveClock");
  if (!clockEl) return;

  // Update the clock every 1000 milliseconds (1 second)
  setInterval(function () {
    // Get current date and time
    var now = new Date();

    // Get hours, minutes, seconds
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add a zero in front if number is less than 10 (e.g. 9 becomes 09)
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Display the time in the clock element
    clockEl.textContent = hours + ":" + minutes + ":" + seconds;
  }, 1000);
}

// ============================================================
// FEATURE 2: TYPEWRITER EFFECT
// Types the welcome message letter by letter
// ============================================================
function startTypewriter() {
  // Find the element where the typewriter text will appear
  var typeEl = document.getElementById("typewriterText");
  if (!typeEl) return;

  // The message to type out
  var message = "Welcome to our Student Portfolio Website!";

  // Start with empty text
  var index = 0;
  typeEl.textContent = "";

  // Add one letter every 80 milliseconds
  var interval = setInterval(function () {
    // Add next letter to the element
    typeEl.textContent += message[index];
    index++;

    // Stop when all letters are typed
    if (index >= message.length) {
      clearInterval(interval);
    }
  }, 80);
}

// ============================================================
// FEATURE 3: SCROLL TO TOP BUTTON
// Appears after scrolling 200px down
// ============================================================
function setupScrollToTop() {
  var scrollBtn = document.createElement("button");
  scrollBtn.textContent = "⬆ Top";
  scrollBtn.style.cssText =
    "display:none; position:fixed; bottom:30px; right:30px;" +
    "background:#1a1a2e; color:white; border:none; padding:12px 18px;" +
    "border-radius:8px; cursor:pointer; font-size:0.9rem; z-index:999;";

  document.body.appendChild(scrollBtn);

  // Show button after scrolling 200px
  window.addEventListener("scroll", function () {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Scroll to top smoothly when clicked
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================================
// START EVERYTHING WHEN PAGE LOADS
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  startClock();
  startTypewriter();
  setupScrollToTop();
});
