import React from "react";

import { 
  Flex,
  Heading,
  Text,
  HStack,
  Tabs,
  TabList,
  Tab,
  Tooltip,
} from "@chakra-ui/react";

const ForumHeader: React.FC = () => {
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
          >
            Top
          </Tab>
        </TabList>
      </Tabs>


    </Flex>
  )
}

export default ForumHeader
