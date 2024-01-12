import React from "react";
import "./style.css";
import Foto from "../../assets";
import { Link } from "react-router-dom";
import { IoHeadsetSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="navimg__wrp">
        <img className="foto" width={50} height={50} src={Foto} alt="" />
      </Link>

      <div className="link__wrp">
        <Link className="link__itself" to="/speaking">
          speaking
        </Link>
        <Link className="link__itself" to="/links">
          Links 
        </Link>
        <Link className="link__itself" to="/playlists">
          Playlist <IoHeadsetSharp className="icon__nav"/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
