import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './contents/About';
import Contact from './contents/Contact';
import Home from './contents/Home';
import Projects from './contents/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
