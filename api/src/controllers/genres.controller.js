import Genre from "../models/Genre.js";
import axios from "axios";
// peticion GEt para obtener todos los generos
export const getGenres = async (req, res) => {
  try {
    const genresApis = await axios.get(
      `https://api.rawg.io/api/genres?key=fa8d428838dc4428b6bd3b8ad969e241`
    );
    const genresApi = genresApis.data.results.map((genre) => {
      return {
        id: genre.id,
        name: genre.name,
      };
    });
    const genres = await Genre.findAll();

    if (genres.length > 0) {
      res.status(200).json({
        results: genres,
      });
    } else {
      const genresCreated = await Genre.bulkCreate(genresApi);
      res.status(200).json({
        results: genresCreated,
      });
    }
  } catch (error) {
    res.json({
      message: `Error al obtener los generos ${error}`,
    });
  }
};
