import firebase from 'firebase';
import { initializeApp } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBX8IhBLVoqGtlvUT6aA1dBBDolF12HqBA",
    authDomain: "twitter-clone-5b148.firebaseapp.com",
    projectId: "twitter-clone-5b148",
    storageBucket: "twitter-clone-5b148.appspot.com",
    messagingSenderId: "159811536944",
    appId: "1:159811536944:web:c6019d5b91ff717dff05f5",
    measurementId: "G-7G43XDTSVJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;