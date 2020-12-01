import React from "react";
import Loader from "../common/Loader/Loader";
import def from "../assets/def.jpeg"

function Crew({ crew }) {
//   const addDefaultSrc = (ev) => {
//     ev.target.src =
//       "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";
//   };
const fall_src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60;"
  return (
    <>
      <div className="castInfo_global container">
        <p className="castInfo_global_header">
          Crew<span className="castInfo_global_header_span">Info</span>
        </p>
        <div className="row">
          {crew ? (
            crew.map(({ person, type, image }) => (
              <div className="cast-global col-lg-4 " key={person.id}>
                <div className="cast-card">
                  <div className="cast-card__header-image">
                   {person.image&& <img
                      className="cast-card__avatar"
                      style={{
                        backgroundImage: `url(${person.image.medium}, url(${fall_src})`,
                      }}
                      // src={person.image.medium || def}
                      // onError={addDefaultSrc}
                      // alt="no image yet"
                    />}
                  </div>
                  <p className="cast-card__name">{person.name}</p>
                  <p className="cast-card__name_linker">AS</p>
                  <p className="cast-card__moviename">{type}</p>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}

export default Crew;
