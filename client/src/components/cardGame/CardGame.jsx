import React from "react";
import style from "./CardGame.module.css";
import imagen from "../../assets/images/placeholder.jpg";
import { Link } from "react-router-dom";

function CardGame() {
  return (
    <div>
      <Link to="/detail" className={style.link}>
        <div className={style.card}>
          <img className={style.imagen} src={imagen} alt="Videogame image" />
          <div>
            <h3>Game title</h3>
            <p>Genero:</p>
            <p>Lista de generos del videogame</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardGame;
