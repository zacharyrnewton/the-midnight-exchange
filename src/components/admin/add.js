import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
// import firebase from "../../services/firebase-config"

const IndexPage = () => (
  <>
    <SEO title="Admin Add Podcast" />
    <div className="login-wrapper">
      <h1>You are on the Admin Add Podcast Page</h1>
      <Link to="/admin/">Home</Link>
    </div>
  </>
)

export default IndexPage
