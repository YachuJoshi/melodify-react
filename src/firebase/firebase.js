import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDVfiemxDg1y4Jwo42KQXOJ0nHZAJO7JdA",
  authDomain: "melodify-music.firebaseapp.com",
  databaseURL: "https://melodify-music.firebaseio.com",
  projectId: "melodify-music",
  storageBucket: "melodify-music.appspot.com",
  messagingSenderId: "913296703037",
  appId: "1:913296703037:web:89218f9bdfa25523c03454",
  measurementId: "G-111LV1WFF4",
});

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export default app;
