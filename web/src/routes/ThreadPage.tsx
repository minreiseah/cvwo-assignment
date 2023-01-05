import React, { useEffect, useLayoutEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Thread from "../components/Thread/Thread";
import ThreadService from "../services/ThreadService";

const ThreadPage: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const threadService = new ThreadService();

  useEffect(() => {
    // Function to execute when the route is entered
    if(params.threadId === undefined) {
      return navigate("/")
    }
    threadService.updateThreadViews(parseInt(params.threadId))
  }, [location]);

  if(params.threadId === undefined) {
    return <div></div>;
  }

  const threadId = parseInt(params.threadId)

  return (
    <Thread threadId={threadId}/>
  )
}

export default ThreadPage;
