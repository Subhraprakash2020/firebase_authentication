// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLiN27YNkKsiNSWXYDv4lmgrkR0J5p9lg",
    authDomain: "react-with-firebae.firebaseapp.com",
    projectId: "react-with-firebae",
    storageBucket: "react-with-firebae.appspot.com",
    messagingSenderId: "418852415518",
    appId: "1:418852415518:web:d6affff21a44e5a36ca60f",
    measurementId: "G-LQEXCL8X4M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;