import React from "react";

import {
  Circle,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Avatar
} from "@chakra-ui/react";

type ThreadCardProps = {
  title: string;
  author: string;
  profilePicture: string;
  timestamp: Date;
  categories: string[];
  replies: number;
  views: number;
}


/**
 * Displays information about a thread in a card. Used on the forum homepage.
 * 
 * @param {string} props.title - Title 
 * @param {string} props.author - Author 
 * @param {string} props.profilePicture - Profile picture
 * @param {Date} props.timestamp - Date of most recent reply
 * @param {string[]} props.categories - Categories of thread
 * @param {string} props.replies - Replies
 * @param {string} props.views - Views
 */
const ThreadCard = (props: ThreadCardProps) => {

  // deconstruction
  const {
    title,
    author,
    profilePicture,
    timestamp,
    categories,
    replies,
    views
  } = props;

  // datetime
  const options: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  const dateString = timestamp.toLocaleString(undefined, options);

  return (
    <Flex 
      direction="row"
      justify="space-between" 
      border="4px"
      borderColor="black"
      mt={4}
      p={4}
    >
      <HStack gap={2}>
        <Avatar name={author} src={profilePicture}/>

        <VStack align="flex-start">
          <Heading fontSize="default" letterSpacing="wide">{title}</Heading>

          <HStack>
            <Text>{author}</Text>
            <Text>•</Text> 
            <Text>{dateString}</Text>
          </HStack>

          <HStack>
            {categories.map(cat => { // map to random colours
              // const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow', 'brown'];
              const colors = ['black']
              const randomIndex = Math.floor(Math.random() * colors.length);
              const color = colors[randomIndex];

              return ( 
                <Text color={color}>{cat}</Text>
              )
            })}
          </HStack>

        </VStack>
      </HStack>

      <HStack gap={8}>
        <VStack align="flex-start">
          <Heading fontSize="2xl">{replies}</Heading>
          <Text>Replies</Text>
        </VStack>

        <VStack align="flex-start">
          <Heading fontSize="2xl">{views}</Heading>
          <Text>Views</Text>
        </VStack>

      </HStack>

    </Flex>
  )
}

export default ThreadCard
