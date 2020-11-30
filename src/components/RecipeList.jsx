import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipeList({ recipeList }) {
  return (
    <div className="recipes-display">
      {recipeList ? (
        recipeList.map((filteredrecipes) => (
          <RecipeCard recipe={filteredrecipes} />
        ))
      ) : (
        <p className="error-msg">
          Sorry, there are no recipes here. Try again !
        </p>
      )}
    </div>
  );
}

export default RecipeList;
