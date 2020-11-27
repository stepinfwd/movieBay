import React, { useState, useEffect } from "react";
import Logo from "./components/assets/logo.png";
import "./App.css";
import Home from "./components/Views/Home/Home";
import MovieInfo from "./components/Views/Movie-info/MovieInfo";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CastInfo from "./components/castinfo/CastInfo";
import Footer from "./components/footer/Footer";

function App() {
 return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
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
