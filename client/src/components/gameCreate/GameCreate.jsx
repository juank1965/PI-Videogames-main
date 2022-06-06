import React from "react";
import { Link } from "react-router-dom";
import style from "./GameCreate.module.css";

function GameCreate() {
  return (
    <div>
      <form className={style.form}>
        <Link to="/home">
          <button className={style.cerrar}>Volver a Home</button>
        </Link>
        <h1>Crear Nuevo Juego</h1>
        <div className={style.body}>
          <div className={style.info}>
            <div className={style.input}>
              <label htmlFor="inputTitle">Title</label>
              <input
                className={style.input2}
                type="text"
                id="inputTitle"
                placeholder="Write the game's title"
              />
            </div>
            <div className={style.input}>
              <label htmlFor="desc">Game Description</label>
              <textarea className={style.texto} id="desc" rows="3" />
            </div>
            <div className={style.input}>
              <label htmlFor="launchDate">Launch Date</label>
              <input className={style.input2} type="date" id="launchDate" />
            </div>
            <div className={style.rating}>
              <label htmlFor="rating">Rating 0 a 10 </label>
              <input type="range" min="0" step="1" max="10" />
            </div>
          </div>
          <div className={style.info}>
            <p className={style.titulo}>Select Genres</p>
            <div>
              <div className={style.body}>
                <div className={style.bloque}>
                  <div>
                    <input type="checkbox" id="action" />
                    <label htmlFor="action">Action</label>
                  </div>
                  <div>
                    <input type="checkbox" id="indi" />
                    <label htmlFor="indi">Indi</label>
                  </div>
                  <div>
                    <input type="checkbox" id="adventure" />
                    <label htmlFor="adventure">Adventure</label>
                  </div>
                  <div>
                    <input type="checkbox" id="rpg" />
                    <label htmlFor="rpg">RPG</label>
                  </div>
                </div>
                <div className={style.bloque}>
                  <div>
                    <input type="checkbox" id="strategy" />
                    <label htmlFor="strategy">Strategy</label>
                  </div>
                  <div>
                    <input type="checkbox" id="shooter" />
                    <label htmlFor="shooter">Shooter</label>
                  </div>
                  <div>
                    <input type="checkbox" id="casual" />
                    <label htmlFor="casual">Casual</label>
                  </div>
                  <div>
                    <input type="checkbox" id="simulation" />
                    <label htmlFor="simulation">Simulation</label>
                  </div>
                </div>
                <div className={style.bloque}>
                  <div>
                    <input type="checkbox" id="puzzle" />
                    <label htmlFor="puzzle">Puzzle</label>
                  </div>
                  <div>
                    <input type="checkbox" id="arcade" />
                    <label htmlFor="arcade">Arcade</label>
                  </div>
                  <div>
                    <input type="checkbox" id="platformer" />
                    <label htmlFor="platformer">Platformer</label>
                  </div>
                  <div>
                    <input type="checkbox" id="racing" />
                    <label htmlFor="racing">Racing</label>
                  </div>
                </div>
              </div>
              <div className={style.body}>
                <div className={style.bloque}>
                  <div>
                    <input type="checkbox" id="sports" />
                    <label htmlFor="sports">Sports</label>
                  </div>
                  <div>
                    <input type="checkbox" id="fighting" />
                    <label htmlFor="fighting">Fighting</label>
                  </div>
                  <div>
                    <input type="checkbox" id="family" />
                    <label htmlFor="Family">Family</label>
                  </div>
                </div>
                <div className={style.bloque}>
                  <div>
                    <input type="checkbox" id="board" />
                    <label htmlFor="board">Board Game</label>
                  </div>
                  <div>
                    <input type="checkbox" id="edu" />
                    <label htmlFor="edu">Educational</label>
                  </div>
                  <div>
                    <input type="checkbox" id="card" />
                    <label htmlFor="card">Cards Games</label>
                  </div>
                  <div>
                    <input type="checkbox" id="massively" />
                    <label htmlFor="massively">Massively Multiplayer</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.info}>
            <p className={style.titulo}>Select Platform</p>
            <div className={style.body}>
              <div className={style.bloque}>
                <div>
                  <input type="checkbox" id="pc" />
                  <label htmlFor="pc">PC</label>
                </div>
                <div>
                  <input type="checkbox" id="ps4" />
                  <label htmlFor="ps4">PlayStation 4</label>
                </div>
                <div>
                  <input type="checkbox" id="xbox" />
                  <label htmlFor="xbox">Xbox One</label>
                </div>
              </div>
              <div className={style.bloque}>
                <div>
                  <input type="checkbox" id="nintendo" />
                  <label htmlFor="nintendo">Nintendo Switch</label>
                </div>
                <div>
                  <input type="checkbox" id="ios" />
                  <label htmlFor="ios">IOS</label>
                </div>
                <div>
                  <input type="checkbox" id="android" />
                  <label htmlFor="android">Android</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={style.boton}>Crear Juego</button>
      </form>
    </div>
  );
}

export default GameCreate;
