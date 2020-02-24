import React from "react"
import Layout from "../components/default-layout"
import SEO from "../components/seo"
import firebase from "../services/firebase-config"
import { navigate } from "gatsby"

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
      console.log("Logged in as: " + firebaseUser.email);
      // console.log(firebaseUser);
      navigate("/admin/");
    } else {
      console.log('Not logged in');
    }
  });
};

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form className="login">
        <input id="email" type="email" name="email" placeholder="Email" required="{true}" autoComplete="username"/>
        <input id="password" type="password" name="password" placeholder="Password" required="{true}" autoComplete="current-password"/>
        <button id="btnLogin" onClick={login}>Log In</button>
      </form>
    </div>
  </Layout>
)

export default LoginPage
