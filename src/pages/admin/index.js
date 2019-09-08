import React from "react"
import AdminLayout from "../../components/admin-layout"
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
  <AdminLayout>
    <SEO title="Admin" />
    <h1>You are on the Admin Index Page</h1>
    <form className="login">
      <button id="btnLogout" onClick={logout}>Log Out</button>
    </form>
  </AdminLayout>
)

export default IndexPage
