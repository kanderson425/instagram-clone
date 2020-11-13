import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0jACIs1e8wnFfxQrAiy_OWTu5jayBGEo",
  authDomain: "instagram-clone-396b7.firebaseapp.com",
  databaseURL: "https://instagram-clone-396b7.firebaseio.com",
  projectId: "instagram-clone-396b7",
  storageBucket: "instagram-clone-396b7.appspot.com",
  messagingSenderId: "568359077254",
  appId: "1:568359077254:web:24d7b19317232edd5a1807",
  measurementId: "G-QZ3VGFNK4Z",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
