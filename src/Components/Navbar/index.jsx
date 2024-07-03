import React from "react";
import "./style.css";
import Foto from "../../assets";
import { Link } from "react-router-dom";
import { IoHeadsetSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="navimg__wrp">
        <img className="foto" width={50} height={50} src={Foto} alt="" />
      </Link>

      <div className="link__wrp">
        <Link className="link__itself" to="/links">
          Links
        </Link>
        <Link className="link__itself" >
          Playlist <IoHeadsetSharp className="icon__nav" />
        </Link>
        <p className="link__itself more__nav">
          More <MdOutlineKeyboardArrowDown className="icons__nav" />
          <span className="hidden dropdown__nav">
            <Link className="dropdown__text" to="/speaking">
              speaking
            </Link>
            <Link className="dropdown__text" to="/articles">
              Articles
            </Link>
          </span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
