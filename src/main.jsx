import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLdurF77eOvQWyHmFBxdxLuRKYNFotUIU",
  authDomain: "cens-ecommerce.firebaseapp.com",
  projectId: "cens-ecommerce",
  storageBucket: "cens-ecommerce.appspot.com",
  messagingSenderId: "897993030525",
  appId: "1:897993030525:web:3ad02551fa5652a9de2a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
