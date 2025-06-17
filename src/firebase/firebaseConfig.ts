import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWz04OKg6_i9KyGkH1vMsc0gEHDc9VTz4",
  authDomain: "jmurphy-3d2ef.firebaseapp.com",
  projectId: "jmurphy-3d2ef",
  storageBucket: "jmurphy-3d2ef.appspot.com",
  messagingSenderId: "211306629419",
  appId: "1:211306629419:web:6a4e8d3a998873fb731d6e",
  measurementId: "G-WXZ2XQC6VM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
