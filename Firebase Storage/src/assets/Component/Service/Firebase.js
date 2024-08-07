import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzzZrAglVxC33Z_eUFOIh4AcAViedRrxc",
  authDomain: "react-firebase-cd329.firebaseapp.com",
  projectId: "react-firebase-cd329",
  storageBucket: "react-firebase-cd329.appspot.com",
  messagingSenderId: "218031489263",
  appId: "1:218031489263:web:fe2ecb5654d53870c0db1a",
  measurementId: "G-KQQNYL1WQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
