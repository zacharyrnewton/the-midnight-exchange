import React from "react"
import PropTypes from "prop-types"
import Navigation from "./admin-navigation"
import "./layout.sass"

const AdminLayout = ({ children }) => {

  return (
    <>
      <header className="hero">
        <Navigation  />
        {children}
      </header>
    </>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout
