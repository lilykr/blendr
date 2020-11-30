import React, { useEffect, useState } from "react";
import "./recipeCard.css";
import { Link } from "react-router-dom";
import favorite from "../icons/favorite.svg";
import notFavorite from "../icons/not-favorite.svg";

function RecipeCard({ recipe }) {
  const id = recipe.idMeal;
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [id]);

  function addFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(id)) {
      const indexOfId = favorites.indexOf(id);
      favorites.splice(indexOfId, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavorite(false);
    } else {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavorite(true);
    }
  }

  return (
    <div className="recipe-card">
      <Link to={`/recette/${recipe.idMeal}`}>
        <p className="recipe-card-title">{recipe.strMeal}</p>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strCategory}
          className="card-img"
        />
      </Link>
      <button className="button-favorite" type="button" onClick={addFavorites}>
        <img
          src={isFavorite ? favorite : notFavorite}
          alt="like-icon"
          className="icon"
        />
      </button>
    </div>
  );
}

export default RecipeCard;
