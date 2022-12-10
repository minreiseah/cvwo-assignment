import React from "react";
import { Link as ReactRouterLink} from "react-router-dom"

import {
  Box,
  Center,
  Flex,
  HStack,
  Text,
  Button,
  Spacer,
  Heading,
  Link,
} from '@chakra-ui/react'

import { Logo } from "./Logo"


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

const handleSortThreads = () => {
  // TODO
  return null;
}

const Nav: React.FC = () => {
  return (
    <Flex py={4}>
      <Logo />
      <Spacer />
      <HStack spacing={16} letterSpacing="widest">
        <Link as={ReactRouterLink} to="/">Home</Link>
        <Text onClick={handleSortThreads}>What's New</Text>
        <Link as={ReactRouterLink} to="/help">Help</Link>
      </HStack>
      <Spacer />
      <HStack spacing={4}>
        <Signup />
        <Login />
      </HStack>
    </Flex>
  )
}

export default Nav;
