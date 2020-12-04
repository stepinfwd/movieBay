import React, { useState, useCallback } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import _ from "lodash";

function Navbar({ searchCallback }) {
  const [input, setInput] = useState("");
  // DEBOUNCING FOR REDUCING CALLS
  const delayedQuery = useCallback(_.debounce(q => searchCallback(q), 500), []);

  const searchHandler = (e) => {
    setInput(e.target.value);
    delayedQuery(input);
    // searchCallback(input);
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
            <p className="navbar-brand">Movies<span>N</span>ow</p>
          </Link>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2 input-box"
              type="search"
              placeholder="Search Shows"
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
