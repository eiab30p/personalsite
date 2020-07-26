import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../styles/Jumbotron.css";
import ReactTypingEffect from "react-typing-effect";

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="background-img">
        <Container className=" jumbo align-items-center">
          <Container className="center-text">
            <p className="row pre-text ">
              <ReactTypingEffect
                className="typing-effect"
                text={[
                  "Software Engineer",
                  "Full-Stack Engineer",
                  "DevOps Engineer",
                  "Agile Trained",
                  "Problem Solver",
                  "Freelancer",
                ]}
                speed={90}
                eraseDelay={700}
                typingDelay={900}
              />
            </p>
            <h1 className="row font-weight-bold bold-text">
              Eduardo "Eddy" Verde
            </h1>
          </Container>
        </Container>
      </div>
    );
  }
}
