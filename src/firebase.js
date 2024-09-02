import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAkVdhAM2Va5sxfO1-qFsNy0AxOmlLiD6w",
    authDomain: "hackerwolf-82dbc.firebaseapp.com",
    projectId: "hackerwolf-82dbc",
    storageBucket: "hackerwolf-82dbc.appspot.com",
    messagingSenderId: "1017905310519",
    appId: "1:1017905310519:web:c19e2bdb6dd15c4db988b2",
    measurementId: "G-Q3PM1JZ8WM"
  };

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);
export const auth = getAuth(app); 
export { db };
