import { ADD_TORRENT, GET_TORRENTS, DELETE_TORRENT } from "./types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_TORRENTS:
      return;
    case ADD_TORRENT:
      return;
    case DELETE_TORRENT:
      return;
    default:
      return state;
  }
};
