import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Thread from "../components/Thread/Thread";

const ThreadPage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(params.threadId === undefined) {
      return navigate("/")
    }
  }, [params.threadId])

  if(params.threadId === undefined) {
    return <div></div>;
  }

  const threadId = parseInt(params.threadId)

  return (
      <Thread threadId={threadId}/>
  )
}

export default ThreadPage;
