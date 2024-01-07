import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
const Skill = () => {
    const el = useRef(null)
  useEffect(() => {
    const typedText = new Typed(el.current, {
      strings: ["kasd", "heheh"],
      typeSpeed: 120,
      backSpeed: 40,
      loop: true,
    });
    return () => typedText.destroy();
  }, []);


  return (
    <section>
      <h1>{el}</h1>{" "}
    </section>
  );
};

export default Skill;
