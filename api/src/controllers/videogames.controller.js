// peticion GET para obtener todos los videojuegos por nombre (?name=)
// Si no no hay nombre en la query devuelve todos los videojuegos
export function getVideogames(req, res) {
  const name = req.query.name;
  if (name) {
    res.json({
      message: `Estas consultando un videojuego de nombre ${name}`,
    });
  }
  res.json({
    message: "Esta consulta devuelve todos los videojuegos",
  });
}
