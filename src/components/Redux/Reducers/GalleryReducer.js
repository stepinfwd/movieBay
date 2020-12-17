const initialState = [
  {
    galleryImg: [],
    loading: true,
    error: null,
  },
];
export default function galleryRedcuer(state = initialState, action) {
  switch (action.type) {
    case "fetch_gallerys_request":
      return { ...state, loading: true };
    case "fetch_gallerys_success":
      return { ...state, gallerys: action.payload, loading: false };
    case "fetch_gallerys_failure":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
