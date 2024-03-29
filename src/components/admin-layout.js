import React from "react"
import PropTypes from "prop-types"
import Navigation from "./admin-navigation"
// import "../sass/config/config.sass"
import "../sass/styles.css"

const AdminLayout = ({ children }) => {

  return (
    <>
      <header>
        <Navigation />
        {children}
      </header>
    </>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout
