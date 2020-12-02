import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar({ searchCallback }) {
  const [input, setInput] = useState("");
  const searchHandler = (e) => {
    setInput(e.target.value);
    searchCallback(input);
  };
  const handleSearch = (e) => {
    searchCallback(input);
    setInput("");
  };
  return (
    <div>
      <div>
        <nav className="navbar  justify-content-between">
          <Link to="/">
            <p className="navbar-brand">NETFLIX</p>
          </Link>
          {/* <Link to="/">HOME</Link> */}
        <Link to="/people">people</Link>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2 input-box"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={searchHandler}
              value={input}
            />
            <Link to="/search">
              <button
                className="btn s my-2 my-sm-0 search-button"
                onClick={handleSearch}
              >
                Search
              </button>
            </Link>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
