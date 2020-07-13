import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import background from "../assets/geo.gif";
const Styles = styled.div`
  .jumbo {
    height: 50vh;
    color: rgb(249, 211, 66);
    @media screen and (max-width: 522px) {
      height: 30vh;
    }
    @media screen and (max-width: 400px) {
      height: 25vh;
    }
  }

  .background-img {
    background: url(${background}) no-repeat fixed bottom;
    background-size: cover;
  }
  .center-text {
    padding-top: 15vh;

    > .pre-text {
      font-size: 2em;
    }

    > .bold-text {
      font-size: 4em;
    }

    @media screen and (max-width: 1024px) {
      > .pre-text {
        font-size: 2em;
      }

      > .bold-text {
        font-size: 4em;
      }
    }
    @media screen and (max-width: 900px) {
      > .pre-text {
        font-size: 1.5em;
      }
      > .bold-text {
        font-size: 3.5em;
      }
    }
    @media screen and (max-width: 522px) {
      padding-top: 8vh;
      > .pre-text {
        font-size: 1em;
      }
      > .bold-text {
        font-size: 2em;
      }
    }
    @media screen and (max-width: 400px) {
      padding-top: 5vh;
      > .pre-text {
        font-size: 1em;
      }
      > .bold-text {
        font-size: 2em;
      }
    }

    @media screen and (max-width: 320px) {
      padding-top: 4vh;
      > .pre-text {
        font-size: 1em;
      }
      > .bold-text {
        font-size: 1.5em;
      }
    }
  }

  h1 {
    font-size: 8em;
  }
`;

export const Jumbotron = () => (
  <Styles>
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
          <p className="row font-weight-bold bold-text">Eduardo "Eddy" Verde</p>
        </Container>
      </Container>
    </div>
  </Styles>
);
