import React, { useEffect, useState } from "react";
import ThreadService, { ThreadDisplayData } from "../../services/ThreadService";
import ThreadHeader from "./ThreadHeader";

import Post, { IPost } from "../Post/Post";
import Posts from "../Post/Posts"
import { Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";

const sampleThreadDisplayData: ThreadDisplayData = {
  thread_id: 1,
  title: 'How to use Promises with setTimeout()',
  content: 'I am trying to understand how to get a promise from a setTimeout function in JavaScript.',
  created_at: '2022-12-14T12:00:00Z',
  updated_at: '2022-12-14T12:00:00Z',

  category_ids: [1, 2, 3],
  categories: ['JavaScript', 'Promises', 'setTimeout'],

  user_id: 11,
  author: 'John Doe',
  picture: 'https://bit.ly/dan-abramov',
  replies: 2,
  views: 13,
}


interface IThread {
  threadId: number
}

const Thread: React.FC<IThread> = ( {threadId} ) => {

  const threadService = new ThreadService()

  const { data, isLoading, error} = useQuery(
    "thread",
    // () => threadService.getThread(threadId) // TODO
    () => sampleThreadDisplayData
  )

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(error instanceof Error) {
    return <div>{error.message}</div>
  }

  return (
    <React.Fragment>
          <Flex direction="column">
            <ThreadHeader
              title={data?.title}
              category_ids={data?.category_ids}
              categories={data?.categories}
              replies={data?.replies}
              views={data?.views}
              />

            <Post
              user_id={data?.user_id}
              author={data?.author}
              picture={data?.picture}
              content={data?.content}
              created_at={data?.created_at}
              updated_at={data?.updated_at}
              /> 

            <Posts threadId={threadId} />
          </Flex>
    </React.Fragment>
  )
}

export default Thread;
