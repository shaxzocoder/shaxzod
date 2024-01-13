import React from "react";
import { socialBack } from "../../assets";
import "./style.css";
import { FaExternalLinkAlt } from "react-icons/fa";

let id = 1;
const LinksToSocialLink = [
  {
    id: id++,
    linkTo: "https://twitter.com/shaxzod_e",
    socialName: "X (twitter)",
  },
  {
    id: id++,
    linkTo: "https://www.instagram.com/shaxzod5_/",
    socialName: "instagram",
  },
  {
    id: id++,
    linkTo: "https://github.com/shaxzocoder",
    socialName: "Github",
  },
];

const LinksToSocial = () => {
  return (
    <section className="links__media">
      {LinksToSocialLink.map(({ linkTo, id, socialName }) => (
        <div className="linkwrp" key={id}>
          <a className="linnk" target="_blank" href={linkTo}>
            {socialName}
            <FaExternalLinkAlt />
          </a>
        </div>
      ))}
      <img className="links__img" src={socialBack} alt="" />
    </section>
  );
};

export default LinksToSocial;
