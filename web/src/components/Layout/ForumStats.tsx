import React, { useEffect, useState } from "react";

import {
  Flex,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react"
import StatsService, { StatisticsData } from "../../services/StatsService";
import { useQuery } from "react-query";

const ForumStats: React.FC = () => {

  const [stats, setStats] = useState<StatisticsData>()

  const statsService = new StatsService()

  const statsQuery = useQuery(
    "stats",
    () => statsService.getStatistics()
  )

  useEffect(() => {
    if(statsQuery.isSuccess) {
      setStats(statsQuery.data)
    }
  }, [statsQuery.isSuccess])

  return (
    <React.Fragment>
      { stats !== undefined &&
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
            <Flex justify="space-between" gap={8}>
              <Text>Threads:</Text>
              <Text fontWeight="bold">{stats.thread_count}</Text>
            </Flex>
            <Flex justify="space-between" gap={8}>
              <Text>Messages:</Text>
              <Text fontWeight="bold">{stats.message_count}</Text>
            </Flex>
            <Flex justify="space-between" gap={8}>
              <Text>Members:</Text>
              <Text fontWeight="bold">{stats.user_count}</Text>
            </Flex>
            <Flex justify="space-between" gap={8}>
              <Text>Newest Member:</Text>
              <Text fontWeight="bold">{stats.newest_user}</Text>
            </Flex>
            )
        </VStack>
      </Flex>
    }
    </React.Fragment>
  )
}

export default ForumStats
