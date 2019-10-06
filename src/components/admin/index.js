import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
import style from "../../sass/admin.module.sass"
// import firebase from "../../services/firebase-config"

const IndexPage = () => (
  <>
    <SEO title="Admin" />
    <div className={style.contentWrapper}>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
      <h1>Podcasts</h1>
    </div>
    <div className={style.bottomNavigation}>
      <Link to="/admin/add/" className={style.addPodcast}>Add Podcast</Link>
    </div>
  </>
)

export default IndexPage
