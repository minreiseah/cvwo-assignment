import React from "react";
import { Link as ReactRouterLink} from "react-router-dom"

import {
  Flex,
  HStack,
  Text,
  Spacer,
  Link,
  Divider,
} from '@chakra-ui/react'

import { Logo } from "./Logo"
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";


const handleSortThreads = () => {
  // TODO
  return null;
}

const Nav: React.FC = () => {
  return (
    <React.Fragment>
      <Flex py={4}>

        <Flex flexGrow={1} flexBasis={0}>
          <Logo />
        </Flex>

        <Spacer />

        <Flex display={["none", "initial"]}>
          <HStack spacing={16} letterSpacing="widest">
            <Link as={ReactRouterLink} to="/">Home</Link>
            <Text onClick={handleSortThreads}>What's New</Text>
            <Link as={ReactRouterLink} to="/help">Help</Link>
          </HStack>
        </Flex>

        <Spacer />

        <Flex flexGrow={1} flexBasis={0} justify="flex-end">
          <HStack spacing={4}>
            <Login />
            <Signup />
          </HStack>
        </Flex>

      </Flex>
      <Divider
        opacity="1"
        borderColor="black"
        borderBottom="2px"
      />
    </React.Fragment>
  )
}

export default Nav;
