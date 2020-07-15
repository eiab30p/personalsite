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
                ]}
                speed={90}
                eraseDelay={700}
                typingDelay={900}
              />
            </p>
            <p className="row font-weight-bold bold-text">
              Eduardo "Eddy" Verde
            </p>
          </Container>
        </Container>
      </div>
    );
  }
}
