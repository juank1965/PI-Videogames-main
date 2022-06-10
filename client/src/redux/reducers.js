import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_BY_ID,
  GET_VIDEOGAME_BY_NAME,
} from "./actions";

const initialState = {
  videogamesFiltrados: [],
  videogames: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_VIDEOGAME_BY_ID:
      return {
        ...state,
        videogames: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
