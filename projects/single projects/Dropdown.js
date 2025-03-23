import React from 'react';

const Dropdown = ({ id, value, onChange, options }) => {
  return (
    <select
      className="drop-down"
      id={id}
      required
      value={value}
      onChange={onChange}
      style={{
        borderRadius: '10px',
        width: '170px',
        height: '50px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
      }}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;