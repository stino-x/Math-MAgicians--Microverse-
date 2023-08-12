import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <h1>Math magicians</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="calculator">Calculator</NavLink></li>
        <li><NavLink to="quote">Quote</NavLink></li>
      </ul>
    </nav>
  );
}
