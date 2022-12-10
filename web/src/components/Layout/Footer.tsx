import React from "react";

import {
  Box,
  Flex,
  Divider,
  Text,
  VStack,
  HStack,
  Center,
  Spacer,
  Link,
} from "@chakra-ui/react"

import { Logo } from "./Logo";

const Footer: React.FC = () => {
  return (
    <Flex
      direction="column"
      py={8}
      gap={2}
    >
      <Flex letterSpacing="widest" justify="space-between">
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

      <Divider opacity="1" borderColor="black" borderBottom="2px" />

      <Center mt={6} gap={4}>
        <Text fontSize='xs'>© 2010 — 2023</Text>
        <Text fontSize='xs'>Privacy — Terms</Text>
      </Center>
    </Flex>
  )
}

export default Footer;
