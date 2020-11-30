import React, { useState, useEffect } from "react";
import Logo from "./components/assets/logo.png";
import "./App.css";
import Home from "./components/Views/Home/Home";
import MovieInfo from "./components/Views/Movie-info/MovieInfo";
// import Navbar from "./components/Layout/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CastInfo from "./components/castinfo/CastInfo";
import Navbar from "./components/Layout/Navbar/Navbar";
import Person from "./components/person/Person";

function App() {
 return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/people">
            <Person/>
          </Route>
         
          <Route exact path="/shows/:id">
            <MovieInfo />
          </Route>
     
        </Switch>
        {/* <Footer/> */}

      </Router>
    </div>
  );
}

export default App;
