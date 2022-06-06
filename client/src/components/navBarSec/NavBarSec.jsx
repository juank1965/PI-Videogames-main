import React from "react";
import { Link } from "react-router-dom";
import ContainerGames from "../containerGames/ContainerGames";
import style from "./NavBarSec.module.css";

function NavBarMain() {
  return (
    <div>
      <nav className={style.nav}>
        <form className={style.form}>
          <input
            className={style.input}
            type="search"
            placeholder="Search by name"
            aria-label="Search"
          />
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
            <option value="1">Any</option>
            <option value="2">External</option>
            <option value="3">Internal</option>
          </select>
        </div>
        <div>
          <select
            className={style.input}
            id="inputGroupSelect03"
            defaultValue={"default"}
          >
            <option value={"default"}>Order By:...</option>
            <option value="1">Alphabetic asc</option>
            <option value="2">Alphabetic desc</option>
            <option value="3">Rating</option>
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
