import firebase from 'firebase';

var config= {
    apiKey: "AIzaSyA6wX1TLC-8iahy9CByBrhbpUxbYJpRN_0",
    authDomain: "btcdb-49a25.firebaseapp.com",
    databaseURL: "https://btcdb-49a25.firebaseio.com",
    projectId: "btcdb-49a25",
    storageBucket: "btcdb-49a25.appspot.com",
    messagingSenderId: "311423658271",
    appId: "1:311423658271:web:ebffcb7171727dd5dc282a",
    measurementId: "G-V5ENVQ5M3G"
};

const fire = firebase.initializeApp(config);
//firebase.analytics();

const db = fire.firestore();

export default fire;
