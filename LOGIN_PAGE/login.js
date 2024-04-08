// Array to store registered usernames
var registeredUsers = [];

// Function to check if the username already exists
function isUserExists(username) {
  return registeredUsers.includes(username);
}

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.forms["myform"]["uname"].value;
  var password = document.forms["myform"]["upswd"].value;

  // Check if the username is already registered
  if (!isUserExists(username)) {
    document.getElementById('errorBox').innerText = 'User does not exist!';
    return; // Stop further execution
  }

  // Here you can implement your login logic
  // For demo purposes, let's just check if both fields are filled
  if (username && password) {
    // Successful login
    alert('Login successful!');
    document.getElementById('errorBox').innerText = ''; // Clear error message
  } else {
    // Display error message if fields are empty
    document.getElementById('errorBox').innerText = 'Please enter both username and password.';
  }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.forms["myform"]["uname"].value;
  var password = document.forms["myform"]["upswd"].value;

  // Here you can implement your registration logic
  // For demo purposes, let's just check if both fields are filled
  if (username && password) {
    // Check if the username already exists
    if (isUserExists(username)) {
      document.getElementById('errorBox').innerText = 'User already exists!';
    } else {
      // Successful registration
      registeredUsers.push(username); // Add username to the list of registered users
      alert('Registered successfully!');
      document.forms["myform"].reset(); // Clear form fields
      document.getElementById('errorBox').innerText = ''; // Clear error message
    }
  } else {
    // Display error message if fields are empty
    document.getElementById('errorBox').innerText = 'Please enter both username and password.';
  }
});
