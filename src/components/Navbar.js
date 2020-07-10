import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    font-family: courier, monospace, sans serif;
  }

  .navbar-nav .nav-link {
    color: #fff;
    font-size: 1.2em;

    &:hover {
      color: #cecece;
      border-bottom: 1px solid rgb(249, 211, 66);
    }
  }
  .navbar-brand {
    font-size: 1.5em;
    color: rgb(249, 211, 66);
    &:hover {
      color: rgb(249, 211, 66);
      border-bottom: 1px solid #fff;
    }
  }
`;
export const NavBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="/">Eduardo Verde </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://www.linkedin.com/in/eduardoverde/"
            target="_blank"
          >
            <FaLinkedin />
          </Nav.Link>
          <Nav.Link href="https://github.com/eiab30p" target="_blank">
            <FaGithub />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
