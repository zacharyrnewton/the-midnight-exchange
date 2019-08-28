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
import "./layout.sass"

const AdminLayout = ({ children }) => {
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
      <header>
        <Navigation />
        <div className="login-wrapper">
          <main>{children}</main>
        </div>
      </header>
    </>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout
