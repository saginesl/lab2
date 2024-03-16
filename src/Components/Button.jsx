import React from 'react';

    const Button = ({ text, onClick, width, height }) => {
      return (
        <button style={{ position: 'absolute', fontSize: '20px', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', width: width || '210px', height: height || '40px' }} onClick={onClick}>
          {text}
        </button>
      );
    };

     export default Button;