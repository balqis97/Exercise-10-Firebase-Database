import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyARuMU1zSBRSEa5o4G_q20ub7JrBcWcPEQ",
  authDomain: "mureed-7dd3d.firebaseapp.com",
  databaseURL: "https://mureed-7dd3d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mureed-7dd3d",
  storageBucket: "mureed-7dd3d.appspot.com",
  messagingSenderId: "918040009681",
  appId: "1:918040009681:web:cc752aa4f129f1a441def0"
  };
  // Initialize Firebase
 let app = firebase.initializeApp(config);

  export const db = app.database();