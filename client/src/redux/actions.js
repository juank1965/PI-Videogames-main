import axios from "axios";
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME_BY_NAME = "GET_VIDEOGAME_BY_NAME";
export const GET_VIDEOGAME_BY_ID = "GET_VIDEOGAME_BY_ID";

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

export function getVideoGame(id) {
  return (dispatch) => {
    // llamado a la API
    axios.get(`http://localhost:3001/api/videogames/${id}`).then((response) => {
      dispatch({
        type: GET_VIDEOGAME_BY_ID,
        payload: response.data,
      });
    });
  };
}

export function getVideogameByName(name) {
  return (dispatch) => {
    // llamado a la API
    axios
      .get(`http://localhost:3001/api/videogames?name=${name}`)
      .then((response) => {
        dispatch({
          type: GET_VIDEOGAME_BY_NAME,
          payload: response.data,
        });
      });
  };
}
