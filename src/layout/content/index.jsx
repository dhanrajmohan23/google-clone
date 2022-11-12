import React from "react";
import Styles from "./content.module.css";

const Content = ({ children }) => {
  return <div className={Styles.container}>{children}</div>;
};

export default Content;
