import React from "react";
import { RecoveryCover } from "../../assets";
import "./style.css";
import { GridBackgroundDemo } from "../BackgroundBoxs";

const AlbumAim = () => {
  return (
    <GridBackgroundDemo>
      <section className="albumsection">
        <img className="" src={RecoveryCover} alt="" />
        <div>
          <h1>I want to buy this  <span className="coral">album</span></h1>
          <p>
            I was highly influenced by this artist known as <span className="hero">Eminem</span>. And this
            album is my <span className="hero">favourite one</span>.I would like to add this album to my
            collection.
          </p>
        </div>
      </section>
    </GridBackgroundDemo>
  );
};

export default AlbumAim;
