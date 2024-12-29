import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-xaCoytYovJfCB0sKMOUwp-QG_hByVq8',
  authDomain: 'yaagavaguru-adaf7.firebaseapp.com',
  projectId: 'yaagavaguru-adaf7',
  storageBucket: 'yaagavaguru-adaf7.firebasestorage.app',
  messagingSenderId: '424768129311',
  appId: '1:424768129311:web:bfae64067ab2d2bf9f482a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
