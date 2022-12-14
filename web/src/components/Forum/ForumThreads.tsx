import React from "react";
import { useAppSelector } from "../../app/hooks";

import ThreadCard from "../Thread/ThreadCard";

const ForumThreads: React.FC = () => {

  const { 
    sortedBy, 
    recentThreadCards, 
    topThreadCards 
  } = useAppSelector(state => state.forum)

  return (
    <div>
      {
      sortedBy === 'recent' &&
        recentThreadCards !== null && 
        recentThreadCards.map(item => {
          return (
            <ThreadCard {...item} key={item.thread_id}/>
          )}
        )
    }
      {
      sortedBy === 'top' &&
        topThreadCards !== null && 
        topThreadCards.map(item => {
          return (
            <ThreadCard {...item} key={item.thread_id}/>
          )}
        )
    }

    </div>
  );

}

export default ForumThreads
