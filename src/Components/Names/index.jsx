import React from "react";
import "./style.css";
import { Komputer } from "../../assets";

const Names = () => {
  return (
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
  );
};

export default Names;
