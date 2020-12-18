import React from "react";
import "./CastInfo.css";
import Loader from "../common/Loader/Loader";

function CastInfo({ cast}) {
  const fall_src =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  return (
    <div className="castInfo_global container">
      <p className="castInfo_global_header">
        Cast<span className="castInfo_global_header_span">Info</span>
      </p>
      <div className="row">
        {cast ? (
          cast.map(({ person, character }) => (
            <div className="cast-global col-lg-4 " key={person.id}>
              <div className="cast-card">
                <div className="cast-card__header-image">
                  {person.image && (
                    <div
                      className="cast-card__avatar"
                      style={{
                        backgroundImage: `url(${
                          person.image.original || fall_src
                        }),url(${fall_src}) `,
                      }}
                    />
                  )}
                </div>
                <p className="cast-card__name">{person.name}</p>
                <p className="cast-card__name_linker">AS</p>
                <p className="cast-card__moviename">{character.name}</p>
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default CastInfo;
