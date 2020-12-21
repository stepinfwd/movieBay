import axios from "axios";
import { useParams } from "react-router-dom";

// ACTIONS
const fetchsearchRequest = () => {
  return {
    type: "fetch_search_request",
  };
};
const fetchsearchSuccess = (data) => {
  return {
    type: "fetch_search_success",
    payload: data,
  };
};
const fetchsearchClear = () => {
  return {
    type: "fetch_search_clear",
  };
};

// ACTION CREATOR
export const FetchSearch = (value) => {
  // let { id } = useParams();
  console.log("VALUE IN REDUX",value)
  return (dispatch) => {
    dispatch(fetchsearchRequest);
    const url = "http://api.tvmaze.com/search/shows";
    axios
      .get(url, { params: { q: value } })
      .then((search) =>{ dispatch(fetchsearchSuccess(search.data))});
      // dispatch(fetchsearchClear);

  };
};
