// src/Calculator.js
import React, { useState } from 'react';
import './index.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } 
    catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const deleteLastNumber = () => {
    setInput(prevInput => prevInput.slice(0, -1));
  };

  const calculateSquareRoot = () =>{
    setInput(prevInput => Math.sqrt(parseFloat(prevInput)).toString());
    
  };

  
  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
      <div className="buttons">
        
        <button onClick={() => handleClear()}>C</button>
        <button onClick={deleteLastNumber}>Del</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        
        <button onClick={calculateSquareRoot}>√</button>
        <button onClick={() => handleButtonClick('0')}>00</button>
        <button onClick={() => handleButtonClick('**')}>**</button>
        <button onClick={() => handleCalculate()}>=</button>

      </div>
     
    </div>
  );
};

export default Calculator;
