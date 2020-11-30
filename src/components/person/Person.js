import React from "react";
import "./Person.css";

function Person() {
  return (
    <>
      <p className="castInfo_global_header personInfo_global">
        Person<span className="castInfo_global_header_span">Info</span>
      </p>{" "}
      <div>
        <input />
        {/* {person
            ? person.map(( p ) => (
           
                <div className="cast-global col-lg-4 " key={p.id}>
                  <div className="cast-card">
                    <div className="cast-card__header-image">
                      <img className="cast-card__avatar" 
                       style={{
                        backgroundImage: `url(${p.image.medium})`

                      }} alt="no image yet"/>
                    </div>
                    <p className="cast-card__name">{p.name}</p>
                    <p className="cast-card__name_linker">AS</p>
                    <p className="cast-card__moviename"></p>
                  </div>
                </div>
              ))
            : "load"} */}
      </div>
    </>
  );
}

export default Person;
