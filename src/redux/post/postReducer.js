import { FETCH_ERRORS, FETCH_SUCCESS } from "./postTypes";

// initialState
const initialState = {
  isLoading: true,
  posts: [],
  errors: "",
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        errors: "",
      };
    }
    case FETCH_ERRORS: {
      return {
        ...state,
        isLoading: false,
        posts: [],
        errors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
