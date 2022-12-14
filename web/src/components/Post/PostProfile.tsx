import React from "react";

import { 
  Flex,
  Avatar,
  Text
} from "@chakra-ui/react";

export interface IPostProfile {
  user_id?: number,
  author?: string,
  picture?: string,
} 

const PostProfile: React.FC<IPostProfile> = ({
  user_id, 
  author,
  picture
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      gap={1}
      wordBreak="break-word"
      textAlign="center"
      w="15%"
    >
      <Avatar 
        name={author}
        src={picture}
        size="lg"
        key={user_id}
        />
      <Text
        fontSize="lg"
      >{author}</Text>
    </Flex>
  )
}

export default PostProfile
