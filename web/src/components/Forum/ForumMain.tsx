import React from "react"

import ForumThreads from "./ForumThreads"
import ForumHeader from "./ForumHeader"
import ForumStats from "./ForumStats"

const ForumMain: React.FC = () => {
  return (
    <React.Fragment>
      <ForumHeader />
      <ForumThreads />
      <ForumStats />
    </React.Fragment>
  )
}

export default ForumMain
