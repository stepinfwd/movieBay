import React, { useState, useEffect } from "react";
import "./Home.css";
import CardList from "../../CardList/CardList";
import axios from "axios";
import Loader from "../../common/Loader/Loader";
import Schedule from "../../Schedule/Schedule";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {fetchShow }from "../../Redux/Actions/ShowAction";


  // MapStateToProps=
  const mapStateToProps = (state) => {
    return {
      shows: state.show.shows,
    };
  };

  // MapDispatchToProps
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchShow: () => dispatch(fetchShow()),
    };
  };


function Home({ value, fetchShow, shows }) {
  const url = "http://api.tvmaze.com/shows";
  const time = "http://api.tvmaze.com/schedule?country=US&date=2014-12-01";
  let { page } = useParams();

  const [data, setData] = useState("");
  const [showbytime, setShowbytime] = useState("");

  useEffect(() => {
    fetchShow()
  }, []);

  // // SHOW
  // useEffect(() => {
  //   axios.get(url).then((res) => setData(res.data));
  // }, []);

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
      {shows ? (
        <div>
          <CardList data={shows} />
          <Schedule />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default connect( mapStateToProps,mapDispatchToProps)(Home);
