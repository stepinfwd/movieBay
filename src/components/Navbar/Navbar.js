import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
function Navbar(props) {
  return (
    <div>
      <div>
        <nav className="navbar  justify-content-between">
          <p className="navbar-brand">
            <img className="logo-style" src={logo} alt="" />
            <span>TV</span>maze{" "}
          </p>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn s my-2 my-sm-0 search-button"
              style={{ color: "#fff", borderColor: "#fff", fontWeight: "800" }}
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
