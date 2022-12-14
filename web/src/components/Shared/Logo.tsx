import React from "react"
import { Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Logo: React.FC = () => {
  return (
    <Heading 
      fontSize="3xl"
      letterSpacing="widest" 
      as={Link}
      to="/"
    >
      FORUM
    </Heading>
  )
}
