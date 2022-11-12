import React from "react";
import Home from "../views";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Styles from "./layout.module.css";

const Layout = () => {
  return (
    <div className={Styles.container}>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer />
    </div>
  );
};

export default Layout;
