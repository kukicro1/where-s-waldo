import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBwhQuJ-ZyZRtvgsk7keAv4WUzlZvzuArU',
  authDomain: 'where-s-waldo-c8ee6.firebaseapp.com',
  projectId: 'where-s-waldo-c8ee6',
  storageBucket: 'where-s-waldo-c8ee6.appspot.com',
  messagingSenderId: '394394211623',
  appId: '1:394394211623:web:d6494e5584f5ff39940502',
}

initializeApp(firebaseConfig)

export const db = getFirestore()
