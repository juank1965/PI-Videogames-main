const initialState = {
  videogamesRender: [],
  videogames: [],
  platforms: [],
  genres: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
