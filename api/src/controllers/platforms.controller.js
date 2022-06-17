import Platform from "../models/Platform.js";
import axios from "axios";
// peticion GEt para obtener todas las plataformas
export const getPlatforms = async (req, res) => {
  try {
    const platformsApis = await axios.get(
      `https://api.rawg.io/api/platforms?key=fa8d428838dc4428b6bd3b8ad969e241`
    );
    const platformsApi = platformsApis.data.results.map((platform) => {
      return {
        id: platform.id,
        name: platform.name,
      };
    });
    const platforms = await Platform.findAll();

    if (platforms.length > 0) {
      return res.status(200).json({
        ok: true,
        message: "Platforms found",
        platforms: platforms,
      });
    } else {
      const platformsCreated = await Platform.bulkCreate(platformsApi);
      return res.status(200).json({
        ok: true,
        message: "Platforms created",
        platforms: platformsCreated,
      });
    }
  } catch (error) {
    return res.json({
      message: `Error al obtener las plataformas ${error}`,
    });
  }
};
