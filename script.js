function openPopupForm() {
  document.getElementById('popupForm').style.display = 'block';
}

function closePopupForm() {
  document.getElementById('popupForm').style.display = 'none';
}

function emailResume() {
  // Get user's email from the input field
  var userEmail = document.getElementById('userEmail').value;

  // Validate the email (you may want to add more robust validation)
  if (!userEmail || !isValidEmail(userEmail)) {
    alert('Please enter a valid email address.');
    return;
  }

  var recipientEmail = userEmail;
  var subject = 'Resume';
  var body = 'Here is my resume attached.';

  var resumeDataUri = 'data:application/pdf;base64,' + btoa('/resources/Resume/leongCV.png');

  // Construct the mailto URL with the attached resume and user's email
  var mailtoUrl = 'mailto:' + encodeURIComponent(recipientEmail) +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body + '\n\nUser\'s Email: ' + userEmail) +
    '&attachment=' + resumeDataUri;

  window.location.href = mailtoUrl;

  closePopupForm();
}
//validate email function
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


//contact form
function simulateSendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !message) {
   
    alert("Please fill in all fields before submitting.");
    return;
  }
  
  setTimeout(function () {
  
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    // Show the success message as a toast
    Toastify({
      text: "Email sent successfully!",
      duration: 3000, // Duration in milliseconds
      close: true,
      gravity: "bottom", // Other options: "top", "bottom", "center"
      position: "right", // Other options: "left", "center", "right"
    }).showToast();
  }, 1000); // Adjust the delay as needed
}