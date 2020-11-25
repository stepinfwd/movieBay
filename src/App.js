import React, { useState, useEffect } from "react";
import Logo from "./components/assets/logo.png";
import axios from "axios";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("http://api.tvmaze.com/shows").then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;
