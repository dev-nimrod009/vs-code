import React from 'react';

const InputField = ({ value, onChange }) => {
  return (
    <input
      type="number"
      className="text"
      max-value="4"
      placeholder="0.00"
      required
      value={value}
      onChange={onChange}
      style={{
        borderRadius: '10px',
        width: '170px',
        height: '50px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
      }}
    />
  );
};

export default InputField;