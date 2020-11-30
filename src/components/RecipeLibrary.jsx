import React, { useState } from "react";
import axios from "axios";
// import RecipeCard from "./RecipeCard";
import "./RecipeLibrary.css";
import RecipeCard from "./RecipeCard";

function RecipeLibrary() {
  const [recipes, setRecipes] = useState([]);

  const onClickLetter = (letter) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => {
        if (res.data.meals) setRecipes(res.data.meals);
      });
  };

  const alphabet = [];
  for (let i = 0; i < 26; i += 1) {
    const letter = (i + 10).toString(36);
    alphabet.push(letter);
  }

  return (
    <>
      <h1 className="title-recipe-library">Recipe library</h1>
      <div className="letter-buttons">
        {alphabet.map((letter) => {
          return (
            <button
              onClick={() => onClickLetter(letter)}
              key={letter}
              type="button"
              className="letter-button"
            >
              {letter}
            </button>
          );
        })}
      </div>

      <div className="recipes-display">
        {recipes.map((item) => (
          <RecipeCard recipe={item} />
        ))}
      </div>
    </>
  );
}

export default RecipeLibrary;
