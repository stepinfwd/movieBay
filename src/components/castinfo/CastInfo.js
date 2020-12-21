import React from "react";
import "./CastInfo.css";
import Loader from "../common/Loader/Loader";

function CastInfo({ cast }) {
  const fall_src =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  return (
    <div className="castInfo-global container">
      <p className="castInfo-global-header">
        Cast<span className="castInfo-global-header-span">Info</span>
      </p>
      <div className="row">
        {cast ? (
          cast.map(({ person, character }) => (
            <div className="cast-global col-lg-4 " key={person.id}>
              <div className="cast-card">
                <div className="cast-card-header-image">
                  {person.image && (
                    <div
                      className="cast-card-avatar"
                      style={{
                        backgroundImage: `url(${
                          person.image.original || fall_src
                        }),url(${fall_src}) `,
                      }}
                    />
                  )}
                </div>
                <p className="cast-card-name">{person.name}</p>
                <p className="cast-card-name-linker">AS</p>
                <p className="cast-card-moviename">{character.name}</p>
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
