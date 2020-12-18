const initialState = [
  {
    crews: [],
    loading: true,
    error: null,
  },
];
export default function castRedcuer(state = initialState, action) {
  switch (action.type) {
    case "fetch_crews_request":
      return { ...state, loading: true };
    case "fetch_crews_success":
      return { ...state, crews: action.payload, loading: false };
    case "fetch_crews_failure":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
