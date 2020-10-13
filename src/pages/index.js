import React from "react"
import Layout from "../components/default-layout"
import SEO from "../components/seo"
import PodcastLinks from "../components/podcast-links"
import Stars from '../components/stars'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="header-content">
      <div className="header-text">
        <h1><span>Story Archives by</span><br />The Midnight Exchange</h1>
        <p>It’s that at ease feeling you get when you’re out with friends, talking over drinks in that dimly lit lounge with the good music. It’s about approaching life with a sense of curiosity and expectation; diving into any subject that gets your attention. It’s about spending time, having conversations you’ll never forget. This—is The Midnight Exchange. <br />Hosted by: <a href="https://www.mbusto.com/">Mario</a> & <a href="https://zacharynewton.me/">Zachary</a></p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="240" height="384" viewBox="0 0 240 384">
        <g transform="translate(-1352 -348)">
          <path d="M234,144H222a6,6,0,0,0-6,6v42a96.1,96.1,0,0,1-102.548,95.783C62.475,284.385,24,239.707,24,188.618V150a6,6,0,0,0-6-6H6a6,6,0,0,0-6,6v37.755C0,250.3,46.23,304.845,108,311.077V360H54a6,6,0,0,0-6,6v12a6,6,0,0,0,6,6H186a6,6,0,0,0,6-6V366a6,6,0,0,0-6-6H132V311.242C192.533,305.175,240,254.1,240,192V150A6,6,0,0,0,234,144Z" transform="translate(1352 348)" fill="#252422" /><path d="M120,264a72,72,0,0,0,72-72V72A72,72,0,0,0,48,72V192A72,72,0,0,0,120,264ZM72,72a48,48,0,0,1,96,0H126a6,6,0,0,0-6,6V90a6,6,0,0,0,6,6h42v24H126a6,6,0,0,0-6,6v12a6,6,0,0,0,6,6h42v24H126a6,6,0,0,0-6,6v12a6,6,0,0,0,6,6h42a48,48,0,0,1-96,0Z" transform="translate(1352 348)" fill="#b4ac9e" />
        </g>
      </svg>
    </div>
    <PodcastLinks />
    <Stars />
  </Layout>
)

export default IndexPage
