import { BUY_LAPTOP } from "./laptop_types";

// initialState
const initialState = {
  totalLaptop: 200,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOP: {
      return {
        ...state,
        totalLaptop: state.totalLaptop - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
