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

import { Logo } from "../Shared/Logo"
import LoginButton from "../Shared/LoginButton";
import SignupButton from "../Shared/SignupButton";


const handleSortThreads = () => {
  // TODO
  return null;
}

const Nav: React.FC = () => {
  return (
    <React.Fragment>
      <Flex pt={4}>

        <Flex flexGrow={1} flexBasis={0} align="center">
          <Logo />
        </Flex>

        <Flex display={["none", "flex"]} justify="center" align="center">
          <HStack spacing={16} letterSpacing="widest">
            <Link as={ReactRouterLink} to="/">Home</Link>
            <Text onClick={handleSortThreads}>What's New</Text>
            <Link as={ReactRouterLink} to="/help">Help</Link>
          </HStack>
        </Flex>

        <Flex flexGrow={1} flexBasis={0} justify="flex-end">
          <HStack spacing={4} marginRight="6px">
            <LoginButton />
            <SignupButton />
          </HStack>
        </Flex>

      </Flex>
      <Divider
        opacity="1"
        borderColor="black"
        borderBottom="4px"
        py={2}
      />
    </React.Fragment>
  )
}

export default Nav;
