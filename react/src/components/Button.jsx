import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ cursor: 'pointer' }}>
      Refresh Table
    </button>
  );
};

export default Button;