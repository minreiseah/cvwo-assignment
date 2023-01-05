import React, { useEffect } from "react";
import { useQuery } from "react-query";
import PostService from "../../services/PostService";

import Post, { IPost } from "./Post";
import PostCreator from "./PostCreator";

interface IPosts {
  threadId: number
}

const Posts: React.FC<IPosts> = ({ threadId }) => {

  const postService = new PostService()

  const postsQuery = useQuery(
    `posts_${threadId}`,
    () => postService.getThreadPosts(threadId)
  )

  useEffect(() => {
    const onPageLoad = async () => {
      await postsQuery.refetch()
    } 
    onPageLoad()
  }, [threadId])

  if (postsQuery.isLoading) {
    return <div>Loading...</div>
  }

  if (postsQuery.error instanceof Error) {
    return <div>{postsQuery.error.message}</div>
  }


  return (
    <React.Fragment>
      {postsQuery.data && // check if data is undefined
        postsQuery.data.map(post => {
          return (
            <Post {...post} key={post.post_id}/>
          )
        })}
      <PostCreator threadID={threadId} />
    </React.Fragment>
  )
}

export default Posts
