import React, { Component } from "react";
import { Nav, Navbar as ReactBar } from "react-bootstrap";
import "../styles/NaviBar.css";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import PDFFile from "../assets/Verde-Resume-2.pdf";

export class NaviBar extends Component {
  render() {
    return (
      <div>
        <ReactBar
          collapseOnSelect
          expand="lg"
          fixed="top"
          bg="dark"
          variant="dark"
        >
          <ReactBar.Brand href="/">Eduardo Verde </ReactBar.Brand>
          <ReactBar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBar.Collapse id="responsive-navbar-nav">
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
                <FaLinkedin title={"LinkedIn Page"} />
              </Nav.Link>
              <Nav.Link href="https://github.com/eiab30p" target="_blank">
                <FaGithub title={"GitHub Page"} />
              </Nav.Link>
              <Nav.Link href={PDFFile} target="_blank" download>
                <FaFilePdf title={"Download Resume"} />
              </Nav.Link>
            </Nav>
          </ReactBar.Collapse>
        </ReactBar>
      </div>
    );
  }
}
