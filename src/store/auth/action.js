import { SIGN_IN, SIGN_UP } from "./types";
import api from "../api";

/**
 * Login a user in with provided credentials
 * @param {*} email User Email Address
 * @param {*} password User Password
 * @param {*} callback A function to call in case of error
 */
export const signIn = (email, password, callback) => async (dispatch) => {
  try {
    const response = await api.post("/auth/signin", { email, password });
    // 👍 response.data: {"user": {}, "token": ""}
    const { user, token } = response.data;
    return dispatch({ type: SIGN_IN, payload: { user, token } });
  } catch (err) {
    if (!!callback && err.response) {
      return callback(err.response.data);
    }
    if (!!callback) {
      callback(err);
    }
    return;
  }
};

/**
 * Registers new User
 * @param {*} user A user object with {name, email, password} properties
 * @param {*} callback A function to call in case of error
 */
export const signUp = (userObject, callback) => async (dispatch) => {
  try {
    const response = await api.post("/auth/signup", userObject);
    // 👍 response.data: {"user": {}, "token": ""}
    const { user, token } = response.data;
    return dispatch({ type: SIGN_UP, payload: { user, token } });
  } catch (err) {
    if (!!callback && err.response) {
      return callback(err.response.data);
    }
    if (!!callback) {
      callback(err);
    }
    return;
  }
};

// export const validateLogin = () => (dispatch, state) => {};
