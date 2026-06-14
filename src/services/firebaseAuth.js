// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxlLNE9U1HXSxkSbT1dtP1aTg0qJMMeG4",
  authDomain: "react0native-auth.firebaseapp.com",
  projectId: "react0native-auth",
  storageBucket: "react0native-auth.firebasestorage.app",
  messagingSenderId: "317389645761",
  appId: "1:317389645761:web:1f9ed727c7d938a626f140",
};
let auth;

if (getApps().length == 0) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} else {
  auth = getAuth();
}

export default auth;
