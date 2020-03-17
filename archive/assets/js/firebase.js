//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyD_2aEyyT2-7J0umSFp508BCnb7Zux7c2E",
//     authDomain: "angelas-treats.firebaseapp.com",
//     databaseURL: "https://angelas-treats.firebaseio.com",
//     projectId: "angelas-treats",
//     storageBucket: "angelas-treats.appspot.com",
//     messagingSenderId: "270339502495"
//   };
//   firebase.initializeApp(config);


  // Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
  };
firebase.initializeApp(config);
  
var firebase = require('firebase');
var firebaseui = require('firebaseui');

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });