import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAgCInE3i5K6pErG4F3wNXGgmKg6x-Ki8Y",
  authDomain: "discordclone-28954.firebaseapp.com",
  projectId: "discordclone-28954",
  storageBucket: "discordclone-28954.appspot.com",
  messagingSenderId: "130376040611",
  appId: "1:130376040611:web:3ef3c8112e6dd9199b3f16",
  measurementId: "G-C8S0HLMDJF"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };