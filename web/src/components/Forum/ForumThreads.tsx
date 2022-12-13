import React from "react";

import ThreadCard from "../Thread/ThreadCard";

const ForumThreads: React.FC = () => {
  const currentDate = new Date();

  const ThreadsInfo = [ // sorted by date
    {
      id: 1,
      title: "First Post. Whodis.",
      author: "John Smith",
      profilePicture: "https://bit.ly/dan-abramov",
      timestamp: currentDate,
      categories: ["Food", "Vibes"],
      replies: 10,
      views: 10,
    },

    {
      id: 2,
      title: "Second Post. Hello.",
      author: "Bartholomew",
      profilePicture: "https://bit.ly/kent-c-dodds",
      timestamp: new Date(2022, 10, 11),
      categories: ["Gaming", "Chairs"],
      replies: 12,
      views: 127,
    },

    {
      id: 3,
      title: "Third Post. Good Morning.",
      author: "Ryan Florence",
      profilePicture: "https://bit.ly/ryan-florence",
      timestamp: new Date(2022, 11, 30),
      categories: ["Technology"],
      replies: 7,
      views: 57,
    },

    {
      id: 4,
      title: "Fourth Post. Hi.",
      author: "Prosper Baba",
      profilePicture: "https://bit.ly/prosper-baba",
      timestamp: new Date(2022, 10, 11),
      categories: ["Colours"],
      replies: 0,
      views: 7,
    },

    {
      id: 5,
      title: "Fifth Post. Good Night.",
      author: "Christian",
      profilePicture: "https://bit.ly/sage-adebayo",
      timestamp: new Date(2022, 9, 22),
      categories: ["Furniture", "Architecture"],
      replies: 1,
      views: 12,
    },


  ]

  return (
    <div>
      {ThreadsInfo.map(item => {
        return <ThreadCard {...item} key={item.id}/>
      })}
    </div>
  );

}

export default ForumThreads
