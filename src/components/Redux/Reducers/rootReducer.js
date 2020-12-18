import { combineReducers } from "redux";
import showReducer from "./ShowReducer";
import castRedcuer from "./CastReducer";
import crewReducer from "./CrewReducer";
import galleryRedcuer from "./GalleryReducer";
import { showDetailReducer } from "./showDetailReducer";
import searchRedcuer from "./InputReducer";
const rootReducer = combineReducers({
  show: showReducer,
  cast: castRedcuer,
  crew: crewReducer,
  gallery: galleryRedcuer,
  showdetail: showDetailReducer,
  showsearch:searchRedcuer
});
export default rootReducer;
