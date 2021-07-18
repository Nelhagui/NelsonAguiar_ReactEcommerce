import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDcpfrlNWtDXxdDNqg4hc51is4_PZ0ym7s",
    authDomain: "coder-house-ecommerce-aguiar.firebaseapp.com",
    projectId: "coder-house-ecommerce-aguiar",
    storageBucket: "coder-house-ecommerce-aguiar.appspot.com",
    messagingSenderId: "637883678186",
    appId: "1:637883678186:web:458c7e090c0f2849c84693",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
