import React, { useState, useEffect } from "react";
import Logo from "./components/assets/logo.png";
import "./App.css";
import Home from "./components/Views/Home/Home";
import MovieInfo from "./components/Views/Movie-info/MovieInfo";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
 return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shows/:id">
            <MovieInfo />
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
