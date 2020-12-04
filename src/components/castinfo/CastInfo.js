import React from "react";
import "./CastInfo.css";
import Loader from "../common/Loader/Loader";

function CastInfo({ cast, value }) {
  const fall_src = "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60;"

  return (
    <div className="castInfo_global container">
      <p className="castInfo_global_header">
        Cast<span className="castInfo_global_header_span">Info</span>
      </p>
      <div className="row">
        {cast
          ? cast.map(({ person, character }) => (
            <div className="cast-global col-lg-4 " key={person.id}>
              <div className="cast-card">
                <div className="cast-card__header-image">
               {person.image && 
                  <div
                    className="cast-card__avatar"
                    style={{
                      backgroundImage: `url(${person.image.original ||fall_src}) `
                    }}
                  />}
                </div>
                <p className="cast-card__name">{person.name}</p>
                <p className="cast-card__name_linker">AS</p>
                <p className="cast-card__moviename">{character.name}</p>
              </div>
            </div>
          ))
          : <Loader />}
      </div>
    </div>
  );
}

export default CastInfo;
