import { ADD_TORRENT, GET_TORRENTS } from "./types";

const INITIAL_STATE = {
  completed: [],
  pending: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TORRENTS:
      return {
        ...state,
        completed: action.payload.completed || [],
        pending: action.payload.pending || [],
      };
    case ADD_TORRENT:
      const { torrent, status } = action.payload;
      return status === "completed"
        ? { ...state, completed: [...state.completed, torrent] }
        : { ...state, pending: [...state.pending, torrent] };
    default:
      return state;
  }
};
