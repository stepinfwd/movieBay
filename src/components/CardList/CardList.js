import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./CardList.css";
function CardList({ data,value }) {
  useEffect(() => {
    console.log("Data", data);
  }, []);
  console.log("Dataaaa", data);
  console.log("VAUEEE", value);

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
          : "LOAD"}
      </div>
    </div>
  );
}

export default CardList;
