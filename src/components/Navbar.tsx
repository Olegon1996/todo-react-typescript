import React from "react";
import '../index.css';
import {NavLink} from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple teal px1">
        <div className="brand-logo">
          React + Typesctript
        </div>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">To Do's</NavLink>
          </li>
          <li>
            <NavLink to="/about">Information</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
