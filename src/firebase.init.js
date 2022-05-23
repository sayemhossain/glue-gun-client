// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqLxHaiCMQuT47hFIFo0xtMlLkD6xWxOY",
  authDomain: "glue-gun-83b00.firebaseapp.com",
  projectId: "glue-gun-83b00",
  storageBucket: "glue-gun-83b00.appspot.com",
  messagingSenderId: "277833046048",
  appId: "1:277833046048:web:5f9922073d18a2d9e80445",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
