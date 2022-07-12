import React, { useState } from "react";
import './EightBall.css';

const answersDefault = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/** Returns html with random message and associated color on click
 *
 *  Props:
 *  - array of objects containing key of msg and color
 *
 *  State:
 *  - color: string for background-color. initial state is "black"
 *  - msg: string for text. initial state is "Think of a Question"
 *
 *  App -> EightBall
 */

function EightBall({ answers = answersDefault }) {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");

  function shakeBall() {

    const randNum = Math.floor(Math.random() * answers.length);
    console.log(answers[randNum]);
    setColor(answers[randNum].color);
    setMsg(answers[randNum].msg);

  }

  return (
    <div className="EightBall" style={{ backgroundColor: color }}>
      <b onClick={shakeBall}> {msg} </b>
    </div>
  );

}

export default EightBall;