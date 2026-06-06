// profile-joel.js
// JavaScript features for Joel Gregory's portfolio page

// ============================================================
// FEATURE 1: DARK / LIGHT MODE TOGGLE
// Switches the page between dark and light mode
// ============================================================
function toggleDarkLight() {
  // Add or remove "dark-mode" class on the body
  document.body.classList.toggle("dark-mode");

  // Change button text depending on current mode
  var btn = document.getElementById("darkLightBtn");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}

// ============================================================
// FEATURE 2: SKILLS TOGGLE
// Clicking a skill item shows or hides its sub-list
// ============================================================
function setupSkillsToggle() {
  // Get all list items inside the skills ordered list
  var skillItems = document.querySelectorAll("ol > li");

  skillItems.forEach(function (item) {
    // Make it look clickable
    item.style.cursor = "pointer";

    // When clicked, show or hide the sub-list inside
    item.addEventListener("click", function () {
      var sub = this.querySelector("ul");
      if (sub) {
        if (sub.style.display === "none") {
          sub.style.display = "block";
        } else {
          sub.style.display = "none";
        }
      }
    });
  });
}

// ============================================================
// FEATURE 3: EDUCATION TABLE SORT
// Sorts the education table rows by Year column
// ============================================================
var sortAscending = true;

function sortEducationTable() {
  // Find the education table by its id
  var table = document.getElementById("eduTable");
  if (!table) return;

  // Get all rows except the first header row
  var rows = Array.from(table.querySelectorAll("tr")).slice(1);

  // Sort rows by the third column (Year)
  rows.sort(function (a, b) {
    var yearA = a.cells[2].textContent.trim();
    var yearB = b.cells[2].textContent.trim();
    return sortAscending
      ? yearA.localeCompare(yearB)
      : yearB.localeCompare(yearA);
  });

  // Put sorted rows back into the table
  rows.forEach(function (row) {
    table.appendChild(row);
  });

  // Flip sort direction for next click
  sortAscending = !sortAscending;

  // Update button text
  var btn = document.getElementById("sortBtn");
  btn.textContent = sortAscending ? "Sort by Year ↑" : "Sort by Year ↓";
}

// ============================================================
// FEATURE 4: HOBBIES READ MORE / READ LESS
// Shows and hides hobby descriptions on click
// ============================================================
function setupHobbiesToggle() {
  // Get all hobby list items
  var hobbyItems = document.querySelectorAll(".hobby-item");

  hobbyItems.forEach(function (item) {
    var desc = item.querySelector(".hobby-desc");
    if (!desc) return;

    // Hide description by default
    desc.style.display = "none";

    // Create a Read More button
    var btn = document.createElement("button");
    btn.textContent = "Read More";
    btn.style.cssText =
      "margin-top:4px; background:none; border:1px solid #1a6ef5;" +
      "color:#1a6ef5; padding:3px 8px; border-radius:4px; cursor:pointer; font-size:0.8rem;";
    item.appendChild(btn);

    // Toggle description when button is clicked
    btn.addEventListener("click", function () {
      if (desc.style.display === "none") {
        desc.style.display = "block";
        btn.textContent = "Read Less";
      } else {
        desc.style.display = "none";
        btn.textContent = "Read More";
      }
    });
  });
}

// ============================================================
// FEATURE 5: IMAGE LIGHTBOX
// Clicking an image opens it fullscreen with a close button
// ============================================================
function setupLightbox() {
  // Get all images in the image section
  var images = document.querySelectorAll(".img-section img");

  // Create the overlay
  var overlay = document.createElement("div");
  overlay.style.cssText =
    "display:none; position:fixed; top:0; left:0; width:100%; height:100%;" +
    "background:rgba(0,0,0,0.85); z-index:9999; justify-content:center; align-items:center;";

  // Create big image inside overlay
  var bigImg = document.createElement("img");
  bigImg.style.cssText = "max-width:90%; max-height:90%; border-radius:10px;";

  // Create close button
  var closeBtn = document.createElement("button");
  closeBtn.textContent = "✕ Close";
  closeBtn.style.cssText =
    "position:absolute; top:20px; right:20px; background:#1a6ef5;" +
    "color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-size:1rem;";

  overlay.appendChild(bigImg);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  // When any image is clicked open the overlay
  images.forEach(function (img) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      bigImg.src = this.src;
      overlay.style.display = "flex";
    });
  });

  // Close when close button is clicked
  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  // Close when clicking outside the image
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) overlay.style.display = "none";
  });
}

// ============================================================
// FEATURE 6: SCROLL TO TOP BUTTON
// Appears after scrolling 200px, smoothly returns to top
// ============================================================
function setupScrollToTop() {
  var scrollBtn = document.createElement("button");
  scrollBtn.textContent = "⬆ Top";
  scrollBtn.style.cssText =
    "display:none; position:fixed; bottom:30px; right:30px;" +
    "background:#1a6ef5; color:white; border:none; padding:12px 18px;" +
    "border-radius:8px; cursor:pointer; font-size:0.9rem; z-index:999;";

  document.body.appendChild(scrollBtn);

  // Show button after 200px scroll
  window.addEventListener("scroll", function () {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Scroll to top smoothly
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================================
// START EVERYTHING WHEN THE PAGE LOADS
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  setupSkillsToggle();
  setupHobbiesToggle();
  setupLightbox();
  setupScrollToTop();
});
