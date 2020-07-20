import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NaviBar } from "./components/NaviBar";
import { Home } from "./content/Home";
import About from "./content/About";
import Contact from "./content/Contact";
import { NotFound } from "./content/NotFound";
import { Portfolio } from "./content/Portfolio";
import { Helmet } from "react-helmet";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta
            name="description"
            content="Eduardo 'Eddy' Verde's Personal Site. Learn about who Eduardo Verde is and his Software Engineering skills."
          />
          <meta name="author" content="Eduardo Verde" />
          <meta
            name="keywords"
            content="Eddy Verde, Verde, Eduardo 'Eddy' Verde, Eduardo Verde, Software, Software Engineer, Websites, Freelance, Fullstack, Full-stack, developer, computers, programming"
          ></meta>
          <title>Eduardo "Eddy" Verde | Software Engineer</title>
          <link rel="canonical" href="https://eduardoverde.com/about" />
          <link rel="canonical" href="https://eduardoverde.com/projects" />
          <link rel="canonical" href="https://eduardoverde.com/contact" />
        </Helmet>
        <NaviBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Portfolio} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
