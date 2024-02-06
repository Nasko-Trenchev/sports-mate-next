// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA2OrZjoVNC2UiGVoZvXPw5gQsU4DeZOE",
    authDomain: "sports-mate-nextjs.firebaseapp.com",
    projectId: "sports-mate-nextjs",
    storageBucket: "sports-mate-nextjs.appspot.com",
    messagingSenderId: "788519582468",
    appId: "1:788519582468:web:ae903520824589816c6e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
