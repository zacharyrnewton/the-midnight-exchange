// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// import 'firebase/analytics';

if (process.env.GATSBY_ACTIVE_ENV == "production") {
  const firebaseConfig = {
    apiKey: "AIzaSyDTwoTFhhTqzzlRg-PhHx3ky1zIp6Epn_I",
    authDomain: "the-midnight-exchange.firebaseapp.com",
    databaseURL: "https://the-midnight-exchange.firebaseio.com",
    projectId: "the-midnight-exchange",
    storageBucket: "the-midnight-exchange.appspot.com",
    messagingSenderId: "153446151275",
    appId: "1:153446151275:web:569bd5141e4c91e8",
    measurementId: "G-KK9TK915WM"
  };
} else {
  const firebaseConfig = {
    apiKey: "AIzaSyCM-QxRX2jfpqrtOlqYslya0lp4u7RlxTE",
    authDomain: "the-midnight-exchange-staging.firebaseapp.com",
    databaseURL: "https://the-midnight-exchange-staging.firebaseio.com",
    projectId: "the-midnight-exchange-staging",
    storageBucket: "the-midnight-exchange-staging.appspot.com",
    messagingSenderId: "514443679557",
    appId: "1:514443679557:web:8e1661970d6f572466502c",
    measurementId: "G-9YMMNFWTZS"
  };
}



firebase.initializeApp(firebaseConfig);

// firebase.analytics();

export default firebase
