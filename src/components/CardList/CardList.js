

import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";
import Loader from "../common/Loader/Loader";
function CardList({ data,value }) {
  useEffect(() => {
    console.log("Data", data);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const items =
  data?data.filter((data)=>{
    if(value == null)
        return data
    else if(data.name.toLowerCase().includes(value.toLowerCase())){
        return data
    }
  }):""
  return (
    <div className="container image-grid">
      <div className="row">
        {items
          ? items.map((item) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
                <Card item={item} key={item.id} />
              </div>
            ))
          : <Loader/>}
      </div>
    </div>
  );
}

export default CardList;

