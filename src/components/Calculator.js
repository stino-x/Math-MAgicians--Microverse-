import React from 'react';
import Calculatorchildcomp from './Calculator-childcomponent';

export default function Calculator() {
  return (
    <div className="calculator">
      <div className="display-area">
        <input type="text" readOnly />
      </div>
      <Calculatorchildcomp />
    </div>
  );
}
