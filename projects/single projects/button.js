import React from 'react';

const Button = ({ onClick, label, style }) => {
  return (
    <input
      type="submit"
      className="submit"
      value={label}
      onClick={onClick}
      style={style}
    />
  );
};

export default Button;