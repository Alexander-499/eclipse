// function onSignIn(googleUser) {
//     // Get the Google user profile
//     var profile = googleUser.getBasicProfile();
    
//     // Get ID token
//     var id_token = googleUser.getAuthResponse().id_token;
    
//     // Retrieve user details
//     console.log('ID: ' + profile.getId());
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail());
    
//     // Proceed to store or use the information
//     // Example: sendIdTokenToServer(id_token);
// }

// function signOut() {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//       console.log('User signed out.');
//   });
// }