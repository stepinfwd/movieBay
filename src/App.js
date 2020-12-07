import React, { useState } from "react";
import "./App.css";
import Home from "./components/Views/Home/Home";
import MovieInfo from "./components/Views/Movie-info/MovieInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Person from "./components/person/Person";
import ShowSearch from "./components/ShowSearch/ShowSearch";
import Footer from "./components/Layout/Footer/Footer"
import NotFound from "./components/Views/NotFound/NotFound"

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

          <Route exact path="/search">
            <ShowSearch  value={input}/>
          </Route>
          <Route exact path="/people">
            <Person/>
          </Route>
          <Route exact path="/shows/:id">
            <MovieInfo value={input} />
          </Route>
          <Route path="" component={NotFound} />

        </Switch>
        <Footer className="app-footer"/>
      </Router>
    </div>
  );
}

export default App;
