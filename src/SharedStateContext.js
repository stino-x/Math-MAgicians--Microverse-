// SharedStateContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import calculate from './components/logic/Calculate';

const SharedStateContext = createContext();

export function SharedStateProvider({ children }) {
  const [character, setCharacter] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (e) => {
    const buttonName = e.target.innerText;
    const newCharacter = calculate(character, buttonName);

    setCharacter(newCharacter);
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
    <SharedStateContext.Provider value={{
      character, setCharacter, handleClick, displayValue,
    }}
    >
      {children}
    </SharedStateContext.Provider>
  );
}

SharedStateProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as a node (React node)
};

export default SharedStateContext;
