import React from "react";
import "./style.css";
import TypingAnimation from "../../Components/TypingAnimation";
import { backgroundSvg } from "../../assets";

const Home = () => {
  return (
    <header className="home">
      <h2 className="description">
        <code className="custom"></code>I am just a
        <code className="custom"></code>
      </h2>
      <TypingAnimation />
      <img src={backgroundSvg} alt="" />
      <button className="social__btn">Hold this</button>
    </header>
  );
};

export default Home;
