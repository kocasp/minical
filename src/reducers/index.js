import { combineReducers } from "redux";
import { DateReducer } from "./DateReducer";
import { IntroReducer } from "./IntroReducer";

export default combineReducers({
  date: DateReducer,
  intro_played: IntroReducer
});
