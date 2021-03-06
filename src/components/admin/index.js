import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import SEO from "../seo"
// import style from "../../sass/admin.module.sass"
import style from "../../sass/styles.css"

const AdminPodcasts = () => {
  return (
    <ul className={style.adminPodcastList}>
      <StaticQuery
        query={graphql`
          query AdminPodcastsQuery {
            allPodcasts(
              sort: { order: [DESC, DESC], fields: [season, episode] }
            ) {
              nodes {
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
          }
        `}
        render={data =>
          data.allPodcasts.nodes.map(podcast => {
            return (
              <li key={podcast.id}>
                <Link
                  to={"/admin/podcast/" + podcast.id}
                  className={style.adminPodcastListItemLink}
                >
                  <div className={style.adminPodcastListItem}>
                    <h2 className={style.adminPodcastListItemTitle}>
                      {podcast.title}
                    </h2>
                    <div>
                      <small className={style.adminPodcastListMetaItem}>
                        <b>Posted:</b> {podcast.pubDate}
                      </small>
                      {/*<small className={style.adminPodcastListMetaItem}><b>Edited:</b> 04/04/2019</small>*/}
                    </div>
                    <p
                      className={style.adminPodcastListItemExcerpt}
                      dangerouslySetInnerHTML={{ __html: podcast.description }}
                    />
                  </div>
                </Link>
              </li>
            )
          })
        }
      />
    </ul>
  )
}

export default () => {
  return (
    <>
      <SEO title="Admin" />
      <div className={style.contentWrapper}>
        <h1>Podcasts</h1>
        <AdminPodcasts />
      </div>
      <div className={style.bottomNavigation}>
        <div className={style.buttonWrapper}>
          <Link to="/admin/add/" className={style.buttonPrimary}>
            Add Podcast
          </Link>
        </div>
      </div>
    </>
  )
}
