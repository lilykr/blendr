import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  color: #89c0a9;
  font-size: 80px;
`;

function getFavorites() {
  const favoritesStr = localStorage.getItem("favorites");
  return JSON.parse(favoritesStr || "[]");
}

function FavoritesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const promises = getFavorites().map((recipeId) =>
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((res) => res.data.meals)
    );

    Promise.all(promises).then((res) => {
      setFavoriteRecipes(res.flat());
    });
  }, []);

  return (
    <>
      <Title className="title-favorites">My favorite recipes</Title>
      <div className="recipes-display">
        {favoriteRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </>
  );
}

export default FavoritesPage;
