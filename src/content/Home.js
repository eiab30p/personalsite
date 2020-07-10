import React from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Layout } from "../components/Layout";
import styled from "styled-components";

const Styles = styled.div`
  a {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    border-bottom: 2px dotted lightgray;
  }
`;

export const Home = () => (
  <Styles>
    <Jumbotron />
    <Layout>
      <div>
        <h2>Hello World!</h2>
        <p>
          Welcome! I'm Eduardo "Eddy" Verde and this is my personal website. I'm
          a Software Engineer specialises in developing scalable applications
          for on premise or the cloud. Please feel free to read more{" "}
          <a href="/about">about me</a> or feel free to explore some of the{" "}
          <a href="/projects">projects</a> I have been creating. If you are want
          to get in contact with me feel free to send over an{" "}
          <a href="/contact">email</a>.
        </p>
      </div>
    </Layout>
  </Styles>
);
