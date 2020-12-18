import axios from "axios";
import { useParams } from "react-router-dom";

// ACTIONS
const fetchcrewsRequest = () => {
  return {
    type: "fetch_crew",
  };
};
const fetchcrewsSuccess = (data) => {
  return {
    type: "fetch_crews_success",
    payload: data,
  };
};
const fetchcrewsFailure = (error) => {
  return {
    type: "fetch_crews_failure",
    payload: error,
  };
};

// ACTION CREATOR
export const FetchCrew = (id) => {
  // console.log("id at crew",id)
  // let { id } = useParams();
  return (dispatch) => {
    dispatch(fetchcrewsRequest);
    const url = ` http://api.tvmaze.com/shows/${id}/crew`;
    axios.get(url).then((crew) => dispatch(fetchcrewsSuccess(crew.data)));
  };
};
