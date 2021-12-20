import { THEME_DARK } from "./themeTypes";

// initialState
const initialState = {
  theme: false,
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_DARK: {
      return {
        ...state,
        theme: !state.theme,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
