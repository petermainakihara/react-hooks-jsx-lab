import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I enjoy building creative web applications and solving problems.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
