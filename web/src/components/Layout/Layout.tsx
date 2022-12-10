import React from "react";

import Metadata from "./Metadata";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Metadata />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
