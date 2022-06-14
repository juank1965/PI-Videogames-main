import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/gaming-console.png";
import style from "./NavBarMain.module.css";

function NavBarMain() {
  return (
    <nav className={style.nav}>
      <div>
        <img
          src={logo}
          width="90"
          height="90"
          alt="logo app"
          className={style.logo}
        />
        <h1 className={style.titulo}>Videogames App</h1>
      </div>
      <div className={style.menu}>
        <NavLink to="/" className={style.link}>
          <h3>INICIO</h3>
        </NavLink>
        <NavLink to="/home" className={style.link}>
          <h3>GAMES</h3>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBarMain;
