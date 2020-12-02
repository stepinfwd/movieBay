import React, { useState, useEffect } from "react";
import "./Home.css";
import CardList from "../../CardList/CardList";
import axios from "axios";
import ScheduleCard from "../../Schedule/ScheduleCard";

function Home({value}) {
  const url = "http://api.tvmaze.com/shows";
  const time = "http://api.tvmaze.com/schedule?country=US&date=2014-12-01";

  const [data, setData] = useState("");
  const [showbytime, setShowbytime] = useState("");
  // SHOW
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

   // SHOW BY TIME
   useEffect(() => {
    axios.get(time).then((res) => setShowbytime(res.data));
  }, []);
  return (
    <div className="home">
      <h3 className="home_heading">
        <span className="home_main_heading">NOW</span> SHOWING
      </h3>
      <h4 className="home_sec_heading">Featured</h4>
      <CardList data={data} value={value} />
      <ScheduleCard/>
    </div>
  );
}

export default Home;
