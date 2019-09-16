import React from "react"
import { navigate } from "gatsby"
import SEO from "../seo"
import firebase from "../../services/firebase-config"
// import 'firebase/auth';

// Logout
function logout(event) {
  event.stopPropagation();
  event.preventDefault();
  const email = firebase.auth().currentUser.email;
  alert(email + " is logged out.");
  firebase.auth().signOut();
  navigate("/login/");

};

const IndexPage = () => (
  <>
    <SEO title="Admin" />
    <div className="login-wrapper">
      <h1>You are on the Admin Index Page</h1>
      <form className="login">
        <button id="btnLogout" onClick={logout}>Log Out</button>
      </form>
    </div>
  </>
)

export default IndexPage
