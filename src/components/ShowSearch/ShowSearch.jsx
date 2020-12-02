import React, { useState, useEffect } from "react";
import "./ShowSearch.css";
import axios from "axios"
import Card from "../Card/Card"
import Loader from "../common/Loader/Loader";
// import Loader from "../assets/Loader"

function ShowSearch({ value }) {
    const [data, setData] = useState();
    const url = "http://api.tvmaze.com/search/shows";
    // SINGLE__SHOW
    useEffect(() => {
        axios
            .get(url, { params: { q: value } })
            .then((res) => {
                setData(res.data);
                // console.log("DATA FROM useeffect ",res)

            });
    }, [value]);
    console.log("DATA FROM SEARCH", value)
    console.log("DATA FROM SEARCH api", data)

    return (
        <>
            {/* <div className="search_card">
        <div className="search_card_left">
        </div>
        <div className="search_card_right">
          <h1>
            Black<span>Mirror</span>
          </h1>
          <div className="search_card_right__details">
            <ul>
              <li>2003</li>
              <li>111 min</li>
              <li>Action</li>
            </ul>

            <div className="search_card_right__review">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               
              </p>
            </div>
            <div className="search_card_right__button">
              <a>MORE INFO</a>
            </div>
          </div>
        </div>
      </div> */}

            <div className="container image-grid">
                <div className="row">
                    {data ? (
                        data.map((item) => (
                            <div className="search_card">
                                <div className="search_card_left">
                                </div>
                                <div className="search_card_right">
                                    {/* <h1>
            Black<span>Mirror</span>
          </h1> */}
                                    <h1>{item.name}</h1>
                                    <div className="search_card_right__details">
                                        <ul>
                                            <li>{item.premiered}</li>
                                            <li>{item.time} min</li>
                                            {/* <li>{item.genres[0]}</li> */}
                                        </ul>

                                        <div className="search_card_right__review">
                                            <p>
                                                {item.summary}

                                            </p>
                                        </div>
                                        <div className="search_card_right__button">
                                            <a>MORE INFO</a>
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
