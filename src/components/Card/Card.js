import React from "react";
import "./Card.css";
import like from "../assets/icons8-heart.svg";
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
            <a href="#">{item.premiered}</a>
          </div>
          <div className="card-text">genres</div>
        </div>
        <div className="card-footer">
          <span>
            <i >
              <img className="like-img" src={like}></img>
            </i>
            <span className="card-footer-like">  {item.weight}Likes</span>
          </span>
          <span>Rating:{item.rating.average}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
