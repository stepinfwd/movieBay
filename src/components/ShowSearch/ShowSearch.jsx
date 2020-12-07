import React, { useState, useEffect } from "react";
import "./ShowSearch.css";
import axios from "axios";
import Loader from "../common/Loader/Loader";
import { Link } from "react-router-dom";

function ShowSearch({ value }) {
  const [data, setData] = useState();
  const url = "http://api.tvmaze.com/search/shows";
  const fall_src = "https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"

  // SINGLE__SHOW
  useEffect(() => {
    axios.get(url, { params: { q: value } }).then((res) => {
      setData(res.data);
    });
  }, [value]);

  return (
    <>
      <div className="container image-grid">
        <div className="row">
          {data ? (
            data.map((item) => (
              <div className="search_card">
                {item.show.image && item.show.image.original?
                  <img
                    className="search_card_left"
                    // style={{
                    //   backgroundImage: `url(${item.show.image.original}?${item.show.image.original}:${fall_src}) `,
                    //   // backgroundImage:`url(${fall_src})`
                    // }}
                    src={ item.show.image.original?item.show.image.original:fall_src}
                  ></img>
               :"" }
                <div className="search_card_right">
                  <h1>{item.show.name}</h1>
                  <div className="search_card_right__details">
                    <ul>
                      <li>{item.show.premiered}</li>
                      <li>{item.show.runtime} min</li>
                      {/* <li>{item.genres[0]}</li> */}
                    </ul>

                    <div className="search_card_right__review">
                      <p>{item.show.summary}</p>
                      <div className="search_card_right__button">
                        <Link to={`/shows/${item.show.id}`}>MORE INFO</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}

export default ShowSearch;
