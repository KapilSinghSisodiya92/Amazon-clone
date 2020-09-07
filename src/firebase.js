import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8qCOMJK6AWHMlC5g6jYkVNgLbCsen91g",
  authDomain: "clone-48270.firebaseapp.com",
  databaseURL: "https://clone-48270.firebaseio.com",
  projectId: "clone-48270",
  storageBucket: "clone-48270.appspot.com",
  messagingSenderId: "475893621589",
  appId: "1:475893621589:web:cfbc46e58071bb4dae45dc",
  measurementId: "G-R2WEWWRW9D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
