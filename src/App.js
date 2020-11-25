import React, { useState, useEffect } from "react";
import Logo from "./components/assets/logo.png";
import axios from "axios";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://api.tvmaze.com/shows").then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <Home data={data} search={search} />
    </div>
  );
}

export default App;
