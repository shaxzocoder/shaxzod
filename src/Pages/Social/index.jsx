import React from "react";
import { socialBack } from "../../assets";
import "./style.css"
import { FaXTwitter  } from "react-icons/fa6";
import {FaGithub ,FaInstagram } from "react-icons/fa"

let id = 1;
const LinksToSocialLink = [
  {
    id: id++, 
    linkTo: "https://twitter.com/shaxzod_e",
    socialName: "X (twitter)",
    iconsSocial:"FaXTwitter"
  },
  {
    id: id++, 
    linkTo: "https://www.instagram.com/shaxzod5_/",
    socialName: "instagram",
    iconsSocial:""
  },
  {
    id: id++, 
    linkTo: "https://github.com/shaxzocoder",
    socialName: "Github",
    iconsSocial:""
  },
];

const LinksToSocial = () => {
  return (
    <section className="links__media">
      {LinksToSocialLink.map(({linkTo , id, socialName , iconsSocial}) => (
        <div className="linkwrp" key={id}>
          <a target="_blank" href={linkTo}>{socialName}</a>
      </div>
      ))}
      <img className="links__img"src={socialBack} alt="" />
    </section>
  );
};

export default LinksToSocial;
