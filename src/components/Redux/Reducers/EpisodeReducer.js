// const initialState = [
//     {
//       shoe: [],
//       loading: true,
//       error: null,
//     },
//   ];
//   export default function ShowRedcuer(state = initialState, action) {
//     switch (action.type) {
//       case "fetch_shows_request":
//         return { ...state, loading: true };
//       case "fetch_shows_success":
//         return { ...state, shows: action.payload, loading: false };
//       case "fetch_shows_failure":
//         return { ...state, error: action.payload, loading: false };
//       default:
//         return state;
//     }
//   }
  