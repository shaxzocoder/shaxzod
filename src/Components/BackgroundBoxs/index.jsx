import React from "react";
import "./style.css";

export function GridBackgroundDemo({ children, height}) {
  return (
    <div className="background__box" style={{height}} >
      {/* Radial gradient for the container to give a faded look */}
      <div className="item__box"></div>
      {children}
    </div>
  );
}
