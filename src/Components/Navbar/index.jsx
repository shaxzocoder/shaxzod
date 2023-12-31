import React from "react";
import "./style.css";
import Foto from "../../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="foto" width={50} height={50} src={Foto} alt="" />
      </Link>

      <div className="link__wrp">
        <Link className="link__itself" to="/speaking">
          speaking
        </Link>
        <Link className="link__itself" to="/social">
          social
        </Link>
        <Link className="link__itself" to="/playlists">
          Playlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
