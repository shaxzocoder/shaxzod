import React from "react";
import "./style.css";
import partOneQuestion  from "../../Mocks/part1";
import LinkWrp from "../../Components/LinkWrapper/LinkWrp";

const Speaking = () => {
  return (
    <section className="speaking">
      <LinkWrp/>
      <h1>part 1</h1>
      {partOneQuestion.map(({ answer, question ,id  }) => (
        <div className="qa" key={id}>
          <code>question {id}</code>
          <h2>{question}</h2>
          <code className="answer">answer</code>
          <p className="proper__answer">
           {answer}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Speaking;
