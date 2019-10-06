import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import firebase from "../services/firebase-config"

// Logout
function logout(event) {
  event.stopPropagation();
  event.preventDefault();
  const email = firebase.auth().currentUser.email;
  console.log(email + " is logged out.");
  firebase.auth().signOut();
  navigate("/login/");
};

const Navigation = ({ siteTitle }) => (
  <nav className="admin">
    <Link to="/">Home
      <svg xmlns="http://www.w3.org/2000/svg" width="67.199" height="32" viewBox="0 0 67.199 32">
        <path d="M-43-37V-69h6.4v12.8h19.2v6.4H-36.6V-37Z" transform="translate(81.4 69)" fill="#ebe1ce"/>
        <rect width="19.2" height="6.4" transform="translate(48)" fill="#ebe1ce"/>
        <rect width="19.2" height="6.4" transform="translate(48 25.6)" fill="#ebe1ce"/>
        <rect width="6.4" height="32" fill="#ebe1ce"/>
        <rect width="6.4" height="32" transform="translate(12.8)" fill="#ebe1ce"/>
        <rect width="6.4" height="32" transform="translate(25.6)" fill="#ebe1ce"/>
      </svg>
    </Link>
    <div className="nav-links">
      <button id="btnLogout" onClick={logout}>Log Out</button>
    </div>
  </nav>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
