import React from "react"
import { navigate, Link } from "gatsby"
import SEO from "../seo"
import firebase from "../../services/firebase-config"

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
    <SEO title="Admin Add Podcast" />
    <div className="login-wrapper">
      <h1>You are on the Admin Add Podcast Page</h1>
      <Link to="/admin/">Home</Link>
      <form className="login">
        <button id="btnLogout" onClick={logout}>Log Out</button>
      </form>
    </div>
  </>
)

export default IndexPage
