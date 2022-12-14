import { Button } from "@chakra-ui/react"
import React from "react"

const ThreadSubmit: React.FC = () => {
  const handleThreadSubmit = () => {

  }

  return (
    <Button
      border="1px"
      borderColor="black"
      boxShadow="4px 4px 0 #000"
      borderRadius="xl"
      bg="primary.2"
      color="black"
      fontFamily="Metropolis"
      letterSpacing="wider"

      onClick={handleThreadSubmit}
    >
      Post Thread</Button>
  )

}

export default ThreadSubmit
