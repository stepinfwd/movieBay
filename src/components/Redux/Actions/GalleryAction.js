import axios from "axios";
import { useParams } from "react-router-dom";

// ACTIONS
const fetchgalleryRequest = () => {
  return {
    type: "fetch_gallerys_request",
  };
};
const fetchgallerySuccess = (data) => {
  return {
    type: "fetch_gallerys_success",
    payload: data,
  };
};
const fetchgalleryFailure = (error) => {
  return {
    type: "fetch_gallerys_failure",
    payload: error,
  };
};

// ACTION CREATOR
export const FetchGallery = () => {
//   let { id } = useParams();
  return (dispatch) => {
    dispatch(fetchgalleryRequest);
    const url = "http://api.tvmaze.com/shows/1/images";
    axios.get(url).then((gallery) => dispatch(fetchgallerySuccess(gallery.data)));
  };
};
