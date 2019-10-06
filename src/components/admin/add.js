import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
import style from "../../sass/admin.module.sass"
// import firebase from "../../services/firebase-config"

const IndexPage = () => (
  <>
    <SEO title="Admin Add Podcast" />
    <div className={style.contentWrapper}>
      <h1>Add Podcast</h1>
    </div>
    <div className={style.bottomNavigation}>
      <Link to="/admin/" className={style.addPodcast}>Home</Link>
    </div>
  </>
)

export default IndexPage
