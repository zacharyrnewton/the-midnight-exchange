import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
import style from "../../sass/admin.module.sass"
// import firebase from "../../services/firebase-config"
//
// const podcasts = firebase.firestore().collection("podcasts").get().then(function(podcasts){
//   podcasts.forEach(function(podcast) {
//     const podcastList = {
//       id: podcast.id,
//       title: podcast.title,
//       description: podcast.description,
//     };
//     console.log(podcastList)
//   })
// });



const IndexPage = () => (
  <>
    <SEO title="Admin" />
    <div className={style.contentWrapper}>
      <h1>Podcasts</h1>
      <ul className={style.adminPodcastList}>
        <Link to="/admin/podcastID" className={style.adminPodcastListItemLink}>
          <li className={style.adminPodcastListItem}>
            <h2 className={style.adminPodcastListItemTitle}>This is the title of the podcast.</h2>
            <div>
              <small className={style.adminPodcastListMetaItem}><b>Posted:</b> 04/04/2019</small><small className={style.adminPodcastListMetaItem}><b>Edited:</b> 04/04/2019</small>
            </div>
            <p className={style.adminPodcastListItemExcerpt}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem.</p>
          </li>
        </Link>

      </ul>
    </div>
    <div className={style.bottomNavigation}>
    <Link to="/admin/add/" className={style.addPodcast}>Add Podcast</Link>
    </div>
  </>
)

export default IndexPage
