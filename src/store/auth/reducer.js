import { SIGN_IN, SIGN_UP, VALIDATE_LOGIN } from "./types";

const INITIAL_STATE = {
  user: {
    _id: "",
    name: "",
    email: "",
  },
  isLoggedIn: null,
  lastLogin: null,
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        lastLogin: new Date(),
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        lastLogin: new Date(),
      };
    case VALIDATE_LOGIN:
      return !action.payload.user
        ? { ...state, ...INITIAL_STATE, isLoggedIn: false }
        : {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            isLoggedIn: true,
            lastLogin: new Date(),
          };

    default:
      return state;
  }
};
