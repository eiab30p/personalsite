import React, { Component } from 'react';
import WideCard from '../components/WideCard';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySkills: ['HTML', 'CSS', 'JS'],
    };
  }

  render() {
    return (
      <div className="con-div">
        <h1 className="subtopic">About Me:</h1>
        {/* Need to Insert Something here for header */}
        <div>
          <h4>Hey there,</h4>
          <h1>I'm Eduardo Verde</h1>
          <h3>
            Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u>
          </h3>
          <br></br>
          <p>Blah Blah Blah</p>
        </div>
        <div className="skills">
          <h1 className="subtopic">My Skills</h1>
          <ul>
            {this.state.mySkills.map(value => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
        <div>
          <h1 className="subtopic">My Education</h1>
          <WideCard
            title="Computer Science"
            where="Rollins College"
            from="August 2014"
            to="December 2017"
          />
        </div>
      </div>
    );
  }
}

export default About;
