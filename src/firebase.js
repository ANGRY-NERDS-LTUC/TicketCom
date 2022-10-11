// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvAf_2VLYwtnEbMPf-r9FKOUdvXdgB0E0", 
  authDomain: "ticketcom-chat.firebaseapp.com",
  projectId: "ticketcom-chat",
  storageBucket: "ticketcom-chat.appspot.com",
  messagingSenderId: "131798540589",
  appId: "1:131798540589:web:51849883fc9e5b7cb133a4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
