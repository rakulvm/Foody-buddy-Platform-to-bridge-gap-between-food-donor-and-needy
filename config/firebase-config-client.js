const firebase = require("firebase");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your unique apikey of firebase",
  authDomain: "foodybuddy-6f585.firebaseapp.com",
  databaseURL: "Your DataBase Url",
  projectId: "foodybuddy-6f585",
  storageBucket: "Storage Bucket Url",
  messagingSenderId: "475619529319",
  appId: "Your App ID",};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
