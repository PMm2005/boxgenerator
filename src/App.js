import React, { useState } from 'react';
import './App.css';

const BoxForm = () => {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (color) {
      const newBox = { color: color };
      setBoxes([...boxes, newBox]);

      setColor('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Color: </label>
          <input
            type="text"
            value={color}onChange={(e) => setColor(e.target.value)}placeholder=""
          />
        </div>
        <button type="submit">Add</button>
      </form>

      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{
              backgroundColor: box.color,
              width: '100px',
              height: '100px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxForm;
