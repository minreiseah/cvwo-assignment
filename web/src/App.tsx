import React from "react"
import { Route, Routes } from "react-router-dom"

import Layout from "./components/Layout/Layout"

// routes
import Forum from "./routes/Forum"
import Help from "./routes/Help"
import Pizza from "./routes/Pizza" // redux testing
import Thread from "./routes/Thread"
import PostThread from "./routes/PostThread"

const App: React.FC = () => {

  return (
    <Layout>
      <Routes>
        <Route path = "/" element = {<Forum />} />
        <Route path = "/pizza" element = {<Pizza />} />
        <Route path = "/help" element = {<Help />} />
        <Route path = "/post-thread" element={<PostThread />} />
        <Route path = "/thread" element={<Thread />} /> 
      </Routes>
    </Layout>
  )

}

export default App;
