import React from "react"
import { Link } from "gatsby"
import ErrorLayout from "../components/error-layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <ErrorLayout>
    <SEO title="Error 404" />
    <h1>Error 404</h1>
    <p>Something is broken, we can’t find this page. Go to our <Link to="/">Homepage</Link>.</p>
  </ErrorLayout>
)

export default NotFoundPage
