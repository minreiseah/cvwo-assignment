import React from "react"
import { Route, Routes } from "react-router-dom"

import Layout from "./components/Layout/Layout"

// routes
import Forum from "./routes/Forum"
import Pizza from "./routes/Pizza" // redux testing

const App: React.FC = () => {

  return (
    <Layout>
      <Routes>
        <Route path = "/" element = {<Forum />} />
        <Route path = "/pizza" element = {<Pizza />} />
      </Routes>
    </Layout>
  )

}

export default App;
