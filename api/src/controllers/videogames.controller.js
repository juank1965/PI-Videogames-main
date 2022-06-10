import Videogame from "../models/Videogame.js";
import { Op } from "sequelize";
import axios from "axios";
// peticion GET para obtener todos los videojuegos por nombre (?name=)
// Si no no hay nombre en la query devuelve todos los videojuegos
export const getVideogames = async (req, res) => {
  let { name } = req.query;
  let videogamesListApi;
  let videogamesListDb;

  if (name) {
    videogamesListApi = await axios.get(
      `https://api.rawg.io/api/games?key=fa8d428838dc4428b6bd3b8ad969e241&search=${name}`
    );
    videogamesListDb = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      order: [["name", "ASC"]],
    });
  } else {
    videogamesListApi = await axios.get(
      " https://api.rawg.io/api/games?key=fa8d428838dc4428b6bd3b8ad969e241"
    );
    videogamesListDb = await Videogame.findAll();
  }
  Promise.all([videogamesListApi, videogamesListDb]).then((respuesta) => {
    const [videogameApi, videogameDb] = respuesta;
    let filteredDataVideogames = videogameApi.data.results.map((videogame) => {
      return {
        id: videogame.id,
        name: videogame.name,
        description: videogame.description,
        released: videogame.released,
        background_image: videogame.background_image,
        rating: videogame.rating,
        platforms: videogame.platforms,
        genres: videogame.genres,
      };
    });
    let allVideogames = [...filteredDataVideogames, ...videogameDb];
    res.json(allVideogames);
  });
};
