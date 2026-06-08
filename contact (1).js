// contact.js
// JavaScript features for the Contact Page (contact.html)

// ============================================================
// FEATURE 1: FORM VALIDATION
// Checks all fields before allowing form submission
// ============================================================
function validateForm(e) {
  // Stop the form from submitting automatically
  e.preventDefault();

  // Clear all previous error messages first
  clearErrors();

  // Track if the form is valid
  var isValid = true;

  // --- Check Name field ---
  var name = document.getElementById("name").value.trim();
  if (name === "") {
    showError("nameError", "Please enter your full name.");
    isValid = false;
  }

  // --- Check Email field ---
  var email = document.getElementById("email").value.trim();
  if (email === "") {
    showError("emailError", "Please enter your email address.");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("emailError", "Please enter a valid email address.");
    isValid = false;
  }

  // --- Check Message field ---
  var message = document.getElementById("message").value.trim();
  if (message === "") {
    showError("messageError", "Please write a message.");
    isValid = false;
  }

  // --- Check Radio buttons (Inquiry Type) ---
  var inquirySelected = document.querySelector('input[name="inquiry"]:checked');
  if (!inquirySelected) {
    showError("inquiryError", "Please select an inquiry type.");
    isValid = false;
  }

  // --- Check Checkboxes (at least one interest) ---
  var interestSelected = document.querySelector('input[name="interest"]:checked');
  if (!interestSelected) {
    showError("interestError", "Please select at least one interest.");
    isValid = false;
  }

  // If everything is valid, show success message
  if (isValid) {
    showSuccess();
  }
}

// ============================================================
// HELPER: Validate email format using regex
// ============================================================
function validateEmail(email) {
  // This pattern checks for a valid email format like name@domain.com
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// ============================================================
// HELPER: Show an error message below a field
// ============================================================
function showError(elementId, message) {
  var el = document.getElementById(elementId);
  if (el) {
    el.textContent = message;
    el.style.color = "red";
    el.style.fontSize = "0.85rem";
    el.style.marginTop = "4px";
    el.style.display = "block";
  }
}

// ============================================================
// HELPER: Clear all error messages
// ============================================================
function clearErrors() {
  var errorIds = ["nameError", "emailError", "messageError", "inquiryError", "interestError"];
  errorIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = "";
      el.style.display = "none";
    }
  });

  // Also hide success message
  var success = document.getElementById("successMsg");
  if (success) success.style.display = "none";
}

// ============================================================
// HELPER: Show success message after valid submission
// ============================================================
function showSuccess() {
  var success = document.getElementById("successMsg");
  if (success) {
    success.textContent = "✅ Message sent successfully! We will get back to you soon.";
    success.style.color = "green";
    success.style.fontWeight = "bold";
    success.style.marginTop = "10px";
    success.style.display = "block";
  }
}

// ============================================================
// FEATURE 2: SCROLL TO TOP BUTTON
// ============================================================
function setupScrollToTop() {
  var scrollBtn = document.createElement("button");
  scrollBtn.textContent = "⬆ Top";
  scrollBtn.style.cssText =
    "display:none; position:fixed; bottom:30px; right:30px;" +
    "background:#1a1a2e; color:white; border:none; padding:12px 18px;" +
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
  // Attach validation to the form submit event
  var form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", validateForm);
  }

  setupScrollToTop();
});
