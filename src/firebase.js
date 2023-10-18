import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ4ec77eCdDNZ9HmmaK2zGVzedDk7wxYM",
  authDomain: "linkedin-clone2-46bcd.firebaseapp.com",
  projectId: "linkedin-clone2-46bcd",
  storageBucket: "linkedin-clone2-46bcd.appspot.com",
  messagingSenderId: "195368739614",
  appId: "1:195368739614:web:b8ef6060a81ffb05745f0f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
