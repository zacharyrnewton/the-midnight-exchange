import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/default-layout"
import PrivateRoute from "../components/PrivateRoute"
import AdminPage from "../components/admin/index"
import Login from "./login"


const Admin = () => (
  <Layout>
    <Router>
      <Login path="/login/" component={Login}/>
      <PrivateRoute path="/admin/" component={AdminPage} />
    </Router>
  </Layout>
)

export default Admin
