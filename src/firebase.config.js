// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASpwSmea0_g2onXoy4mGwbXEjTCAbVPf4",
  authDomain: "bloggingapplication-bd931.firebaseapp.com",
  projectId: "bloggingapplication-bd931",
  storageBucket: "bloggingapplication-bd931.firebasestorage.app",
  messagingSenderId: "275494185748",
  appId: "1:275494185748:web:5b7a110f069d21ffb87001",
  measurementId: "G-3D1XMC15LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// Gooogle Auth Provider
const googleAuthProvider = new GoogleAuthProvider();


export {
    app,
    auth,
    analytics,
    googleAuthProvider
}