const initialState = [
  {
    searchData: [],
    // loading: true,
    // error: null,
  },
];
export default function searchRedcuer(state = initialState, action) {
  switch (action.type) {
    case "fetch_search_request":
      return { ...state};
    case "fetch_search_success":
      return { ...state, searchData: action.payload};
    case "fetch_search_clear":
      return { ...state, searchData: ""};
    default:
      return state;
  }
}
