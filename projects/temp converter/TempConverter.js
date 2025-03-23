import React, { useState } from 'react';
import InputField from './InputField';
import Dropdown from './Dropdown';
import Button from './button';

const TempConverter = () => {
  const [degree, setDegree] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = () => { 
    let convertedResult;

    if (from === 'fahrenheit' && to === 'kelvin') {
      convertedResult = (parseFloat(degree) - 32) * 5 / 9 + 273.15;
    } else if (from === 'fahrenheit' && to === 'celsius') {
      convertedResult = (parseFloat(degree) - 32) * 5 / 9;
    } else if (from === 'kelvin' && to === 'fahrenheit') {
      convertedResult = (parseFloat(degree) - 273.15) * 9 / 5 + 32;
    } else if (from === 'kelvin' && to === 'celsius') {
      convertedResult = parseFloat(degree) - 273.15;
    } else if (from === 'celsius' && to === 'kelvin') {
      convertedResult = parseFloat(degree) + 273.15;
    } else if (from === 'celsius' && to === 'fahrenheit') {
      convertedResult = (parseFloat(degree) * 9) / 5 + 32;
    } else {
      convertedResult = 'Conversion not supported';
    }

    setResult(`Your new temp is: ${convertedResult.toFixed(2)}`);
  };

  const handleReset = () => {
    setDegree('');
    setFrom('');
    setTo('');
    setResult('');
  };

  return (
    <div className="body" style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '40px 60px 60px 60px',
      padding: '50px',
      boxShadow: '0px 20px 25px 0px rgba(0,0,0,0.2)',
      height: '400px',
      width: 'fit-content',
      backgroundImage: 'url(temp coverter.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="calculator" style={{
        display: 'inline-flex',
        margin: '120px 40px 30px 60px',
        gap: '15px'
      }}>
        <InputField
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
        <Dropdown
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          options={[
            { value: '', label: 'Convert from', disabled: true },
            { value: 'fahrenheit', label: 'Fahrenheit' },
            { value: 'celsius', label: 'Celsius' },
            { value: 'kelvin', label: 'Kelvin' }
          ]}
        />
        <Dropdown
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          options={[
            { value: '', label: 'Convert to', disabled: true },
            { value: 'fahrenheit', label: 'Fahrenheit' },
            { value: 'celsius', label: 'Celsius' },
            { value: 'kelvin', label: 'Kelvin' }
          ]}
        />
        <Button
          onClick={handleConvert}
          label="Convert"
          style={{
            borderRadius: '3px',
            width: '120px',
            backgroundColor: 'green',
            fontSize: '30px'
          }}
        />
      </div>
      <div className="output" id="output" style={{
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        padding: '20px',
        margin: '30px',
        borderRadius: '5px',
        border: '4px',
        fontSize: '35px',
        width: '250px',
        height: '50px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'aliceblue'
      }}>
        {result}
      </div>
      <div className="reset" id="reset" onClick={handleReset} style={{
        backgroundColor: 'red',
        fontSize: '30px',
        margin: '-120px 10px 10px 410px'
      }}>
        RESET
      </div>
    </div>
  );
};

export default TempConverter;