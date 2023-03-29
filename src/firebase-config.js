// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK1KnotERzxdCB9qUbrJxSMXjUjHJnQEI",
  projectId: "dall-e-2-5de27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app)
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)