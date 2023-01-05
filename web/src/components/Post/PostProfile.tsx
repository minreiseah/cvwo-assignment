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
  facade?: boolean,
} 

const PostProfile: React.FC<IPostProfile> = ({
  user_id, 
  author,
  picture,
  facade
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
        backgroundColor={facade ? "blackAlpha.300" : "default"}
        color={facade ? "blackAlpha.700" : "default"}

        />
      <Text
        fontSize="lg"
      >{!facade && author}</Text>
    </Flex>
  )
}

export default PostProfile
