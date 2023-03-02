import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKGJLms8OiWV4J7Q-VS_kEJEmkNMJeNtk",
  authDomain: "auth-myhealth.firebaseapp.com",
  projectId: "auth-myhealth",
  storageBucket: "auth-myhealth.appspot.com",
  messagingSenderId: "582766684160",
  appId: "1:582766684160:web:941f09bda262bd3cb6d0e5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
const storage = getStorage(app);

export { app, auth, db, storage };
