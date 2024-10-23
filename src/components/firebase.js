// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#availaable-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKG14PEbXf7OXydgHTLOHPWRUeHJ7g9iE",
  authDomain: "my-portfolio-a8609.firebaseapp.com",
  databaseURL: "https://my-portfolio-a8609-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-a8609",
  storageBucket: "my-portfolio-a8609.appspot.com",
  messagingSenderId: "255024783889",
  appId: "1:255024783889:web:e1b08d4815e98cf115c7b0",
  measurementId: "G-S7KMM67G24"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };