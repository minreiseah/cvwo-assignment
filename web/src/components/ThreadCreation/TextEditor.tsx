import React, { ChangeEvent, useState } from "react";
import {
  Flex,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"


type TextEditorProps = {
  children: React.ReactNode,
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>
}

const TextEditor = ({
  children, 
  title,
  setTitle,
  content,
  setContent
}: TextEditorProps) => {

  const handleTitleChange = (event: any) => {
    const target = event.target
    setTitle(target.value)
  }

  const handleContentChange = (event: any) => {
    const target = event.target
    setContent(target.value)
  }

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
          autoComplete="false"
          value={title}
          onChange={handleTitleChange}
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
        autoComplete="false"
        value={content}
        onChange={handleContentChange}
        />
    </Flex>
  )
}

export default TextEditor
