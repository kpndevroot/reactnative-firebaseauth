// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAODoohDwhhwSqPzxzpByZpm6Lo_sNNoic",
  authDomain: "reactnativeauth-fc173.firebaseapp.com",
  projectId: "reactnativeauth-fc173",
  storageBucket: "reactnativeauth-fc173.appspot.com",
  messagingSenderId: "856363437522",
  appId: "1:856363437522:web:0018c99fa0e068f68fcc0b",
  measurementId: "G-QZHBDCVMXC",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
