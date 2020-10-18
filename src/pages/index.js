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
        <p>It’s that at ease feeling you get when you’re out with friends, talking over drinks in that dimly lit lounge with the good music. It’s about approaching life with a sense of curiosity and expectation; diving into any subject that gets your attention. It’s about spending time, having conversations you’ll never forget. This—is The Midnight Exchange. <br />Hosted by: <a href="https://www.mbusto.com/">Mario</a> & <a href="https://zacharynewton.me/">Zachary</a></p>
      </div>
    </div>
    <PodcastLinks />
  </Layout>
)

export default IndexPage
