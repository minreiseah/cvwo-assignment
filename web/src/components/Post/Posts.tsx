import React from "react";
import { useQuery } from "react-query";
import PostService from "../../services/PostService";

import Post, { IPost } from "./Post";
import PostCreator from "./PostCreator";

interface IPosts {
  threadId: number
}

const Posts: React.FC<IPosts> = ({ threadId }) => {

  const postService = new PostService()

  const { data, isLoading, error } = useQuery(
    "posts",
    () => postService.getThreadPosts(threadId)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>
  }

  return (
    <React.Fragment>
      {data && // check if data is undefined
        data.map(post => {
          return (
            <Post {...post} key={post.post_id}/>
          )
        })}
      <PostCreator threadID={threadId} />
    </React.Fragment>
  )
}

export default Posts
