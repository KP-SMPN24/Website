import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "eduverse-cms",
  appId: "1:595696391273:web:3f2c2bfe6d58cf34867ef8",
  storageBucket: "eduverse-cms.firebasestorage.app",
  apiKey: "AIzaSyCdyE373runJ83MmZ5NzXkYtuEFsCfrUo0",
  authDomain: "eduverse-cms.firebaseapp.com",
  messagingSenderId: "595696391273",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
