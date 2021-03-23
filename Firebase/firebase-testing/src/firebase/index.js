import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA01RXL60GItcaVX8lC1PZdxDq8LmczcBA',
  authDomain: 'fca-test-2021.firebaseapp.com',
  projectId: 'fca-test-2021',
  storageBucket: 'fca-test-2021.appspot.com',
  messagingSenderId: '969815874311',
  appId: '1:969815874311:web:9904004e44873d87dd03a2',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
