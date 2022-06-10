import Videogame from "../models/Videogame.js";
import axios from "axios";

// solicitud GET obtiene un video juego por id
export const getVideogameById = async (req, res) => {
  try {
    const id = req.params.id;
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    let videogameById;
    if (id) {
      if (regexExp.test(id)) {
        videogameById = await Videogame.findByPk(id);
      } else {
        let videogameApi = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=fa8d428838dc4428b6bd3b8ad969e241`
        );
        if (videogameApi) {
          videogameById = videogameApi.data;
        }
      }
    }
    let videogame = {
      id: videogameById.id,
      name: videogameById.name,
      description: videogameById.description,
      released: videogameById.released,
      background_image: videogameById.background_image,
      rating: videogameById.rating,
      platforms: videogameById.platforms,
      genres: videogameById.genres,
    };
    res.json(videogame);
  } catch (error) {
    res.json({
      message: `Error al buscar videojuego ${error}`,
    });
  }
};
// Solicitud POST crea un nuevo video juego recibe datos por body
export const createVideogame = async (req, res) => {
  try {
    // El body tambien trae datos de platforms y genres que son arrays
    // Estos debe servir para unir el videojuego con las plataformas y generos de bd
    //const { name, description, released, background_image, rating, platforms, genres } = req.body;
    const { name, description, background_image, released, rating } = req.body;
    const newVideogame = await Videogame.create({
      name,
      description,
      background_image,
      released,
      rating,
    });
    res.json({
      message: `Se ha creado el video juego ${newVideogame.name}`,
    });
  } catch (error) {
    res.json({
      message: `Error al crear el video juego ${error}`,
    });
  }
};
