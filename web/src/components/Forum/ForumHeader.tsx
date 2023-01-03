import React, { useEffect } from "react";
import { useQuery } from "react-query";

import { 
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  Tooltip,
} from "@chakra-ui/react";

import ThreadService from "../../services/ThreadService";
import { useAppDispatch } from "../../app/hooks";
import { updateRecentThreadCards, updateTopThreadCards } from "../../app/forum/forumSlice";

// TEMPORARY TODO
const threadCardsRecent = [ 
  {
    thread_id: 1,
    title: "First Post. Whodis.",
    author: "John Smith",
    picture: "https://bit.ly/dan-abramov",
    timestamp: (new Date(2022, 13, 11)).toISOString(),
    categories: ["Food", "Vibes"],
    replies: 10,
    views: 10,
  },

  {
    thread_id: 2,
    title: "Second Post. Hello.",
    author: "Bartholomew",
    picture: "https://bit.ly/kent-c-dodds",
    timestamp: (new Date(2022, 10, 11)).toISOString(),
    categories: ["Gaming", "Chairs"],
    replies: 12,
    views: 127,
  },

  {
    thread_id: 3,
    title: "Third Post. Good Morning.",
    author: "Ryan Florence",
    picture: "https://bit.ly/ryan-florence",
    timestamp: (new Date(2022, 11, 30)).toISOString(),
    categories: ["Technology"],
    replies: 7,
    views: 57,
  },

  {
    thread_id: 4,
    title: "Fourth Post. Hi.",
    author: "Prosper Baba",
    picture: "https://bit.ly/prosper-baba",
    timestamp: (new Date(2022, 10, 11)).toISOString(),
    categories: ["Colours"],
    replies: 0,
    views: 7,
  },

  {
    thread_id: 5,
    title: "Fifth Post. Good Night.",
    author: "Christian",
    picture: "https://bit.ly/sage-adebayo",
    timestamp: (new Date(2022, 9, 22)).toISOString(),
    categories: ["Furniture", "Architecture"],
    replies: 1,
    views: 12,
  },
]

// TEMPORARY TODO
const threadCardsPopular = [ 
  {
    id: 2,
    user_id: 123,
    title: "Second Post. Hello.",
    name: "Bartholomew",
    picture: "https://bit.ly/kent-c-dodds",
    timestamp: (new Date(2022, 10, 11)).toISOString(),
    categories: ["Gaming", "Chairs"],
    replies: 158,
    views: 473,
  },

  {
    id: 4,
    user_id: 123,
    title: "Fourth Post. Hi.",
    name: "Prosper Baba",
    picture: "https://bit.ly/prosper-baba",
    timestamp: (new Date(2022, 10, 11)).toISOString(),
    categories: ["Colours"],
    replies: 123,
    views: 412,
  },

  {
    id: 5,
    user_id: 123,
    title: "Fifth Post. Good Night.",
    name: "Christian",
    picture: "https://bit.ly/sage-adebayo",
    timestamp: (new Date(2022, 9, 22)).toISOString(),
    categories: ["Furniture", "Architecture"],
    replies: 70,
    views: 347,
  },
  {
    id: 1,
    user_id: 123,
    title: "First Post. Whodis.",
    name: "John Smith",
    picture: "https://bit.ly/dan-abramov",
    timestamp: (new Date(2022, 6, 11)).toISOString(),
    categories: ["Food", "Vibes"],
    replies: 60,
    views: 267,
  },

  {
    id: 3,
    user_id: 123,
    title: "Third Post. Good Morning.",
    name: "Ryan Florence",
    picture: "https://bit.ly/ryan-florence",
    timestamp: (new Date(2022, 11, 30)).toISOString(),
    categories: ["Technology"],
    replies: 48,
    views: 195,
  },
]

const ForumHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const threadService = new ThreadService();

  const recentQuery = useQuery(
    "date_desc",
    () => threadService.getThreads()
  )

  const popularQuery = useQuery(
    "popularity_desc",
    // TODO
    // () => threadService.getSortedThreads('popularity_desc')
    () => threadCardsPopular
  )

  const handleRecent = () => {
    recentQuery.refetch()

    if(recentQuery.error instanceof Error) {
      throw recentQuery.error
    }

    if(recentQuery.isSuccess) {
      dispatch(updateRecentThreadCards(recentQuery.data))
      console.log("successfully dispatched recent threads")
    }
  }

  useEffect(() => {
    if(recentQuery.isSuccess) {
      console.log("initial threads")
      dispatch(updateRecentThreadCards(recentQuery.data))
    }
  }, [recentQuery.isSuccess])

  const handleTop = () => {
    popularQuery.refetch()

    if(popularQuery.error instanceof Error) {
      throw popularQuery.error
    }

    if (popularQuery.isSuccess) {
      dispatch(updateTopThreadCards(popularQuery.data))
      console.log("successfully dispatched top threads")
    }
  }

  return (
    <Flex 
      direction="row" 
      justify="space-between"
      align="top"
      px={2}
    >
      <Tooltip 
        hasArrow
        label='View all posts' 
        placement="right" 
        bg="primary.2" 
        color="black" 
        borderRadius="sm"
        boxShadow="0 0 0 0"
      >
        <Heading 
          fontSize="2xl"
          cursor="pointer"
          pr={2}
        >
          Posts
        </Heading>
      </Tooltip>

      <Tabs 
        variant='unstyled'
        defaultIndex={0}
      >
        <TabList gap={1}>
          <Tab
            px={3}
            py={1}
            fontFamily="Metropolis"
            letterSpacing="wide"
            borderColor="white"
            borderWidth="1px"
            borderRadius="3xl"
            _selected={{ 
              bg: "primary.2",
              borderColor: "black",
              boxShadow: "2px 2px 0 #000",
            }}
            _hover={{
              textShadow: "0 0 1px black, 0 0 1px black"
            }}

            onClick={handleRecent}
          >
            Recent
          </Tab>
          <Tab
            px={3}
            py={1}
            fontFamily="Metropolis"
            letterSpacing="wide"
            borderColor="white"
            borderWidth="1px"
            borderRadius="3xl"
            width="100%"
            _selected={{ 
              bg: "primary.2",
              borderColor: "black",
              boxShadow: "2px 2px 0 #000",
            }}
            _hover={{
              textShadow: "0 0 1px black, 0 0 1px black"
            }}

            onClick={handleTop}
          >
            Top
          </Tab>
        </TabList>
      </Tabs>


    </Flex>
  )
}

export default ForumHeader
