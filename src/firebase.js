import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { SignInMethod } from "firebase/auth";
import { Firestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyB5t1EjTUGEWddkf46FenGnAHDzVCtiESE",
  authDomain: "disneyplus-clone-fce17.firebaseapp.com",
  projectId: "disneyplus-clone-fce17",
  storageBucket: "disneyplus-clone-fce17.appspot.com",
  messagingSenderId: "968632201942",
  appId: "1:968632201942:web:7943ad4700b78e2b5f0f77",
  measurementId: "G-SSPD187Q3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, provider, storage };
export default db;















