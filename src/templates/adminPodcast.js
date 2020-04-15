import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import style from "../sass/admin.module.sass"
// import firebase from "../services/firebase-config"
import Layout from "../components/admin-layout"

const Podcast = ({ data }) => {
  const podcast = data.podcasts
  return (
    <Layout>
      <SEO title={podcast.title} />
      <div className={style.contentWrapper}>
        <h1>{podcast.title}</h1>
        <ul className={style.podcastMeta}>
          <li>
            <small className={style.adminPodcastListMetaItem}>
              <b>Posted:</b> {podcast.pubDate}
            </small>
          </li>
          <li>
            <small className={style.adminPodcastListMetaItem}>
              <b>Explicit:</b> {podcast.isExplicit}
            </small>
          </li>
          <li>
            <small className={style.adminPodcastListMetaItem}>
              <b>Season:</b> {podcast.season}
            </small>
          </li>
          <li>
            <small className={style.adminPodcastListMetaItem}>
              <b>Episode:</b> {podcast.episode}
            </small>
          </li>
          <li>
            <small className={style.adminPodcastListMetaItem}>
              <b>File Type:</b> {podcast.podcastFileType}
            </small>
          </li>
          <li>
            <small className={style.adminPodcastListMetaItem}>
              <b>File Size:</b> {podcast.podcastFileSize}
            </small>
          </li>
          <li>
            <small className={style.adminPodcastListMetaItem}>
              <b>Podcast Duration:</b> {Math.round(podcast.podcastDuration)} in
              seconds
            </small>
          </li>
        </ul>
        <hr />
        <h2>Description</h2>
        <p dangerouslySetInnerHTML={{ __html: podcast.description }} />
      </div>
      <div className={style.bottomNavigation}>
        <div className={style.buttonWrapper}>
          <Link to="/admin/" className={style.buttonSecondary}>
            Back
          </Link>
          <Link to="/admin/" className={style.buttonPrimary}>
            Edit Podcast
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Podcast

export const pageQuery = graphql`
  query AdminPodcast($id: String!) {
    podcasts(id: { eq: $id }) {
      title
      tempUrl
      season
      pubDate
      podcastUrl
      podcastFileType
      podcastFileSize
      podcastDuration
      isExplicit
      id
      episode
      description
    }
  }
`
