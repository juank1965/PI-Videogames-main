import React from "react";
import CardGame from "../cardGame/CardGame";
import style from "./ContainerGames.module.css";

const ContainerGames = () => {
  return (
    <div>
      <h1>Genero</h1>
      <p>Descripcion del Genero</p>
      <div className={style.container}>
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
      </div>
      <div className={style.pie}>
        <button className={style.boton}>Prev</button>
        <p>| Page 1 de 7 |</p>
        <button className={style.boton}>Next</button>
      </div>
    </div>
  );
};

export default ContainerGames;
