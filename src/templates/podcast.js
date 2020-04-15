import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/default-layout"
import SEO from "../components/seo"
import style from "../sass/admin.module.sass"

const PodcastPage = ({ data }) => {
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
        <audio controls>
          <source src={podcast.podcastUrl} type={podcast.podcastFileType} />
          <track label="English" kind="captions" srclang="en" src="none" />
        </audio>
        <hr />
        <h2>Description</h2>
        <p dangerouslySetInnerHTML={{ __html: podcast.description }} />
      </div>
      <div className={style.bottomNavigation}>
        <div className={style.buttonWrapper}>
          <Link to="/podcast/" className={style.buttonSecondary}>
            Back
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export default PodcastPage

export const pageQuery = graphql`
  query Podcast($id: String!) {
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
