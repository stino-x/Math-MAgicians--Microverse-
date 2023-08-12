/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

export default function Inputarea({ input }) {
  return (
    <input type="text" value={input} readOnly />
  );
}

Inputarea.propTypes = {
  input: PropTypes.string.isRequired,
};
