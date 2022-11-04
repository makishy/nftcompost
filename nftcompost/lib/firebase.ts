// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '<Your configuration>',
  authDomain: '<Your configuration>',
  projectId: '<Your configuration>',
  storageBucket: '<Your configuration>',
  messagingSenderId: '<Your configuration>',
  appId: '<Your configuration>',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
