import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
// import profilePic from '../img/logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="con-div">
        <div className="home">
          {/* <img src={profilePic} className="profilePic" alt="Profile"></img> */}
          <ReactTypingEffect
            className="typing-effect"
            text={[
              'Hello and Welcome, I am Eddy Verde',
              'I am a Full Stack, Agile Trained, Software Engineer',
            ]}
            speed={90}
            eraseDelay={600}
          />
        </div>

        <Social />
      </div>
    );
  }
}

export default Home;
