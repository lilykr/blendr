import Axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";

function SearchPage({ match }) {
  const [recipes, setRecipes] = useState([]);

  const { query } = match.params;

  useEffect(() => {
    Axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    ).then((res) => setRecipes(res.data.meals));
  }, [query]);

  return (
    <>
      <h1 className="title-recipe-library">Search results for: {query} </h1>
      <RecipeList recipeList={recipes} />
    </>
  );
}

export default SearchPage;
