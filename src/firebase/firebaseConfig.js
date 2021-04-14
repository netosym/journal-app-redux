import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// if (process.env.NODE_ENV === 'test') {
//   // Initialize Firebase in Testing
//   firebase.initializeApp(firebaseConfigTesting);
// } else {
//   // Initialize Firebase in Development
// }

firebase.initializeApp(firebaseConfig);
// console.log(process.env);

//The database
const db = firebase.firestore();
// Google sign in
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
