import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-bar">
            <li>
              <NavLink to="/" className="brand-text">
                Aurelia
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
