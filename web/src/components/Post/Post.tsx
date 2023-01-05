import React from "react";

import {
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react"

import PostProfile from "./PostProfile";

import { formatDateString } from "../../utils/dateUtils"

export interface IPost {
  post_id?: number,
  user_id?: number,
  author?: string,
  picture?: string,
  content?: string,
  created_at?: string,
  updated_at?: string,
}

const Post: React.FC<IPost> = ({
  post_id,
  user_id,
  author,
  picture,
  content,
  created_at,
  updated_at
}) => {

  const date = formatDateString(created_at ?? "")

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
        user_id={user_id}
        author={author}
        picture={picture}
        />
      <Flex 
        direction="column"
        flex={1}
        gap={4}
      >
        <Text>
          {date}
        </Text>
        <Divider 
          opacity="1" 
          borderColor="black" 
          />
        <Text>
          {content}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Post
