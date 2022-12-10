import React from "react"
import { Route, Routes } from "react-router-dom"

// routes
import Home from "./routes/Home"
import Pizza from "./routes/Pizza" // redux testing

const App: React.FC = () => {

  return (
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/pizza" element = {<Pizza />} />
    </Routes>
  )

}

export default App;
