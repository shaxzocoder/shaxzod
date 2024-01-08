import React from "react";
import { Link } from "react-router-dom";
import Foto from "../../assets";
import { BackgroundBeams } from "../../Components/Social/Index";

const socialLink = [
  {
    ProfilePicture: Foto,
    linkTo: "https://twitter.com/shaxzod_e",
  },
  {
    ProfilePicture: Foto,
    linkTo: "https://www.instagram.com/shaxzod5_/",
  },
  {
    linkTo: "https://twitter.com/shaxzod_e",
  },
];

const Social = () => {
  return (
    <div>
      <BackgroundBeams />
    </div>
  );
};

export default Social;
