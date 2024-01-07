import React from "react";
import "./style.css";
import { Komputer } from "../../assets";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <header className="home">
      <TypeAnimation 
        sequence={["Font-End Developer", 1000,"Graphics Desinger", 1000, "Editor", 1000 ]}
        repeat={Infinity}
        wrapper="h1"
        style={{fontSize: "5rem",}}
      />
    <div className="home-inside">
        <div>
          <h1 className="huge__title filled">shaxzod</h1>
          <h1 className="huge__title">shaxzod</h1>
          <h1 className="huge__title">shaxzod</h1>
          <h1 className="huge__title">shaxzod</h1>
        </div>
        <div className="svg">
          <img className="komputer" src={Komputer} alt="" />
        </div>
    </div>
    
    </header>
  );
};

export default Home;
