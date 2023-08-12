import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './RootLayout.css';

export default function RootLayout() {
  const location = useLocation();

  // Determine the class to apply based on the current route
  const getBodyClass = () => {
    switch (location.pathname) {
      case '/':
        return 'body-container';
      case '/calculator':
        return 'body-container';
      case '/quote':
        return 'quote-container';
      default:
        return '';
    }
  };

  const bodyClass = getBodyClass();
  return (
    <div className={bodyClass}>
      <nav className="quote-nav Page1-nav calculator-nav">
        <h1 className="quote-header Page1-head calculator-header">Math magicians</h1>
        <ul className="quote-lists Page1-list calculator-links">
          <li className="quote-listitem Page1-listitems calculator-listitem"><NavLink to="/">Calculator</NavLink></li>
          <li className="quote-listitem Page1-listitems calculator-listitem"><NavLink to="quote">Quote</NavLink></li>
        </ul>
      </nav>

      <Outlet />

      <footer />
    </div>
  );
}