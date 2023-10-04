// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"; 
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUS5IIf1xbXwBSyz0OJuxHtXa1fHxsMBQ",
  authDomain: "linkedin-clone-e50f2.firebaseapp.com",
  projectId: "linkedin-clone-e50f2",
  storageBucket: "linkedin-clone-e50f2.appspot.com",
  messagingSenderId: "90042420145",
  appId: "1:90042420145:web:35a72bd33d5905f5adcb90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

