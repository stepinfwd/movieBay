import React from "react";
import "./Episode.css"

function Episode({ episode }) {
    console.log("episode is",episode)
  return (
    <div className="episode_table">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Season</th>
            <th>Time</th>
            <th>Date</th>
            <th id="table_top_right">Rating</th>

          </tr>
        </thead>

        <tbody>
          {episode
            ? episode.map((episode) => (
                <tr key={episode.id}>
                  <td>{episode.name}</td>
                  <td>{episode.season}</td>
                  <td>{episode.runtime}</td>
                  <td>{episode.airdate}</td>
                  <td>love</td>

                  {/* <td><button type="button" className="btn btn-danger" onClick={()=>this.handleDelete(movie)}>Danger</button></td> */}
                </tr>
              ))
            : "NULL"}
        </tbody>
      </table>{" "}
    </div>
  );
}

export default Episode;
