import React from "react"
import { Route, Routes } from "react-router-dom"

import Layout from "./components/Layout/Layout"

// routes
import ForumPage from "./routes/ForumPage"
import HelpPage from "./routes/HelpPage"
import Pizza from "./routes/Pizza" // redux testing
import ThreadPage from "./routes/ThreadPage"
import PostThreadPage from "./routes/PostThreadPage"

const App: React.FC = () => {

  return (
    <Layout>
      <Routes>
        <Route path = "/" element = {<ForumPage />} />
        <Route path = "/pizza" element = {<Pizza />} />
        <Route path = "/help" element = {<HelpPage />} />
        <Route path = "/post-thread" element={<PostThreadPage />} />
        <Route path = "/thread/:threadId" element={<ThreadPage />} /> 
      </Routes>
    </Layout>
  )

}

export default App;
