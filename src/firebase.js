import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {}

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);
export const auth = getAuth(app); 
export { db };
