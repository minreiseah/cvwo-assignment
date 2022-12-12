import React from "react"

import ForumThreads from "./ForumThreads"
import ForumHeader from "./ForumHeader"

const ForumMain: React.FC = () => {
  return (
    // <ForumStats />
    <React.Fragment>
      <ForumHeader />
      <ForumThreads />
    </React.Fragment>
  )
}

export default ForumMain
