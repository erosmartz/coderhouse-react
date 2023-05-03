
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr4mJoiE-KGBbcBe7aC-KAc9yCxtOepbE",
  authDomain: "steam-arg.firebaseapp.com",
  projectId: "steam-arg",
  storageBucket: "steam-arg.appspot.com",
  messagingSenderId: "393163061287",
  appId: "1:393163061287:web:d1839488106ad68a96b602",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
