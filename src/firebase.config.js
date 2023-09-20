// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDacoEJ3gH0tQKl102C3qoX38ciMonO7E0",
  authDomain: "otp-auth-1a325.firebaseapp.com",
  projectId: "otp-auth-1a325",
  storageBucket: "otp-auth-1a325.appspot.com",
  messagingSenderId: "314856961681",
  appId: "1:314856961681:web:9620e6a1a2db8c4766f130",
  measurementId: "G-1JZD51Q3MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'it';