import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";
import like from "../assets/icons8-heartv2.svg";
function Card(props) {
  const { item } = props;
  return (
    <div className=" mt-4">
      <div className="card">
        <div
          className="card-img-top"
          style={{ backgroundImage: `url(${props.item.image.original})` }}
        />
        <div className="card-block">
          <h4 className="card-title">{props.item.name}</h4>
          <div className="meta">
            <a>{item.premiered}</a>
          </div>
          <div className="card-text">
            <button type="button" class="btn btn-outline-secondary">
              {item.genres[0]}
            </button>
            <button type="button" class="btn  btn-outline-secondary">
              {item.genres[1]}
            </button>
          </div>

          <button type="button" class="btn btn-outline-secondary">
            {item.genres[2]}
          </button>
        </div>
        <Link to={`/shows/${item.id}`}>
          <div className="more-button-container">
            <button type="button" class="btn  btn-dark">
              more
            </button>
          </div>
        </Link>
        <div className="card-footer">
          <span>
            <i>
              <img className="like-img" alt="" src={like}></img>
            </i>
            <span className="card-footer-like"> {item.weight}Likes</span>
          </span>
          <span className="card-footer-rating">
            Rating - {item.rating.average}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
