import { combineReducers } from "redux";
import { DateReducer } from "./DateReducer";
import { IntroReducer } from "./IntroReducer";
import { CalendarReducer } from "./CalendarReducer";

export default combineReducers({
  date: DateReducer,
  intro_played: IntroReducer,
  calendar: CalendarReducer,
});
