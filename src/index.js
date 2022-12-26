import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKXD8dwmMzpAe00XTXxNVp_6tYoNG-300",
  authDomain: "shopping-cart-19c56.firebaseapp.com",
  projectId: "shopping-cart-19c56",
  storageBucket: "shopping-cart-19c56.appspot.com",
  messagingSenderId: "933865059966",
  appId: "1:933865059966:web:bbb5f194d8faba53fc8a2f",
  measurementId: "G-4C0JEMYKQY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
