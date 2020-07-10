import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./content/Home";
import About from "./content/About";
import { Contact } from "./content/Contact";
import { NotFound } from "./content/NotFound";
import { NavBar } from "./components/NavBar";
import { Portfolio } from "./content/Portfolio";
function App() {
  return (
    <React.Fragment>
      <NavBar />
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

export default App;
