import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-3c218.firebaseapp.com",
  projectId: "real-estate-3c218",
  storageBucket: "real-estate-3c218.appspot.com",
  messagingSenderId: "319801278741",
  appId: "1:319801278741:web:ea5389c278128fd076e91c",
};

export const app = initializeApp(firebaseConfig);
