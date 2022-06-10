import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./GameCreate.module.css";

function GameCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [released, setReleased] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState([
    {
      id: "4",
      name: "Action",
      status: false,
    },
    {
      id: "3",
      name: "Adventure",
      status: false,
    },
    {
      id: "51",
      name: "Indie",
      status: false,
    },
    {
      id: "5",
      name: "RPG",
      status: false,
    },
    {
      id: "10",
      name: "Strategy",
      status: false,
    },
    {
      id: "14",
      name: "Simulation",
      status: false,
    },
    {
      id: "15",
      name: "Sports",
      status: false,
    },
    {
      id: "2",
      name: "Shooter",
      status: false,
    },
    {
      id: "40",
      name: "Casual",
      status: false,
    },
    {
      id: "7",
      name: "Puzzle",
      status: false,
    },
    {
      id: "17",
      name: "Card",
      status: false,
    },
    {
      id: "11",
      name: "Arcade",
      status: false,
    },
    {
      id: "1",
      name: "Racing",
      status: false,
    },
    {
      id: "6",
      name: "Fighting",
      status: false,
    },
    {
      id: "28",
      name: "Board",
      status: false,
    },
    {
      id: "19",
      name: "Family",
      status: false,
    },
    {
      id: "83",
      name: "Platformer",
      status: false,
    },
    {
      id: "34",
      name: "Eduactional",
      status: false,
    },
    {
      id: "59",
      name: "Massively",
      status: false,
    },
  ]);

  const [platform, setPlatform] = useState([
    {
      id: "4",
      name: "pc",
      estatus: false,
    },
    {
      id: "18",
      name: "ps4",
      status: false,
    },
    {
      id: "80",
      name: "xbox",
      status: false,
    },
    {
      id: "7",
      name: "nintendo",
      status: false,
    },
    {
      id: "3",
      name: "ios",
      status: false,
    },
    {
      id: "21",
      name: "android",
      status: false,
    },
  ]);

  const [idplatform, setIdPlatform] = useState([]);
  const [idgenre, setIdGenre] = useState([]);

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
    // buscar el name en el array genre
    const index = genre.findIndex((item) => item.name === name);
    // reemplazar en el array genre el elemento que se encuentra en el index con nuevo status con value
    const newGenre = [...genre];
    newGenre[index].status = value;
    setGenre(newGenre);
    if (value) {
      setIdGenre([...idgenre, newGenre[index].id]);
    }
  };

  const handlePlatformChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // buscar el name en el array platform
    const index = platform.findIndex((item) => item.name === name);
    // reemplazar en el array platform el elemento que se encuentra en el index con nuevo status con value
    const newPlatform = [...platform];
    newPlatform[index].status = value;
    setPlatform(newPlatform);
    if (value) {
      setIdPlatform([...idplatform, newPlatform[index].id]);
    }
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
                      name="Action"
                      type="checkbox"
                      id="Action"
                      checked={
                        genre.find((item) => item.name === "Action").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Action">Action</label>
                  </div>
                  <div>
                    <input
                      name="Indie"
                      type="checkbox"
                      id="Indie"
                      checked={
                        genre.find((item) => item.name === "Indie").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Indie">Indie</label>
                  </div>
                  <div>
                    <input
                      name="Adventure"
                      type="checkbox"
                      id="Adventure"
                      checked={
                        genre.find((item) => item.name === "Adventure").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Adventure">Adventure</label>
                  </div>
                  <div>
                    <input
                      name="RPG"
                      type="checkbox"
                      id="RPG"
                      checked={genre.find((item) => item.name === "RPG").status}
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="RPG">RPG</label>
                  </div>
                </div>
                <div className={style.bloque}>
                  <div>
                    <input
                      name="Strategy"
                      type="checkbox"
                      id="Strategy"
                      checked={
                        genre.find((item) => item.name === "Strategy").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Strategy">Strategy</label>
                  </div>
                  <div>
                    <input
                      name="Shooter"
                      type="checkbox"
                      id="Shooter"
                      checked={
                        genre.find((item) => item.name === "Shooter").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Shooter">Shooter</label>
                  </div>
                  <div>
                    <input
                      name="Casual"
                      type="checkbox"
                      id="Ccasual"
                      checked={
                        genre.find((item) => item.name === "Casual").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Casual">Casual</label>
                  </div>
                  <div>
                    <input
                      name="Simulation"
                      type="checkbox"
                      id="Simulation"
                      checked={
                        genre.find((item) => item.name === "Simulation").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Simulation">Simulation</label>
                  </div>
                </div>
                <div className={style.bloque}>
                  <div>
                    <input
                      name="Puzzle"
                      type="checkbox"
                      id="Puzzle"
                      checked={
                        genre.find((item) => item.name === "Puzzle").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Puzzle">Puzzle</label>
                  </div>
                  <div>
                    <input
                      name="Arcade"
                      type="checkbox"
                      id="Arcade"
                      checked={
                        genre.find((item) => item.name === "Arcade").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Arcade">Arcade</label>
                  </div>
                  <div>
                    <input
                      name="Platformer"
                      type="checkbox"
                      id="Platformer"
                      checked={
                        genre.find((item) => item.name === "Platformer").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Platformer">Platformer</label>
                  </div>
                  <div>
                    <input
                      name="Racing"
                      type="checkbox"
                      id="Racing"
                      checked={
                        genre.find((item) => item.name === "Racing").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Racing">Racing</label>
                  </div>
                </div>
              </div>
              <div className={style.body}>
                <div className={style.bloque}>
                  <div>
                    <input
                      name="Sports"
                      type="checkbox"
                      id="Sports"
                      checked={
                        genre.find((item) => item.name === "Sports").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Sports">Sports</label>
                  </div>
                  <div>
                    <input
                      name="Fighting"
                      type="checkbox"
                      id="Fighting"
                      checked={
                        genre.find((item) => item.name === "Fighting").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Fighting">Fighting</label>
                  </div>
                  <div>
                    <input
                      name="Family"
                      type="checkbox"
                      id="Family"
                      checked={
                        genre.find((item) => item.name === "Family").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Family">Family</label>
                  </div>
                </div>
                <div className={style.bloque}>
                  <div>
                    <input
                      name="Board"
                      type="checkbox"
                      id="Board"
                      checked={
                        genre.find((item) => item.name === "Board").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Board">Board Game</label>
                  </div>
                  <div>
                    <input
                      name="Educational"
                      type="checkbox"
                      id="Edu"
                      checked={
                        genre.find((item) => item.name === "Educational").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Edu">Educational</label>
                  </div>
                  <div>
                    <input
                      name="Card"
                      type="checkbox"
                      id="Card"
                      checked={
                        genre.find((item) => item.name === "Card").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Card">Cards Games</label>
                  </div>
                  <div>
                    <input
                      name="Massively"
                      type="checkbox"
                      id="Massively"
                      checked={
                        genre.find((item) => item.name === "Massively").status
                      }
                      onChange={handleGenreChange}
                    />
                    <label htmlFor="Massively">Massively Multiplayer</label>
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
                    checked={platform.find((item) => item.name === "pc").status}
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="pc">PC</label>
                </div>
                <div>
                  <input
                    name="ps4"
                    type="checkbox"
                    id="ps4"
                    checked={
                      platform.find((item) => item.name === "ps4").status
                    }
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="ps4">PlayStation 4</label>
                </div>
                <div>
                  <input
                    name="xbox"
                    type="checkbox"
                    id="xbox"
                    checked={
                      platform.find((item) => item.name === "xbox").status
                    }
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
                    checked={
                      platform.find((item) => item.name === "nintendo").status
                    }
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="nintendo">Nintendo Switch</label>
                </div>
                <div>
                  <input
                    name="ios"
                    type="checkbox"
                    id="ios"
                    checked={
                      platform.find((item) => item.name === "ios").status
                    }
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor="ios">IOS</label>
                </div>
                <div>
                  <input
                    name="android"
                    type="checkbox"
                    id="android"
                    checked={
                      platform.find((item) => item.name === "android").status
                    }
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
