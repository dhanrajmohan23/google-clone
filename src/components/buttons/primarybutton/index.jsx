import React from "react";
import Styles from "./primarybutton.module.css";

const PrimaryButton = ({ children, customStyle }) => {
  console.log(customStyle, "customStyle");
  return (
    <div className={Styles.primaryButton} style={customStyle}>
      {children}
    </div>
  );
};

export default PrimaryButton;
