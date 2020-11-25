import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./CardList.css";
function CardList({ data }) {
  useEffect(() => {
    console.log("Data", data);
  }, []);
  return (
    <div className="container image-grid">
      <div className="row">
        {data
          ? data.map((item) => (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <Card item={item} key={item.id} />
              </div>
            ))
          : "LOAD"}
      </div>
    </div>
  );
}

export default CardList;
