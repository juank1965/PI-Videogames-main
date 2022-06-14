import Genre from "./Genre.js";
import Platform from "./Platform.js";
import Videogame from "./Videogame.js";

//Relaciones
Videogame.belongsToMany(Genre, {
  through: "Videogame_Genre",
  targetKey: "name",
});
Genre.belongsToMany(Videogame, {
  through: "Videogame_Genre",
});

Videogame.belongsToMany(Platform, {
  through: "Videogame_Platform",
  targetKey: "name",
});
Platform.belongsToMany(Videogame, {
  through: "Videogame_Platform",
});

export { Genre, Platform, Videogame };
