import React from 'react';

const RefreshButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ cursor: 'pointer' }}>
      Refresh Table
    </button>
  );
};

export default RefreshButton;