import React, { useState } from "react";

import "./Navbar.css";
import {NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/"exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/admissions">Admissions</NavLink>
        </li>
        <li>
          <NavLink to="/academics">Academics</NavLink>
        </li>
        <li>
          <NavLink to="/infrastructure">Infrastructure</NavLink>
        </li>
        <li>
          <NavLink to="/campuslife">Campus Life</NavLink>
        </li>
        <li>
          <NavLink to="/sports">Sports</NavLink>
        </li>
      </ul>
    </nav>
  );
};