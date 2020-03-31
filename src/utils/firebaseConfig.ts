import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCIDlj70JWW75nX9do3AiCiyEA-csELe78',
  authDomain: 'noteria-4c9ed.firebaseapp.com',
  databaseURL: 'https://noteria-4c9ed.firebaseio.com',
  projectId: 'noteria-4c9ed',
  storageBucket: 'noteria-4c9ed.appspot.com',
  messagingSenderId: '942097621996',
  appId: '1:942097621996:web:3d23ded5c2fca27fc656c9',
  measurementId: 'G-NZV9S5SBLF',
};

firebase.initializeApp(firebaseConfig);

// Configure the db.
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

// Configure the authentication.
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
