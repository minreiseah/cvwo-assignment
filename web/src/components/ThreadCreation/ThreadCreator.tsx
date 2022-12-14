import React, { useState } from "react";

import {
  Flex,
  Center,
  Heading,
  FormControl,
} from "@chakra-ui/react"

import { Category } from "./CategorySelector";

import TextEditor from "./TextEditor";
import CategorySelector from "./CategorySelector";
import ThreadSubmit from "./ThreadSubmit"


const ThreadCreator: React.FC = () => {
  // Set up states to pass to threadSubmitter
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState<Category>({});

  return (
    <Center flexDirection="column" gap={8}
    as={FormControl}>
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
      <TextEditor 
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      >
        <CategorySelector
          categories={categories}
          setCategories={setCategories}
          />
      </TextEditor>

      <ThreadSubmit
        title={title}
        content={content}
        categories={categories}
        />
    </Center>
  )
}

export default ThreadCreator
