document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('membershipForm');
  
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Validate form fields
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var dob = document.getElementById('dob').value.trim();
      var membership = document.getElementById('membership').value.trim();
  
      if (!name || !email || !phone || !dob || !membership) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Validate email format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Validate phone number format
      var phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }
  
      // If all validations pass, submit the form
      alert('Form submitted successfully!');
      form.reset();
    });
  });
  