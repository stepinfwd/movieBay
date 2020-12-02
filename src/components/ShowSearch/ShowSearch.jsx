import React, { useState, useEffect } from "react";
import "./ShowSearch.css";
import axios from "axios"


function ShowSearch({value}) {
  const [data, setData] = useState();
const url="http://api.tvmaze.com/search/shows";
  // SINGLE__SHOW
  useEffect(() => {
    axios
      .get(url, { params: { q: value } })
      .then((res) => {
        setData(res.data);
        console.log("DATA FROM useeffect ",res)

      });
  }, [value]);
  console.log("DATA FROM SEARCH",value)
  console.log("DATA FROM SEARCH api",data)

  return (
    <>
    <div className="search_card">
        <div className="search_card_left">
          {/* <img src="https://images.unsplash.com/photo-1529940605533-4f4e7b28595a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGN5YmVycHVuayUyMHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /> */}
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
      </div>
    </>
  );
}

export default ShowSearch;
