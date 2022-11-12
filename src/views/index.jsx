import React from "react";
import Styles from "./home.module.css";
import GoogleLogo from "../assets/googleLogo.png";
import PrimaryButton from "../components/buttons/primarybutton";
import { languages } from "../constants/index";
import CustomSearch from "../components/customsearch";

const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.SearchWrapper}>
        <img src={GoogleLogo} alt="google-logo" />
        <CustomSearch />
        <div className={Styles.buttonWrapper}>
          <PrimaryButton
            customStyle={{ height: "36px", minWidth: "54px", padding: "1rem" }}
          >
            Google Search
          </PrimaryButton>
          <PrimaryButton
            customStyle={{ height: "36px", minWidth: "54px", padding: "1rem" }}
          >
            I'm Feeling Lucky
          </PrimaryButton>
        </div>
        <div className={Styles.languageWrapper}>
          <p className={Styles.offeredText}>
            Google offered in:{" "}
            <span className={Styles.languageTextContainer}>
              {languages.map((language) => {
                console.log(language);
                return (
                  <a
                    href="#"
                    style={{ textDecoration: "none" }}
                    key={language.id}
                  >
                    {language.value}
                  </a>
                );
              })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
