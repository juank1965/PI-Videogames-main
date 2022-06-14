import React, { useState } from "react";
import CardGame from "../cardGame/CardGame";
import style from "./ContainerGames.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideoGames, getGenres } from "../../redux/actions";

const ContainerGames = () => {
  let videogames = useSelector((state) => state.videogamesFiltrados);
  const dispatch = useDispatch();
  const [pActual, setPActual] = useState(1);
  const pfinal = 7;
  const videoGamesPerPage = 15;
  useEffect(() => {
    dispatch(getAllVideoGames());
    dispatch(getGenres());
  }, []);

  const [elements, setElements] = useState([]);

  useEffect(() => {
    const gamesPerPage = () => {
      const elSelected = videogames.slice(0, videoGamesPerPage);
      setElements(elSelected);
    };
    gamesPerPage();
  }, [videogames]);

  const handlerChangePrevPage = () => {
    const prePage = pActual - 1;
    const prePePage = pActual - 2;
    if (prePePage <= -1) return;
    const firstIndex = prePePage * videoGamesPerPage; //0 15
    const lastIndex = prePage * videoGamesPerPage; //15 30
    setElements(videogames.slice(firstIndex, lastIndex)); //0-15  15-30
    setPActual(prePage);
  };

  const handlerChangeNextPage = () => {
    const totalItems = videogames.length;
    const nextPage = pActual + 1; //2   3
    //1   2
    const firstIndex = pActual * videoGamesPerPage; //15  30
    const lastIndex = nextPage * videoGamesPerPage; //30  45
    if (firstIndex > totalItems) return;
    setElements(videogames.slice(firstIndex, lastIndex)); //15-30 30-45
    setPActual(nextPage);
  };

  return (
    <div>
      <div className={style.pie}>
        <button className={style.boton} onClick={handlerChangePrevPage}>
          Prev
        </button>
        <p>
          | Page {pActual} de {pfinal} |
        </p>
        <button className={style.boton} onClick={handlerChangeNextPage}>
          Next
        </button>
      </div>
      <div className={style.container}>
        {elements &&
          elements.map((el) => {
            return <CardGame key={el.id} game={el} />;
          })}
      </div>
      <div className={style.pie}>
        <button className={style.boton} onClick={handlerChangePrevPage}>
          Prev
        </button>
        <p>
          | Page {pActual} de {pfinal} |
        </p>
        <button className={style.boton} onClick={handlerChangeNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ContainerGames;
