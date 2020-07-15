import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import "../styles/Home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Layout>
          <div>
            <h2>Hello World!</h2>
            <p>
              Welcome! I'm Eduardo "Eddy" Verde, and this is my personal
              website. I'm a Software Engineer who specializes in developing
              scalable applications for on-premise or the cloud. Please feel
              free to read more{" "}
              <a className="home-links" href="/about">
                {" "}
                about me
              </a>{" "}
              or view some of the
              <a className="home-links" href="/projects">
                {" "}
                projects
              </a>{" "}
              I have worked on. If you would like to discuss projects, tools, or
              ideas, send over an email via the{" "}
              <a className="home-links" href="/contact">
                {" "}
                contact
              </a>{" "}
              page.
            </p>
          </div>
        </Layout>
      </div>
    );
  }
}
