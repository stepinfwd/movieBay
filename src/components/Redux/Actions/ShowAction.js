import axios from "axios";
import { useEffect } from "react";

// ACTIONS
const fetchShowsRequest = () => {
  return {
    type: "fetch_show",
  };
};
const fetchShowsSuccess = (data) => {
  return {
    type: "fetch_shows_success",
    payload: data,
  };
};
const fetchShowsFailure = (error) => {
  return {
    type: "fetch_shows_failure",
    payload: error,
  };
};

// ACTION CREATOR
export const fetchShow = () => {
  return (dispatch) => {
    dispatch(fetchShowsRequest);
    const url = "http://api.tvmaze.com/shows";

    axios.get(url).then((show) => dispatch(fetchShowsSuccess(show.data)));
  };
};
