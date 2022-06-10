import React, { useState } from "react";
import CardGame from "../cardGame/CardGame";
import style from "./ContainerGames.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideoGames } from "../../redux/actions";

const ContainerGames = () => {
  let videogames = useSelector((state) => state.videogamesFiltrados);
  const dispatch = useDispatch();
  const [pinicial, setPinicial] = useState(1);
  const pfinal = 7;
  useEffect(() => {
    dispatch(getAllVideoGames());
  }, []);

  const handlerChangePrevPage = () => {
    if (pinicial > 1) {
      setPinicial(pinicial - 1);
    }
  };

  const handlerChangeNextPage = () => {
    if (pinicial < pfinal) {
      setPinicial(pinicial + 1);
    }
  };

  return (
    <div>
      <div className={style.pie}>
        <button className={style.boton} onClick={handlerChangePrevPage}>
          Prev
        </button>
        <p>
          | Page {pinicial} de {pfinal} |
        </p>
        <button className={style.boton} onClick={handlerChangeNextPage}>
          Next
        </button>
      </div>
      <div className={style.container}>
        {videogames &&
          videogames.map((game) => {
            return <CardGame key={game.id} game={game} />;
          })}
      </div>
      <div className={style.pie}>
        <button className={style.boton} onClick={handlerChangePrevPage}>
          Prev
        </button>
        <p>
          | Page {pinicial} de {pfinal} |
        </p>
        <button className={style.boton} onClick={handlerChangeNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ContainerGames;
