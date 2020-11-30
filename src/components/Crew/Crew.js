import React from "react";

function Crew({ crew }) {
//  const  onError=()={

//   }
  return (
    <>
      <div className="castInfo_global container" >
        <p className="castInfo_global_header">
          Crew<span className="castInfo_global_header_span">Info</span>
        </p>
        <div className="row">
          {crew
            ? crew.map(({ person ,type,image}) => (
            //   console.log(person.image)
            // <p>{person.name}</p>
                <div className="cast-global col-lg-4 " key={person.id}>
                  <div className="cast-card">
                    <div className="cast-card__header-image">
                      <img className="cast-card__avatar" 
                       style={{
                        backgroundImage: `url(${person.image.medium})`

                      }} alt="no image yet"/>
                    </div>
                    <p className="cast-card__name">{person.name}</p>
                    <p className="cast-card__name_linker">AS</p>
                    <p className="cast-card__moviename">{type}</p>
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
