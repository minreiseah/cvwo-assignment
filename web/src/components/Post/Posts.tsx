import React from "react";

import Post, { IPost } from "./Post";

interface IPosts {
  posts: IPost[]
}

const Posts: React.FC<IPosts> = ({ posts }) => {

  return (
    <React.Fragment>
      {posts.map(post => {
        return (
        <Post {...post} key={post.user_id}/>
        )
      })}
    </React.Fragment>
  )
}

export default Posts
