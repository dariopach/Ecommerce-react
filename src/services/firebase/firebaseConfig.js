import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6sMYlDJWJso2sT0DSWxhKPwqVwmx1EU4",
  authDomain: "ecommerce-26775.firebaseapp.com",
  projectId: "ecommerce-26775",
  storageBucket: "ecommerce-26775.appspot.com",
  messagingSenderId: "26860885021",
  appId: "1:26860885021:web:d8632c3f3edcdd5d95e2f4",
  measurementId: "G-RN0FE7SVPT"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)