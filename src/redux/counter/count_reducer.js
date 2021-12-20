import { DECREMENT, INCREMENT, RESET } from "./count_types";

// initialState
const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case RESET: {
      return {
        count: initialState.count,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
