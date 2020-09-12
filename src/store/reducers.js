import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import torrentsReducer from "./torrents/reducer";

export default combineReducers({
  auth: authReducer,
  torrents: torrentsReducer,
});
