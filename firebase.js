import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCe2s0iUCrHgWnv2WdJSZtWxo6MWnpxUkA",
    authDomain: "demochat-90062.firebaseapp.com",
    projectId: "demochat-90062",
    storageBucket: "demochat-90062.appspot.com",
    messagingSenderId: "1005125072889",
    appId: "1:1005125072889:web:8ac0d249bfc03cb4b46f28",
    measurementId: "G-YK6F097NW6"
};

let app;

if (firebase.apps?.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
