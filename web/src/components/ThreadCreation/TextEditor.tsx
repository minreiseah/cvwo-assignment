import React, { useState } from "react";
import {
  Flex,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"


type TextEditorProps = {
  children: React.ReactNode
}

const TextEditor = ({children}: TextEditorProps) => {

  return (
    <Flex 
      direction="column"
      w="100%"
      borderColor="black"
      borderWidth="1px"
      borderRadius="xl"
      boxShadow="6px 6px 0 #000"
      p={4}
      gap={8}
    >
      <FormControl> 
        <FormLabel fontSize="lg">Thread Title</FormLabel>
        <Input
          size="lg"
          borderColor="gray"
          _hover={{
            borderColor: "black"
          }}
          focusBorderColor='black'
          autoFocus
          isRequired
          />
      </FormControl>

      {children}


      <Textarea 
        placeholder=""
        size="lg"
        minH={200}
        borderColor="gray"
        _hover={{
          borderColor: "black"
        }}
        focusBorderColor='black'
        isRequired
        />
    </Flex>
  )
}

export default TextEditor
