// import * as firebase from 'firebase';
import firebase from 'firebase/app';
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDTwoTFhhTqzzlRg-PhHx3ky1zIp6Epn_I",
  authDomain: "the-midnight-exchange.firebaseapp.com",
  databaseURL: "https://the-midnight-exchange.firebaseio.com",
  projectId: "the-midnight-exchange",
  storageBucket: "",
  messagingSenderId: "153446151275",
  appId: "1:153446151275:web:569bd5141e4c91e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase
