// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// , signInAnonymously

const firebaseConfig = {
  apiKey: "AIzaSyD4POpJ4l9U0HS_bzcswZiB6o6zgZrsAmU",
  authDomain: "e-clone-1e97c.firebaseapp.com",
  projectId: "e-clone-1e97c",
  storageBucket: "e-clone-1e97c.appspot.com",
  messagingSenderId: "296987706202",
  appId: "1:296987706202:web:b40773deae6e26dcc7a963",
  measurementId: "G-2LMKL0HR3L",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
