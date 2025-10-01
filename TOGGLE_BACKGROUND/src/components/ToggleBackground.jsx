import React, { useState } from 'react';
import '../ToggleBackground.css'; // Import the CSS file

const ToggleBackground = () => {
  const [background, setBackground] = useState('white');
  const [textColor, setTextColor] = useState('#1b1b1b');
  const [buttonBackground, setButtonBackground] = useState('white');

  const handleClick = () => {
    // Using strict equality '===' is best practice
    if (background === 'white') {
      setBackground('#1b1b1b');
      setTextColor('white');
      setButtonBackground('#1b1b1b');
    } else {
      setBackground('white');
      setTextColor('#1b1b1b');
      setButtonBackground('white');
    }
  };

  return (
    // Corrected style syntax and added a className for CSS targeting
    <div className="app-container" style={{ backgroundColor: background, color: textColor }}>
      <button
        onClick={handleClick} // Corrected: Point to the handleClick function
        style={{
          backgroundColor: buttonBackground, // Corrected: Added 'backgroundColor' key
          color: textColor,
          // Corrected: Used a template literal (backticks) for the border string
          border: `2px solid ${textColor}`, 
        }}
      >
        {background === '#1b1b1b' ? 'Light Theme' : 'Dark Theme'}
      </button>

      <section className="content">
        <h1>Welcome To A</h1>
        <br />
        <h1>Real World...</h1>
      </section>
    </div>
  );
};

export default ToggleBackground;