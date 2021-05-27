import firebase from 'firebase/app'
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyABaX17ZVfeKgGBPbwFWTC7GxxwhSRzAWA",
  authDomain: "proyecto2-cf369.firebaseapp.com",
  projectId: "proyecto2-cf369",
  storageBucket: "proyecto2-cf369.appspot.com",
  messagingSenderId: "716657745684",
  appId: "1:716657745684:web:ebd0e68d64dea1ac5e6c01"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
