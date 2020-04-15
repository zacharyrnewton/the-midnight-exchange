import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/default-layout"
import SEO from "../components/seo"

const PodcastPage = ({ data }) => {
  const podcast = data.podcasts
  return (
    <Layout>
      <SEO title={podcast.title}/>
      <h1>{podcast.title}</h1>
      <audio controls>
        <source src={podcast.podcastUrl} type={podcast.podcastFileType}/>
        <track label="English" kind="captions" srclang="en" src="none"/>
      </audio>
      <div dangerouslySetInnerHTML={{__html: podcast.description }} />
      <p></p>
    </Layout>
  )
}
export default PodcastPage

export const pageQuery = graphql`
  query Podcast($id: String!) {
    podcasts(id: {eq: $id}) {
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
