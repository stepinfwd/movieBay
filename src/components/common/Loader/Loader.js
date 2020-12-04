import React from "react";
import "./Loader.css";
function Loader(props) {
  return (
    <>
    <div className="lds-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
    </>
  );
}

export default Loader;
