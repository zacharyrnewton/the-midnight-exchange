import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
// import "../sass/config/config.sass"
import "../sass/styles.css"
// import auth from "../utils/auth"

const IndexLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header className="hero">
        <Navigation siteTitle={data.site.siteMetadata.title} />
        {children}
      </header>
    </>
  )
}

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout
