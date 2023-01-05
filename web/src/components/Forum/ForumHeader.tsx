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

const ForumHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const threadService = new ThreadService();

  const recentQuery = useQuery(
    "threads_recent",
    () => threadService.getThreads()
  )

  const popularQuery = useQuery(
    "threads_popular",
    () => threadService.getPopularThreads()
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
          Threads
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
