// profile-esther.js
// JavaScript features for Esther Mbise's portfolio page

// ============================================================
// FEATURE 1: DARK / LIGHT MODE TOGGLE
// Switches the page between dark and light mode
// ============================================================
function toggleDarkLight() {
  // Add or remove "light-mode" class on the body
  document.body.classList.toggle("dark-mode");

  // Change the button text depending on current mode
  var btn = document.getElementById("darkLightBtn");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}

// ============================================================
// FEATURE 2: SKILLS TOGGLE
// Clicking a skill item shows or hides its details paragraph
// ============================================================
function setupSkillsToggle() {
  // Get all list items inside the skills ordered list
  var skillItems = document.querySelectorAll("ol > li");

  skillItems.forEach(function (item) {
    // Make item look clickable
    item.style.cursor = "pointer";

    // When clicked, show or hide the paragraph inside
    item.addEventListener("click", function () {
      var para = this.querySelector("p");
      if (para) {
        if (para.style.display === "none") {
          para.style.display = "block";
        } else {
          para.style.display = "none";
        }
      }
    });
  });
}

// ============================================================
// FEATURE 3: EDUCATION TABLE SORT
// Sorts the education table rows by Year column
// ============================================================

// Keep track of sort direction
var sortAscending = true;

function sortEducationTable() {
  // Find the education table
  var table = document.getElementById("eduTable");
  if (!table) return;

  // Get all rows except the first (header) row
  var rows = Array.from(table.querySelectorAll("tr")).slice(1);

  // Sort rows by the third column (Year)
  rows.sort(function (a, b) {
    var yearA = a.cells[2].textContent.trim();
    var yearB = b.cells[2].textContent.trim();

    if (sortAscending) {
      return yearA.localeCompare(yearB);
    } else {
      return yearB.localeCompare(yearA);
    }
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
// FEATURE 4: HOBBIES READ MORE / READ LESS TOGGLE
// Hides and shows hobby descriptions on click
// ============================================================
function setupHobbiesToggle() {
  // Get all hobby list items
  var hobbyItems = document.querySelectorAll("ul > li");

  hobbyItems.forEach(function (item) {
    var para = item.querySelector("p");
    if (!para) return;

    // Hide the description by default
    para.style.display = "none";

    // Create a Read More button
    var btn = document.createElement("button");
    btn.textContent = "Read More";
    btn.className = "read-more-btn";
    item.appendChild(btn);

    // Toggle description on button click
    btn.addEventListener("click", function (e) {
      // Stop the click from bubbling up
      e.stopPropagation();

      if (para.style.display === "none") {
        para.style.display = "block";
        btn.textContent = "Read Less";
      } else {
        para.style.display = "none";
        btn.textContent = "Read More";
      }
    });
  });
}

// ============================================================
// FEATURE 5: IMAGE LIGHTBOX
// Clicking the profile image opens it fullscreen
// ============================================================
function setupLightbox() {
  // Get the profile image
  var profileImg = document.querySelector(".profile-image");
  if (!profileImg) return;

  // Make image look clickable
  profileImg.style.cursor = "pointer";

  // Create the overlay
  var overlay = document.createElement("div");
  overlay.id = "lightbox";
  overlay.style.cssText =
    "display:none; position:fixed; top:0; left:0; width:100%; height:100%;" +
    "background:rgba(0,0,0,0.85); z-index:9999; justify-content:center; align-items:center;";

  // Create big image inside overlay
  var bigImg = document.createElement("img");
  bigImg.src = profileImg.src;
  bigImg.style.cssText = "max-width:90%; max-height:90%; border-radius:10px;";

  // Create close button
  var closeBtn = document.createElement("button");
  closeBtn.textContent = "✕ Close";
  closeBtn.style.cssText =
    "position:absolute; top:20px; right:20px; background:#004080;" +
    "color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-size:1rem;";

  // Add elements to overlay then to page
  overlay.appendChild(bigImg);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  // Show overlay when image is clicked
  profileImg.addEventListener("click", function () {
    overlay.style.display = "flex";
  });

  // Hide overlay when close button is clicked
  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  // Hide overlay when clicking outside the image
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
}

// ============================================================
// FEATURE 6: SCROLL TO TOP BUTTON
// Shows a button after scrolling 200px, scrolls back to top
// ============================================================
function setupScrollToTop() {
  // Create the button
  var scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.textContent = "⬆ Top";
  scrollBtn.style.cssText =
    "display:none; position:fixed; bottom:30px; right:30px;" +
    "background:#004080; color:white; border:none; padding:12px 18px;" +
    "border-radius:8px; cursor:pointer; font-size:0.9rem; z-index:999;";

  document.body.appendChild(scrollBtn);

  // Show button when user scrolls more than 200px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll smoothly to top when clicked
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
