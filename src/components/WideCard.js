import React, { Component } from 'react';

class WideCard extends Component {
  render() {
    return (
      <div className="wide-card">
        <div>
          <h3>{this.props.title}</h3>
          <h4 className="second-text">{this.props.where}</h4>
          <h4 className="second-text">
            {this.props.from} - {this.props.to}
          </h4>
        </div>
      </div>
    );
  }
}

export default WideCard;
