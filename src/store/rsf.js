import firebase from "firebase";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6GjKA6gqutTzA7Foa6XjZwD5chlve4Wc",
  authDomain: "usaco-snippets.firebaseapp.com",
  databaseURL: "https://usaco-snippets.firebaseio.com",
  projectId: "usaco-snippets",
  storageBucket: "usaco-snippets.appspot.com",
  messagingSenderId: "1030971968126"
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;