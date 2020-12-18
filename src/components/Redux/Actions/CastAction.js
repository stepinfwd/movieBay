import axios from "axios";
import { useParams } from "react-router-dom";

// ACTIONS
const fetchcastsRequest = () => {
  return {
    type: "fetch_cast",
  };
};
const fetchcastsSuccess = (data) => {
  return {
    type: "fetch_casts_success",
    payload: data,
  };
}; 
const fetchcastsFailure = (error) => {
  return {
    type: "fetch_casts_failure",
    payload: error,
  };
};

// ACTION CREATOR
export const FetchCast = (id) => {
  //   let { id } = useParams();
  return (dispatch) => {
    dispatch(fetchcastsRequest);
    const url = `http://api.tvmaze.com/shows/${id}/cast`;
    axios.get(url).then((cast) => dispatch(fetchcastsSuccess(cast.data)));
  };
};
