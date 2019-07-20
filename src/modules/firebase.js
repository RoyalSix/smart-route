var firebase = require('firebase');
let firebaseConfig = {
  apiKey: "AIzaSyC-62B9qWgsaqx_BugpZ_TL8O6qlaNU9FY",
  authDomain: "aproxy-99b24.firebaseapp.com",
  databaseURL: "https://aproxy-99b24.firebaseio.com",
  projectId: "aproxy-99b24",
  storageBucket: "aproxy-99b24.appspot.com",
  messagingSenderId: "513051062808"
};
module.exports.firebase = firebase.initializeApp(firebaseConfig);