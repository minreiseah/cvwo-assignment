import React, { useState } from "react";
import ThreadService, { ThreadDisplayData } from "../../services/ThreadService";
import ThreadHeader from "./ThreadHeader";

import Post, { IPost } from "../Post/Post";
import Posts from "../Post/Posts"
import { Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";


interface IThread {
  threadId: number
}

const Thread: React.FC<IThread> = ( {threadId} ) => {

  const threadService = new ThreadService()

  const { data, isLoading, error} = useQuery(
    `thread_${threadId}`,
    () => threadService.getThread(threadId)
  )

  if(isLoading) {
    return <div></div>
  }

  if(error instanceof Error) {
    return <div>{error.message}</div>
  }

  return (
    <React.Fragment>
      <Flex direction="column">
        <ThreadHeader
          title={data?.title}
          categories={data?.categories}
          replies={data?.replies}
          views={data?.views}
          />

        <Post
          user_id={data?.user_id}
          author={data?.name}
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
