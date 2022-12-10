import React from "react";

import {
  Box,
  Center,
  Flex,
  HStack,
  Text,
  Button,
  Spacer,
  Heading,
} from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    <Heading fontSize='3xl'>FORUM</Heading>
  )
}

const Signup: React.FC = () => {
  return (
    <Button>Sign Up</Button>
  )
}

const Login: React.FC = () => {
  return (
    <Button>Log In</Button>
  )
}

const Nav: React.FC = () => {
  return (
    <Flex py={4}>
      <Logo />
      <Spacer />
      <HStack spacing={16}>
        <Text>Home</Text>
        <Text>What's New</Text>
        <Text>Help</Text>
      </HStack>
      <Spacer />
      <HStack>
        <Signup />
        <Login />
      </HStack>
    </Flex>
  )
}

export default Nav;
