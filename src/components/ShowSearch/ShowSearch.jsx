import React, { useState, useEffect } from "react";
import "./ShowSearch.css";
import axios from "axios";
import Loader from "../common/Loader/Loader";
import { Link } from "react-router-dom";

function ShowSearch({ value }) {
  const [data, setData] = useState();
  const url = "http://api.tvmaze.com/search/shows";
  const fall_src = "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60;"

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
                {item.show.image && 
                  <div
                    className="search_card_left"
                    style={{
                      backgroundImage: `url(${item.show.image.original || fall_src}) `,
                    }}
                  ></div>
                }
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
