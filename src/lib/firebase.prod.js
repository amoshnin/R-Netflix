import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAaUkF5xgZOwx0NFCfpi1Dw-Iqb6t2H1ok',
  authDomain: 'panda-v2.firebaseapp.com',
  databaseURL: 'https://panda-v2.firebaseio.com',
  projectId: 'panda-v2',
  storageBucket: 'panda-v2.appspot.com',
  messagingSenderId: '837964176679',
  appId: '1:837964176679:web:96dbd9037ac77710b65d02',
  measurementId: 'G-7QPTXR7VFP',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
