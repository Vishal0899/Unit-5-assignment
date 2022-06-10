import { actionTypes } from "./action";

const initState = {
  auth: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_TOGGLE:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};
