import React from "react"
import Layout from "../components/default-layout"
import SEO from "../components/seo"
import PodcastLinks from "../components/podcast-links"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="header-content">
      <div className="header-text">
        <h1>Story Archives<br /><span><a href="https://themidnightexchange.com" target="_blank" rel="noopener noreferrer">by The Midnight Exchange Podcast Network</a></span></h1>
        <p>Story Archives is a show about Entertainment, focusing on film and television. Episodes vary from general convos about relevant entertainment news, commentaries on television shows, and deep dive film reviews.</p>
      </div>
    </div>
    <PodcastLinks />
  </Layout>
)

export default IndexPage
