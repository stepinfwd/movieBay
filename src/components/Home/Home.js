import React from "react";
import Navbar from "../Navbar/Navbar";
import CardList from "../CardList/CardList";
function Home({data}) {
  
  return (
    <div>
      <Navbar />
      <CardList data={data}/>
    </div>
  );
}

export default Home;
