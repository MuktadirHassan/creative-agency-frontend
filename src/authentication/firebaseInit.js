import firebase from 'firebase/app';
import 'firebase/auth';
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const app = firebase.initializeApp({
    apiKey: "AIzaSyC-w2k-T72dajKBcrlQPWbaB27rtUfv7H4",
    authDomain: "creative-agency-b2cf8.firebaseapp.com",
    databaseURL: "https://creative-agency-b2cf8.firebaseio.com",
    projectId: "creative-agency-b2cf8",
    storageBucket: "creative-agency-b2cf8.appspot.com",
    messagingSenderId: "526381683240",
    appId: "1:526381683240:web:19b8617fb01ef6eac65b1d",
    measurementId: "G-XWZW7DGTRK"
  });
export const auth = app.auth();
