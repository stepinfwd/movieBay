import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navbar(props) {
  const [input, setInput] = useState("");
  const searchHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search DataTransferItem", input);
  };
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
              onChange={searchHandler}
              value={input}
            />
            <button
              className="btn s my-2 my-sm-0 search-button"
              style={{ color: "#fff", borderColor: "#fff", fontWeight: "800" }}
              onClick={handleSearch}
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
