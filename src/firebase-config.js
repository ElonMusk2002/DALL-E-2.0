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
  authDomain: "dall-e-2-0-nyu1qxtab-elonmusk2002.vercel.app",
  projectId: "dall-e-2-5de27",
  storageBucket: "dall-e-2-5de27.appspot.com",
  messagingSenderId: "660557354857",
  appId: "1:660557354857:web:9b4aa01e9d5f4992210ff8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app)
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)