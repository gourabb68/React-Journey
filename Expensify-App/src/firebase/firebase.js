//takes all of the named export from firebase and dump 
//that in firebase veriable recomended by firebase
import * as firebase from 'firebase';
//initialize firebase 
const firebaseConfig = {
    apiKey: "AIzaSyB8L554zqP2u5Tr4ZF-jxWjSHHiI1pkbvo",
    authDomain: "expensify-b250d.firebaseapp.com",
    databaseURL: "https://expensify-b250d.firebaseio.com",
    projectId: "expensify-b250d",
    storageBucket: "expensify-b250d.appspot.com",
    messagingSenderId: "1074186527382",
    appId: "1:1074186527382:web:f05d3293fd515338c758b7",
    measurementId: "G-8XG6G0MPPR"
  };

  firebase.initializeApp(firebaseConfig);

  //testing connection
  //geting ref of root of data base
  firebase.database().ref().set({
      "name": 'Gourab Banerjee'
  })