import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { toggleSort, updateRecentThreadCards, updateTopThreadCards } from "../../app/forum/forumSlice";

import { 
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  Tooltip,
} from "@chakra-ui/react";

// TEMPORARY TODO
const threadCardsDate = [ 
  {
    id: 1,
    title: "First Post. Whodis.",
    author: "John Smith",
    picture: "https://bit.ly/dan-abramov",
    timestamp: JSON.stringify(new Date(2022, 13, 11)),
    categories: ["Food", "Vibes"],
    replies: 10,
    views: 10,
  },

  {
    id: 2,
    title: "Second Post. Hello.",
    author: "Bartholomew",
    picture: "https://bit.ly/kent-c-dodds",
    timestamp: JSON.stringify(new Date(2022, 10, 11)),
    categories: ["Gaming", "Chairs"],
    replies: 12,
    views: 127,
  },

  {
    id: 3,
    title: "Third Post. Good Morning.",
    author: "Ryan Florence",
    picture: "https://bit.ly/ryan-florence",
    timestamp: JSON.stringify(new Date(2022, 11, 30)),
    categories: ["Technology"],
    replies: 7,
    views: 57,
  },

  {
    id: 4,
    title: "Fourth Post. Hi.",
    author: "Prosper Baba",
    picture: "https://bit.ly/prosper-baba",
    timestamp: JSON.stringify(new Date(2022, 10, 11)),
    categories: ["Colours"],
    replies: 0,
    views: 7,
  },

  {
    id: 5,
    title: "Fifth Post. Good Night.",
    author: "Christian",
    picture: "https://bit.ly/sage-adebayo",
    timestamp: JSON.stringify(new Date(2022, 9, 22)),
    categories: ["Furniture", "Architecture"],
    replies: 1,
    views: 12,
  },
]

// TEMPORARY TODO
const threadCardsPopular = [ 
  {
    id: 2,
    title: "Second Post. Hello.",
    author: "Bartholomew",
    picture: "https://bit.ly/kent-c-dodds",
    timestamp: JSON.stringify(new Date(2022, 10, 11)),
    categories: ["Gaming", "Chairs"],
    replies: 158,
    views: 473,
  },

  {
    id: 4,
    title: "Fourth Post. Hi.",
    author: "Prosper Baba",
    picture: "https://bit.ly/prosper-baba",
    timestamp: JSON.stringify(new Date(2022, 10, 11)),
    categories: ["Colours"],
    replies: 123,
    views: 412,
  },

  {
    id: 5,
    title: "Fifth Post. Good Night.",
    author: "Christian",
    picture: "https://bit.ly/sage-adebayo",
    timestamp: JSON.stringify(new Date(2022, 9, 22)),
    categories: ["Furniture", "Architecture"],
    replies: 70,
    views: 347,
  },
  {
    id: 1,
    title: "First Post. Whodis.",
    author: "John Smith",
    picture: "https://bit.ly/dan-abramov",
    timestamp: JSON.stringify(new Date(2022, 6, 11)),
    categories: ["Food", "Vibes"],
    replies: 60,
    views: 267,
  },

  {
    id: 3,
    title: "Third Post. Good Morning.",
    author: "Ryan Florence",
    picture: "https://bit.ly/ryan-florence",
    timestamp: JSON.stringify(new Date(2022, 11, 30)),
    categories: ["Technology"],
    replies: 48,
    views: 195,
  },
]

const ForumHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleRecent = async () => {
    dispatch(toggleSort('recent'))
    // TODO
    // const  = await getRecentThreadCards()
    dispatch(updateRecentThreadCards(threadCardsDate))
  }

  const handleTop = async () => {
    dispatch(toggleSort('top'))
    // TODO
    // const  = await getRecentThreadCards()
    dispatch(updateTopThreadCards(threadCardsPopular))
  }

  useEffect(() => {
    // const  = await getRecentThreadCards()
    dispatch(updateRecentThreadCards(threadCardsDate))
    // const  = await getRecentThreadCards()
  },[])

  return (
    <Flex 
      direction="row" 
      justify="space-between"
      align="center"
      mt={16}
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
