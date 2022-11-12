import React from "react";
import Styles from "./customsearch.module.css";

import SpeechIcon from "../../assets/Google_mic.svg";
import ImageSearchIcon from "../../assets/Google_imgSearch.svg";

const CustomSearch = () => {
  return (
    <div className={Styles.searchWrapper}>
      <input type="text" className={Styles.searchInput} />
      <div className={Styles.imgWrapper}>
        <img src={SpeechIcon} alt="" className={Styles.micIcon} />
        <img src={ImageSearchIcon} alt="" className={Styles.imgSearch} />
      </div>
    </div>
  );
};

export default CustomSearch;
