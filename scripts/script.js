function onSignIn(googleUser) {
  // Get the Google user's profile information
  var profile = googleUser.getBasicProfile();
  var authResponse = googleUser.getAuthResponse();

  // Extract user details
  var userId = profile.getId(); // User ID
  var userName = profile.getName(); // User name
  var userImageUrl = profile.getImageUrl(); // User profile picture
  var userEmail = profile.getEmail(); // User email

  // Display user details
  displayUserInfo(userId, userName, userImageUrl, userEmail);

  // Optionally, you can also display the ID token or use it for further authentication
  var idToken = authResponse.id_token;
  console.log('ID Token:', idToken);

  // Store the ID token if you need to send it to your server
  // Example: sendIdTokenToServer(idToken);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
      console.log('User signed out.');
  });
}

function displayUserInfo(userId, userName, userImageUrl, userEmail) {
  // Update HTML elements with user information
  document.getElementById('user-id').textContent = 'User ID: ' + userId;
  document.getElementById('user-name').textContent = 'Name: ' + userName;
  document.getElementById('user-email').textContent = 'Email: ' + userEmail;
  
  // Set user profile picture
  var profileImage = document.getElementById('user-image');
  profileImage.src = userImageUrl;
  profileImage.alt = userName + '\'s profile picture';
  
  // Show user information section
  document.getElementById('user-info').style.display = 'block';
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
      console.log('User signed out.');
      // Hide user information
      document.getElementById('user-info').style.display = 'none';
  });
}
