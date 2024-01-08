import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import "./style.css"

const TypingAnimation = () => {
  return (
    <TypeAnimation
      className="typinganimation"
        sequence={[
          "Font-End Developer",
          1000,
          "Graphics Desinger",
          1000,
          "Back-end Developer",
          1000
         ]}
        repeat={Infinity}
        wrapper="h1"
      />
  )
}

export default TypingAnimation