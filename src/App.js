import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NaviBar } from "./components/NaviBar";
import { Home } from "./content/Home";
import About from "./content/About";
import { Contact } from "./content/Contact";
import { Portfolio } from "./content/Portfolio";

function App() {
  return (
    <React.Fragment>
      <NaviBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Portfolio} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
