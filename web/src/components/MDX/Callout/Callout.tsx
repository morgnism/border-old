import React from 'react';

const Callout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        padding: '0 1rem',
        background: 'lightblue',
        border: '1px solid blue',
        borderRadius: '0.5rem',
      }}
    >
      {children}
    </div>
  );
};

export default Callout;
