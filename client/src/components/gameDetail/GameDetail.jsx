import React from "react";
import style from "./GameDetail.module.css";
import imagen from "../../assets/images/placeholder.jpg";

const GameDetail = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1 className={style.h1}>Titulo del Juego</h1>
        <h4 className={style.h4}>Generos</h4>
        <div className={style.detalle}>
          <img
            src={imagen}
            height="600px"
            width="600px"
            alt="Imagen del Game"
          />
          <div className={style.descripcion}>
            <h4 className={style.h4}>Description</h4>
            <p className={style.texto}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis corporis commodi, voluptatem, architecto illum ut quod
              soluta dicta labore culpa veniam eius excepturi, alias aliquam
              quis? Ea corrupti eaque beatae et debitis aut dicta nemo commodi
              atque asperiores consequuntur, tenetur soluta delectus, magni
              incidunt, ut quam porro maxime quos corporis.
            </p>
          </div>
        </div>
        <div className={style.pie}>
          <div>
            <p>Lanzamiento</p>
            <p>2022/03.23</p>
          </div>
          <div>
            <p>Rating</p>
            <p>stars: 5</p>
          </div>
          <div>
            <p>Platforms</p>
            <p>iconos platforms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
