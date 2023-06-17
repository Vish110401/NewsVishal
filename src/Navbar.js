import React from "react";
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            NewsVishal
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Business">
                  Business
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Entertainment">
                  Entertainment
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/General">
                  General
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Health">
                  Health
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Science">
                  Science
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Sports">
                  Sports
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
