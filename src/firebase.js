import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAZHEsw09IAP66T6tHjcuYf8GNfYT9605E',
  authDomain: 'simple-redux-app.firebaseapp.com',
  databaseURL: 'https://simple-redux-app.firebaseio.com',
  projectId: 'simple-redux-app',
  storageBucket: 'simple-redux-app.appspot.com',
  messagingSenderId: '603649045111'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
