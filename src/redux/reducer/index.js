import { combineReducers } from "redux";
import userLoginReducer from "./../../container/HomeTemplate/AccUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/AccUser/CreateAcc/modules/reducer";
import datHangReducer from "./../../components/CardItem/Modules/reducer";
import listDecksReducer from "./../../container/HomeTemplate/ListItem/modules2/reducer";
import listTrucksReducer from "./../../container/HomeTemplate/DetaiPageTruck/modules/reducer";
import listWheelsReducer from "./../../container/HomeTemplate/DetaiPageWheel/modules/reducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
  datHangReducer,
  listDecksReducer,
  listTrucksReducer,
  listWheelsReducer,
});

export default rootReducer;
