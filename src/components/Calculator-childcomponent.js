/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

export default function Calculatorchildcomp({ handleClick }) {
  return (
    <div className="buttons">
      <div className="grid row-1">
        <button onClick={handleClick} type="button">AC</button>
        <button onClick={handleClick} type="button">+/-</button>
        <button onClick={handleClick} type="button">%</button>
        <button onClick={handleClick} type="button">÷</button>
      </div>
      <div className="grid row-2">
        <button onClick={handleClick} type="button">7</button>
        <button onClick={handleClick} type="button">8</button>
        <button onClick={handleClick} type="button">9</button>
        <button onClick={handleClick} type="button">X</button>
      </div>
      <div className="grid row-3">
        <button onClick={handleClick} type="button">4</button>
        <button onClick={handleClick} type="button">5</button>
        <button onClick={handleClick} type="button">6</button>
        <button onClick={handleClick} type="button">-</button>
      </div>
      <div className="grid row-4">
        <button onClick={handleClick} type="button">1</button>
        <button onClick={handleClick} type="button">2</button>
        <button onClick={handleClick} type="button">3</button>
        <button onClick={handleClick} type="button">+</button>
      </div>
      <div className="grid row-5">
        <button id="zero" onClick={handleClick} type="button">0</button>
        <button onClick={handleClick} type="button">.</button>
        <button onClick={handleClick} type="button">=</button>
      </div>
    </div>
  );
}
Calculatorchildcomp.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
