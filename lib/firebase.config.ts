// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGIRwWqylBTqCrRGIUdiAJx0DpAjfnm8M',
  authDomain: 'testdb-9e1ec.firebaseapp.com',
  projectId: 'testdb-9e1ec',
  storageBucket: 'testdb-9e1ec.appspot.com',
  messagingSenderId: '367813017905',
  appId: '1:367813017905:web:d7565437ea1eb0f79c3010',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
