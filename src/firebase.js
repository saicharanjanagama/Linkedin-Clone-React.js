import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9FgDtytAeKSp2TGTRoUbVI4nO79suO54",
  authDomain: "linkedin-clone-accd3.firebaseapp.com",
  projectId: "linkedin-clone-accd3",
  storageBucket: "linkedin-clone-accd3.firebasestorage.app",
  messagingSenderId: "499652874622",
  appId: "1:499652874622:web:dc85b3275aab581425a32f" 
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;