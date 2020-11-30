import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../icons/logo-svg-blndr.svg";
import favorite from "../icons/favoritelogook.svg";
import mood from "../icons/logomoodok.svg";
import random from "../icons/dicerandomok.svg";

export default function Header() {
  return (
    <div className="header-container">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="buttons-header">
        <div className="mood-button-h">
          <Link to="/moods">
            <img className="my-mood" src={mood} alt="mood" />
          </Link>
          <p className="mood-title">Mood</p>
        </div>
        <div className="random-button-h">
          <Link to="/random">
            <img className="my-random" src={random} alt="random" />
          </Link>
          <p className="random-title">Random</p>
        </div>
        <div className="favorites-button-h">
          <Link to="/my-favorites">
            <img className="my-favorite" src={favorite} alt="favorite" />
          </Link>
          <p className="favorite-title">My favorites</p>
        </div>
      </div>
    </div>
  );
}
