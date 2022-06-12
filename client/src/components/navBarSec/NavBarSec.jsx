import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContainerGames from "../containerGames/ContainerGames";
import style from "./NavBarSec.module.css";
import searchIcon from "../../assets/search.png";
import {
  getVideogamesByName,
  sortVideoGames,
  changeOriginBD,
  changeGenre,
} from "../../redux/actions";
//import { getVideogamesByGenre } from "../../redux/actions";
import { useDispatch } from "react-redux";

function NavBarMain() {
  // estado para el input de busqueda
  const [search, setSearch] = useState("");

  let dispatch = useDispatch();
  // funcion para buscar un videojuego
  const searchByname = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handlerGenreChange = (e) => {
    e.preventDefault();
    dispatch(changeGenre(e.target.value));
  };

  // funcion para ordenar videojuegos ascendentemente descendentemente y por rating
  const handlerOrderChange = (e) => {
    e.preventDefault();
    dispatch(sortVideoGames(e.target.value));
  };

  const handlerBDOriginChange = (e) => {
    e.preventDefault();
    dispatch(changeOriginBD(e.target.value));
  };

  useEffect(() => {
    dispatch(getVideogamesByName(search));
  }, [search]);

  return (
    <div>
      <nav className={style.nav}>
        <div className={style.selectores}>
          <label htmlFor="Search">Search By Name:...</label>
          <input
            id="Search"
            className={style.input}
            type="search"
            placeholder="Videogame's Name..."
            aria-label="Search"
            value={search}
            onChange={searchByname}
          />
          <img className={style.icon} src={searchIcon} alt="search" />
        </div>
        <div className={style.selectores}>
          <label htmlFor="selectByGenre">Select By Genre:...</label>
          <select
            className={style.input}
            placeholder="Search by genre"
            id="selectByGenre"
            onChange={handlerGenreChange}
          >
            <option defaultValue="">All</option>
            <option value="Action">Action</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="Platformer">Platformer</option>
            <option value="Racing">Racing</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card Games</option>
          </select>
        </div>
        <div className={style.selectores}>
          <label htmlFor="selectByBD">Select By BD Origin:...</label>
          <select
            className={style.input}
            id="selectByBD"
            onChange={handlerBDOriginChange}
          >
            <option defaultValue="">Both</option>
            <option value="api">External API</option>
            <option value="bd">Internal BD</option>
          </select>
        </div>
        <div className={style.selectores}>
          <label htmlFor="orderBy">Order By:...</label>
          <select
            className={style.input}
            id="orderBy"
            onChange={handlerOrderChange}
          >
            <option defaultValue="">Any</option>
            <option value="asc">Alphabetic asc</option>
            <option value="des">Alphabetic desc</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div>
          <Link to="/create">
            <button className={style.boton}>Create New Game</button>
          </Link>
        </div>
      </nav>
      <ContainerGames />
    </div>
  );
}

export default NavBarMain;
