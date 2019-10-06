import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/admin-layout"
import PrivateRoute from "../components/PrivateRoute"
import AdminPage from "../components/admin/index"
import AddPodcast from "../components/admin/add"
import Login from "./login"


const Admin = () => (
  <Layout>
    <Router>
      <Login path="/login/"/>
      <PrivateRoute path="/admin/" component={AdminPage} />
      <PrivateRoute path="/admin/add/" component={AddPodcast} />
    </Router>
  </Layout>
)

export default Admin
