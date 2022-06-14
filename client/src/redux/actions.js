import axios from "axios";
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME_BY_NAME = "GET_VIDEOGAME_BY_NAME";
export const GET_VIDEOGAME_BY_ID = "GET_VIDEOGAME_BY_ID";
export const CHANGE_GENRE = "CHANGE_GENRE";
export const SORT_VIDEOGAMES = "SORT_VIDEOGAMES";
export const BD_ORIGIN_CHANGE = "BD_ORIGIN_CHANGE";
export const GET_GENRES = "GET_GENRES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";

export function getAllVideoGames() {
  return (dispatch) => {
    // llamado a la API
    axios
      .get("http://localhost:3001/api/videogames")
      .then((response) => {
        dispatch({
          type: GET_ALL_VIDEOGAMES,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function sortVideoGames(criterio) {
  return (dispatch) => {
    dispatch({
      type: SORT_VIDEOGAMES,
      payload: criterio,
    });
  };
}

export function changeOriginBD(origin) {
  return (dispatch) => {
    dispatch({
      type: BD_ORIGIN_CHANGE,
      payload: origin,
    });
  };
}

export function changeGenre(genre) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_GENRE,
      payload: genre,
    });
  };
}

export function getVideoGame(id) {
  try {
    return (dispatch) => {
      // llamado a la API
      axios
        .get(`http://localhost:3001/api/videogames/${id}`)
        .then((response) => {
          dispatch({
            type: GET_VIDEOGAME_BY_ID,
            payload: response.data,
          });
        });
    };
  } catch (error) {
    console.log(error);
  }
}

export function getVideogamesByName(name) {
  return (dispatch) => {
    // llamado a la API
    axios
      .get(`http://localhost:3001/api/videogames?name=${name}`)
      .then((response) => {
        dispatch({
          type: GET_VIDEOGAME_BY_NAME,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function createVideogame(videogame) {
  return (dispatch) => {
    // llamado a la API
    axios
      .post("http://localhost:3001/api/videogames", videogame)
      .then((response) => {
        dispatch({
          type: CREATE_VIDEOGAME,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getGenres() {
  return (dispatch) => {
    // llamado a la API
    axios
      .get("http://localhost:3001/api/genres")
      .then((response) => {
        dispatch({
          type: GET_GENRES,
          payload: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
