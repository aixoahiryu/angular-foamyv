import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBAeZRr9p89nb9821FANWtPHC3GxnvS0og",
  authDomain: "angular1-25780.firebaseapp.com",
  databaseURL: "https://angular1-25780.firebaseio.com",
  projectId: "angular1-25780",
  storageBucket: "angular1-25780.appspot.com",
  messagingSenderId: "461407356175"
};

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;
