import React from "react";

function Crew({ crew }) {
  return (
    <>
      <div className="castInfo_global container">
        <p className="castInfo_global_header">
          Cast<span className="castInfo_global_header_span">Info</span>
        </p>
        <div className="row">
          {crew
            ? crew.map((person) => (
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
    </>
  );
}

export default Crew;
