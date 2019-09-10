import React from "react"
import { navigate } from "gatsby"
import AdminLayout from "../components/admin-layout"
import SEO from "../components/seo"
import firebase from "../services/firebase-config"
import 'firebase/auth';

// Login
function login(event) {
  event.stopPropagation();
  event.preventDefault();
  // Get Email and Password
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  // Sign in
  const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
};

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
      <input id="email" type="email" name="email" placeholder="Email" required="{true}"/>
      <input id="password" type="password" name="password" placeholder="Password" required="{true}"/>
      <button id="btnLogin" onClick={login}>Log In</button>
    </form>
  </AdminLayout>
)

export default LoginPage
