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
      sortedBy === 'date_desc' &&
        recentThreadCards !== null && 
        recentThreadCards.map(item => {
          return (
            <ThreadCard {...item} key={item.id}/>
          )}
        )
    }
      {
      sortedBy === 'popularity_desc' &&
        topThreadCards !== null && 
        topThreadCards.map(item => {
          return (
            <ThreadCard {...item} key={item.id}/>
          )}
        )
    }

    </div>
  );

}

export default ForumThreads
