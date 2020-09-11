import { SIGN_IN, SIGN_UP, VALIDATE_LOGIN } from "./types";

const INITIAL_STATE = {
  user: {
    _id: "",
    name: "",
    email: "",
  },
  isLoggedIn: false,
  lastLogin: null,
  token: null,
  error: {
    name: "",
    message: "",
    status: "",
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return;
    case SIGN_UP:
      return;
    case VALIDATE_LOGIN:
      return;
    default:
      return state;
  }
};
