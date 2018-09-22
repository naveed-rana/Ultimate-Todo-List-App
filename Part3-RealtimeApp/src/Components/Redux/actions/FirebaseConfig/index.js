import firebase from 'firebase';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAcHZU0zjQeMPLku8q5Eh3EFRjOinA3_M4",
  authDomain: "ultimate-todo-list.firebaseapp.com",
  databaseURL: "https://ultimate-todo-list.firebaseio.com",
  projectId: "ultimate-todo-list",
  storageBucket: "ultimate-todo-list.appspot.com",
  messagingSenderId: "41896715230"
};

firebase.initializeApp(config);
var db = firebase.firestore();


  export default db;