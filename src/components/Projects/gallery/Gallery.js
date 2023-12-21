import React from 'react';
import './App.css'; // Import your CSS file for styling

const Box = ({ position }) => (
  <div className="box" style={position}>
    {/* Your box content goes here */}
  </div>
);

const App = () => {
  // Calculate positions for the boxes on the first rectangle
  const firstRectangleBoxPositions = [
    { top: 'calc(50% - 25px)', left: 'calc(50% - 25px)' }, // Center
    { top: '10%', left: '50%' }, // Top center
    { bottom: '10%', left: '50%' }, // Bottom center
    { left: '10%', top: '50%' }, // Left middle
    { right: '10%', top: '50%' }, // Right middle
    { top: '10%', left: '10%' }, // Top left
    { top: '10%', right: '10%' }, // Top right
    { bottom: '10%', left: '10%' }, // Bottom left
    { bottom: '10%', right: '10%' }, // Bottom right
  ];

  // Calculate positions for the boxes on the second rectangle
  const secondRectangleBoxPositions = Array.from({ length: 16 }, (_, index) => {
    const angle = (index * 2 * Math.PI) / 16; // Spread the boxes evenly
    const radius = 'calc(50% - 25px)'; // Adjust as needed

    const top = `calc(50% + ${radius} * ${Math.sin(angle)} - 25px)`;
    const left = `calc(50% + ${radius} * ${Math.cos(angle)} - 25px)`;

    return { top, left };
  });

  return (
    <div className="app">
      <div className="square">
        {firstRectangleBoxPositions.map((position, index) => (
          <Box key={index} position={position} />
        ))}
      </div>
      <div className="bigger-rectangle">
        {secondRectangleBoxPositions.map((position, index) => (
          <Box key={index + 9} position={position} />
        ))}
      </div>
    </div>
  );
};

export default App;
