import React from "react";
import { Toaster } from "react-hot-toast"

import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import ForumStats from "./ForumStats";

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <Box 
      maxW={1200} 
      flex={1} 
      m="0 auto"
      px={4}
      overflowX="hidden"
    >
      <Header />
      <Nav />
      <main>{props.children}</main>
      <ForumStats />
      <Footer />
      <Toaster />
    </Box>
  )
}

export default Layout
