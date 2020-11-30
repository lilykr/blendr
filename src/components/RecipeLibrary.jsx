import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeLibrary.css";

function RecipeLibrary({ recipes }) {
  const recipe = recipes.map((item) => {
    return <RecipeCard recipe={item} />;
  });
  return (
    <>
      <h1 className="title-recipe-library">Recipe library</h1>
      <div className="recipes-display">{recipe}</div>
    </>
  );
}

export default RecipeLibrary;
