import { Center, Flex, FormControl, FormLabel, Heading, Input, Textarea, Text, Divider } from "@chakra-ui/react";
import React, { useState } from "react";

import TextEditor from "../ThreadCreation/TextEditor";
import PostProfile from "./PostProfile";

import { useAppSelector } from "../../app/hooks"
import PostSubmit from "./PostSubmit";

interface IPostCreator {
  threadID: number
}

const PostCreator: React.FC<IPostCreator> = ({ threadID }) => {

  const [content, setContent] = useState("")

  const handleContentChange = (event: any) => {
    const target = event.target
    setContent(target.value)
  }

  const { user } = useAppSelector(state => state.userProfile)

  return (
    <Flex
      direction="row"
      justify="space-between" 
      border="1px"
      borderColor="black"
      borderRadius="xl"
      my={6}
      mx={4}
      p={4}
      position="relative"
      bg="white"
      gap={4}
      boxShadow="6px 6px 0 #000"
    >
      <PostProfile 
        author={user?.name}
        picture={user?.picture}
        facade={true}
        />

      <Flex 
        direction="column"
        flex={1}
        gap={4}
      >
        {
        // <Text >
        //   Post Reply
        // </Text>
        // <Divider 
        //   opacity="1" 
        //   borderColor="black" 
        //   />
      }
        <Textarea 
          placeholder="Write your reply"
          size="lg"
          fontSize="md"
          minH={200}
          borderColor="gray"
          _hover={{
            borderColor: "black"
          }}
          focusBorderColor='black'
          autoComplete="false"
          value={content}
          onChange={handleContentChange}
          />
        <PostSubmit 
          content={content}
          setContent={setContent}
          threadID={threadID}
          />
      </Flex>
    </Flex>
  )

}

export default PostCreator
