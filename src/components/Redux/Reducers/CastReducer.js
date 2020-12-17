const initialState = [
    {
      casts: [],
      loading: true,
      error: null,
    },
  ];
  export default function castRedcuer(state = initialState, action) {
    switch (action.type) {
      case "fetch_casts_request":
        return { ...state, loading: true };
      case "fetch_casts_success":
        return { ...state, casts: action.payload, loading: false };
      case "fetch_casts_failure":
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  }
  