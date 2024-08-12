import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDvkVq_00su6F7eQIbSv6QHuTppaqIP43k",
    authDomain: "tp3-pb.firebaseapp.com",
    databaseURL: "https://tp3-pb-default-rtdb.firebaseio.com",
    projectId: "tp3-pb",
    storageBucket: "tp3-pb.appspot.com",
    messagingSenderId: "598899689497",
    appId: "1:598899689497:web:f09a31e0669cc4c9648288"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
