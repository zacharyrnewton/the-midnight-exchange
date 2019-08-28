import React from "react"

import AdminLayout from "../components/admin-layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <AdminLayout>
    <SEO title="Home" />
    <h1>Log In</h1>
    <form className="login">
      <input type="email" name="email" placeholder="Email" required="{true}"/>
      <input type="password" name="password" placeholder="Password" required="{true}"/>
      <button>Log In</button>
    </form>
  </AdminLayout>
)

export default IndexPage
