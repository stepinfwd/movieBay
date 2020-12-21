import React from "react";
import Loader from "../common/Loader/Loader";

function Crew({ crew }) {
  const fall_src = "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60;"
  return (
    <>
      <div className="castInfo-global container">
        <p className="castInfo-global-header">
          Crew<span className="castInfo-global-header-span">Info</span>
        </p>
        <div className="row">
          {crew ? (
            crew.map(({ person, type, image }) => (
              <div className="cast-global col-lg-4 " key={person.id}>
                <div className="cast-card">
                  <div className="cast-card-header-image">
                    {person.image && <img
                      className="cast-card-avatar"
                      alt=""
                      style={{
                        backgroundImage: `url(${person.image.medium ||fall_src}) `,
                      }}

                    />}
                    {/* {{backgroundImage: `url(${person.image.medium || 'falback-image.jpg'}}} */}
                  </div>
                  <p className="cast-card-name">{person.name}</p>
                  <p className="cast-card-name-linker">AS</p>
                  <p className="cast-card-moviename">{type}</p>
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
