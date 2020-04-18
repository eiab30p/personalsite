import React, { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: '',
    };
  }
  activeItem = x => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove('active');
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add('active');
    });
  };
  render() {
    return (
      <nav>
        <ul>
          <NavItem item="Home" toLink="/" active={this.activeItem}></NavItem>
          <NavItem
            item="About"
            toLink="/about"
            active={this.activeItem}
          ></NavItem>
          <NavItem
            item="Projects"
            toLink="/projects"
            active={this.activeItem}
          ></NavItem>
          <NavItem
            item="Contact"
            toLink="/contact"
            active={this.activeItem}
          ></NavItem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
