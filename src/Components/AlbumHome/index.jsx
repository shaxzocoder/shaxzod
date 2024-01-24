import React from "react";
import { RecoveryCover } from "../../assets";
import "./style.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { GridBackgroundDemo } from "../BackgroundBoxs";

const AlbumAim = () => {
  return (
    <GridBackgroundDemo>
      <section className="albumsection">
        <img src={RecoveryCover} alt="" />
        <div>
          <h1 className="prosta__gap">I want to buy this  <span className="coral">album</span></h1>
          <p>
            I was highly influenced by this artist known as <span className="hero">Eminem</span>. And this
            album is my <span className="hero">favourite one</span>. I would like to add this album to my
            collection.
          </p>
          <a className="open__recovery" target="_blank" href="https://open.spotify.com/album/47BiFcV59TQi2s9SkBo2pb?si=_rNeyN87T4aWpfozdU_bPQ"> Open this on spotify <FaArrowRightLong  className="arrow__recovery"/></a>
        </div>
      </section>
    </GridBackgroundDemo>
  );
};

export default AlbumAim;
