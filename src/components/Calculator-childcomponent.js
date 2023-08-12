import React from 'react';

export default function Calculatorchildcomp() {
  return (
    <div className="buttons">
      <div className="grid row-1">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button">÷</button>
      </div>
      <div className="grid row-2">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">X</button>
      </div>
      <div className="grid row-3">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">-</button>
      </div>
      <div className="grid row-4">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">+</button>
      </div>
      <div className="grid row-5">
        <button id="zero" type="button">0</button>
        <button type="button">.</button>
        <button type="button">=</button>
      </div>
    </div>
  );
}
