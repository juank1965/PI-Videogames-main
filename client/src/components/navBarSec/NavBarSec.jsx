import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContainerGames from "../containerGames/ContainerGames";
import style from "./NavBarSec.module.css";
import searchIcon from "../../assets/search.png";
import { getVideogameByName } from "../../redux/actions";
import { useDispatch } from "react-redux";

function NavBarMain() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  const searchByname = (e) => {
    e.preventDefault();
    dispatch(getVideogameByName(search));
  };

  return (
    <div>
      <nav className={style.nav}>
        <form className={style.form} onSubmit={searchByname}>
          <input
            className={style.input}
            type="search"
            placeholder="Search by name"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <img className={style.icon} src={searchIcon} alt="search" />
          </button>
        </form>
        <div>
          <select
            className={style.input}
            id="inputGroupSelect01"
            defaultValue={"default"}
          >
            <option value={"default"}>Search by: Genre...</option>
            <option value="action">Action</option>
            <option value="indi">Indi</option>
            <option value="adventure">Adventure</option>
            <option value="rpg">RPG</option>
            <option value="strategy">Strategy</option>
            <option value="shooter">Shooter</option>
            <option value="casual">Casual</option>
            <option value="simulation">Simulation</option>
            <option value="puzzle">Puzzle</option>
            <option value="arcade">Arcade</option>
            <option value="platformer">Platformer</option>
            <option value="racing">Racing</option>
            <option value="massively">Massively Multiplayer</option>
            <option value="sports">Sports</option>
            <option value="fighting">Fighting</option>
            <option value="family">Family</option>
            <option value="board">Board Games</option>
            <option value="educational">Educational</option>
            <option value="card">Card Games</option>
          </select>
        </div>
        <div>
          <select
            className={style.input}
            id="inputGroupSelect02"
            defaultValue={"default"}
          >
            <option value={"default"}>Select by: BD Origin...</option>
            <option value="both">Both</option>
            <option value="api">External API</option>
            <option value="bd">Internal BD</option>
          </select>
        </div>
        <div>
          <select
            className={style.input}
            id="inputGroupSelect03"
            defaultValue={"default"}
          >
            <option value={"default"}>Order By:...</option>
            <option value="a">Alphabetic asc</option>
            <option value="d">Alphabetic desc</option>
            <option value="r">Rating</option>
          </select>
        </div>
        <div>
          <Link to="/create">
            <button className={style.boton}>Subir Juego a la BD</button>
          </Link>
        </div>
      </nav>
      <ContainerGames />
    </div>
  );
}

export default NavBarMain;
