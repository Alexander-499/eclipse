function onSignIn(googleUser) {
  // Get profile information
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  // Get the Google ID token
  var id_token = googleUser.getAuthResponse().id_token;

  // Send the ID token to your server or verify it on the client side
  // Example: sendIdTokenToServer(id_token);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
      console.log('User signed out.');
  });
}