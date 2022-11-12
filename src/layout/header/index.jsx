import React from "react";
import Styles from "./header.module.css";

const Header = () => {
  return (
    <div className={Styles.container}>
      <p className={Styles.linkText}>Gmail</p>
      <p className={Styles.linkText}>Images</p>
      <p className={Styles.linkText}>Icon</p>
    </div>
  );
};

export default Header;
