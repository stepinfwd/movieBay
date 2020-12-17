import { combineReducers } from "redux";
import showReducer from "./ShowReducer"
import castRedcuer from "./CastReducer";
import crewReducer from "./CrewReducer"
import galleryRedcuer from "./GalleryReducer";
const rootReducer= combineReducers({ 
    show:showReducer,
    cast:castRedcuer,
    crew:crewReducer,
    gallery:galleryRedcuer,


});
export default rootReducer;