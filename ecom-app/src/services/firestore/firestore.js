import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// My FireBase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB90Bq3dgR-p2qPEclM3vcxxexvhIQrcVo",
  authDomain: "ecom-105aa.firebaseapp.com",
  projectId: "ecom-105aa",
  storageBucket: "ecom-105aa.appspot.com",
  messagingSenderId: "801880418617",
  appId: "1:801880418617:web:c7f45235600885000be0e8",
};

// Initialise Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
