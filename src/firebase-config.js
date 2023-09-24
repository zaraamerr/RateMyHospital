// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYTSyvPOGlg3EOnoHENctqAPj9RzvNGkQ",
  authDomain: "ratemyhospital.firebaseapp.com",
  projectId: "ratemyhospital",
  storageBucket: "ratemyhospital.appspot.com",
  messagingSenderId: "800205927052",
  appId: "1:800205927052:web:4e0c808f3af3d01be7c1a9",
  measurementId: "G-FQJ4P5RBR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();