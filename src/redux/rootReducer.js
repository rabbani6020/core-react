import { combineReducers } from "redux";
import laptopReducer from "./laptop/laptop_reducer";
import countReducer from "./counter/count_reducer";
import themeReducer from "./theme/themeReducer";
import postReducer from "./post/postReducer";

const rootReducers = combineReducers({
  laptop: laptopReducer,
  counter: countReducer,
  theme: themeReducer,
  post: postReducer,
});

export default rootReducers;
