import React from "react";

import {
  Box,
  Flex,
  Divider,
  Text,
  HStack,
  Center,
  Link,
} from "@chakra-ui/react"

import { Logo } from "../Shared/Logo";

const Footer: React.FC = () => {
  return (
    <Flex
      direction="column"
      my={16}
      gap={2}
    >
      <Flex letterSpacing="wide" justify="space-between">
        <Box display={["none", "initial"]}>
          <Logo />
        </Box>
        <HStack 
          spacing={[4,16]}
          m={["0 auto", "initial"]}
          align="flex-end"
          fontSize={["sm", "default"]}
        >
          <Link>Issues</Link>
          <Link>FAQ</Link>
          <Link>Advertise</Link>
          <Link>Contact Us</Link>
        </HStack>
      </Flex>

      <Divider 
        opacity="1" 
        borderColor="black" 
        borderBottom="4px"
      />

      <Center mt={6} gap={4}>
        <Text fontSize='xs'>© 2010 — 2023</Text>
        <Text fontSize='xs'>Privacy — Terms</Text>
      </Center>
    </Flex>
  )
}

export default Footer;
