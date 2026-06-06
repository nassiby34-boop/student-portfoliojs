// profile-nasib.js
// JavaScript features for Nasib Yasin Said's portfolio page

// ============================================================
// FEATURE 1: DARK / LIGHT MODE TOGGLE
// Switches the page between dark and light mode
// ============================================================
function toggleDarkLight() {
  // Add or remove "light-mode" class on the body
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
// Clicking a skill item shows or hides its sub-list
// ============================================================
function setupSkillsToggle() {
  // Get all skill list items
  var skillItems = document.querySelectorAll(".skill-list > li");

  skillItems.forEach(function (item) {
    item.style.cursor = "pointer";

    item.addEventListener("click", function () {
      var subList = this.querySelector(".skill-sub");
      if (subList) {
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
var sortAscending = true;

function sortEducationTable() {
  var table = document.getElementById("eduTable");
  if (!table) return;

  var rows = Array.from(table.querySelectorAll("tr")).slice(1);

  rows.sort(function (a, b) {
    var yearA = a.cells[2].textContent.trim();
    var yearB = b.cells[2].textContent.trim();
    return sortAscending
      ? yearA.localeCompare(yearB)
      : yearB.localeCompare(yearA);
  });

  rows.forEach(function (row) {
    table.appendChild(row);
  });

  sortAscending = !sortAscending;

  var sortBtn = document.getElementById("sortBtn");
  sortBtn.textContent = sortAscending ? "Sort by Year ↑" : "Sort by Year ↓";
}

// ============================================================
// FEATURE 4: HOBBIES READ MORE / READ LESS TOGGLE
// ============================================================
function setupHobbiesToggle() {
  var hobbyItems = document.querySelectorAll(".hobby-item");

  hobbyItems.forEach(function (item) {
    var desc = item.querySelector(".hobby-desc");
    if (!desc) return;

    desc.style.display = "none";

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
// Clicking the gallery image opens it fullscreen
// ============================================================
function setupLightbox() {
  // Get the gallery image
  var galleryImg = document.querySelector(".gallery-img");
  if (!galleryImg) return;

  galleryImg.style.cursor = "pointer";

  // Create the overlay
  var overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.style.cssText =
    "display:none; position:fixed; top:0; left:0; width:100%; height:100%;" +
    "background:rgba(0,0,0,0.9); z-index:9999; justify-content:center; align-items:center;";

  // Big image inside overlay
  var bigImg = document.createElement("img");
  bigImg.style.cssText = "max-width:90%; max-height:85%; border-radius:10px; display:block;";
  bigImg.src = galleryImg.src;

  // Close button
  var closeBtn = document.createElement("button");
  closeBtn.textContent = "✕ Close";
  closeBtn.style.cssText =
    "position:absolute; top:20px; right:20px; background:#9b59f5;" +
    "color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-size:1rem;";

  overlay.appendChild(bigImg);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  // Open overlay when image is clicked
  galleryImg.addEventListener("click", function () {
    bigImg.src = this.src;
    overlay.style.display = "flex";
  });

  // Close when close button clicked
  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  // Close when clicking outside image
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
}

// ============================================================
// FEATURE 6: SCROLL TO TOP BUTTON
// ============================================================
function setupScrollToTop() {
  var scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.textContent = "⬆ Top";
  scrollBtn.style.cssText =
    "display:none; position:fixed; bottom:30px; right:30px;" +
    "background:#9b59f5; color:white; border:none; padding:12px 18px;" +
    "border-radius:8px; cursor:pointer; font-size:0.9rem; z-index:998;";

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


// ============================================================
// START EVERYTHING WHEN THE PAGE LOADS
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  setupSkillsToggle();
  setupHobbiesToggle();
  setupLightbox();
  setupScrollToTop();
});
