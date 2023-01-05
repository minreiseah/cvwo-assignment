import React from "react";
import { ThreadCardData } from "../../app/forum/types"
import { formatDateString } from "../../utils/dateUtils";

import {
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Avatar
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

/**
* Displays information about a thread in a card. Used on the forum homepage.
* 
* @param {string} props.title - Title 
* @param {string} props.author - Author 
* @param {string} props.picture - Profile picture
* @param {string} props.timestamp - Date of most recent reply
* @param {string[]} props.categories - Categories of thread
* @param {string} props.replies - Replies
* @param {string} props.views - Views
*/
const ThreadCard = (props: ThreadCardData) => {
  // deconstruction
  const {
    id: thread_id,
    title,
    name: author,
    picture,
    created_at: timestamp,
    categories,
    replies,
    views
  } = props;

  const date = formatDateString(timestamp);

  const navigate = useNavigate()

  const navigateToThread = (id: number) => {
    console.log(thread_id)
    console.log(title)
    navigate(`/thread/${id}`)
  }

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
      cursor="pointer"

      onClick={() => navigateToThread(thread_id)}

      _before={{
        content: `''`,
        background: "primary.1",
        borderColor: "black",
        borderWidth: "1px",
        borderRadius: "xl",
        transition:"transform 0.2s",

        // positioning
        top: 0,
        left: 0,
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: "-1",
      }}

      _hover={{
        _before:{
          transform: "translate(0.5em, 0.5em)"
        }
      }}

    >
      <HStack gap={2}>
        <Avatar name={author} src={picture} referrerPolicy="no-referrer" />

        <VStack align="flex-start">
          <Heading fontSize="default" letterSpacing="wide">{title}</Heading>

          <HStack>
            <Text>{author}</Text>
            <Text>•</Text> 
            <Text>{date}</Text>
          </HStack>

          <HStack>
            {categories.map(cat => { // map to random colours
              // const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow', 'brown'];
              const colors = ['black']
              const randomIndex = Math.floor(Math.random() * colors.length);
              const color = colors[randomIndex];

              return ( 
                <Text color={color} key={cat}>{cat}</Text>
              )
            })}
          </HStack>

        </VStack>
      </HStack>

      <HStack gap={8}>
        <VStack align="flex-start">
          <Heading fontSize="2xl" letterSpacing="wide">{replies}</Heading>
          <Text>Replies</Text>
        </VStack>

        <VStack align="flex-start">
          <Heading fontSize="2xl" letterSpacing="wide">{views}</Heading>
          <Text>Views</Text>
        </VStack>

      </HStack>

    </Flex>
  )
}

export default ThreadCard
