import React, { useState } from "react";
import {
  Flex,
  Center,
  Heading,
} from "@chakra-ui/react"

import TextEditor from "./TextEditor";
import CategorySelector from "./CategorySelector";
import ThreadSubmit from "./ThreadSubmit"


const ThreadCreator: React.FC = () => {
  return (
    <Center flexDirection="column" gap={8}>
      <Flex 
        direction="row" 
        justify="space-between"
        align="top"
        w="100%"
        px={2}
        gap={4}
      >
        <Heading 
          fontSize="2xl"
          cursor="pointer"
          pr={2}
        >
          Post Thread
        </Heading>

      </Flex>
      <TextEditor>
        <CategorySelector />
      </TextEditor>

      <ThreadSubmit />
    </Center>
  )
}

export default ThreadCreator
