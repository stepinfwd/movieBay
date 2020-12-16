import { combineReducers } from "redux";
import showReducer from "./ShowReducer"
const rootReducer= combineReducers({ 
    show:showReducer
});
export default rootReducer;