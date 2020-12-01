import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Views/Home/Home";
import MovieInfo from "./components/Views/Movie-info/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Person from "./components/person/Person";

function App() {
  const [input, searchInput] = useState();
  // to get search value from navbar
  const searchCallback = (value) => {
    searchInput(value);
  };
  return (
    <div className="App">
      <Router>
        <Navbar searchCallback={searchCallback}/>
        <Switch>
          <Route exact path="/">
            <Home value={input} />
          </Route>
          <Route exact path="/people">
            <Person />
          </Route>
          <Route exact path="/shows/:id">
            <MovieInfo value={input} />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
