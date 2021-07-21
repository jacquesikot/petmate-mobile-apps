import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnd34yUJTeHyaokVIk9ShYpkoBCFeCS8Q',
  authDomain: 'blue-5b8a6.firebaseapp.com',
  projectId: 'blue-5b8a6',
  storageBucket: 'blue-5b8a6.appspot.com',
  messagingSenderId: '72306694784',
  appId: '1:72306694784:web:97a36d2371258deded2465',
  measurementId: 'G-94QJ0TTHQ4',
};

let app: firebase.app.App;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const db = app.firestore();
export const auth = firebase.auth();
