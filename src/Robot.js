import React from 'react';
import Grid from './Grid';
import './Robot.css';

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

class Robot extends React.Component {
  state = {
    x: 0,
    y: 0,
    direction: 'NORTH' // NORTH, EAST, SOUTH, WEST
  };

  moveForward = () => {
    this.setState(prevState => {
      const { x, y, direction } = prevState;
      switch (direction) {
        case 'NORTH':
          return y > 0 ? { y: y - 1 } : null;
        case 'EAST':
          return x < 4 ? { x: x + 1 } : null;
        case 'SOUTH':
          return y < 4 ? { y: y + 1 } : null;
        case 'WEST':
          return x > 0 ? { x: x - 1 } : null;
        default:
          return null;
      }
    });
  };

  rotateLeft = () => {
    this.setState(prevState => ({
      direction: directions[(directions.indexOf(prevState.direction) + 3) % 4]
    }));
  };

  rotateRight = () => {
    this.setState(prevState => ({
      direction: directions[(directions.indexOf(prevState.direction) + 1) % 4]
    }));
  };

  render() {
    const { x, y, direction } = this.state;
    return (
      <div className="robot-controller">
        <div className="controls">
          <button onClick={this.rotateLeft}>Rotate Left</button>
          <button onClick={this.moveForward}>Move Forward</button>
          <button onClick={this.rotateRight}>Rotate Right</button>
        </div>
        <Grid robotPosition={{ x, y, direction }} />
      </div>
    );
  }
}

export default Robot;
