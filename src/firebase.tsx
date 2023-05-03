import { initializeApp } from 'firebase/app'

import { collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBwhQuJ-ZyZRtvgsk7keAv4WUzlZvzuArU',
  authDomain: 'where-s-waldo-c8ee6.firebaseapp.com',
  projectId: 'where-s-waldo-c8ee6',
  storageBucket: 'where-s-waldo-c8ee6.appspot.com',
  messagingSenderId: '394394211623',
  appId: '1:394394211623:web:d6494e5584f5ff39940502',
}

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'CartoonUniverse')

getDocs(colRef).then((snapshot) => {
  let game: any = []
  snapshot.docs.forEach((doc) => {
    game.push({ ...doc.data(), id: doc.id })
  })
  console.log(game)
})
