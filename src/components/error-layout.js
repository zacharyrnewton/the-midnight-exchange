/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import PodcastLinks from "./podcast-links"
// import Particles from 'react-particles-js'
// import "../sass/config/config.sass"
import "../sass/styles.css"

const IndexLayout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <header className="hero">
        <Navigation />
        <div className="error-header-content">
          <div className="error-header-text">
            <main>{children}</main>
          </div>
        </div>
        <PodcastLinks />
        <div className="particles-wrapper"></div>
      </header>
    </>
  )
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout
