import React from "react";
import "./style.css";
import TypingAnimation from "../../Components/TypingAnimation";
import { backgroundSvg } from "../../assets";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <header className="home">
      <h2 className="description">
        <code className="custom"></code>I am just a
        <code className="custom"></code>
      </h2>
      <TypingAnimation />
      <img src={backgroundSvg} alt="" />
      <Link to="/social" className="social__btn oq">
       Hold this
      </Link>
    </header>
  );
};

export default Home;
