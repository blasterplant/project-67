import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDyS0226uqwc8ozZAEp3n6PxY9aLgv3lm0",
    authDomain: "team-voting-f8f23.firebaseapp.com",
    databaseURL: "https://team-voting-f8f23-default-rtdb.firebaseio.com",
    projectId: "team-voting-f8f23",
    storageBucket: "team-voting-f8f23.appspot.com",
    messagingSenderId: "24062306263",
    appId: "1:24062306263:web:82caad7392ab2fc5794d92"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();