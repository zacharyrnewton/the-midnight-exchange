import React from "react"
import { navigate } from "gatsby"
import AdminLayout from "../components/admin-layout"
import SEO from "../components/seo"
import firebase from "../services/firebase-config"
import 'firebase/auth';



// firebase.auth().signOut();

// Login
function login(event) {
  event.stopPropagation();
  event.preventDefault();
  // Get Email and Password
  // const txtEmail = document.getElementById('txtEmail');
  // const txtPassword = document.getElementById('txtPassword');
  const email = document.getElementById('txtEmail').value;
  const pass = document.getElementById('txtPassword').value;
  // Sign in
  const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
};

// Logout
// function logout(event) {
//   event.stopPropagation();
//   event.preventDefault();
//   firebase.auth().signOut();
// };

if (typeof window !== `undefined`) {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser.email);
      console.log(firebaseUser);
      navigate("/admin/");
    } else {
      console.log('not logged in');
      // navigate("/");
    }
  });
};




const LoginPage = () => (
  <AdminLayout>
    <SEO title="Login" />
    <h1>Log In</h1>
    <form className="login">
      <input id="txtEmail" type="email" name="email" placeholder="Email" required="{true}"/>
      <input id="txtPassword" type="password" name="password" placeholder="Password" required="{true}"/>
      <button id="btnLogin" onClick={login}>Log In</button>
    </form>
  </AdminLayout>
)

export default LoginPage



// function login(e) {
//   e.stopPropagation();
//   e.preventDefault();
//   const email = document.getElementById('txtEmail').value;
//   const pass = document.getElementById('txtPassword').value;
//   // const email = txtEmail.value;
//   // const pass = txtPassword.value;
//   // const email = "zacharyrnewton@gmail.com";
//   // const pass = "Password@123";
//
//   firebase.auth().signInWithEmailAndPassword(email, pass);
//   // console.log(firebase);
//   // console.log(user);
// };
//
// function logout(e) {
//   e.stopPropagation();
//   e.preventDefault();
//   firebase.auth().signOut();
// }
//
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log("Signed In");
//     alert("Signed In");
//     // document.getElementById('btnLogout').classList.toggle('hide');
//   } else {
//     console.log("Not Signed In");
//     alert("Not Signed In");
//     // document.getElementById('btnLogout').classList.toggle('hide');
//   }
// });
