import React, { useEffect, useState } from "react";
import ThreadService, { ThreadDisplayData } from "../../services/ThreadService";
import ThreadHeader from "./ThreadHeader";

import Post, { IPost } from "../Post/Post";
import Posts from "../Post/Posts"
import { Flex } from "@chakra-ui/react";

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

const tposts: IPost[] = [
  {
    content: 'I am trying to understand how to get a promise from a setTimeout function in JavaScript.',
    updated_at: '2022-12-14T12:00:00Z',
    user_id: 11,
    author: 'sjdlfa',
    picture: 'https://bit.ly/dan-abramov',
  },
  {
    content: 'I am trying to understand how to etc............... lorem ipsum lorefoisi',
    updated_at: '2022-12-14T12:00:00Z',
    user_id: 11,
    author: 'joijasfjoasdf fella',
    picture: '',
  }
]

interface IThread {
  threadId: number
}

const Thread: React.FC<IThread> = ( {threadId} ) => {

  const threadService = new ThreadService()

  const [isLoading, setIsLoading] = useState(true)

  const [data, setData] = useState<ThreadDisplayData>();

  // fetch thread on initial page load
  useEffect(() => {
    const fetchThread = async () => {
      try {
        // TODO
        // const res: ThreadDisplayData = await threadService.getThread(threadId);
        const res = sampleThreadDisplayData;
        setData(res);

      } catch (error) {
        throw error;
      }

    }

    setIsLoading(true);
    fetchThread();
    setIsLoading(false);

  }, [])

  return (
    <React.Fragment>
      {isLoading 
        ? (
          <div>loading...</div>
        ) : (
          <Flex
            direction="column"
          >
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
            <Posts posts={tposts} />
          </Flex>
        )
    }
    </React.Fragment>
  )
}

export default Thread;
