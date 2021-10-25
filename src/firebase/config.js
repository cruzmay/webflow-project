// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3i-J0qNq2AESlW255wKul8IHvhqnzyEY",
  authDomain: "webflow-app-7f5b1.firebaseapp.com",
  projectId: "webflow-app-7f5b1",
  storageBucket: "webflow-app-7f5b1.appspot.com",
  messagingSenderId: "526804538167",
  appId: "1:526804538167:web:3a5db27d468084251e00b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const db = getFirestore();
console.log(db);
const auth = getAuth()

export { db, app, auth };
