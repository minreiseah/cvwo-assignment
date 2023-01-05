import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Tag,
  TagLeftIcon,
  TagLabel,
  Wrap,
} from "@chakra-ui/react"

import { AddIcon, CheckIcon } from "@chakra-ui/icons"

export interface Category {
  [key: string]: [boolean, number]
}

type CategorySelectorProps = {
  categories: Category
  setCategories: React.Dispatch<React.SetStateAction<Category>>
}

const CategorySelector = ({ categories, setCategories }: CategorySelectorProps) => {

  useEffect(() => {
    setCategories({
      "technology": [false, 1],
      "entertainment": [false, 2],
      "sports": [false, 3],
      "food": [false, 4],
      "health": [false, 5],
      "travel": [false, 6],
      "finance": [false, 7],
      "education": [false, 8],
    })
  }, [])

  const handleTagClick = (category: string) => () => {
    setCategories({
      ...categories,
      [category]: [!categories[category][0], categories[category][1]]
    })
  }

  return (
    <FormControl>

      <FormLabel fontSize="lg">Categories</FormLabel>
      <Wrap
        borderColor="gray"
        borderWidth="1px"
        borderRadius="md"
        p={4}
        spacing={4}
        _hover={{
          borderColor: "black"
        }}
      >

        {Object.keys(categories).map((category, index) => {
          const word = category.charAt(0).toUpperCase() + category.slice(1);
          const isSelected = categories[category][0]
          return (
            <Tag
              size="lg"
              key={word}
              variant="solid"
              cursor="pointer"
              onClick={handleTagClick(category)}
              bg={isSelected
                ? index % 2 === 0
                  ? "primary.1"
                  : "primary.2"
                : "gray.500"
            }
              color={isSelected
                ? "black"
                : "white"
            }
              borderWidth="1px"
              borderRadius="lg"
              borderColor={isSelected
                ? "black"
                : "gray.500"
            }
              boxShadow={isSelected
                ? "2px 2px 0 #000"
                : "none"
            }
              transitionProperty="all"
              transitionDuration="0.25s"
            >
              <TagLeftIcon 
                boxSize='12px'
                as={isSelected 
                  ? CheckIcon
                  : AddIcon 
              }
                />
              <TagLabel>
                {word}
              </TagLabel>
            </Tag>
          )
        })}
      </Wrap>
    </FormControl>
  )

}

export default CategorySelector
