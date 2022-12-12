import React from 'react';

import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/metropolis/400.css'
import '@fontsource/metropolis/700.css'

type ChakraThemedProviderProps = {
  children: React.ReactNode
}

export const ChakraThemedProvider = ({ children }: ChakraThemedProviderProps) => {
  // Extending Chakra UI theme to include custom colours, fonts
  const theme = extendTheme({ 
    colors: {
      primary: {
        1: '#5EB2A5', // teal
        2: '#F8C6D2' // pink
      },
      secondary: {
        1: '#DFF2F8', // cyan
        2: '#4B8E9A', // malachite
      }
    },

    fonts: {
      heading: `'Metropolis', sans-serif`,
      body: `'Inter', sans-serif`,
    }
  })

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
