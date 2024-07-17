// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU2oQlEchuhYx2RFOram2HFk7G31P2J7w",
  authDomain: "campaign-22d11.firebaseapp.com",
  projectId: "campaign-22d11",
  storageBucket: "campaign-22d11.appspot.com",
  messagingSenderId: "934744851184",
  appId: "1:934744851184:web:83e315f65d962b20f1b835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{ db, collection, addDoc, doc, getDoc }