// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4QX1cXHDvWqgOXjQXYGOz5cDEwjtAFRM",
  authDomain: "new-pro-4e3bc.firebaseapp.com",
  projectId: "new-pro-4e3bc",
  storageBucket: "new-pro-4e3bc.firebasestorage.app",
  messagingSenderId: "894072556743",
  appId: "1:894072556743:web:6d30b41d4e85b2522c02e2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);