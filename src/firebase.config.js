// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZX3D3svMx_XwmScvrBUfn14zedykNYk8",
  authDomain: "the-dragon-news-e48f4.firebaseapp.com",
  projectId: "the-dragon-news-e48f4",
  storageBucket: "the-dragon-news-e48f4.firebasestorage.app",
  messagingSenderId: "604783785163",
  appId: "1:604783785163:web:ba520ae058d19b6b71574e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app;