// profile-nasib.js
// JavaScript features for Nasib Yasin Said's portfolio page

// ============================================================
// FEATURE 1: DARK / LIGHT MODE TOGGLE
// Switches the page between dark and light mode
// ============================================================
function toggleDarkLight() {
  // Add or remove the "light-mode" class on the body
  document.body.classList.toggle("light-mode");

  // Change the button text depending on current mode
  var btn = document.getElementById("darkLightBtn");
  if (document.body.classList.contains("light-mode")) {
    btn.textContent = "🌙 Dark Mode";
  } else {
    btn.textContent = "☀️ Light Mode";
  }
}

// ============================================================
// FEATURE 2: SKILLS TOGGLE
// Clicking a skill item shows or hides its details
// ============================================================
function setupSkillsToggle() {
  // Get all skill list items
  var skillItems = document.querySelectorAll(".skill-list > li");

  // Loop through each skill item
  skillItems.forEach(function (item) {
    // Make it look clickable
    item.style.cursor = "pointer";

    // When clicked, show or hide the sub-list inside it
    item.addEventListener("click", function () {
      var subList = this.querySelector(".skill-sub");
      if (subList) {
        // If hidden, show it. If visible, hide it.
        if (subList.style.display === "none") {
          subList.style.display = "flex";
        } else {
          subList.style.display = "none";
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

  // Get all rows except the header row
  var rows = Array.from(table.querySelectorAll("tr")).slice(1);

  // Sort the rows by the third column (Year)
  rows.sort(function (a, b) {
    var yearA = a.cells[2].textContent.trim();
    var yearB = b.cells[2].textContent.trim();

    if (sortAscending) {
      return yearA.localeCompare(yearB);
    } else {
      return yearB.localeCompare(yearA);
    }
  });

  // Put the sorted rows back into the table
  rows.forEach(function (row) {
    table.appendChild(row);
  });

  // Flip the sort direction for next click
  sortAscending = !sortAscending;

  // Update button text
  var sortBtn = document.getElementById("sortBtn");
  sortBtn.textContent = sortAscending ? "Sort by Year ↑" : "Sort by Year ↓";
}

// ============================================================
// FEATURE 4: HOBBIES READ MORE / READ LESS TOGGLE
// Collapses and expands hobby descriptions
// ============================================================
function setupHobbiesToggle() {
  // Get all hobby items
  var hobbyItems = document.querySelectorAll(".hobby-item");

  hobbyItems.forEach(function (item) {
    // Get the description paragraph inside each hobby item
    var desc = item.querySelector(".hobby-desc");
    if (!desc) return;

    // Hide the description by default
    desc.style.display = "none";

    // Create a Read More button
    var btn = document.createElement("button");
    btn.textContent = "Read More";
    btn.className = "read-more-btn";
    item.appendChild(btn);

    // When button is clicked, toggle the description
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
// Clicking the gallery image opens it in a fullscreen overlay
// ============================================================
function setupLightbox() {
  // Get the gallery image
  var galleryImg = document.querySelector(".gallery-img");
  if (!galleryImg) return;

  // Make the image look clickable
  galleryImg.style.cursor = "pointer";

  // Create the overlay div
  var overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.style.cssText =
    "display:none; position:fixed; top:0; left:0; width:100%; height:100%;" +
    "background:rgba(0,0,0,0.85); z-index:9999; justify-content:center; align-items:center;";

  // Create the big image inside the overlay
  var bigImg = document.createElement("img");
  bigImg.style.cssText = "max-width:90%; max-height:90%; border-radius:10px;";
  bigImg.src = galleryImg.src;

  // Create the close button
  var closeBtn = document.createElement("button");
  closeBtn.textContent = "✕ Close";
  closeBtn.style.cssText =
    "position:absolute; top:20px; right:20px; background:#9b59f5;" +
    "color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-size:1rem;";

  // Add image and close button to overlay
  overlay.appendChild(bigImg);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  // When gallery image is clicked, show the overlay
  galleryImg.addEventListener("click", function () {
    overlay.style.display = "flex";
  });

  // When close button is clicked, hide the overlay
  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  // Also close when clicking outside the image
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
}

// ============================================================
// FEATURE 6: SCROLL TO TOP BUTTON
// A button appears after scrolling 200px down
// ============================================================
function setupScrollToTop() {
  // Create the scroll to top button
  var scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.textContent = "⬆ Top";
  scrollBtn.style.cssText =
    "display:none; position:fixed; bottom:30px; right:30px;" +
    "background:#9b59f5; color:white; border:none; padding:12px 18px;" +
    "border-radius:8px; cursor:pointer; font-size:0.9rem; z-index:999;";

  document.body.appendChild(scrollBtn);

  // Show the button when user scrolls more than 200px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // When clicked, scroll smoothly back to the top
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
