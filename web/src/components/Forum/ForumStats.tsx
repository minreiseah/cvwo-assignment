import React from "react";

import {
  Flex,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react"

// type ForumStatsProps = {
//   threads: number;
//   messages: number;
//   members: number;
//   latestMember: string;
// }

const ForumStats: React.FC = () => {
  // Get stats
  const stats: Record<string, any> = {
    threads: 10,
    messages: 100,
    members: 15,
    latestMember: "Christian",
  }

  return (
    <Flex
      m="0 auto"
      justify="center"
      mt={16}
    >
      <VStack 
        align="space-between" 
        p={4}
        borderColor="black"
        borderWidth="1px"
        borderRadius="xl"
        position="relative"
        bg="white"
        _before={{
          content: `''`,
          background: "primary.2",
          borderColor: "black",
          borderWidth: "1px",
          borderRadius: "xl",

          // positioning
          top: 0,
          left: 0,
          position: "absolute",
          transform: "translate(0.5em, 0.5em)",
          height: "100%",
          width: "100%",
          zIndex: "-1",
        }}
      >
        <Heading fontSize="md">
          Forum Statistics
        </Heading>
        {Object.entries(stats).map(([key, value]: [string, any]) => {

          // format name
          const name = key
            .split("")
            .map((c: string, i: number) => (i === 0 ? c.toUpperCase() : c))
            .join("")
            .replace(/([A-Z])/g, " $1");

          return (
            <Flex justify="space-between" gap={8} key={name}>
              <Text>{name}:</Text>
              <Text fontWeight="bold">{value}</Text>
            </Flex>
          )
        })}
      </VStack>
    </Flex>
  )
}

export default ForumStats
