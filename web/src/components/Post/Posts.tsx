import React from "react";
import { useQuery } from "react-query";
import PostService from "../../services/PostService";

import Post, { IPost } from "./Post";

interface IPosts {
  threadId: number
}

const tposts: IPost[] = [
  {
    content: 'I am trying to understand how to get a promise from a setTimeout function in JavaScript.',
    updated_at: '2022-12-14T12:00:00Z',
    user_id: 11,
    author: 'sjdlfa',
    picture: 'https://bit.ly/dan-abramov',
    post_id: 1,
  },
  {
    content: 'I am trying to understand how to etc............... lorem ipsum lorefoisi',
    updated_at: '2022-12-14T12:00:00Z',
    user_id: 11,
    author: 'joijasfjoasdf fella',
    picture: '',
    post_id: 2,
  }
]

const Posts: React.FC<IPosts> = ({ threadId }) => {

  const postService = new PostService()

  const { data, isLoading, error } = useQuery(
    "posts",
    // () => postService.getThreadPosts(threadId) // TODO
    () => tposts
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
    </React.Fragment>
  )
}

export default Posts
