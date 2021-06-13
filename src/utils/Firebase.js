import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyArzsIELYDNqFzWr14Cp7JH3Int2cgtIoU",
  authDomain: "fire-contact-646a6.firebaseapp.com",
  projectId: "fire-contact-646a6",
  storageBucket: "fire-contact-646a6.appspot.com",
  messagingSenderId: "603479132922",
  appId: "1:603479132922:web:d4d8106e4e387bea31d743",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
