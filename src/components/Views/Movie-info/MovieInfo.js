import React, { useState, useEffect } from "react";
import "./MovieInfo.css";
import MovieDetailCard from "./MovieDetailCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import CastInfo from "../../castinfo/CastInfo";
import InnerNav from "../../Innernavbar/InnerNav";
import Episode from "../../Episode/Episode";
import Gallery from "../../Gallery/Gallery";
import Crew from "../../Crew/Crew";

function MovieInfo({ data }) {
  let { id } = useParams();
  const url = `http://api.tvmaze.com/shows/${id}`;
  const cast_url = `http://api.tvmaze.com/shows/${id}/cast`;
  const episode_url = `http://api.tvmaze.com/shows/${id}/episodes`;
  const crew_url = `http://api.tvmaze.com/shows/${id}/crew`;
  const gallery_url = `http://api.tvmaze.com/shows/${id}/images`;

  const [movieitem, setMovieitem] = useState();
  const [cast, setCast] = useState();
  const [episode, setEpisode] = useState();
  const [crew, setCrew] = useState();
  const [gallery, setGallery] = useState();

  // SHOW
  useEffect(() => {
    axios.get(url).then((res) => {
      setMovieitem(res.data);
    });
  }, [url]);

  // CAST
  useEffect(() => {
    axios.get(cast_url).then((res) => {
      setCast(res.data);
    });
  }, [cast_url]);

  // EPISODE
  useEffect(() => {
    axios.get(episode_url).then((res) => {
      setEpisode(res.data);
    });
  }, [episode_url]);

  // Gallery
  useEffect(() => {
    axios.get(gallery_url).then((res) => {
      setGallery(res.data);
    });
  }, [gallery_url]);

    // CREW
    useEffect(() => {
      axios.get(crew_url).then((res) => {
        setCrew(res.data);
      });
    }, [crew_url]);

  return (
    <div className="movie_info_global">
      {/* <h3 className="movie_info_main_header">
        SHOW <span className="movie_info_main_header_span">INFO</span>
      </h3> */}
      {/* <InnerNav/>
      <MovieDetailCard movieitem={movieitem} /> */}
      <h3 className="movie_info_main_header">
        Image
        <span className="movie_info_main_header_span">
          <span>I</span>nfo
        </span>
      </h3>{" "}
      <Gallery gallery={gallery} />
      <Crew crew={crew}/>
      {/* <CastInfo  cast={cast}/>
      <h3 className="episode_main_heading">Episode<span>List</span></h3>

      <Episode episode={episode}/> */}
    </div>
  );
}
export default MovieInfo;
