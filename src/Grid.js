import React from 'react';
import './Grid.css';

const Grid = ({ robotPosition }) => {
  const grid = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const isRobotHere = robotPosition.x === col && robotPosition.y === row;
      grid.push(
        <div key={`${row}-${col}`} className="grid-cell">
          {isRobotHere && <div className={`robot-face ${robotPosition.direction.toLowerCase()}`} />}
        </div>
      );
    }
  }

  return <div className="grid">{grid}</div>;
};

export default Grid;
