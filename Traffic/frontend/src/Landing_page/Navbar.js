import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom"
    style={{backgroundColor: "#212122"}}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media\logo.png" style={{width:"150%", borderRadius:"10px"}} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
          <ul className="navbar-nav mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active home" style={{color: "#fff"}} to="/">
                Home
              </Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link active" style={{color: "#fff"}} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" style={{color: "#fff"}} to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" style={{color: "#fff"}} to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;