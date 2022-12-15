import React from "react";
import { 
  Flex, 
  Heading, 
  Text,
  VStack,
  HStack
} from "@chakra-ui/react";

interface IThreadHeader {
  title?: string,
  category_ids?: number[],
  categories?: string[],
  replies?: number,
  views?: number,
}

const ThreadHeader: React.FC<IThreadHeader> = ({
  title,
  category_ids,
  categories,
  replies,
  views,
}) => {
  return (
    <React.Fragment>
      {categories !== undefined && (

        <Flex 
          direction="row" 
          justify="space-between"
          align="top"
          px={2}
        >

          <VStack
            align="flex-start"
          >
            <Heading 
              fontSize="2xl"
              cursor="pointer"
              pr={2}
            >
              {title}
            </Heading>
            <HStack>
              {categories.map((category, index) => {
                const isLast: boolean = index === categories.length - 1
                return (
                  <React.Fragment key={index}>
                    <Text>{category}</Text>
                    {!isLast && <Text>•</Text>}
                  </React.Fragment>
                )
              })}
            </HStack>
          </VStack>

          <HStack 
            gap={1}
          >
            <Text>Replies: {replies}</Text>
            <Text>Views: {views}</Text>
          </HStack>
        </Flex>
      )
    }
    </React.Fragment>
  )
}

export default ThreadHeader
