import { combineReducers } from "redux";
import userLoginReducer from "./../../container/HomeTemplate/AccUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/AccUser/CreateAcc/modules/reducer";
import datHangReducer from "./../../components/CardItem/Modules/reducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
  datHangReducer,
});

export default rootReducer;
