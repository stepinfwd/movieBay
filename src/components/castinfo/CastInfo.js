import React, { useState, useEffect } from "react";
import "./CastInfo.css";
import axios from "axios";

function CastInfo({ cast }) {
  console.log("CAST IS", cast);
  return (
    <div className="castInfo_global container">
      <p className="castInfo_global_header">
        Cast<span className="castInfo_global_header_span">Info</span>
      </p>
      <div className="row">
        {cast
          ? cast.map((person) => (
              <div className="cast-global col-lg-4 ">
                <div className="cast-card">
                  <div className="cast-card__header-image">
                    <div className="cast-card__avatar" />
                  </div>
                  <p className="cast-card__name">{person.name}</p>
                  <p className="cast-card__name_linker">AS</p>
                  <p className="cast-card__moviename">Jason Bourne</p>
                </div>
              </div>
            ))
          : "load"}
      </div>
    </div>
  );
}

export default CastInfo;
