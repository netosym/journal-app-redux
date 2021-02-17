import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDDBAtUCo5KLBCJBtEKRYEzuZ-0R9hbUEw',
  authDomain: 'react-app-firebase-bcdda.firebaseapp.com',
  projectId: 'react-app-firebase-bcdda',
  storageBucket: 'react-app-firebase-bcdda.appspot.com',
  messagingSenderId: '1007486845048',
  appId: '1:1007486845048:web:c83bca82ac08267d7f6d8d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//The database
const db = firebase.firestore();
// Google sign in
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
