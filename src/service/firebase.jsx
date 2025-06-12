import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT7PyWLtpj2CpNhCd2tuQUV9JXlfrhEfE",
  authDomain: "petshop-1d3f8.firebaseapp.com",
  projectId: "petshop-1d3f8",
  storageBucket: "petshop-1d3f8.firebasestorage.app",
  messagingSenderId: "95086606682",
  appId: "1:95086606682:web:098b02c78620f397efdb63",
  measurementId: "G-MSKV9E0CKQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore()