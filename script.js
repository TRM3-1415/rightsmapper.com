// ================================
// RightMapper - JavaScript Logic
// ================================

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Find the email form
    const form = document.querySelector('.email-form');
  
    // Listen for form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent page reload
  
      // Get the email input value
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value;
  
      // Simulate a success message
      alert(`Thank you! We'll notify you at ${email} when RightMapper is ready.`);
  
      // Optionally clear the input
      emailInput.value = '';
    });
  
    // Placeholder for future map toggle logic
    // Example: show/hide mineral or surface layers with buttons
    // const surfaceBtn = document.getElementById('surface-toggle');
    // const mineralBtn = document.getElementById('mineral-toggle');
  });
  
