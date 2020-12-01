import React, { useState, useEffect } from "react";
import "./CastInfo.css";
import axios from "axios";
import Loader from "../common/Loader/Loader";

function CastInfo({ cast,value }) {
  return (
    <div className="castInfo_global container">
      <p className="castInfo_global_header">
        Cast<span className="castInfo_global_header_span">Info</span>
      </p>
      <div className="row">
        {cast
          ? cast.map(({ person, character }) => (
              //  console.log("RAS",person.character)
              <div className="cast-global col-lg-4 " key={person.id}>
                <div className="cast-card">
                  <div className="cast-card__header-image">
                    <div
                      className="cast-card__avatar"
                      style={{
                        backgroundImage: `url(${person.image.original})`,
                      }}
                    />
                  </div>
                  <p className="cast-card__name">{person.name}</p>
                  <p className="cast-card__name_linker">AS</p>
                  <p className="cast-card__moviename">{character.name}</p>
                </div>
              </div>
            ))
          : <Loader/>}
      </div>
    </div>
  );
}

export default CastInfo;
