import React from "react";
import "./Person.css";
import Loader from "../common/Loader/Loader";

function Person({ person }) {
  return (
    <>
      <p className="castInfo_global_header personInfo_global">
        Person<span className="castInfo_global_header_span">Info</span>
      </p>{" "}
      <div>
        <input />
        {person
          ? person.map((p) => (
            <div className="person_card">
              <img
                className="cast-card__avatar"
                alt=""
                style={{
                  backgroundImage: `url(${p.image.medium})`,
                }}
              />
              <div class="column">
                <div className="container">
                  <h2>Jane Doe</h2>
                  <p className="title">CEO Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
                  <p>
                    <button class="button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
          ))
          : <Loader />}
      </div>
    </>
  );
}

export default Person;
