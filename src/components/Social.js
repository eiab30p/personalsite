import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/eiab30p"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a
          href="https://Linkedin.com/in/naafi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    );
  }
}

export default Social;
