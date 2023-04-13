// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
// import { initializeApp } from 'firebase/app'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwhQuJ-ZyZRtvgsk7keAv4WUzlZvzuArU',
  authDomain: 'where-s-waldo-c8ee6.firebaseapp.com',
  projectId: 'where-s-waldo-c8ee6',
  storageBucket: 'where-s-waldo-c8ee6.appspot.com',
  messagingSenderId: '394394211623',
  appId: '1:394394211623:web:d6494e5584f5ff39940502',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
