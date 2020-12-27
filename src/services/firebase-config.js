// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// import 'firebase/analytics';

if (process.env.GATSBY_ACTIVE_ENV === "production") {
  const firebaseConfig = {
    apiKey: "AIzaSyBE4iJmjOClOOvs2SwZucFj-kXVIKRWxvo",
    authDomain: "tme---story-archives.firebaseapp.com",
    databaseURL: "https://tme---story-archives.firebaseio.com",
    projectId: "tme---story-archives",
    storageBucket: "tme---story-archives.appspot.com",
    messagingSenderId: "947430446605",
    appId: "1:947430446605:web:f0f2b4a122c07df955e744",
    measurementId: "G-XFNB15SQHW"
  };
  firebase.initializeApp(firebaseConfig);
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
  firebase.initializeApp(firebaseConfig);
}





// firebase.analytics();

export default firebase
