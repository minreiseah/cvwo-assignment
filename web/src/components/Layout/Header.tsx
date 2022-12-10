import React from "react";

import {
  Box,
  Flex,
  HStack,
} from '@chakra-ui/react'


const Header: React.FC = () => {
  return (
    <Box w={"100%"} bg={"black"}>
      <HStack>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </HStack>

    </Box>

  )
}

export default Header;
