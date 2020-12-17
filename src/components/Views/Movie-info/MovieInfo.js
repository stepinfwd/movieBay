import React, { useState, useEffect } from "react";
import "./MovieInfo.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import InnerNav from "../../Innernavbar/InnerNav";
import { FetchCast } from "../../Redux/Actions/CastAction";
import { connect } from "react-redux";
import { FetchCrew } from "../../Redux/Actions/CrewAction";
import { FetchGallery } from "../../Redux/Actions/GalleryAction";

  // MapStateToProps=
  const mapStateToProps = (state) => {
    return {
      casts: state.cast.casts,
      crews: state.crew.crews,
      gallerys: state.gallery.galleryImg,

    };
  };

  // MapDispatchToProps
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCast: () => dispatch(FetchCast()),
      fetchCrew: () => dispatch(FetchCrew()),
      fetchGallery: () => dispatch(FetchGallery()),


    };
  };
function MovieInfo({ data, value, casts, fetchCast,crews,fetchCrew,fetchGallery,gallerys }) {
  let { id } = useParams();
  const url = `http://api.tvmaze.com/shows/${id}`;
  // const cast_url = `http://api.tvmaze.com/shows/${id}/cast`;
  const episode_url = `http://api.tvmaze.com/shows/${id}/episodes`;
  // const crew_url = `http://api.tvmaze.com/shows/${id}/crew`;
  // const gallery_url = `http://api.tvmaze.com/shows/${id}/images`;

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
    fetchCast();
    fetchCrew();
    fetchGallery();

  }, []);


  // EPISODE
  useEffect(() => {
    axios.get(episode_url).then((res) => {
      setEpisode(res.data);
    });
  }, [episode_url]);

  // // Gallery
  // useEffect(() => {
  //   axios.get(gallery_url).then((res) => {
  //     setGallery(res.data);
  //   });
  // }, [gallery_url]);

  // // CREW
  // useEffect(() => {
  //   axios.get(crew_url).then((res) => {
  //     setCrew(res.data);
  //   });
  // }, [crew_url]);

  return (
    <div className="movie_info_global">
      <InnerNav
        gallery={gallerys}
        episode={episode}
        cast={casts}
        movieitem={movieitem}
        crew={crews}
        value={value}
      />
    </div>
  );
}
export default connect( mapStateToProps,mapDispatchToProps)(MovieInfo);
