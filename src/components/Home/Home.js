import React from "react";
import Navbar from "../Navbar/Navbar";
import CardList from "../CardList/CardList";
function Home({ data, search }) {
  return (
    <div>
      <Navbar search={search} />
      <CardList data={data} />
    </div>
  );
}

export default Home;
