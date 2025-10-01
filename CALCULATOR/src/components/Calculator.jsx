import React, { useState } from 'react';
import '../Calculator.css';  

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const clear = () => {
    setInputValue("");
  };

  const display = (value) => setInputValue(inputValue + value);

  const calculate = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setInputValue("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="value" value={inputValue} readOnly />

      <button className="btn special" onClick={clear}>C</button>
      <button className="btn operator" onClick={() => display('/')}>/</button>
      <button className="btn operator" onClick={() => display('*')}>*</button>
      <button className="btn operator" onClick={() => display('-')}>-</button>

      <button className="btn" onClick={() => display('7')}>7</button>
      <button className="btn" onClick={() => display('8')}>8</button>
      <button className="btn" onClick={() => display('9')}>9</button>
      <button className="btn operator plus" onClick={() => display('+')}>+</button>

      <button className="btn" onClick={() => display('4')}>4</button>
      <button className="btn" onClick={() => display('5')}>5</button>
      <button className="btn" onClick={() => display('6')}>6</button>

      <button className="btn" onClick={() => display('1')}>1</button>
      <button className="btn" onClick={() => display('2')}>2</button>
      <button className="btn" onClick={() => display('3')}>3</button>
      <button className="btn equal" onClick={calculate}>=</button>

      <button className="btn zero" onClick={() => display('00')}>00</button>
      <button className="btn" onClick={() => display('0')}>0</button>
      <button className="btn" onClick={() => display('.')}>.</button>
    </div>
  );
};
 
export default Calculator;