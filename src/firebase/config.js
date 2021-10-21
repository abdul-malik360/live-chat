import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArm8-27PSHWPQg4SUNxsduYtrHU2Vc4VQ",
  authDomain: "vue-firebase-site-a575f.firebaseapp.com",
  projectId: "vue-firebase-site-a575f",
  storageBucket: "vue-firebase-site-a575f.appspot.com",
  messagingSenderId: "967445735247",
  appId: "1:967445735247:web:39a836fde4d534196cc73a",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFireStore, timestamp };
