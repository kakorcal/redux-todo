import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAhWMYWhBG2UvsNMZ-qVLbaqVZ5aTzwsNU',
  authDomain: 'hot-takes.firebaseapp.com',
  databaseURL: 'https://hot-takes.firebaseio.com',
  storageBucket: 'hot-takes.appspot.com',
  messagingSenderId: '823384132241'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
