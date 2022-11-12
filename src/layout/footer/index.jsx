import React from "react";
import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.subFooter}>India</div>
      <div className={Styles.mainFooter}>
        <ul className={Styles.listContainer}>
          <li>About</li>
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search Works</li>
        </ul>
        <ul className={Styles.listContainer}>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
