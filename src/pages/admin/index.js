import React from "react"
import Layout from "../../components/default-layout"
import { navigate } from "gatsby"
import SEO from "../../components/seo"
import firebase from "../../services/firebase-config"
import 'firebase/auth';

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
  <Layout>
    <SEO title="Admin" />
    <div className="login-wrapper">
      <h1>You are on the Admin Index Page</h1>
      <form className="login">
        <button id="btnLogout" onClick={logout}>Log Out</button>
      </form>
    </div>
  </Layout>
)

export default IndexPage
