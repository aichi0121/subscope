import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase web configuration identifies this public client. Access to private
// data is enforced by Firebase Authentication and per-user Firestore rules.
const firebaseConfig = {
  apiKey: "AIzaSyDgikh0YazTn6Dkip0XNh9m-kMpo_Ve7UM",
  authDomain: "subscope-4ffe7.firebaseapp.com",
  projectId: "subscope-4ffe7",
  storageBucket: "subscope-4ffe7.firebasestorage.app",
  messagingSenderId: "359031261245",
  appId: "1:359031261245:web:08cdf3ef60900ad050c254",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
