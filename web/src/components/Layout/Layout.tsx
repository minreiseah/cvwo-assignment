import React from "react";

import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Box maxW={1200} flex={1} m="0 auto">
        <Header />
        <Nav />
        <main>{props.children}</main>
        <Footer />
      </Box>
    </React.Fragment>
  )
}

export default Layout
