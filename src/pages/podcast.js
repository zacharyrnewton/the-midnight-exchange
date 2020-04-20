import React from "react"
import Layout from "../components/default-layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const Podcasts = ({ podcasts }) => {
  if (!podcasts) return null
  return (
    <ul>
      {podcasts.map(podcast => {
        return (
          <li>
            <Link to={"/episode/" + podcast.id} key={podcast.id}>
              {podcast.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

// const PodcastIndex = ({data}) => (

//   <Layout>
//     <SEO title="Podcast" />
//     <h1>HELLO WORLD</h1>
//     <Podcasts podcasts={podcasts}/>
//   </Layout>
// )

// export default PodcastIndex

export default ({ data }) => {
  const podcasts = data.allPodcasts.nodes
  return (
    <Layout>
      <SEO title="Podcast" />
      <h1>All Podcasts</h1>
      <Podcasts podcasts={podcasts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PodcastsQuery {
    allPodcasts(sort: { order: DESC, fields: episode }) {
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
`
