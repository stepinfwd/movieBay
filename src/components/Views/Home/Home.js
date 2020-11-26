import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Home.css";
import CardList from "../../CardList/CardList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  let content = null;
  const { id } = useParams();
  const url = "http://api.tvmaze.com/shows";
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <div className="home">
      {/* <Navbar search={search} /> */}
      <h3 className="home_heading">
        <span className="home_main_heading">NOW</span> SHOWING
      </h3>
      <h4 className="home_sec_heading">Featured</h4>
      <CardList data={data} />
    </div>
  );
}

export default Home;
