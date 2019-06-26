import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <nav id="style">
      <div className="nav-wrapper container">
        <h2 className="brand-logo" id="h2style">
          Bitbook
        </h2>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Feed</Link>
          </li>
          <li>
            <Link to="/users">People</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
