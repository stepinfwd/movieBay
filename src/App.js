import React, { useState, useEffect } from "react";
import Logo from "./components/assets/logo.png";
import axios from "axios";
import "./App.css";
import Home from "./components/Views/Home/Home";
import MovieInfo from "./components/Views/Movie-info/MovieInfo";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://api.tvmaze.com/shows").then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home data={data} search={search} />
          </Route>
          <Route path="/show">
            <MovieInfo data={data} />
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
