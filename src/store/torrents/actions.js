import { ADD_TORRENT, GET_TORRENTS } from "./types";
import api from "../api";

export const getTorrents = (callback) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const response = await api.get("/torrents", {
      headers: { Authorization: `Token ${token}` },
    });
    const { completed, pending } = response.data;
    // 👍 response.data: {completed: [], pending: []}
    return dispatch({ type: GET_TORRENTS, payload: { completed, pending } });
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

export const addTorrent = (magnet, callback) => async (dispatch, getState) => {
  try {
    const auth = getState().auth;
    const response = await api.post(
      "/torrents",
      { magnet: magnet },
      { headers: { Authorization: `Token ${auth.token}` } }
    );
    const { torrent, status } = response.data;
    // 👍 response.data: {torrent, status}
    return dispatch({ type: ADD_TORRENT, payload: { torrent, status } });
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

export const deleteTorrent = () => {};
