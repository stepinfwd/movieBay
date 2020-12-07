import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import like from "../assets/icons8-heartv.svg";
import Loader from "../common/Loader/Loader";

function Card(props) {
  const { item } = props;
  return (
    <div className=" mt-4">
      {item ? <div className="card">
        <div
          className="card-img-top"
          style={{ backgroundImage: `url(${item.image.original})` }}
        />
        <div className="card-block">
          <h4 className="card-title">{props.item.name}</h4>
          <div className="card-premier">
            <p>{item.premiered}</p>
          </div>
          <div className="card-text">
            <button type="button" className="btn btn-outline-secondary">
            {item.genres[0]?item.genres[0]:<span>No Data</span>}
            </button>
            <button type="button" className="btn  btn-outline-secondary">
              {item.genres[1]?item.genres[1]:<span>No Data</span>}
            </button>
          </div>

          <button type="button" className="btn btn-outline-secondary">
          {item.genres[2]?item.genres[2]:<span>No Data</span>}
          </button>
        </div>
        <Link to={`/shows/${item.id}`}>
          <div className="more-button-container">
            <button type="button" className="btn  btn-dark">
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
      </div> : <Loader />}
    </div>
  );
}

export default Card;
