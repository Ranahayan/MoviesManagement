import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [status, setStatus] = useState("movie");

  const handleStatus = (item) => {
    setStatus(item);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Videoly
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <NavLink to="/movies" className="nav-link">
                <span>Movies</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/customers" className="nav-link">
                <span>Customers </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/rentals" className="nav-link">
                <span>Rentals</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                <span>Login</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="nav-link">
                <span>Register</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
