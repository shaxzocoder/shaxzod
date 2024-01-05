import React from "react";
import "./style.css";
import { Komputer } from "../../assets";

const Home = () => {
  return (
    <header className="home">
      <div>
        <h1 className="huge__title filled">shaxzod</h1>
        <h1 className="huge__title">shaxzod</h1>
        <h1 className="huge__title">shaxzod</h1>
        <h1 className="huge__title">shaxzod</h1>
      </div>
      <div className="svg">
        <img className="komputer" src={Komputer} alt="" />
      </div>
    </header>
  );
};

export default Home;
