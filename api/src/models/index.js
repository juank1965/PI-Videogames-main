import Genre from "./Genre.js";
import Platform from "./Platform.js";
import Videogame from "./Videogame.js";

//Relaciones
Videogame.belongsToMany(Genre, {
  through: "Videogame_Genre",
  timestamp: false,
});
Genre.belongsToMany(Videogame, {
  through: "Videogame_Genre",
  timestamp: false,
});

Videogame.belongsToMany(Platform, {
  through: "Videogame_Platform",
  timestamp: false,
});
Platform.belongsToMany(Videogame, {
  through: "Videogame_Platform",
  timestamp: false,
});

export { Genre, Platform, Videogame };
