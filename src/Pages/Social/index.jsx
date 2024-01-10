import React from "react";
import { Link } from "react-router-dom";
import { socialBack } from "../../assets";
import "./style.css"

const LinksToSocialLink = [
  { 
    linkTo: "https://twitter.com/shaxzod_e",
  },
  {
    linkTo: "https://www.instagram.com/shaxzod5_/",
  },
  {
    linkTo: "https://twitter.com/shaxzod_e",
  },
];

const LinksToSocial = () => {
  return (
    <section className="links__media">
      <img className="links__img"src={socialBack} alt="" />
    </section>
  );
};

export default LinksToSocial;
