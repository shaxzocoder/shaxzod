import React from "react";
import "./style.css";
import TypingAnimation from "../../Components/TypingAnimation";
import { backgroundSvg } from "../../assets";
import { Link } from 'react-router-dom';
import AlbumAim from "../../Components/AlbumHome";

const sozlar = `I have dedicated nearly two years to learning programming. I am from Uzbekistan, and my ultimate goal is to secure a position in a prominent company in the future. follow to my social medias:)`

const Home = () => {
  return (
    <header className="home__wrp">
    <div className="home__header">
      <div className="home">
          <h2 className="description">
            Hey, I'm Shaxzod<p>.</p>
          </h2>
          <TypingAnimation />
          <img src={backgroundSvg} alt="" />
          <p>
            {sozlar}
          </p>
          <Link type="button" to="/links" className="social__btn oq">
           Hold this
          </Link>
      </div>
    </div>
    <AlbumAim/>
    </header>
  );
};

export default Home;
