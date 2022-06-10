import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./GameDetail.module.css";
import imagen from "../../assets/images/placeholder.jpg";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/api/videogame/${id}`).then((res) => {
      setGame(res.data);
    });
    return () => {
      setGame({});
    };
  }, [id]);
  return (
    <div className={style.container}>
      {game ? (
        <div className={style.card}>
          <h1 className={style.h1}>{game.name}</h1>
          <h4 className={style.h4}>
            {/*game.genre &
              game.genres.map((genre) => {
                return genre.name + " ";
              })*/}
          </h4>
          <div className={style.detalle}>
            <img
              src={game.background_image ? game.background_image : imagen}
              height="600px"
              width="600px"
              alt="Imagen del Game"
            />
            <div className={style.descripcion}>
              <h4 className={style.h4}>Description</h4>
              <p className={style.texto}>{game.description}</p>
            </div>
          </div>
          <div className={style.pie}>
            <div>
              <p>Released</p>
              <p>{game.released}</p>
            </div>
            <div>
              <p>Rating</p>
              <p>{game.rating}</p>
            </div>
            <div>
              <p>Platforms</p>
              <p>
                {/*game.platforms &
                  game.platforms.map((platform) => {
                    return platform.platform.name + " ";
                  })*/}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GameDetail;
