// profile-martha.js
// JavaScript features for Martha Haule's portfolio page

// ============================================================
// FEATURE 1: DARK / LIGHT MODE TOGGLE
// Switches page between dark and light mode
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
// Clicking a skill shows or hides its details
// ============================================================
function setupSkillsToggle() {
  // Get all skill list items
  var skillItems = document.querySelectorAll(".skill-list > li");

  skillItems.forEach(function (item) {
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
// Sorts education table rows by Year column
// ============================================================
var sortAscending = true;

function sortEducationTable() {
  var table = document.getElementById("eduTable");
  if (!table) return;

  // Get all rows except the header
  var rows = Array.from(table.querySelectorAll("tr")).slice(1);

  // Sort by third column (Year)
  rows.sort(function (a, b) {
    var yearA = a.cells[2].textContent.trim();
    var yearB = b.cells[2].textContent.trim();
    return sortAscending
      ? yearA.localeCompare(yearB)
      : yearB.localeCompare(yearA);
  });

  // Put sorted rows back
  rows.forEach(function (row) {
    table.appendChild(row);
  });

  sortAscending = !sortAscending;

  var btn = document.getElementById("sortBtn");
  btn.textContent = sortAscending ? "Sort by Year ↑" : "Sort by Year ↓";
}

// ============================================================
// FEATURE 4: HOBBIES READ MORE / READ LESS TOGGLE
// Shows and hides hobby descriptions
// ============================================================
function setupHobbiesToggle() {
  var hobbyItems = document.querySelectorAll(".hobby-item");

  hobbyItems.forEach(function (item) {
    var desc = item.querySelector(".hobby-desc");
    if (!desc) return;

    // Hide description by default
    desc.style.display = "none";

    // Create Read More button
    var btn = document.createElement("button");
    btn.textContent = "Read More";
    btn.className = "read-more-btn";
    item.appendChild(btn);

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
// Clicking an image opens it fullscreen
// ============================================================
function setupLightbox() {
  var img = document.querySelector(".gallery-img");
  if (!img) return;

  img.style.cursor = "pointer";

  // Create overlay
  var overlay = document.createElement("div");
  overlay.style.cssText =
    "display:none; position:fixed; top:0; left:0; width:100%; height:100%;" +
    "background:rgba(0,0,0,0.85); z-index:9999; justify-content:center; align-items:center;";

  var bigImg = document.createElement("img");
  bigImg.src = img.src;
  bigImg.style.cssText = "max-width:90%; max-height:90%; border-radius:10px;";

  var closeBtn = document.createElement("button");
  closeBtn.textContent = "✕ Close";
  closeBtn.style.cssText =
    "position:absolute; top:20px; right:20px; background:var(--gold, #c9a84c);" +
    "color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-size:1rem;";

  overlay.appendChild(bigImg);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  img.addEventListener("click", function () {
    overlay.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });

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
    "background:#1a1a2e; color:#c9a84c; border:none; padding:12px 18px;" +
    "border-radius:8px; cursor:pointer; font-size:0.9rem; z-index:999;";

  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", function () {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================================
// START EVERYTHING WHEN PAGE LOADS
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  setupSkillsToggle();
  setupHobbiesToggle();
  setupLightbox();
  setupScrollToTop();
});
