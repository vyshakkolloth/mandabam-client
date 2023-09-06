// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdgqxMznmXHdJXi-zzkNzc0mf4v8pkUxQ",
  authDomain: "mandabam-ee5c1.firebaseapp.com",
  projectId: "mandabam-ee5c1",
  storageBucket: "mandabam-ee5c1.appspot.com",
  messagingSenderId: "50671701544",
  appId: "1:50671701544:web:fd323f7324fdb245c12f1d"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCMVz8zBojZg1DJSWkDzVV79obwTJWBkGQ",
//   authDomain: "resto-plaza.firebaseapp.com",
//   projectId: "resto-plaza",
//   storageBucket: "resto-plaza.appspot.com",
//   messagingSenderId: "102001432791",
//   appId: "1:102001432791:web:36230e169a24cc8fdaf892",
//   measurementId: "G-KB3E0LNQ05"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
auth.languageCode='en'
export {auth,app}

