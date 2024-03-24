import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCuDwO19z4J8GeLcfVRR5UAfEIkZzT1ukw",
  authDomain: "espfirebase-24f38.firebaseapp.com",
  databaseURL: "https://espfirebase-24f38-default-rtdb.firebaseio.com",
  projectId: "espfirebase-24f38",
  storageBucket: "espfirebase-24f38.appspot.com",
  messagingSenderId: "714175473586",
  appId: "1:714175473586:web:d0fe2a8a4e2bb10a7ce6ab",
  measurementId: "G-KJHJ30KL34"
}   

const app = initializeApp(firebaseConfig)

export const database = getDatabase(app); 
