import React from "react";
import "./style.css";
import partOneQuestion  from "../../Mocks/part1";
import LinkWrp from "../../Components/LinkWrapper/LinkWrp";
import PartTwoQuestion from './../../Mocks/part2';

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
      <h1 id="part2">part 2</h1>
        {PartTwoQuestion.map(({question ,helpers ,id , answer}) =>(
          <div className="two" key={id}>
            <code>question {id}</code>
            <h2>{question}</h2>
            <ul>
              <li>{helpers.first}</li>
              <li>{helpers.second}</li>
              <li>{helpers.third}</li>
            </ul>
            <code className="answer">answer</code>
            <p>{answer}</p>
          </div>
        ))}
    </section>
  );
};

export default Speaking;
