import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./style.css";

const TypingAnimation = () => {
  return (
    <section className="typinganimation__wrp">
      <h1>i am</h1>
      <TypeAnimation
        className="typinganimation"
        sequence={[
          500,
          "Font-End Developer",
          1000,
          "Back-end Developer",
          1000,
          "Graphics Desinger",
          1000,
        ]}
        speed={10}
        repeat={Infinity}
        wrapper="h1"
      />
    </section>
  );
};

export default TypingAnimation;
