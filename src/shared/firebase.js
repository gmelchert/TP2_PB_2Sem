import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIGS5_OtsuqgienEOJehfYJMkUL5z-6Dg",
    authDomain: "tp2-pb-2semestre.firebaseapp.com",
    projectId: "tp2-pb-2semestre",
    storageBucket: "tp2-pb-2semestre.appspot.com",
    messagingSenderId: "681032115653",
    appId: "1:681032115653:web:e08bb52ef75c45ad9c97ac",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
