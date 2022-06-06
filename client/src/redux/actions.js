export function getAllVideoGames() {
  return (dispatch) => {
    // llamado a la API
    axios.get("/localhost:3000/videogames").then((response) => {
      dispatch({
        type: "GET_ALL_VIDEOGAMES",
        payload: response.data,
      });
    });
  };
}
