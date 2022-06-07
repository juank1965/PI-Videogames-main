import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./GameCreate.module.css";

function GameCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [released, setReleased] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState({
    action: false,
    adventure: false,
    indi: false,
    rpg: false,
    strategy: false,
    simulation: false,
    sports: false,
    shooter: false,
    casual: false,
    puzzle: false,
    cards: false,
    arcade: false,
    racing: false,
    fighting: false,
    board: false,
    family: false,
    platformer: false,
    educational: false,
    massively: false,
  });

  const [platform, setPlatform] = useState({
    pc: false,
    ps4: false,
    xbox: false,
    nintendo: false,
    ios: false,
    android: false,
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleReleasedChange = (e) => {
    setReleased(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleGenreChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setGenre({ ...genre, [name]: value });
  };

  const handlePlatformChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setPlatform({ ...platform, [name]: value });
  };

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
              <label htmlFor="inputTitle">Game Name :</label>
              <input
                className={style.input2}
                type="text"
                id="inputTitle"
                name="inputTitle"
                placeholder="Write the game's title"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className={style.input}>
              <label htmlFor="desc">Game Description</label>
              <textarea
                className={style.texto}
                id="desc"
                name="description"
                rows="3"
                placeholder="Write the game's description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className={style.input}>
              <label htmlFor="released">Launch Date</label>
              <input
                className={style.input2}
                type="date"
                id="released"
                name="released"
                placeholder="Write the game's launch date"
                value={released}
                onChange={handleReleasedChange}
              />
            </div>
            <div className={style.rating}>
              <label htmlFor="rating">Rating:(0 a 5)</label>
              <input
                type="number"
                placeholder="3.5"
                step="0.1"
                min="1"
                max="5"
                name="rating"
                id="rating"
                value={rating}
                onChange={handleRatingChange}
              />
            </div>
          </div>
          <div className={style.info}>
            <p className={style.titulo}>Select Genres</p>
            <div>
              <div className={style.body}>
                <div className={style.bloque}>
                  <div>
                    <input
                      name="action"
                      type="checkbox"
                      id="action"
                      checked={genre.action}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="action">Action</label>
                  </div>
                  <div>
                    <input
                      name="indi"
                      type="checkbox"
                      id="indi"
                      checked={genre.indi}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="indi">Indi</label>
                  </div>
                  <div>
                    <input
                      name="adventure"
                      type="checkbox"
                      id="adventure"
                      checked={genre.adventure}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="adventure">Adventure</label>
                  </div>
                  <div>
                    <input
                      name="rpg"
                      type="checkbox"
                      id="rpg"
                      checked={genre.rpg}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="rpg">RPG</label>
                  </div>
                </div>
                <div className={style.bloque}>
                  <div>
                    <input
                      name="strategy"
                      type="checkbox"
                      id="strategy"
                      checked={genre.strategy}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="strategy">Strategy</label>
                  </div>
                  <div>
                    <input
                      name="shooter"
                      type="checkbox"
                      id="shooter"
                      checked={genre.shooter}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="shooter">Shooter</label>
                  </div>
                  <div>
                    <input
                      name="casual"
                      type="checkbox"
                      id="casual"
                      checked={genre.casual}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="casual">Casual</label>
                  </div>
                  <div>
                    <input
                      name="simulation"
                      type="checkbox"
                      id="simulation"
                      checked={genre.simulation}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="simulation">Simulation</label>
                  </div>
                </div>
                <div className={style.bloque}>
                  <div>
                    <input
                      name="puzzle"
                      type="checkbox"
                      id="puzzle"
                      checked={genre.puzzle}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="puzzle">Puzzle</label>
                  </div>
                  <div>
                    <input
                      name="arcade"
                      type="checkbox"
                      id="arcade"
                      checked={genre.arcade}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="arcade">Arcade</label>
                  </div>
                  <div>
                    <input
                      name="platformer"
                      type="checkbox"
                      id="platformer"
                      checked={genre.platformer}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="platformer">Platformer</label>
                  </div>
                  <div>
                    <input
                      name="racing"
                      type="checkbox"
                      id="racing"
                      checked={genre.racing}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="racing">Racing</label>
                  </div>
                </div>
              </div>
              <div className={style.body}>
                <div className={style.bloque}>
                  <div>
                    <input
                      name="sports"
                      type="checkbox"
                      id="sports"
                      checked={genre.sports}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="sports">Sports</label>
                  </div>
                  <div>
                    <input
                      name="fighting"
                      type="checkbox"
                      id="fighting"
                      checked={genre.fighting}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="fighting">Fighting</label>
                  </div>
                  <div>
                    <input
                      name="family"
                      type="checkbox"
                      id="family"
                      checked={genre.family}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Family">Family</label>
                  </div>
                </div>
                <div className={style.bloque}>
                  <div>
                    <input
                      name="board"
                      type="checkbox"
                      id="board"
                      checked={genre.board}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="board">Board Game</label>
                  </div>
                  <div>
                    <input
                      name="educational"
                      type="checkbox"
                      id="edu"
                      checked={genre.educational}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="edu">Educational</label>
                  </div>
                  <div>
                    <input
                      name="cards"
                      type="checkbox"
                      id="cards"
                      checked={genre.cards}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="card">Cards Games</label>
                  </div>
                  <div>
                    <input
                      name="massively"
                      type="checkbox"
                      id="massively"
                      checked={genre.massively}
                      onChange={handleGenreChange}
                    />
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
                  <input
                    name="pc"
                    type="checkbox"
                    id="pc"
                    checked={platform.pc}
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="pc">PC</label>
                </div>
                <div>
                  <input
                    name="ps4"
                    type="checkbox"
                    id="ps4"
                    checked={platform.ps4}
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="ps4">PlayStation 4</label>
                </div>
                <div>
                  <input
                    name="xbox"
                    type="checkbox"
                    id="xbox"
                    checked={platform.xbox}
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="xbox">Xbox One</label>
                </div>
              </div>
              <div className={style.bloque}>
                <div>
                  <input
                    name="nintendo"
                    type="checkbox"
                    id="nintendo"
                    checked={platform.nintendo}
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="nintendo">Nintendo Switch</label>
                </div>
                <div>
                  <input
                    name="ios"
                    type="checkbox"
                    id="ios"
                    checked={platform.ios}
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="ios">IOS</label>
                </div>
                <div>
                  <input
                    name="android"
                    type="checkbox"
                    id="android"
                    checked={platform.android}
                    onChange={handlePlatformChange}
                  />
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
