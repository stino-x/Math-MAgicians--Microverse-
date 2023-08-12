import { useState } from 'react';
import Calculatorchildcomp from './Calculator-childcomponent';
import calculate from './logic/Calculate';
import Inputarea from './Inputarea';

export default function Calculator() {
  const [character, setCharacter] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (e) => {
    setCharacter(calculate(character, e.target.innerText));
  };
  const displayValue = () => {
    if (character.next) {
      return Number(character.next).toLocaleString();
    }
    if (character.total) {
      return Number(character.total).toLocaleString();
    }

    return '0';
  };
  return (

    <div className="calculator">
      <div className="display-area" />
      <Inputarea input={displayValue()} />
      <Calculatorchildcomp handleClick={handleClick} />
    </div>

  );
}
