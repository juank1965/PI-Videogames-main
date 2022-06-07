// solicitud GET obtiene un video juego por id
export function getVideogameById(req, res) {
  const id = req.params.id;
  res.json({
    message: "Ruta para obtener un video juego por id",
  });
}
// Solicitud POST crea un nuevo video juego recibe datos por body
export function createVideogame(req, res) {
  const body = req.body;
  res.json({
    message: "Ruta para crear un nuevo video juego",
  });
}
