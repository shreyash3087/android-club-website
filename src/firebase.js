import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDlZPHqfjRtp3BjOVJG9QNdfJde1NBceO0",
  authDomain: "android-club-65a70.firebaseapp.com",
  projectId: "android-club-65a70",
  storageBucket: "android-club-65a70.appspot.com",
  messagingSenderId: "845947477263",
  appId: "1:845947477263:web:deb5ac82aa06947dc1327a",
  measurementId: "G-45FZBQZJPW"
};
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const database = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, database, ref, onValue, firestore, storage };

